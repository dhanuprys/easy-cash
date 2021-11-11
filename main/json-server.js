const { env } = require('process');
const jsonServer = require('json-server');
const getPort = require('get-port-sync');

module.exports = function (devPort = 3001, dbLocation = null) {
    return new Promise((resolve, reject) => {
        if (dbLocation === null) {
            reject(new Error('DB Location must be exist!'));
        }

        const isDev = env.NODE_ENV !== 'production';
        const availablePort = isDev ? devPort : 0;
        const jsonHttpServer = jsonServer.create();
        const jsonHttpRouter = jsonServer.router(dbLocation);
        const jsonHttpMiddlewares = jsonServer.defaults();
        let serverListener = null;

        jsonHttpServer.use(jsonServer.bodyParser);
        jsonHttpServer.use(jsonHttpMiddlewares);
        jsonHttpServer.use(jsonHttpRouter);

        serverListener = jsonHttpServer.listen(availablePort, () => {
            const address = serverListener.address();
            console.log(`> JSON Server on port ${address.port} [${dbLocation}]`);
            resolve({
                ...address,
                dbLocation
            })
        })
    })
}