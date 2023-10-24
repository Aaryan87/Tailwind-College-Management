import { FaEllipsisV, FaRegCalendarMinus } from "react-icons/fa";
import PieComponent from "./PieComponent";
import Graph_2 from "./Graph-2";
import { Progress } from "antd";
import { Link } from "react-router-dom";
import error from "../assets/error.png";

const Main = () => {
  return (
    <div className="pt-[25px] px-[25px] bg-[#090909]">
      <div className="flex items-center justify-between py-4">
        <h1 className="text-white text-[28px] leading-[34px] font-normal cursor-pointer">
          Dashboard
        </h1>
        <button className="bg-[#2E59D9] hover:bg-blue-700 ease-in-out duration-500 h-[32px] rounded-[3px] text-white flex items-center justify-center cursor-pointer px-[8px]">
          Generate Report
        </button>
      </div>
      <div className="grid grid-cols-4 gap-[30px] mt[25px] pb-[15px]">
        {/* First Card Component */}

        <Link to="addstudent">
          <div className=" h-[100px] rounded-[8px] bg-gray-800 border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
            <div>
              <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">
                Add Student
              </h2>
              <h1 className="text-[20px] leading-[24px] font-bold text-white mt-[5px]">
                CRUD
              </h1>
            </div>
            <FaRegCalendarMinus fontSize={28} color="white" />
          </div>
        </Link>

        {/* Second Card Component */}

        <Link to="addstaff">
          <div className=" h-[100px] rounded-[8px] bg-gray-800 border-l-[4px] border-[#56cd70] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
            <div>
              <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">
                Add Staff
              </h2>
              <h1 className="text-[20px] leading-[24px] font-bold text-white mt-[5px]">
                CRUD
              </h1>
            </div>
            <FaRegCalendarMinus fontSize={28} color="white" />
          </div>
        </Link>

        {/* Third Card Component */}

        <Link to="assisgnment">
          <div className=" h-[100px] rounded-[8px] bg-gray-800 border-l-[4px] border-[#e4eb5b] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
            <div>
              <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">
                Assisgnment
              </h2>
              <h1 className="text-[20px] leading-[24px] font-bold text-white mt-[5px]">
                By staff and student
              </h1>
            </div>
            <FaRegCalendarMinus fontSize={28} color="white" />
          </div>
        </Link>

        {/* Fourth Card Component */}

        <Link to="calendar">
          <div className=" h-[100px] rounded-[8px] bg-gray-800 border-l-[4px] border-[#f26d53] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out">
            <div>
              <h2 className="text-[#B589DF] text-[11px] leading-[17px] font-bold">
                Others
              </h2>
              <h1 className="text-[20px] leading-[24px] font-bold text-white mt-[5px]">
                Calendar
              </h1>
            </div>
            <FaRegCalendarMinus fontSize={28} color="white" />
          </div>
        </Link>
      </div>

      {/* Graph section */}
      <div className="flex mt-[22px] w-full gap-[30px] ">
        <div className="basis-[70%] border bg-gray-800 shadow-md cursor-pointer rounded-[4px]">
          <div className="bg-gray-800 flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-gray-900 mb-[20px]">
            <h2 className="text-white">Attendace Overview</h2>
            <FaEllipsisV color="white" className="cursor-pointer" />
          </div>

          <div>
            {/* <Graph/> */}
            <Graph_2 />
          </div>
        </div>

        {/* Pie Chart Section */}

        <div className="basis-[30%] border bg-gray-800 shadow-md cursor-pointer rpunded-[40px]">
          <div className="bg[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]">
            <h2 className="text-white">Performance</h2>
            <FaEllipsisV color="white" className="cursor-pointer" />
          </div>
          <div className="pl-[35px]">
            <PieComponent />
          </div>
        </div>
      </div>

      <div className="flex mt-[22px] w-full gap-[30px]">
        <div className="basis-[55%] border bg-gray-800 shadow-md cursor-pointer rounded-[4px]">
          <div className="bg-gray-900 flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]">
            <h2 className="text-white">Projects Overview</h2>
            <FaEllipsisV color="white" className="cursor-pointer" />
          </div>
          <div className="px-[25px] space-y-[15px] py-[15px]">
            <div>
              <h2 className="text-white">Server Migration</h2>
              <Progress
                percent={30}
                strokeColor={{ "0%": "#E74A3B", "100%": "white" }}
              />
            </div>
            <div>
              <h2 className="text-white">Sales Tracking</h2>
              <Progress
                percent={50}
                status="active"
                strokeColor={{ "0%": "#F6C23E", "100%": "white" }}
              />
            </div>
            <div>
              <h2 className="text-white">Customer Database</h2>
              <Progress
                percent={70}
                status="active"
                strokeColor={{ "0%": "#4E73DF", "100%": "white" }}
              />
            </div>
            <div>
              <h2 className="text-white">Payout Details</h2>
              <Progress
                percent={100}
                strokeColor={{ "0%": "#36B9CC", "100%": "white" }}
              />
            </div>
            <div>
              <h2 className="text-white">Account Setup</h2>
              <Progress
                percent={50}
                status="exception"
                strokeColor={{ "0%": "#1CC88A", "100%": "white" }}
              />
            </div>
          </div>
        </div>

        <div className="basis-[45%] border">
          <div className="bg-gray-800 flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]">
            <h2 className="text-white text-[16px] leading-[19px] font-bold">
              {" "}
              Resources
            </h2>
            <FaEllipsisV color="white" className="cursor-pointer" />
          </div>
          <div className="pl-[35px] flex items-center justify-center h-[100%]">
            <div>
              <img src={error} alt="" className="transform scale-[135%]" />
              <p className="mt-[15px] text-semibold text-white">
                No data available
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
