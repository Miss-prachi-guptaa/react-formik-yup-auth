import { FaBell, FaUserCircle } from "react-icons/fa";


export const Navbar = () => {

  return (
    <header className="flex items-center justify-between bg-gray-800 p-4 border-b border-gray-700">
      <div className="text-xl font-semibold text-white">Dashboard</div>

      <div className="flex items-center gap-4">
        <FaBell className="text-white" size={20} />
        <div className="flex items-center gap-2 cursor-pointer text-white">
          <FaUserCircle size={24} />
          <span className="hidden md:inline">Prachi</span>
        </div>
      </div>
    </header>
  );
};


