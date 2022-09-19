import Task from  '../models/task.model';

const rootTask = async(req, res) => {
  try{
    const rootTask = await Task.findOne({isRoot:true});
    if (rootTask) return res.status(200).json({root: rootTask.id});
    
    const task = await Task.create({
      parents: null,
      children: null,
      content: null,
      status: 'root',
      isRoot: true,
    });
    return res.status(201).json({root: task.id});
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