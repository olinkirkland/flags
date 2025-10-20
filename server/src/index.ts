import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import logRequest from './middleware/log-request';
import roomRouter from './routes/room-router';
import tickRouter from './routes/tick-router';

export const origin = ['http://localhost:5173', 'https://olinkirk.land'];

dotenv.config();

// Initialize REST server
const app = express();

app.use(express.json());
app.use(logRequest);
app.use(
    cors({
        origin,
        credentials: true
    })
);

// Routes
app.use('/tick', tickRouter);
app.use('/rooms', roomRouter);

// Initialize Server & SocketIO
const server = createServer(app);

// Socket.IO has its own CORS settings separate from express cors()
export const ioServer = new Server(server, {
    cors: {
        origin,
        methods: ['GET', 'POST'],
        credentials: true
    }
});

ioServer.on('connection', async (socket) => {
    // A user connected
    console.log('User connected, socket', socket.id);

    // A user disconnected
    socket.on('disconnect', async () => {
        console.log('User disconnected, socket', socket.id);
    });
});

// Start the server
const port = process.env.PORT || 3000;
server.listen(port, () => {
    console.log('Server running on port', port);
});
