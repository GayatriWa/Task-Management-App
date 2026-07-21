const express = require("express")
const cors = require("cors")

const app = express()

const allowedOrigins = [
  "http://localhost:5173",
  "https://your-frontend.vercel.app" // Replace after deploying
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    credentials: true,
  })
);

const authRoutes = require("./routes/authRoutes")
const taskRoutes = require("./routes/taskRoutes")

// Middleware to convert data in json form which come from frontend
app.use(express.json())

// Routes 
app.use("/api/auth",authRoutes)
app.use("/api/tasks",taskRoutes)

module.exports = app