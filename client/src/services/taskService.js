import axios from "axios"


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

export {getAllTask}