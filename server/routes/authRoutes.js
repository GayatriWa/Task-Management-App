const express = require("express");

const router = express.Router()

const {home, registerUser, loginUser}  = require("../controllers/authController")


router.get("/",home)
router.post("/api/auth/register", registerUser)
router.post("/api/auth/login", loginUser)

module.exports = router;

