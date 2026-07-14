import React, { useState } from 'react'
import AppRoutes from './routes/AppRoutes'

const App = () => {
  return (
    <div>
      <AppRoutes />
    </div>
  )
}

export default App



// const [formData, setFormData] = useState({
//   name:""
// })

// const [ error , setError] = useState({
//   name:""
// })

// const handleChange = (e)=>{
//   const {name,value} = e.target;

//   setFormData((prev)=>({
//     ...prev,
//     [name]: value
//   }))
//   setError((prev)=>({
//     ...prev,
//     [name]:""
//   }))
// }

// const handleSubmit = (e)=>{
//   e.preventDefault()
//   if(!formData.name){
//     setError((prev)=>({
//     ...prev,
//     name:"name is required"
//   }))
//   return;
//   }
// }

// <form onSubmit={handleSubmit}>
//   <input type="text"
//   name='name'
//   value={formData.name}
//   onChange={handleChange} />

//   {error.name && <p>{error.name}</p>}
// </form>


// const [formData, setFormData] = useState({
//   name:""
// })

// const [error, setError] = useState({
//   name:""
// })

// const handleChange = (e) =>{
//   const {name, value} = e.target;

//   setFormData((prev)=>({
//     ...prev,
//     [name] : value
//   }))

//  if(!formData.name){
//    setError((prev)=>({
//     ...prev,
//     [name]:""
//   }))
//   return
//  }
// }

// const handleSubmit = async (e)=>{
//   e.preventDefault();

//   setError((prev)=>({
//     ...prev,
//     name:"Name is required"
//   }))

//   try {
//     const response = await axios.post("api/auth/register", formData)

//   } catch (error) {
//     console.log(error)
//   }

// }

// <form onSubmit={handleSubmit}>
//   <input type="text" 
//   name='name'
//   value={FormData.name}
//   onChange={handleChange}
//   />

//   {error.name &&<p>{error.name}</p>}
// </form>