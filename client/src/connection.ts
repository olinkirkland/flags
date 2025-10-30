import io from 'socket.io-client';
import { baseURL } from './main';

/**
 * Connect to the socketIO server
 */
export function connectToSocketIO() {
    const options = { reconnectionDelayMax: 10000 };
    const socket = io(baseURL, options);
    socket.on('message', (data: any) => {
        // useTickStore().setTick(data.tick);
        // TODO: Update the game model
    });
}
