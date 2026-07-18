import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAllTask, createTask} from '../services/taskService';

const Dashboard = () => {
  const navigate = useNavigate()

  const [tasks, setTasks] =  useState([])

  const [formData, setFormData] = useState({
    title:"",
    description:"",
    status:"Pending"
  })

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
  const handleChange = (e) =>{
    const {name, value} = e.target;

    setFormData({
      ...formData,
      [name]:value
    })

  }
  const handleSubmit = async (e) =>{
    e.preventDefault()
    try {
      const response = await createTask(formData)
      await fetchTask();
      console.log(response)

      setFormData({
      title:"",
      description:"",
      status:"Pending"
    })
    } catch (error) {
      console.error(error)
    }
  }

  console.log(formData)
  return (
    <div>

      {/* <button className='bg-blue-600 text-white px-4 py-2 rounded mb-4'>Add Task</button> */}
      <button onClick={handleLogout}
      className='bg-red-500 text-white px-4 py-2 rounded' >
        Logout
      </button>


      <form onSubmit={handleSubmit} className='mt-6 space-y-4'>
        <input type="text" 
        placeholder='Enter Task Title'
        name='title'
        value={formData.title} 
        onChange={handleChange}
        className='w-full rounded-lg border p-2' />

        <textarea placeholder='Enter Task Description' 
        className='w-full rounded-lg border p-2'
        name='description'
        value={formData.description}
        onChange={handleChange}
        rows="4"></textarea>

        <select className='w-full rounded-lg border p-2'
        name='status'
        value={formData.status}
        onChange={handleChange}>
          <option value="Pending">Pending</option>
          <option value="In Progress">In Progress</option>
          <option value="Completed">Completed</option>
        </select>

        <button type='submit'
        className='bg-blue-600 rounded-lg text-white px-4 py-2'>Add</button>
      </form>

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