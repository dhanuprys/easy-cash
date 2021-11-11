const { app: electronApp, BrowserWindow } = require('electron');

module.exports = function () {
    return new Promise((resolve, reject) => {
        electronApp.whenReady().then(() => {
            const electronWindow = new BrowserWindow({
                width: 640,
                height: 500
            });

            resolve({
                electronApp,
                electronWindow
            });
        });

        electronApp.on('window-all-closed', electronApp.quit);
    })
}