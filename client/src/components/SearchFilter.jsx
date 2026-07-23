import { FiSearch } from "react-icons/fi";

const SearchFilter = ({ searchTerm, setSearchTerm }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 mb-6">
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Search Task
        </label>

        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />

        <input
          type="text"
          placeholder="Search Task"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-lg border border-gray-300 pl-10 pr-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
        />
      </div>
    </div>
  );
};

export default SearchFilter;