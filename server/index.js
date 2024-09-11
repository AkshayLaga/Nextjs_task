import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import TodoModel from './models/Todo.js'
import bodyParser from "body-parser"

const app = express()
app.use(express.json())
app.use(cookieParser())
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true
}))
const port = 3001;
app.listen(port, () => {
    console.log("Server is Running ",port)
})
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
mongoose.connect('mongodb+srv://omkar:omkar123@cluster0.kiit4.mongodb.net/').then((data) => {
    console.log("mongodb connected ");
}).catch((err) => {
    console.log("errr", err);
})
app.post("/createTodo", async (req, res) => {
    const addTodo = await TodoModel.create(req.body);
    res.status(200).json({
        success: true,
        addTodo
    })
})

app.get('/dashboard',(req, res) => {
    TodoModel.find({})
        .then(todos => res.json(todos))
        .catch((err => res.json(err)))
})

app.get('/getUser/:id', (req, res) => {
    const id = req.params.id
    TodoModel.findById({_id :id})
    .then(todos => res.json(todos))
        .catch((err => res.json(err)))
})

app.get('/', (req, res) => {
    TodoModel.find({})
        .then(todos => res.json(todos))
        .catch((err => res.json(err)))
})

app.post('/updateUser/:id', (req, res) => {
    const id = req.params.id
    TodoModel.findByIdAndUpdate({_id:id},{name : req.body.name,task : req.body.tasks})
        .then(todos => res.json(todos))
        .catch((err => res.json(err)))
})

app.delete('/deleteUser/:id', (req, res) => {
    const id = req.params.id 
    TodoModel.findByIdAndDelete({_id:id})
        .then(todos => res.json(todos))
        .catch((err => res.json(err)))
})