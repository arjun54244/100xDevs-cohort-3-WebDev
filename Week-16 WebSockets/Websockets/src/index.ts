import { WebSocketServer } from 'ws';

const wss = new WebSocketServer({ port: 8080 });

wss.on('connection', function(socket){
    console.log('Client connected');
    socket.on('message', (e) => {
        // console.log('Message received!: ' + e);
        if (e.toString() == 'ping') {
            socket.send('pong');
        }
    });
});