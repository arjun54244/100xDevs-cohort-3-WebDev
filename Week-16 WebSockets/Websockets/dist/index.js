"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const wss = new ws_1.WebSocketServer({ port: 8080 });
wss.on('connection', function (socket) {
    console.log('Client connected');
    socket.on('message', (e) => {
        // console.log('Message received!: ' + e);
        if (e.toString() == 'ping') {
            socket.send('pong');
        }
    });
});
