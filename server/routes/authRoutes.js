const express = require("express");

const router = express.Router()

const {home, registerUser}  = require("../controllers/authController")


router.get("/",home)
router.post("/api/auth/register", registerUser)

module.exports = router;

