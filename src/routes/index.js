import task from './task.route';

const router = require('express').Router(); 

router.use('/task',task);

module.exports = router;