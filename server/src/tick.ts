import { ioServer } from '.';

export let tick = 0;
// Start the tick interval (game loop)
const interval = setInterval(() => {
    tick++;
    // Broadcast to connected users
    ioServer.send({ tick });
}, 1000);
