const path = require('path')
const WebServer = require('@fualfie/easy-server').WebServer
let server = new WebServer().start().open().log()
const WebSocket = require('@fualfie/websocket-server').WebSocket
server.websocket = new WebSocket().start()
module.exports = server;