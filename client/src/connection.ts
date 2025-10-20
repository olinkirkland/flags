import io from 'socket.io-client';
import { baseURL } from './main';
import { useTickStore } from './store/tick-store';

/**
 * Connect to the socketIO server
 */
export function connectToSocketIO() {
    const options = { reconnectionDelayMax: 10000 };
    const socket = io(baseURL, options);
    socket.on('message', (data: any) => {
        console.log(data);
        useTickStore().setTick(data.tick);
    });
}
