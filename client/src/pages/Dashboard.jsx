import React from 'react'
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const navigate = useNavigate()
  

  const handleLogout = () =>{
    localStorage.removeItem("token");
    localStorage.removeItem("user")
    navigate("/login")
  }


  return (
    <div>
      <button onClick={handleLogout}
      className='bg-red-500 text-white px-4 py-2 rounded' >
        Logout
      </button>
    </div>
  )
}

export default Dashboard