const { app: electronApp, BrowserWindow, ipcMain } = require('electron');

module.exports = function () {
    return new Promise((resolve, reject) => {
        electronApp.whenReady().then(() => {
            const electronWindow = new BrowserWindow({
                width: 840,
                height: 600,
                webPreferences: {
                    nodeIntegration: true,
                    contextIsolation: false
                }
            });

            electronWindow.maximize();

            resolve({
                electronApp,
                electronWindow,
                ipcMain
            });
        });

        electronApp.on('window-all-closed', electronApp.quit);
    })
}