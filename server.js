const socketio = require('socket.io');
const express = require('express');
const http = require('http');
const app = express();

const PORT = 2006

const server = http.createServer(app);

const io = socketio(server, {
    cors : {
        origin: "*",
        methods: ["GET", "POST", "OPTIONS"],
    },
});


server.listen(PORT, () => {
    console.log(`${PORT} listening`);

    io.on('connection', socket => {
        console.log(socket.id);

        socket.emit("WELCOME_MESSAGE", `${socket.id} welcome`);
        socket.on('SEND_MESSAGE', (data) => {
            console.log('Mesaj:', data);
            io.emit('GLOBAL_MESSAGE', `${data}`)
        })
    });


})

