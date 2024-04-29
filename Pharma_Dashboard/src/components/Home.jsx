import React from "react";
import Navbar from "./Navbar";
import Sidemenu from "./Sidemenu";
import { HiMiniUserGroup } from "react-icons/hi2";
import { LuFileStack } from "react-icons/lu";
import { TbCashBanknote } from "react-icons/tb";
import { FaRegIdCard } from "react-icons/fa";
import { PiArrowUUpRightLight } from "react-icons/pi";
import { PiArrowDownThin } from "react-icons/pi";


export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <body className="flex w-screen h-screen bg-neutral-200">
        <Sidemenu />
        <div className="flex-col w-[89%]">
      <div className="bg-slate-50 p-3 mx-3 mt-5 rounded-lg">
        <li className="flex items-center gap-1 text-xl text-green-800">
          <HiMiniUserGroup />
          Consultants
        </li>
      </div>

      <div className=" bg-slate-50  mx-3 mt-5 rounded-lg flex justify-start gap-4">
        <div>
          <div class="rectangle font-bold font-sans">
            Filters
            <div class="triangle"></div>
          </div>
        </div>

        <div>
          <ul className="flex justify-evenly items-center gap-8 p-3">
            <li className="flex items-center gap-2 text-gray-500">
              <select
                name="Range"
                id=""
                className="duration-100 rounded-full  border w-48 border-gray-500 text-gray-500 py-2 px-3 rounded-e-s-full hover:bg-inherit focus:outline-none"
              >
                <option value="Select Range">Select Range</option>
              </select>
            </li>
            <li className="flex items-center gap-2 text-gray-500">
              <input
                type="checkbox"
                name="summary"
                id=""
                className="circular-checkbox "
              />
              Summary
            </li>
            <li className="flex items-center gap-2 text-gray-500">
              <input
                type="checkbox"
                name="branch wise"
                id=""
                className="circular-checkbox"
              />
              Branch Wise
            </li>
          </ul>
        </div>
      </div>

      <div className="flex justify-start gap-9">
        <div className="flex bg-slate-50 w-[300px] h-[100px] mt-4 rounded-md ml-3">
          <div className="bg-pink-200 w-[2%] rounded-md"></div>
          <div className="flex-col mt-2 ml-4">
            <span className="text-green-800 font-bold">Consultant Count</span>
            <br />
            <span className="text-gray-600 font-bold text-xl">90 / 900</span>
            <br />
            <span className="text-gray-500 text-sm">Today/Period</span>
          </div>
          <HiMiniUserGroup className="ml-[24%] mt-[7%] size-11  bg-pink-200 text-gray-500 rounded-full" />
        </div>

        <div className="flex bg-slate-50 w-[300px] h-[100px] mt-4 rounded-md ml-3">
          <div className="bg-indigo-300 w-[2%] rounded-md"></div>
          <div className="flex-col mt-2 ml-4">
            <span className="text-green-800 font-bold">Consultations</span>
            <br />
            <span className="text-gray-600 font-bold text-xl">11 / 25</span>
            <br />
            <span className="text-gray-500 text-sm">Today/Period</span>
          </div>
          <LuFileStack className="ml-[34%] mt-[7%] size-11  bg-indigo-300 text-gray-500 rounded-full" />
        </div>

        <div className="flex bg-slate-50 w-[300px] h-[100px] mt-4 rounded-md ml-3">
          <div className="bg-sky-200 w-[2%] rounded-md"></div>
          <div className="flex-col mt-2 ml-4">
            <span className="text-green-800 font-bold">Labs</span>
            <br />
            <span className="text-gray-600 font-bold text-xl">90 / 900</span>
            <br />
            <span className="text-gray-500 text-sm">Today/Period</span>
          </div>
          <TbCashBanknote className="ml-[40%] mt-[7%] size-11  bg-sky-200 rounded-full text-gray-500" />
        </div>

        <div className="flex bg-slate-50 w-[300px] h-[100px] mt-4 rounded-md ml-3">
          <div className="bg-gray-400 w-[2%] rounded-md"></div>
          <div className="flex-col mt-2 ml-4">
            <span className="text-green-800 font-bold">DietPlans</span>
            <br />
            <span className="text-gray-600 font-bold text-xl">25 / 250</span>
            <br />
            <span className="text-gray-500 text-sm">Today/Period</span>
          </div>
          <FaRegIdCard className="ml-[40%] mt-[7%] size-11  bg-gray-400 rounded-full text-gray-600" />
        </div>
      </div>

      <div className="bg-slate-50 p-3 mx-3 mt-5 rounded-lg">
        <div className="flex ">
          <ul className="flex items-center gap-2">
            <li className="text-gray-600 font-bold text-xl">Consultants</li>
            <li className="text-green-950 rounded-full">
              <button className="circular ml-[1110px] text-green-950 flex items-center justify-center">
                {/* <IoArrowRedoCircleOutline className="ml-[1100px] size-10 rounded-full"/> */}
                <PiArrowUUpRightLight className="size-7" />
              </button>
            </li>
            <li className=" text-green-950">
              <button className="circular text-green-950 flex items-center justify-center">
                {/* <IoArrowDownCircleOutline className="size-10" /> */}
                <PiArrowDownThin className="size-7" />
              </button>
            </li>
          </ul>
        </div>

        <div className="w-full mt-2 p-1 flex justify-center items-center">
          <table className="table-auto mt-4 font-[Poppins] border-2 border-gray-300">
            <thead>
              <tr className="text-gray-700 text-base">
                <th className="border-r-2 border-b-2 border-gray-300 px-32 py-2">
                  NAME
                </th>
                <th className="border-r-2 border-b-2 border-gray-300 px-32 py-2">
                  PATIENT COUNT
                </th>
                <th className="border-r-2 border-b-2 border-gray-300 px-28 py-2">
                  LABS
                </th>
                <th className="border-b-2 px-28 py-2">DIET PLANS</th>
              </tr>

              <tr className="text-gray-500 text-sm">
                <th className="border-r-2 border-b-2 border-gray-300 py-2">
                  John Smith
                </th>
                <th className="border-r-2 border-b-2 border-gray-300  py-2">
                  12
                </th>
                <th className="border-r-2 border-b-2 border-gray-300  py-2">
                  3
                </th>
                <th className="border-b-2 py-2">6</th>
              </tr>

              <tr className="text-gray-500 text-sm">
                <th className="border-r-2 border-b-2 border-gray-300 py-2">
                  John Smith
                </th>
                <th className="border-r-2 border-b-2 border-gray-300  py-2">
                  12
                </th>
                <th className="border-r-2 border-b-2 border-gray-300  py-2">
                  3
                </th>
                <th className="border-b-2 py-2">6</th>
              </tr>

              <tr className="text-gray-500 text-sm">
                <th className="border-r-2 border-b-2 border-gray-300 py-2">
                  John Smith
                </th>
                <th className="border-r-2 border-b-2 border-gray-300  py-2">
                  12
                </th>
                <th className="border-r-2 border-b-2 border-gray-300  py-2">
                  3
                </th>
                <th className="border-b-2 py-2">6</th>
              </tr>

              <tr className="text-gray-500 text-sm">
                <th className="border-r-2 border-b-2 border-gray-300 py-2">
                  John Smith
                </th>
                <th className="border-r-2 border-b-2 border-gray-300  py-2">
                  12
                </th>
                <th className="border-r-2 border-b-2 border-gray-300  py-2">
                  3
                </th>
                <th className="border-b-2 py-2">6</th>
              </tr>

              <tr className="text-gray-500 text-sm">
                <th className="border-r-2 border-b-2 border-gray-300 py-2">
                  John Smith
                </th>
                <th className="border-r-2 border-b-2 border-gray-300  py-2">
                  12
                </th>
                <th className="border-r-2 border-b-2 border-gray-300  py-2">
                  3
                </th>
                <th className="border-b-2 py-2">6</th>
              </tr>

              <tr className="text-gray-500 text-sm">
                <th className="border-r-2 border-b-2 border-gray-300 py-2">
                  John Smith
                </th>
                <th className="border-r-2 border-b-2 border-gray-300  py-2">
                  12
                </th>
                <th className="border-r-2 border-b-2 border-gray-300  py-2">
                  3
                </th>
                <th className="border-b-2 py-2">6</th>
              </tr>

              <tr className="text-gray-500 text-sm">
                <th className="border-r-2 border-b-2 border-gray-300 py-2">
                  John Smith
                </th>
                <th className="border-r-2 border-b-2 border-gray-300  py-2">
                  12
                </th>
                <th className="border-r-2 border-b-2 border-gray-300  py-2">
                  3
                </th>
                <th className="border-b-2 py-2">6</th>
              </tr>

              <tr className="text-gray-500 text-sm">
                <th className="border-r-2 border-b-2 border-gray-300 py-2">
                  John Smith
                </th>
                <th className="border-r-2 border-b-2 border-gray-300  py-2">
                  12
                </th>
                <th className="border-r-2 border-b-2 border-gray-300  py-2">
                  3
                </th>
                <th className="border-b-2 py-2">6</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
      </body>
    </>
  );
}
