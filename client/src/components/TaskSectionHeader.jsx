import { FiChevronDown } from "react-icons/fi";

const TaskSectionHeader = () => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-8 lg:mt-10 mb-6">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
        My Tasks
      </h2>

      <button className="self-start sm:self-auto flex items-center gap-2 bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition">
        <span className="text-sm font-medium text-gray-600">
          Sort By: Recent
        </span>
        <FiChevronDown />
      </button>
    </div>
  );
};

export default TaskSectionHeader;