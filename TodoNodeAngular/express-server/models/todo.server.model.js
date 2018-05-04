import mongoose from 'mongoose';

mongoose.connect('mongodb://admin:admin@ds227939.mlab.com:27939/todo-angular');

var Schema = mongoose.Schema({
  createdAt:{
    type: Date,
    default: Date.now
  },
  todoText: String,
  todoDesc: String
});

export default mongoose.model('Todo', Schema);
