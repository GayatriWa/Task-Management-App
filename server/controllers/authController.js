const User = require("../models/User")

const home  = (req,res)=>{
    res.json({
        success:true,
        message:"Task Management API Running "
    })
}

const registerUser= async (req,res)=>{
    const {name, email, password } = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
    
    if(!name.trim() || !email.trim() || !password.trim()){
        return res.status(400).json({
            success:false,
            message:"All fields are required"
        });
    }

    if(!emailRegex.test(email)){
        return res.status(400).json({
            success:false,
            message:"Please enter a valid email address."
        })
    }

    if(!passwordRegex.test(password)){
        return res.status(400).json({
            success:false,
            message:"Password must be at least 8 characters and include uppercase, lowercase, number, and special character."
        })
    }
    const user = await User.create({
        name,
        email,
        password
    })

    res.status(201).json({
        success:true,
        message:"User data received Successfully"
    })
}

module.exports = {home, registerUser}