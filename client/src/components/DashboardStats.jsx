import {
  FiPlus,
  FiClipboard,
  FiClock,
  FiLoader,
  FiCheckCircle,
} from "react-icons/fi";

const DashboardStats = ({ tasks, onAddTask }) => {
  const totalTasks = tasks.length;

  const pendingTasks = tasks.filter(
    (task) => task.status === "Pending"
  ).length;

  const inProgressTasks = tasks.filter(
    (task) => task.status === "In Progress"
  ).length;

  const completedTasks = tasks.filter(
    (task) => task.status === "Completed"
  ).length;

  const stats = [
    {
      title: "Total Tasks",
      value: totalTasks,
      icon: <FiClipboard />,
      iconBg: "bg-blue-100",
      color: "text-blue-600",
    },
    {
      title: "In Progress",
      value: inProgressTasks,
      icon: <FiLoader />,
      iconBg: "bg-purple-100",
      color: "text-purple-600",
    },
    {
      title: "Pending",
      value: pendingTasks,
      icon: <FiClock />,
      iconBg: "bg-orange-100",
      color: "text-orange-500",
    },
    {
      title: "Completed",
      value: completedTasks,
      icon: <FiCheckCircle />,
      iconBg: "bg-green-100",
      color: "text-green-600",
    },
  ];

  return (
    <section className="mt-6 lg:mt-10">

      {/* Heading */}

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 lg:mb-8">

        <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
          Dashboard
        </h1>

        <button
          onClick={onAddTask}
          className="self-start sm:self-auto flex items-center gap-2 rounded-xl bg-linear-to-r from-blue-500 to-indigo-500 px-5 py-3 text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          <FiPlus className="text-xl" />
          Add Task
        </button>

      </div>

      {/* Cards */}

     <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-6">

        {stats.map((item) => (
          <div 
            key={item.title}
            className="bg-white rounded-2xl p-4 lg:px-5 lg:py-4 shadow-md hover:shadow-lg transition"
          >
            <div
              className={`w-12 h-12 lg:w-14 lg:h-14 text-xl lg:text-2xl rounded-2xl ${item.iconBg} flex items-center justify-center ${item.color}`}
            >
              {item.icon}
            </div>

            <h2 className={`text-3xl lg:text-4xl font-bold mt-8 ${item.color}`}>
              {String(item.value).padStart(2, "0")}
            </h2>

            <p className="text-gray-500 text-sm lg:text-base mt-3">
              {item.title}
            </p>

            {/* Decorative Line */}

            <div className="mt-8">

              <svg
                viewBox="0 0 200 35"
                className="w-full h-5 lg:h-6"
              >
                <path
                  d="M5 25 C25 10,45 35,65 25 S105 15,125 25 S165 10,195 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  className={item.color}
                />
              </svg>

            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default DashboardStats;