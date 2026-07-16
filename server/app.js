const express = require("express")

const app = express()

const authRoutes = require("./routes/authRoutes")

// Middleware to convert data in json form which come from frontend
app.use(express.json())

// Routes 
app.use(authRoutes)

module.exports = app