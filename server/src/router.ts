
import { Router } from 'express';
import { userLogin } from './controllers/user.controller';

const router = Router();

router.get('/login', userLogin);

export default router;
