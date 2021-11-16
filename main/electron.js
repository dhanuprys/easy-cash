const { app: electronApp, BrowserWindow, ipcMain } = require('electron');

module.exports = function () {
    return new Promise((resolve, reject) => {
        electronApp.whenReady().then(() => {
            const electronWindow = new BrowserWindow({
                width: 840,
                height: 500,
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false
                }
            });

            resolve({
                electronApp,
                electronWindow,
                ipcMain
            });
        });

        electronApp.on('window-all-closed', electronApp.quit);
    })
}