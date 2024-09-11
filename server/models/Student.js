import mongoose from "mongoose";

const StudentSchema = new mongoose.Schema({
    name: String,
    age: Number,
    role: String,
    date : Date,
})
  
const StudentModel = mongoose.model("students", StudentSchema)
export default StudentModel