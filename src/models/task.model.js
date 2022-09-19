import mongoose from 'mongoose';
const { Schema } = mongoose;

const taskSchema = new Schema({
  parents: [{
    type: Schema.Types.ObjectId,
    ref: 'Task',
    // required: true // ? whats the root task if i require this ? 
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
    default: 'todo',
    enum: ['root','todo', 'doing', 'done' ]
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