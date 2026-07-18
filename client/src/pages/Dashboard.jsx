import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAllTask } from '../services/taskService';

const Dashboard = () => {
  const navigate = useNavigate()

  const [tasks, setTasks] =  useState([])

  const fetchTask = async () =>{
    try {
      const response = await getAllTask()
      setTasks(response.tasks);

    } catch (error) {
       console.error(error)
    }
  }
  useEffect(() => {
    fetchTask()
  },[])

  const handleLogout = () =>{
    localStorage.removeItem("token");
    localStorage.removeItem("user")
    navigate("/login")
  }

  console.log(tasks)
  return (
    <div>
      <button onClick={handleLogout}
      className='bg-red-500 text-white px-4 py-2 rounded' >
        Logout
      </button>

      {tasks.map((task)=> {
        return  (
        <div key={task._id}
        className='border rounded-lg p-4 shadow-md mt-4'>
           <h2 className='text-xl font-bold'>{task.title}</h2>
           <p>{task.description}</p>
           <p>Status :{task.status}</p>
        </div> )
      })}
    </div>
  )
}

export default Dashboard