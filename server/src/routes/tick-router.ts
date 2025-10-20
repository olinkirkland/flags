import { Request, Response, Router } from 'express';
import StatusCode from 'status-code-enum';
import { tick } from '../tick';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
    res.status(StatusCode.SuccessOK).json({ tick: tick });
});

export default router;
