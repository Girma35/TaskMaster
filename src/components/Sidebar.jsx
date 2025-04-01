import { GrTask } from "react-icons/gr";
import {
  MdDashboard,
  MdOutlineTaskAlt,
  MdAddTask,
  MdPendingActions,
  MdCloudDone,
  MdOutlineAccessTimeFilled,
  MdQueryStats,
} from "react-icons/md";
import { GrInProgress } from "react-icons/gr";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="bg-gradient-to-br from-indigo-800 to-purple-800 w-[5rem] sm:w-[22rem] flex flex-col roboto-regular text-white rounded-lg shadow-2xl overflow-hidden border border-purple-900 m-4 sm:m-8">
      <div className="flex items-center gap-2 justify-center h-16 text-2xl font-semibold mt-4 mb-4 border-b border-purple-900">
        <GrTask />
        <span className="sm:block hidden">Task Manager</span>
      </div>
      <nav className="flex justify-start">
        <ul className="py-2 flex flex-col justify-start w-full">
          <Link
            to="/"
            className="px-6 py-3 rounded-md hover:bg-purple-700 transition-colors duration-200 flex justify-start items-center gap-3 text-lg font-medium"
          >
            <MdDashboard className="text-2xl" />
            <span className="sm:block hidden">Dashboard</span>
          </Link>
          <Link
            to="/completeTask"
            className="px-6 py-3 rounded-md hover:bg-purple-700 transition-colors duration-200 flex justify-start items-center gap-3 text-lg font-medium"
          >
            <MdOutlineTaskAlt className="text-2xl" />
            <span className="sm:block hidden">Completed Tasks</span>
          </Link>
          <Link
            to="/pendingTask"
            className="px-6 py-3 rounded-md hover:bg-purple-700 transition-colors duration-200 flex justify-start items-center gap-3 text-lg font-medium"
          >
            <MdPendingActions className="text-2xl" />
            <span className="sm:block hidden">Pending Tasks</span>
          </Link>
          <Link
            to="/inProgressTask"
            className="px-6 py-3 rounded-md hover:bg-purple-700 transition-colors duration-200 flex justify-start items-center gap-3 text-lg font-medium"
          >
            <GrInProgress className="text-2xl" />
            <span className="sm:block hidden">In Progress Tasks</span>
          </Link>
          <Link
            to="/deployedTask"
            className="px-6 py-3 rounded-md hover:bg-purple-700 transition-colors duration-200 flex justify-start items-center gap-3 text-lg font-medium"
          >
            <MdCloudDone className="text-2xl" />
            <span className="sm:block hidden">Deployed Tasks</span>
          </Link>
          <Link
            to="/deferredTask"
            className="px-6 py-3 rounded-md hover:bg-purple-700 transition-colors duration-200 flex justify-start items-center gap-3 text-lg font-medium"
          >
            <MdOutlineAccessTimeFilled className="text-2xl" />
            <span className="sm:block hidden">Deferred Tasks</span>
          </Link>
          <Link
            to="/addTask"
            className="px-6 py-3 rounded-md hover:bg-purple-700 transition-colors duration-200 flex justify-start items-center gap-3 text-lg font-medium"
          >
            <MdAddTask className="text-2xl" />
            <span className="sm:block hidden">Add New Tasks</span>
          </Link>
          <Link
            to="/statsTask"
            className="px-6 py-3 rounded-md hover:bg-purple-700 transition-colors duration-200 flex justify-start items-center gap-3 text-lg font-medium"
          >
            <MdQueryStats className="text-2xl" />
            <span className="sm:block hidden">Task Stats</span>
          </Link>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;