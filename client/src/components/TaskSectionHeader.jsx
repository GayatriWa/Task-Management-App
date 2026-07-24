import { FiChevronDown } from "react-icons/fi";

const TaskSectionHeader = ({ sortBy, setSortBy }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-8 lg:mt-10 mb-6">
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900">
        My Tasks
      </h2>

      <div className="self-start sm:self-auto">
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-white px-4 py-2 rounded-xl shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="recent">Recent</option>
              <option value="oldest">Oldest</option>
              <option value="dueDate">Due Date</option>
            </select>
      </div>
    </div>
  );
};

export default TaskSectionHeader;