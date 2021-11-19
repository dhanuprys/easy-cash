const fs = require('fs/promises');
const nextServerService = require('./next-server');
const wsServerService = require('./ws-server');
const jsonServerService = require('./json-server');
const electronApp = require('./electron');
const { autoUpdater } = require('electron-updater');
const { join } = require('path');
const { format: URLFormat } = require('url');
const electronIsDev = require('electron-is-dev');

function startService() {
    electronApp().then(({ electronApp: electronApp_, electronWindow, ipcMain }) => {
        console.log('Starting kasirku v' + electronApp_.getVersion());

        // Menampilkan tampilan boot ketika aplikasi masih
        // menyiapkan port
        electronWindow.loadFile(join(__dirname, './boot.html'));

        // Menjalankan server web
        nextServerService().then(({ port: nextServerPort }) => {
            electronWindow.webContents.send('message', 'Next server started');
            wsServerService().then(({ port: wsServerPort, wss }) => {
                electronWindow.webContents.send('message', 'WS server started');

                // Menjalankan json server untuk login
                jsonServerService(3001, 'userdata.json').then(({ port: jsonServerPort_userdata }) => {
                    electronWindow.webContents.send('message', 'JSON server started [1]');

                    // Menjalankan json server untuk setelan aplikasi
                    jsonServerService(3002, 'preferences.json').then(({ port: jsonServerPort_preferences }) => {
                        electronWindow.webContents.send('message', 'JSON server started [2]');

                        // Menjalankan json server untuk penyimpanan stok
                        jsonServerService(3003, 'stocks.json').then(({ port: jsonServerPort_stocks }) => {
                            electronWindow.webContents.send('message', 'JSON server started [3]');

                            let wsClient = [];

                            autoUpdater.on('checking-for-update', () => {
                                console.log('Checking update');
                            });

                            // Event ini akan dipanggil jika auto-updater menemukan
                            // bahwa aplikasi memiliki update
                            autoUpdater.on('update-available', () => {
                                if (wsClient) {
                                    wsClient.map(ws => ws.send(JSON.stringify({ action: 'update-available' })));
                                }
                            });

                            // Event dibawah akan dieksekusi jika tidak tidak ada 
                            // update yang tersedia
                            // Harus menjalankan check-update
                            autoUpdater.on('update-not-available', () => {
                                console.log('Update not available');
                            });

                            autoUpdater.on('download-progress', (progressObj) => {
                                console.log(progressObj);
                            });

                            autoUpdater.on('update-downloaded', () => {
                                if (wsClient) {
                                    wsClient.map(ws => ws.send(JSON.stringify({ action: 'update-downloaded' })));
                                }
                            });

                            wss.on('connection', (ws) => {
                                // Jika ada lebih dari 3 client yang terhubung pada
                                // websokcet, maka variabel wsClient akan di-reset
                                if (wsClient.length >= 3) {
                                    wsClient = [];
                                }

                                wsClient.push(ws);
                                ws.on('message', (message) => {
                                    const parsedMessage = JSON.parse(message.toString());
                                    // console.log(parsedMessage)
                                    switch (parsedMessage.action) {
                                        case 'current-version':
                                            ws.send(JSON.stringify({ action: 'version', payload: electronApp_.getVersion() }));
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
                                console.log('Success writing ports');
                                electronWindow.webContents.send('message', 'Success writing application ports');

                                if (!electronIsDev) {
                                    // Menampilkan aplikasi dalam ukuran maksimal
                                    electronWindow.webContents.send('message', 'Maximizing application size');
                                    electronWindow.setFullScreen(true);
                                }

                                electronWindow.webContents.send('message', 'Opening main app...');
                                setTimeout(() => {
                                    electronWindow.loadURL('http://localhost:' + nextServerPort);
                                }, 3000);
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
