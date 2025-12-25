import { NavLink } from "react-router-dom";
import { FaHome, FaBook, FaUser } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";

export const Sidebar = () => {
  const menuItems = [
    { name: "Home", path: "/HomePage", icon: <FaHome /> },
    { name: "DSA", path: "/dsa", icon: <FaBook /> },
    { name: "Profile", path: "/profile", icon: <FaUser /> },
    { name: "Settings", path: "/settings", icon: <IoSettings /> },
  ];

  return (
    <aside className="w-64 bg-gray-800 flex-shrink-0 flex flex-col">


      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <NavLink
            key={item.name}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-4 p-3 rounded-md hover:bg-gray-700 ${isActive ? "bg-gray-700" : ""
              }`
            }
          >
            {item.icon}
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};


