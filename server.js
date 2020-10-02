const WebServer = require('@fualfie/easy-server').WebServer
let server = new WebServer()
    .public(__dirname + '/public')
    .route(__dirname + '/routes/api.js')
    .error(__dirname + '/public/error.html', __dirname + '/public/error.jpg')
    .upload(__dirname + '/files')
    .start();
module.exports = server;