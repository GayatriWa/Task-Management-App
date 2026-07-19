import TaskCard from "./TaskCard"

const TaskList = ({tasks, onEdit, onDelete}) => {
  return (
    <>
        {tasks.map((task)=>(
            <TaskCard 
            key={task._id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}/>
        ))}
    </>
  )
}

export default TaskList