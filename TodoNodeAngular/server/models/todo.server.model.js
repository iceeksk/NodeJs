import mongoose from 'mongoose';
let Schema = mongoose.Schema({
    createdAt:{
        type: Date,
        default: Date.now
    },
    fullName: String,
    todoText: String
});
export default mongoose.model('Todo', Schema);