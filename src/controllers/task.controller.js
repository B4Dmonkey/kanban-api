import Task from  '../models/task.model';
import { ROOT } from '../models/enums';

const rootTask = async(req, res) => {
  try{
    const rootTask = await Task.findOne({isRoot:true});
    if (rootTask) return res.status(200).json({root: rootTask.id});
    
    const task = await Task.create({
      parents: null,
      children: null,
      content: null,
      status: ROOT,
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
    } = req.body;
    
    const parentTask = await Task.findById({_id: parent });
    
    const task = await Task.create({
      content,
      status
    });
    task.parents.push(parentTask.id);
    await task.save();

    return res.status(200).json({task:task.id});
  } catch ( error ) {
    console.error(`task.controller@newTask: ${error.toString()}`);
    return res.status(500).json({ error: `Internal server error. \n ${error.toString()}` });
  }
};

const getTask = async(req, res) => {
  try{
    const { id } = req.query;
    const task = await Task.findById({_id: id});
    if(!task) return res.status(404).json({error: 'Task not found'});
    return res.status(200).json({task});
  } catch ( error ) {
    console.error(`task.controller@getTask: ${error.toString()}`);
    return res.status(500).json({ error: `Internal server error. \n ${error.toString()}` });
  }
};

const updateTask = async(req, res) => {
  try{
    const {
      id,
      parent,
      children,
      content,
      status,
    } = req.body;
    const task = Task.findOneAndUpdate(
      {_id:id},
      {
        parent,
        children,
        content,
        status
      }
    );
    return res.status(200).json({task: task.id});
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
};

module.exports = {
  rootTask,
  newTask,
  getTask,
  updateTask,
  archiveTask
}