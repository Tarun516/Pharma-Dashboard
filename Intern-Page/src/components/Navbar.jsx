import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="px-4">
        <div className="flex justify-around items-center">
          {/* Search Bar */}
          <div className="flex space-x-2">
            <div className="relative">
              <select className="appearance-none bg-gray-700 border border-gray-600 text-white py-2 px-3 rounded-l-md pr-8 focus:outline-none focus:bg-gray-800 focus:border-gray-700">
                <option value="patients">Patients</option>
                <option value="hr">HR</option>
                <option value="labs">Labs</option>
                <option value="pharma">Pharma</option>
              </select>
              <input
                type="text"
                className="bg-gray-700 border border-gray-600 text-white py-2 px-3 rounded-r-md w-64 focus:outline-none focus:bg-gray-800 focus:border-gray-700"
                placeholder="Search..."
              />
            </div>

            {/* Add New */}
            <button className="bg-blue-600 text-white py-2 px-4 rounded-md mr-4 hover:bg-blue-700 focus:outline-none focus:bg-blue-700">
              Add New
            </button>
          </div>
 
          <div className="flex">
            <button className="text-white mr-4 hover:text-gray-300 focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6c1.657 0 3 1.343 3 3v5l4 4H5l4-4V9c0-1.657 1.343-3 3-3z"
                ></path>
              </svg>
            </button>

            {/* Profile Picture */}
            <div className="relative">
              <button className="text-white focus:outline-none">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
