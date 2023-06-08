require('dotenv').config()

const express = require('express')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')

// Connect to DB

mongoose.connect(process.env.DB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection

db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))


// Middleware
app.use(express.json())
app.use(cors({
    origin: "*"
}))
// app.use(express.urlencoded({ extended: false }))
// app.use(express.static('public'))


// Routes

// const airLine = require("./routes/airline")
// app.use("/airline", airLine)

const todo = require("./routes/todo")
app.use("/todo", todo)


// Start server

app.listen(3000, () => console.log('Server Started'))