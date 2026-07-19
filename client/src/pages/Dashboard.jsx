import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAllTask, createTask, deleteTask, updateTask} from '../services/taskService';
import { toast } from "react-toastify";
import TaskList from '../components/TaskList';
import TaskForm from '../components/TaskForm';
import SearchFilter from '../components/SearchFilter';
import DashboardStats from '../components/DashboardStats';

const Dashboard = () => {
  const navigate = useNavigate()

  const [tasks, setTasks] =  useState([])

  const [formData, setFormData] = useState({
    title:"",
    description:"",
    status:"Pending",
    priority:"medium"
  })

  const [editTaskId, setEditTaskId] =  useState(null)

  const [loading, setLoading] = useState(false)

  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter,setStatusFilter] = useState("All")

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
      setLoading(true)
      
      if(editTaskId){
        await updateTask(editTaskId, formData) 
        toast.success("Task updated successfully!");
       }
       else{
       await createTask(formData)
       toast.success("Task created successfully!");
       }
      await fetchTask();
      setFormData({
          title:"",
          description:"",
          status:"Pending",
          priority:"medium"
    })
      setEditTaskId(null)  
      
    } catch (error) {
      console.error(error)
      toast.error("Failed to save task!");
    }finally{
      setLoading(false)
    }
  }

  const handleDelete = async (taskId) =>{
    try {
      const isConfirmed = window.confirm("Are you sure you want to delete this task ?")
      if(!isConfirmed) {
        return
      }
      const response = await deleteTask(taskId)
      toast.success("Task deleted successfully!");

      await fetchTask();
    } catch (error) {
      console.error(error)
      toast.error("Failed to delete task!");
    }
  }

  const handleEdit = async (task) =>{
    try {
      setEditTaskId(task._id);

        setFormData({
          title: task.title,
          description: task.description,
          status: task.status,
          priority: task.priority
        });
    
   } catch (error) {
       console.error(error)
    }
  }

     const filteredTasks = tasks.filter((task) => {
      const matchesSearch = task.title
        .toLowerCase()
        .includes(searchTerm.toLowerCase());

  const matchesStatus =
    statusFilter === "All" || task.status === statusFilter;

  return matchesSearch && matchesStatus;
});
  return (
    <div>

      <button onClick={handleLogout}
      className='bg-red-500 text-white px-4 py-2 rounded' >
        Logout
      </button>

      <DashboardStats tasks={tasks}/>
      <SearchFilter
        searchTerm={searchTerm}
        setSearchTerm={setSearchTerm}
        statusFilter={statusFilter}
        setStatusFilter={setStatusFilter} />

        <TaskForm  handleSubmit={handleSubmit}
          formData={formData}
          handleChange={handleChange}
          loading={loading}
          editTaskId={editTaskId}/>

        <TaskList
          tasks={filteredTasks}
          onEdit={handleEdit}
          onDelete={handleDelete}/>

     </div>
  )
}

export default Dashboard