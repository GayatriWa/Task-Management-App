import TaskCard from "./TaskCard";

const TaskList = ({ tasks, onEdit, onDelete }) => {
  if (tasks.length === 0) {
    return (
      <div className="bg-white rounded-3xl shadow-md py-12 sm:py-16 lg:py-20 px-6 text-center mt-6 lg:mt-8">

        <div className="text-5xl sm:text-6xl mb-4">📋</div>

        <h2 className="text-xl sm:text-2xl font-semibold text-gray-700">
          No Tasks Yet
        </h2>

        <p className="text-sm sm:text-base text-gray-500 mt-2">
          Click <span className="font-semibold">Add Task</span> to create your first task.
        </p>

      </div>
    );
  }

  return (
   <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6 mt-6 lg:mt-8">

      {tasks.map((task) => (
        <TaskCard
          key={task._id}
          task={task}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}

    </div>
  );
};

export default TaskList;