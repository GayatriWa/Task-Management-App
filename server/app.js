const express = require("express")
const cors = require("cors")

const app = express()


// const allowedOrigins = [
//   "http://localhost:5173",
//   "https://task-management-app-kohl-mu.vercel.app",
// ];

// app.use(
//   cors({
//     origin: function (origin, callback) {
//       console.log("Incoming Origin:", origin);
        // console.log("Incoming Origin:", origin);
        //     console.log("Allowed:", allowedOrigins);

//       if (!origin || allowedOrigins.includes(origin)) {
//         callback(null, true);
//       } else {
//         console.log("Blocked Origin:", origin);
//         callback(new Error("Not allowed by CORS"));
//       }
//     },
//     credentials: true,
//   })
// );

app.use(
  cors({
    origin: true,
    credentials: true,
  })
);
// Middleware to convert data in json form which come from frontend
app.use(express.json());


const authRoutes = require("./routes/authRoutes")
const taskRoutes = require("./routes/taskRoutes")


// app.use(express.json())

// Routes 
app.use("/api/auth",authRoutes)
app.use("/api/tasks",taskRoutes)

module.exports = app