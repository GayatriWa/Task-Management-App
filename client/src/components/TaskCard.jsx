

const TaskCard = ({task, onEdit, onDelete}) => {

  return (
    <div className="rounded-lg border p-4 shadow-md mt-4">

        <h2 className="text-xl font-bold">{task.title}</h2>
        <p>{task.description}</p>
        <p>Status: {task.status}</p>
        <p>Priority: {task.priority}</p>

        <div className=" mt-3 flex gap-2" >

            <button onClick={()=>onEdit(task)}
            className=" bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded">
                Edit
            </button>

            <button onClick={()=>onDelete(task._id)}
            className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded ">
                Delete
            </button>

        </div>
    </div>
  )
}

export default TaskCard