import { randomUUID } from 'crypto';
import { Request, Response, Router } from 'express';
import StatusCode from 'status-code-enum';
import {
    addRoom,
    getRandomRoomName,
    rooms
} from '../controllers/room-controller';
import { Room } from '../room';

const router = Router();

// Get a list of all rooms
router.get('/', async (req: Request, res: Response) => {
    res.status(StatusCode.SuccessOK).json(rooms);
});

// Get a room by ID
router.get('/:id', async (req: Request, res: Response) => {
    const { id } = req.params;
    const room = rooms.find((r) => r.id === id);
    if (!room) {
        res.status(StatusCode.ClientErrorNotFound).json({
            message: 'Room not found'
        });
        return;
    }
    res.status(StatusCode.SuccessOK).json(room);
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
