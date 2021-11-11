const fs = require('fs/promises');
const nextServerService = require('./next-server');
const jsonServerService = require('./json-server');
const electronApp = require('./electron');
const { autoUpdater } = require('electron-updater');

function startService() {
    electronApp().then(({ electronApp, electronWindow, ipcMain }) => {
        // autoUpdater.on()
        // Menjalankan server web
        nextServerService().then(({ port: nextServerPort }) => {
            // Menjalankan json server untuk login
            jsonServerService(3001, 'userdata.json').then(({ port: jsonServerPort }) => {
                // Menjalankan json server untuk setelan aplikasi
                jsonServerService(3002, 'preferences.json').then(() => {
                    // Menjalankan json server untuk penyimpanan stok
                    jsonServerService(3003, 'stocks.json').then(() => {
                        autoUpdater.checkForUpdatesAndNotify();
                        autoUpdater.on('update-available', () => {
                            console.log('update-available');
                        });
                        autoUpdater.on('update-downloaded', () => {

                        });

                        electronWindow.loadURL('http://localhost:' + nextServerPort);
                    });
                });
            });
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
