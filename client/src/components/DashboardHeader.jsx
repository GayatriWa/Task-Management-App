import { FiSearch, FiBell, FiChevronDown } from "react-icons/fi";

const DashboardHeader = ({ user }) => {
  return (
    <header className="bg-white rounded-3xl shadow-md px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-8">

      {/* Search Bar */}
      <div className="relative w-full lg:max-w-xl">

        <FiSearch
          className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-400 text-xl"
        />

        <input
          type="text"
          placeholder="Search tasks..."
         className="w-full py-3 pl-12 sm:pl-14 pr-4 rounded-2xl border border-gray-200 bg-gray-50 focus:bg-white focus:ring-2 focus:ring-blue-400 outline-none transition"
        />

      </div>

      {/* Right Section */}
      <div className="flex items-center justify-between lg:justify-end w-full lg:w-auto gap-4 lg:gap-6">

        {/* Notification */}
        <button className="relative">

          <FiBell className="text-2xl text-gray-600 hover:text-blue-600 transition" />

          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>

        </button>

        {/* User */}
        <div className="flex items-center gap-4">

          <img
            src="https://i.pravatar.cc/150?img=12"
            alt="Profile"
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover border-2 border-blue-500"
          />

          <div className="leading-5">

            <h3 className="font-semibold text-sm sm:text-base text-gray-800">
              {user?.name || "User"}
            </h3>

            <p className="hidden sm:block text-sm text-gray-500">
              Frontend Developer
            </p>

          </div>

          <FiChevronDown className="hidden sm:block text-gray-500 text-xl cursor-pointer" />

        </div>

      </div>

    </header>
  );
};

export default DashboardHeader;