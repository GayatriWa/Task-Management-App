import { useEffect, useState } from 'react'
import { getAllTask, createTask, deleteTask, updateTask} from '../services/taskService';
import { initialFormData } from "../constants/taskConstants";
import { toast } from "react-toastify";


const useTasks = () => {

        const [tasks, setTasks] =  useState([])
        const [formData, setFormData] = useState(initialFormData)
        const [editTaskId, setEditTaskId] =  useState(null)
        const [loading, setLoading] = useState(false)


        const fetchTasks = async () =>{
            try {
            const response = await getAllTask()
            setTasks(response.tasks);

            } catch (error) {
            console.error(error)
            toast.error("Failed to fetch tasks!");
            }
        }

        useEffect(() => {
            fetchTasks()
        },[])

        const handleChange = (e) =>{
            const {name, value} = e.target;

            setFormData((prev) => ({
                ...prev,
                [name]: value,
                }));

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
            await fetchTasks();
            setFormData(initialFormData)
            setEditTaskId(null)  

            return true;
            
            } catch (error) {
            console.error(error)
            toast.error("Failed to save task!");
            return false; 
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
             await deleteTask(taskId)
            toast.success("Task deleted successfully!");

            await fetchTasks();
            } catch (error) {
            console.error(error)
            toast.error("Failed to delete task!");
            }
        }

        const handleEdit = (task) =>{
            setEditTaskId(task._id);

                setFormData({
                title: task.title,
                description: task.description,
                status: task.status,
                priority: task.priority
                });
        }

        const resetForm = () => {
            setFormData(initialFormData);
            setEditTaskId(null);
            };

        return {
             tasks,
            formData,
            loading,
            editTaskId,
            handleChange,
            handleSubmit,
            handleDelete,
            handleEdit,
            fetchTasks,
            resetForm
            };     

       
        }

    
export default useTasks