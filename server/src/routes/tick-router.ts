import { tick } from '../index';
import { Request, Response, Router } from 'express';
import StatusCode from 'status-code-enum';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    res.status(StatusCode.SuccessOK).json({ tick: tick });
});

export default router;
