import { FaEllipsisV, FaRegCalendarMinus } from "react-icons/fa"
import { Progress } from "antd"
import { Link } from "react-router-dom"
import Student_Graph from "./Student_Graph"
import Student_PieComp from "./Student_PieComp"


const Student_Main = () => {
  return (
    <div className='pt-[25px] px-[25px] bg-[#F8F9FC]'>
      <div className='flex items-center justify-between'>
        <h1 className='text-[#5a4c69] text-[28px] leading-[34px] font-normal cursor-pointer'>Dashboard</h1>
        <button className='bg-[#2E59D9] h-[32px] rounded-[3px] text-white flex items-center justify-center cursor-pointer px-[8px]'>Generate Report</button>
      </div>
      <div className='grid grid-cols-4 gap-[30px] mt[25px] pb-[15px]'>

      {/* First Card Component */}

      <div className=' h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#4E73DF] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
        <div>
          <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>Attendance</h2>
          <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>Display Attendance</h1>
        </div>
        <Link to="addstudent">
          <button>
            <FaRegCalendarMinus fontSize={28} color="" />
          </button>
        </Link>
        
      </div>

        {/* Second Card Component */}

        <div className=' h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#56cd70] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
          <div>
            <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>Marks</h2>
            <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>Display Marks</h1>
          </div>
            <FaRegCalendarMinus fontSize={28} color="" />
        </div>

          {/* Third Card Component */}

        <Link to="assisgnment">  
        <div className=' h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#e4eb5b] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
          <div>
            <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>Assisgnment</h2>
            <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>Upload Assisgnment</h1>
          </div>
            <FaRegCalendarMinus fontSize={28} color="" />
        </div>
        </Link>

        {/* Fourth Card Component */}

        <Link to="calendar">
        <div className=' h-[100px] rounded-[8px] bg-white border-l-[4px] border-[#f26d53] flex items-center justify-between px-[30px] cursor-pointer hover:shadow-lg transform hover:scale-[103%] transition duration-300 ease-out'>
          <div>
            <h2 className='text-[#B589DF] text-[11px] leading-[17px] font-bold'>Others</h2>
            <h1 className='text-[20px] leading-[24px] font-bold text-[#5a5c69] mt-[5px]'>Calendar</h1>
          </div>
            <FaRegCalendarMinus fontSize={28} color="" />
        </div>
        </Link>

      </div>

      {/* Graph section */}
      <div className='flex mt-[22px] w-full gap-[30px]'>
        <div className='basis-[70%] border bg-white shadow-md cursor-pointer rounded-[4px]'>

          <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED] mb-[20px]'>
            <h2>Attendace Overview</h2>
            <FaEllipsisV color="grey" className='cursor-pointer'/>
          </div>

          <div>
          {/* <Graph/> */}
            <Student_Graph/>
          </div>

        </div>

        {/* Pie Chart Section */}

        <div className='basis-[30%] border bg-white shadow-md cursor-pointer rpunded-[40px]'>
          <div className='bg[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
            <h2>Performance</h2>
            <FaEllipsisV color="gray" className='cursor-pointer'/>
          </div>
          <div className='pl-[35px]'>
            <Student_PieComp/>
          </div>
        </div>

      </div>

      <div className='flex mt-[22px] w-full gap-[30px]'>
      
        <div className='basis-[55%] border bg-white shadow-md cursor-pointer rounded-[4px]'>
          <div className='bg-[#F8F9FC] flex items-center justify-between py-[15px] px-[20px] border-b-[1px] border-[#EDEDED]'>
            <h2>Projects Overview</h2>
            <FaEllipsisV color="gray" className='cursor-pointer' />
          </div>
          <div className='px-[25px] space-y-[15px] py-[15px]'>
              <div>
                  <h2>Server Migration</h2>
                  <Progress percent={30} strokeColor="#E74A3B" />
              </div>
              <div>
                  <h2>Sales Tracking</h2>
                  <Progress percent={50} status="active" strokeColor="#F6C23E" />
              </div>
              <div>
                  <h2>Customer Database</h2>
                  <Progress percent={70} status="active" strokeColor="#4E73DF" />
              </div>
              <div>
                  <h2>Payout Details</h2>
                  <Progress percent={100} strokeColor="#36B9CC" />
              </div>
              <div>
                  <h2>Account Setup</h2>
                  <Progress percent={50} status="exception" strokeColor="#1CC88A" />
              </div>
          </div>
        </div>

        <div className='basis-[45%] border'></div>

      </div>

    </div>
  )
}

export default Student_Main;