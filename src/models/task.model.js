import mongoose from 'mongoose';
import { STATUS_TYPES, TODO } from './enums';
const { Schema } = mongoose;

const taskSchema = new Schema({
  parents: [{
    type: Schema.Types.ObjectId,
    ref: 'Task',
    required: true
  }],
  children: [{
    type: Schema.Types.ObjectId,
    ref: 'Task',
  }],
  content: {
    type: Schema.Types.Mixed
  },
  status: {
    type: String,
    required: true,
    default: TODO,
    enum: STATUS_TYPES
  },
  archived: {
    type: Boolean,
    required: true,
    default: false
  },
  isRoot: {
    type: Boolean,
    required: true,
    default: false,
  }
},{ timestamps: true });

const Task = mongoose.model('Task', taskSchema);

module.exports = Task;