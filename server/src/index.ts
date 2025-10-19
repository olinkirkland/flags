import tickRouter from './routes/tick-router';
import cors from 'cors';
import dotenv from 'dotenv';
import express from 'express';
import { createServer } from 'http';
import logRequest from './middleware/log-request';

export const origin = ['http://localhost:5173', 'https://olinkirk.land/flags'];

main();

export let tick = 0;
async function main() {
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

    // Start the tick interval
    const interval = setInterval(() => {
        tick++;
    }, 1000);

    // TODO: Add routes
    app.use('/api/tick', tickRouter);

    const server = createServer(app);

    // TODO: Add the SocketIO server
    // const socketIOServer;

    // Start the server
    const port = process.env.PORT || 3000;
    server.listen(port, () => {
        console.log('Server running on port', port);
    });
}
