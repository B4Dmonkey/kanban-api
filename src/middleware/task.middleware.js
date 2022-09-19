import Task from '../models/task.model';
import { STATUS_TYPES } from '../models/enums';

exports.hasParent = async(req, res, next) => {
  try{
    const { parent } = req.body;
    const parentTask = await Task.findById({ _id: parent });
    if(!parentTask) return res.status(404).json({error:'Parent task not found'});
    next();
  } catch (error) {
    console.error(`middleware - task.middleware@hasParent: ${error.toString()}`);
    return res.status(500).json({ error: `Internal server error. \n ${error.toString()}`});
  }
};

exports.hasContent = async(req, res, next) => { 
  try{
    const { content } = req.body;
    if (!content) return res.status(400).json({error: 'No Content'});
    next();
  } catch(error) {
    console.error(`middleware - task.middleware@hasContent: ${error.toString()}`);
    return res.status(500).json({ error: `Internal server error. \n ${error.toString()}`});
  }
};

exports.validStatus = async(req, res, next) => {
  try{
    const { status } = req.body;
    if (
      (
        status && 
        !STATUS_TYPES.includes(status)
      ) ||
      status === null ||
      status === undefined
    ) return res.status(404).json({error: 'Invalid status'});
    next();
  } catch (error) {
    console.error(`middleware - task.middleware@validStatus: ${error.toString()}`);
    return res.status(500).json({ error: `Internal server error. \n ${error.toString()}`});
  }
};