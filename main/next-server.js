const { parse: urlParse } = require('url');
const { join } = require('path');
const express = require('express');
const getPort = require('get-port-sync');
const { env } = require('process');
const next = require('next');
const electronIsDev = require('electron-is-dev');

module.exports = function () {
    return new Promise((resolve, reject) => {
        let isDev = env.NODE_ENV !== 'production';
        isDev = isDev ? electronIsDev : isDev;
        const availablePort = isDev ? 3000 : 0;
        const nextApp = next({ 
            dev: isDev, 
            dir: join(__dirname, '../renderer'), 
            conf: {
                reactStrictMode: true
                // useFileSystemPublicRoutes: false
            }
        });
        const nextHandler = nextApp.getRequestHandler();
        const server = express();
        let serverListener = null;

        nextApp.prepare().then(() => {
            // Middleware dibawah digunakan untuk menangani router aplikasi
            server.use(function (req, res, next) {
                const parsedUrl = urlParse(req.url, true);

                // Semua route pada server express ini dikendalikan oleh
                // Next HTTP Handler
                nextHandler(req, res, parsedUrl);
            });

            // Jika server telah dibangun dan dijalankan, maka program
            // akan mengembalikan sebuah object yang berisikan beberapa
            // properti kepada pemanggil
            serverListener = server.listen(availablePort, () => {
                const address = serverListener.address();
                console.log(`> NEXT.JS Server on port ${address.port}`);
                resolve({
                    ...address
                })
            });
        });
    })
}