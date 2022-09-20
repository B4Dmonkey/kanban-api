import express from 'express';

import {
  hasParent,
  hasContent,
  isTask,
  validStatus
} from '../middleware/task.middleware';

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
  hasParent,
  hasContent,
  validStatus,
  newTask
);

router.get(
  '/',
  getTask
);

router.put(
  '/',
  isTask,
  updateTask
);

router.delete(
  '/',
  archiveTask
);

module.exports = router;