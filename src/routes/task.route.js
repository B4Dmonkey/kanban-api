import express from 'express';
import {
  rootTask,
  newTask,
  getTask,
  updateTask,
  archiveTask
} from '../controllers/task.controller';

const router = express.Router();

router.get(
  '/init',
  rootTask
);

router.post(
  '/',
  newTask
);

router.get(
  '/',
  getTask
);

router.put(
  '/',
  updateTask
);

router.delete(
  '/',
  archiveTask
);

module.exports = router;