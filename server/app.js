const express = require("express")
const cors = require("cors")

const app = express()

app.use(cors({
    origin:"http://localhost:5173",
}))

const authRoutes = require("./routes/authRoutes")

// Middleware to convert data in json form which come from frontend
app.use(express.json())

// Routes 
app.use(authRoutes)

module.exports = app