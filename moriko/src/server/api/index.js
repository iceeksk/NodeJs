import {Router} from 'express';
import tasks from './tasks';

const router = Router();

//add other sub-routes
router.use('/tasks', tasks);

export default router;
