const WebServer = require('@fualfie/easy-server').WebServer
let server = new WebServer()
    .public(__dirname + '/public')
    .route(__dirname + '/routes/api.js')
    .error(__dirname + '/public/error.html', __dirname + '/public/error.jpg')
    .upload(__dirname + '/files')
    .log(__dirname + '/logs')
    .start();
const WebSocket = require('@fualfie/websocket-server').WebSocket
server.websocket = new WebSocket().start()
module.exports = server;