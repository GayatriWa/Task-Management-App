import axios from "axios"

const createTask = async (taskData) => {
    const token = localStorage.getItem("token");

    const response = await axios.post("http://localhost:5000/api/tasks", taskData,

        {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
    )

    return response.data
}

const getAllTask = async () => {
    const token  = localStorage.getItem("token")

    const response = await axios.get("http://localhost:5000/api/tasks",
        {
            headers :{
                Authorization: `Bearer ${token}`
            }
        }
    )

    return response.data
}

const deleteTask = async (taskId) =>{
    const token  = localStorage.getItem("token")
    const response = await axios.delete(`http://localhost:5000/api/tasks/${taskId}`,
        {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
    )

    return response.data
}

const updateTask = async (taskId, taskData) => {
    const token  = localStorage.getItem("token")
    const response = await axios.put(`http://localhost:5000/api/tasks/${taskId}`, taskData,
        {
            headers:{
                Authorization: `Bearer ${token}`
            }
        }
    )

    return response.data
}

export {getAllTask, createTask, deleteTask, updateTask}