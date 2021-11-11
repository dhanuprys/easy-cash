const { app: electronApp, BrowserWindow } = require('electron');

function createWindow(webPort) {
    const window = new BrowserWindow({
        width: 640,
        height: 500
    });

    window.loadURL('http://localhost:' + webPort);
}

module.exports = function ({ nextServerPort }) {
    electronApp.whenReady().then(() => {
        createWindow(nextServerPort);
    });
}