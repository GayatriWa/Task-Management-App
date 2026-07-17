const User = require("../models/User")
const authService = require("../services/authService")

const home  = (req,res)=>{
    res.json({
        success:true,
        message:"Task Management API Running "
    })
}

const registerUser= async (req,res)=>{
   try {
    const result = await authService.register(req.body)

    return res.status(201).json(result)

   } catch (error) {
     return res.status(500).json({
        success:false,
        message:error.message
     })
   }
}

const loginUser = async(req,res)=>{
    try {
        const result = await authService.login(req.body)
        return res.status(200).json(result)
    } catch (error) {
        return res.status(500).json({
            success:false,
            message:error.message
        })
    }

}

module.exports = {home, registerUser, loginUser}