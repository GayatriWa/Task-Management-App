const Task = require("../models/Task")

// create task 
const createTask = async ({title, description, status, priority, userId}) =>{

    const task = await Task.create({
        title,
        description,
        status,
        user:userId
    })

    return {
        success:true,
        message:"Task created successfully",
        task
    }

}

// Get All Task 
const getAllTask = async (userId) => {
    const tasks = await Task.find({user:userId})

    return {
        success:true,
        tasks
    }
}
const getTaskById = async (taskId, userId) =>{

    const task = await Task.findOne({
        _id:taskId,
        user:userId
    })
    if(!task){
        return {
            success:false,
            message:"task not found"
        }
    }

    return {
        success:true,
        task
    }
}
const updateTask = async (taskId, userId, taskData) =>{

    const task = await Task.findOne({
        _id : taskId,
        user : userId
    })

    if(!task){
        return {
            success:false,
            message: "task not found"
        }
    }

    task.title = taskData.title;
    task.description = taskData.description;
    task.status = taskData.status;
    task.priority = taskData.priority

    await task.save()

    return {
        success:true,
        message: "Task updated successfully",
        task
    }
}

const deleteTask = async (taskId, userId) =>{
    const task = await Task.findOne({
        _id : taskId,
        user : userId
    })

    if(!task){
        return {
            success:false,
            message: "task not found"
        }
    }
    await task.deleteOne()

    return {
        success:true,
        message:"Task deleted Successfully",
        task
    }
}

module.exports = {createTask, getAllTask, getTaskById, updateTask, deleteTask}