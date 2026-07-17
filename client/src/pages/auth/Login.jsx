import { useState } from 'react'
import {login} from "../../services/authService"

const Login = () => {

  const [formData, setFormData] = useState({
    email:"",
    password:""
  })

  const [error, setError] = useState({
    email:"",
    password:""
  })

  const handleChange = (e) =>{
        const {name,value} = e.target;

        setFormData((prev)=>({
            ...prev,
            [name]:value
        }))

        setError((prev)=>({
            ...prev,
            [name]:""
        }))

    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  const handleSubmit= async (e)=>{
        e.preventDefault()

         const newError = {}

        if(!formData.email.trim()){
                newError.email="email is required"
        }else if(!emailRegex.test(formData.email)){
            newError.email = "Please enter a valid email address";
        }
        
        if(!formData.password.trim()){
                newError.password="password is required"
        }else if(!passwordRegex.test(formData.password)){
            newError.password = "Password must contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character.";
        }
        

         setError(newError)

        if(Object.keys(newError).length >0){
            return
        }

        const response = await login(formData)

        console.log(response)

        localStorage.setItem("token", response.token);
        localStorage.setItem("user", JSON.stringify(response.user));

        setFormData({
            email: "",
            password: ""
        });
    }
  return (
    <div className='min-h-screen flex'>


        {/* left section  */}
        <div className='w-1/2 bg-gradient-to-br bg-blue-600 via-indigo-600 to-purple-700 flex items-center justify-center'>
            <div className='text-center text-white px-10'>
                <h1 className='text-5xl font-bold mb-6'>
                    Taskflow
                </h1>

                <p className='text-xl leading-8'>
                     Organize your tasks, boost your productivity, and manage your work efficiently.
                </p>
            </div>

        </div>
        {/* right section  */}

        <div className='w-1/2 flex justify-center items-center'>

            <form className='w-full max-w-md space-y-6'
            onSubmit={handleSubmit}>

                <h1 className='text-4xl font-bold text-gray-800 mb-2'>Welcome Back</h1>

                <p className='text-gray-500 mb-8'>
                    Login to continue.
                </p>

                 <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Email </label>

                    <input type="email"
                    placeholder='Enter your Email' 
                    name='email'
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500'/>

                    {error.email && <p className='text-red-500 text-sm mt-1'>{error.email}</p>}
                </div>

                 <div>
                    <label className='block text-sm font-medium text-gray-700 mb-2'>Password </label>

                    <input type="password"
                    placeholder='Enter a password' 
                    name='password'
                    value={formData.password}
                    onChange={handleChange}
                    className='w-full px-4 py-3 border border-gray-300 rounded-lg outline-none focus:ring-2 focus:ring-blue-500'/>

                    {error.password && <p className='text-red-500 text-sm mt-1'>{error.password}</p>}
                </div>

                <button type='submit'
                className='w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition duration-300 font-medium '>
                    Login
                </button>


                <p className='text-center text-gray-600'>
                     don't have an account?{" "}
                     <span className='text-blue-600 font-medium cursor-pointer hover:underline'>Register</span></p>
            </form>

        </div>


    </div>
  )
}

export default Login