import {
  FiGrid,
  FiCheckSquare,
  FiFolder,
  FiActivity,
  FiSettings,
  FiLogOut,
} from "react-icons/fi";
import { NavLink } from "react-router-dom";

const Sidebar = ({onLogout}) => {
  const menuItems = [
    {
      name: "Dashboard",
      icon: <FiGrid />,
      path: "/dashboard",
    },
    {
      name: "Tasks",
      icon: <FiCheckSquare />,
      path: "/tasks",
    },
    {
      name: "Projects",
      icon: <FiFolder />,
      path: "/projects",
    },
    {
      name: "Activity",
      icon: <FiActivity />,
      path: "/activity",
    },
  ];

  return (
    <aside className="hidden lg:flex lg:w-60 xl:w-64 h-screen bg-white shadow-lg flex-col justify-between sticky top-0">

      <div>

        {/* Logo */}
        <div className="px-8 py-8 border-b">
          <h1 className="text-2xl xl:text-3xl font-bold text-blue-600">
            TaskFlow
          </h1>
        </div>

        {/* Menu */}
        <nav className="px-4 xl:px-5 py-3 xl:py-4 rounded-xl xl:rounded-2xl text-base xl:text-lg">

          {menuItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-4 px-5 py-4 rounded-2xl text-lg transition-all duration-300
                ${
                  isActive
                    ? "bg-linear-to-r from-blue-500 to-indigo-500 text-white shadow-md"
                    : "text-gray-600 hover:bg-gray-100"
                }`
              }
            >
              <span className="text-lg xl:text-xl">{item.icon}</span>

              <span>{item.name}</span>
            </NavLink>
          ))}

        </nav>

      </div>

      {/* Bottom */}
      <div className="px-5 py-8 border-t space-y-2">

        <NavLink
          to="/settings"
          className="flex items-center gap-4 px-5 py-4 rounded-2xl text-lg text-gray-600 hover:bg-gray-100 transition"
        >
          <FiSettings className="text-xl" />

          Settings
        </NavLink>

        <button onClick={onLogout}
          className="w-full flex items-center gap-4 px-4 xl:px-5 py-3 xl:py-4 rounded-xl xl:rounded-2xl text-base xl:text-lg text-red-500 hover:bg-red-50 transition"
        >
          <FiLogOut className="text-xl" />

          Logout
        </button>

      </div>

    </aside>
  );
};

export default Sidebar;