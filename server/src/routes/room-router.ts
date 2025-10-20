import { Request, Response, Router } from 'express';
import StatusCode from 'status-code-enum';
import { rooms } from '../rooms';
import { Room } from '../room';
import { randomUUID } from 'crypto';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    res.status(StatusCode.SuccessOK).json(rooms);
});

router.post('/', async (req: Request, res: Response) => {
    const { body } = req;

    // Options for the room
    const { options } = body;
    const room: Room = {
        id: randomUUID(),
        name: options.name
    };

    rooms.push(room);
    res.status(StatusCode.SuccessOK).json();
});

export default router;
