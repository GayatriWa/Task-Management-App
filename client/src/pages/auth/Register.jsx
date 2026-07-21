import { useState } from 'react'
import { register } from '../../services/authService'
import { Link } from 'react-router-dom'

const Register = () => {

    const [formData, setFormData] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
    })

    const [error,setError] = useState({
        name:"",
        email:"",
        password:"",
        confirmPassword:""
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

       
        if(!formData.name.trim()){
            
               newError.name="name is required"
        }
        else if(formData.name.trim().length < 3){
            newError.name = "Name must be at least 3 characters";
        }
        
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
        
        if(!formData.confirmPassword.trim()){
            
               newError.confirmPassword="confirm password is required"
        } else if (formData.password !== formData.confirmPassword) {
                newError.confirmPassword = "Passwords do not match";
        }

         setError(newError)

        if(Object.keys(newError).length >0){
            return
        }
        const { name, email, password } = formData;

        const response = await register({ name, email, password })

        console.log(response)

        setFormData({
    name: "",
    email: "",
    password: "",
    confirmPassword: ""
});
    }
return (
  <div
    className="relative min-h-screen w-full overflow-hidden flex items-center justify-center login-bg"
  >
    {/* Logo */}
    <div className="absolute top-6 left-1/2 -translate-x-1/2">
      <h1 className="text-3xl font-bold text-white">TaskFlow</h1>
    </div>

    {/* White Card */}
    <div className="bg-white w-full max-w-[420px] rounded-3xl shadow-2xl p-6">
      {/* Your existing form goes here */}

      <h2 className="text-2xl font-bold text-center text-gray-800">
            Create Account
           </h2>

           <p className="text-center text-gray-500 mt-1 mb-5">
             Sign up to continue
          </p>

           <form onSubmit={handleSubmit} className="space-y-4">

           <div>
               <label className="block text-sm font-medium text-gray-700 mb-2">
                 Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition"
              />

              {error.name && (
                <p className="text-red-500 text-sm mt-1">
                  {error.name}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition"
              />

              {error.email && (
                <p className="text-red-500 text-sm mt-1">
                  {error.email}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition"
              />

              {error.password && (
                <p className="text-red-500 text-sm mt-1">
                  {error.password}
                </p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>

              <input
                type="password"
                placeholder="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                className="w-full rounded-xl border border-gray-200 px-4 py-2.5 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-500 outline-none transition"
              />

              {error.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {error.confirmPassword}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold hover:scale-[1.02] transition"
            >
              Register
            </button>

            {/* <div className="flex items-center my-4">
              <div className="flex-1 h-px bg-gray-300"></div>
              <span className="px-3 text-gray-400 text-sm">OR</span>
              <div className="flex-1 h-px bg-gray-300"></div>
            </div> */}

            {/* <button
              type="button"
              className="w-full py-2.5 border border-gray-300 rounded-xl hover:bg-gray-50 transition"
            >
              Continue with Google
            </button> */}

            <p className="text-center text-gray-500">
              Already have an account?
              <Link
                to="/login"
                className="ml-1 font-semibold text-blue-600 hover:underline"
              >
                Login
              </Link>
            </p>

          </form>
    </div>
  </div>
);
}

export default Register