const User = require("../models/User")
const bcrypt = require("bcrypt")
const {isValidEmail, isValidPassword} = require("../utils/validation")
const generateToken = require("../utils/generateToken")


const register = async ({name, email, password}) => {
    try {
        
    // validate field 
        if(!name?.trim() || !email?.trim() || !password?.trim()){
            throw new Error("All fields are required")
        }
    
    // validate email 
    if(!isValidEmail(email)){
            throw new Error(" Please enter a valid email");
            
        }

         // validate passsword 
    if(!isValidPassword(password)){
            throw new Error(" Password must be at least 8 characters and include uppercase, lowercase, number, and special character.");
            
        }


     // check user already exist 
        const existingUser = await User.findOne({email})
        if(existingUser){
            throw new Error("User already exists")
        }

    // hash password 
        const hashPassword = await bcrypt.hash(password,10)
            
    // create user 
        const user = await User.create({
            name,
            email,
            password:hashPassword
        })

        return{
            success:true,
            message:"User registered successfully",
            user
        }
    } catch (error) {
        throw new Error(error.message)
    }
}

const login = async ({email, password}) =>{

      // validate field 
    if(!email?.trim() || !password?.trim()){
            throw new Error("all field required")
        }
        //  find user 
        const user = await User.findOne({email})
        
        if(!user){
            throw new Error("User not found")
               
        }
        // match password 
         const isMatch = await bcrypt.compare(password, user.password)
        
            if(!isMatch){
              throw new Error("Invalid credentials")   
            }

            // generate token 
         const token = generateToken(user._id);

    return{
        success: true,
        message:"Login Successful",
        token,
        user:{
            _id:user._id,
            name:user.name,
            email:user.email
        }
    }
}

module.exports = {register, login}