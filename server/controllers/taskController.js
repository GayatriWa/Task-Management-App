const taskService = require("../services/taskService")

const createTask =  async (req,res)=>{
    try {

        const {title,description, status, priority} = req.body;
        const userId = req.user.userId;

        const result = await taskService.createTask({
            title,
            description,
            status,
            priority,
            userId
        })

        return res.status(201).json(result)

    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message:"task not created"
        })
    }
}

const getAllTask = async (req,res)=>{

    try {

        const userId = req.user.userId;
        const result = await taskService.getAllTask(userId);

        return res.status(200).json(result)
        
    } catch (error) {
         console.error(error);
        return res.status(500).json({
            success: false,
            message:"All task not showing"
        })
    }

}

const getTaskById = async (req,res) => {
    try {

        const taskId = req.params.id;
        const userId = req.user.userId;

        const result = await taskService.getTaskById(taskId, userId);

        return res.status(200).json(result)
        
    } catch (error) {
         console.error(error);
        return res.status(500).json({
            success: false,
            message:"Task not showing"
        })
    }
}

const updateTask = async (req,res) => {
     try {

        const taskId = req.params.id;
        const userId = req.user.userId;
        const {title, description, status, priority} = req.body;

        const taskData = {title, description, status, priority}

        const result = await taskService.updateTask(taskId, userId, taskData);

        return res.status(200).json(result)
        
    } catch (error) {
         console.error(error);
        return res.status(500).json({
            success: false,
            message:"Task not showing"
        })
    }
}

const deleteTask = async (req,res) => {
    try {

        const taskId = req.params.id;
        const userId = req.user.userId;

        const result = await taskService.deleteTask(taskId, userId);

        return res.status(200).json(result)
        
    } catch (error) {
         console.error(error);
        return res.status(500).json({
            success: false,
            message:"Task not deleted"
        })
    }
} 

module.exports = {createTask, getAllTask, getTaskById, updateTask, deleteTask}