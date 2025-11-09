import { Room } from '../room';

export const rooms: Room[] = [];

export function getRandomRoomName(): string {
    const randomNumber = Math.floor(1000 + Math.random() * 9000);
    return `Room ${randomNumber}`;
}

export function addRoom(room: Room): void {
    rooms.push(room);
}
