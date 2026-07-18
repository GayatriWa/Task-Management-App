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

export {getAllTask, createTask}