import React from "react";

export default function Navbar() {
  return (
    <>
      <nav className="bg-[#233142] w-screen">
        <div className="flex justify-between ">
          <div className="flex items-center p-4 ml-[35%]">
            <div className="relative mr-4">
              <select className="appearance duration-200 text-gray-600 rounded-s-full bg-gray-300  py-2 px-3 hover:bg-gray-500 focus:bg-slate-400 focus:outline-none  ">
                <option value="patients">Patients</option>
                <option value="hr">HR</option>
                <option value="labs">Labs</option>
                <option value="pharma">Pharma</option>
              </select>
              <input
                type="text"
                className="bg-slate-100  rounded-e-full py-2 px-3  w-64 focus:outline-none focus:bg-slate-200 "
                placeholder="Search..."
              />
              <button className="duration-300 bg-green-800 text-white ml-3 py-2 px-4 rounded-full hover:bg-green-600 focus:outline-none focus:bg-green-600">
                +Add New
              </button>
            </div>
          </div>

          <div className="flex p-4 mr-10">
            <div className="flex items-center">
              <button className=" duration-150 text-white mr-4 hover:text-gray-300 focus:outline-none">
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

              <button className="duration-150 text-white focus:outline-none">
                <img
                  className="h-8 w-8 rounded-full"
                  src="https://via.placeholder.com/150"
                  alt="Profile"
                />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
