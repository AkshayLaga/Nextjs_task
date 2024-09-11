import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
    name: String,
    age: Number,
    role: String,
    date : Date,
})
  
const TodoModel = mongoose.model("todos", TodoSchema)
export default TodoModel