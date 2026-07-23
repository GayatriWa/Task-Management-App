import {
  FiCalendar,
  FiEdit2,
  FiTrash2,
  FiClipboard,
} from "react-icons/fi";

const TaskCard = ({ task, onEdit, onDelete }) => {
  const statusColor =
    task.status === "Pending"
      ? "bg-yellow-100 text-yellow-700"
      : task.status === "In Progress"
      ? "bg-purple-100 text-purple-700"
      : "bg-green-100 text-green-700";

  const priorityColor =
    task.priority === "High"
      ? "bg-red-100 text-red-700"
      : task.priority === "Medium"
      ? "bg-orange-100 text-orange-700"
      : "bg-green-100 text-green-700";

  return (
    <div className="bg-white rounded-2xl p-4 sm:p-5 shadow-md hover:shadow-lg transition-all duration-300">

      {/* Top */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-4">

        <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-blue-100 flex items-center justify-center">
          <FiClipboard className="text-blue-600 text-lg sm:text-xl" />
        </div>

       <div className="flex flex-wrap gap-2">

          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}
          >
            {task.status}
          </span>

          <span
            className={`px-3 py-1 rounded-full text-xs font-medium ${priorityColor}`}
          >
            {task.priority}
          </span>

        </div>

      </div>

      {/* Title */}

      <h2 className="text-base sm:text-lg font-bold text-gray-800 mt-4 sm:mt-5 line-clamp-1">
        {task.title}
      </h2>

      {/* Description */}

      <p className="text-gray-500 text-sm mt-2 line-clamp-2 min-h-40px">
        {task.description || "No description"}
      </p>

      {/* Bottom */}

     <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 mt-6">

        <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-500">

          <FiCalendar />

          <span>
            {task.dueDate
              ? new Date(task.dueDate).toLocaleDateString("en-GB", {
                day: "2-digit",
                month: "short",
                year: "numeric",
              })
              : "No Due Date"}
          </span>

        </div>

        <div className="flex gap-2 self-end sm:self-auto">

          <button
            onClick={() => onEdit(task)}
            className="w-10 h-10 rounded-xl bg-blue-50 hover:bg-blue-100 text-blue-600 flex items-center justify-center transition"
          >
            <FiEdit2 />
          </button>

          <button
            onClick={() => onDelete(task._id)}
            className="w-10 h-10 rounded-xl bg-red-50 hover:bg-red-100 text-red-600 flex items-center justify-center transition"
          >
            <FiTrash2 />
          </button>

        </div>

      </div>

    </div>
  );
};

export default TaskCard;