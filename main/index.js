const fs = require('fs/promises');
const nextServerService = require('./next-server');
const wsServerService = require('./ws-server');
const jsonServerService = require('./json-server');
const electronApp = require('./electron');
const { autoUpdater } = require('electron-updater');
const { join } = require('path');
const electronIsDev = require('electron-is-dev');

function startService() {
    electronApp().then(({ electronApp, electronWindow, ipcMain }) => {
        // autoUpdater.on()
        // Menjalankan server web
        nextServerService().then(({ port: nextServerPort }) => {
            wsServerService().then(({ port: wsServerPort, wss }) => {
                // Menjalankan json server untuk login
                jsonServerService(3001, 'userdata.json').then(({ port: jsonServerPort_userdata }) => {
                    // Menjalankan json server untuk setelan aplikasi
                    jsonServerService(3002, 'preferences.json').then(({ port: jsonServerPort_preferences }) => {
                        // Menjalankan json server untuk penyimpanan stok
                        jsonServerService(3003, 'stocks.json').then(({ port: jsonServerPort_stocks }) => {
                            let wsClient = [];

                            autoUpdater.on('update-available', () => {
                                if (wsClient) {
                                    wsClient.map(ws => ws.send(JSON.stringify({ action: 'update-available' })));
                                }
                            });
                            autoUpdater.on('update-downloaded', () => {
                                if (wsClient) {
                                    wsClient.map(ws => ws.send(JSON.stringify({ action: 'update-downloaded' })));
                                }
                            });

                            wss.on('connection', (ws) => {
                                wsClient.push(ws);
                                ws.on('message', (message) => {
                                    const parsedMessage = JSON.parse(message.toString());
                                    // console.log(parsedMessage)
                                    switch (parsedMessage.action) {
                                        case 'check-update':
                                            autoUpdater.checkForUpdatesAndNotify();
                                            break;
                                        case 'download-update':
                                            autoUpdater.downloadUpdate();
                                            break;
                                        case 'install-update':
                                            autoUpdater.quitAndInstall();
                                            break;
                                    }
                                });

                                ws.on('error', () => {
                                    wsClient = wsClient.filter((item) => item !== ws);
                                });

                                ws.on('close', () => {
                                    wsClient = wsClient.filter((item) => item !== ws);
                                })
                            });

                            let portsPath = join(__dirname, '../../../ports.json');

                            if (electronIsDev) {
                                portsPath = join(__dirname, '../renderer/.next/server/ports.json');
                            }
                            
                            console.log('Writing ports on', portsPath);
                            fs.writeFile(portsPath, JSON.stringify({
                                nextServerPort,
                                wsServerPort,
                                jsonServerPort_userdata,
                                jsonServerPort_preferences,
                                jsonServerPort_stocks
                            })).then(() => {
                                console.log('Success writing ports')
                                electronWindow.loadURL('http://localhost:' + nextServerPort);
                            }).catch(err => {
                                console.log('Error writing ports');
                                throw err;
                            })
                        });
                    });
                });
            })
        });
    });
    // electronApp();
}

function encryptApplicationDatabase() {
    const dbList = [
        './storage/userdata.json',
        './storage/preferences.json',
        './storage/stocks.json'
    ];

    dbList.forEach(dbPath => {
        fs.readFile(dbPath).then(content => {
            fs.writeFile(dbPath, Buffer.from(content.toString()).toString('base64'));
        });
    });
}

function decryptApplicationDatabase() {
    const dbList = [
        './storage/userdata.json',
        './storage/preferences.json',
        './storage/stocks.json'
    ];

    dbList.forEach(dbPath => {
        fs.readFile(dbPath).then(content => {
            content = content.toString();

            try {
                JSON.parse(content);
            } catch (e) {
                fs.writeFile(dbPath, Buffer.from(content, 'base64').toString('ascii'));
            }
        });
    });
}


fs.readFile('./UNLOCK').then(content => {
    decryptApplicationDatabase();
    fs.unlink('./storage/LOCKED').catch(() => { });
    fs.unlink('./UNLOCK').catch(() => { });
    console.log('Application Unlocked!');
}).catch(() => {
    fs.readFile('./storage/LOCKED').then(content => {
        // if (file.isFile()) {
        //     console.log('Application Locked!');
        //     return
        // }
        if (content.toString() !== '1') {
            encryptApplicationDatabase();
            fs.writeFile('./storage/LOCKED', '1');
        }

        console.log('Application Locked!');
    }).catch(() => {
        startService();
    });
});
