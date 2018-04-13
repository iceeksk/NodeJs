import {Router} from 'express';
import uuid from 'uuid/v4';

const tasks = [
  {id: uuid(), title: 'Do work', done: false},
  {id: uuid(), title: 'Do stuff', done: true},
  {id: uuid(), title: 'Do another work', done: false},
];

const router = Router();

router.get('/', (req, res) => {
  res.send(tasks);
});

export default router;
