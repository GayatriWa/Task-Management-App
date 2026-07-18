const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors({
    origin:"http://localhost:5173",
}))

const authRoutes = require("./routes/authRoutes")
const taskRoutes = require("./routes/taskRoutes")

// Middleware to convert data in json form which come from frontend
app.use(express.json())

// Routes 
app.use("/api/auth",authRoutes)
app.use("/api/tasks",taskRoutes)

module.exports = app