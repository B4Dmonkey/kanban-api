import Task from  '../models/task.model';

const rootTask = async(req, res) => {
  try{

  } catch ( error ) {
    console.error(`task.controller@newTask: ${error.toString()}`);
    return res.status(500).json({ error: `Internal server error. \n ${error.toString()}` });
  }
};

const newTask = async(req, res) => {
  try{
    const {
      parent,
      content,
      status,
    } = req.query;

    return res.status(200).json({msg:'ok'})
  } catch ( error ) {
    console.error(`task.controller@newTask: ${error.toString()}`);
    return res.status(500).json({ error: `Internal server error. \n ${error.toString()}` });
  }
};

const getTask = async(req, res) => {
  try{

  } catch ( error ) {
    console.error(`task.controller@getTask: ${error.toString()}`);
    return res.status(500).json({ error: `Internal server error. \n ${error.toString()}` });
  }
};

const updateTask = async(req, res) => {
  try{

  } catch ( error ) {
    console.error(`task.controller@updateTask: ${error.toString()}`);
    return res.status(500).json({ error: `Internal server error. \n ${error.toString()}` });
  }
};

const archiveTask = async(req, res) => {
  try{

  } catch ( error ) {
    console.error(`task.controller@updateTask: ${error.toString()}`);
    return res.status(500).json({ error: `Internal server error. \n ${error.toString()}` });
  }
}

module.exports = {
  rootTask,
  newTask,
  getTask,
  updateTask,
  archiveTask
}