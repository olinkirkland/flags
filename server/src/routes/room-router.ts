import { randomUUID } from 'crypto';
import { Request, Response, Router } from 'express';
import StatusCode from 'status-code-enum';
import { Room } from '../room';
import {
    addRoom,
    getRandomRoomName,
    rooms
} from '../controllers/room-controller';

const router = Router();

// Get a list of all rooms
router.get('/', async (req: Request, res: Response) => {
    res.status(StatusCode.SuccessOK).json(rooms);
});

// Create a new room with options
router.post('/', async (req: Request, res: Response) => {
    const { body } = req;

    // Options for the room
    const { options } = body;
    const room: Room = {
        id: randomUUID(),
        name: options.name || getRandomRoomName()
    };

    addRoom(room);
    res.status(StatusCode.SuccessOK).json(room);
});

export default router;
