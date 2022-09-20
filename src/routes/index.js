import task from './task.route';

const router = require('express').Router(); 

router.get('/', (req, res) => {
	try {
		res.status(200).json({ details: 'Kanban API is live.' });
	} catch (e) {
		console.log(`Internal Server Error: ${e}`);
		return res.status(500).json({
			error: e.toString()
		});
	}
});

router.use('/task',task);

module.exports = router;