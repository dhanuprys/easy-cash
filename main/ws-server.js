const { WebSocketServer } = require('ws');

module.exports = function () {
    return new Promise((resolve, reject) => {
        const wss = new WebSocketServer({ port: 0 });

        wss.on('listening', () => {
            const address = wss.address();
            console.log(`> Socket Server on port ${address.port}`)
            resolve({
                ...address,
                wss
            });
        });
    });
}