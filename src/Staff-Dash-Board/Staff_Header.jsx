import { FaEnvelope, FaRegBell, FaSearch } from "react-icons/fa"
import profile from '../assets/profile.jpg'


const Staff_Header = () => {
  return (
    <div className='sticky top-0 z-10 bg-gray-900/95 backdrop-blur-sm shadow-md'>
            <div className='flex items-center justify-between h-[70px] shadow-lg px-[25px]'>
                <div className='flex items-center rounded-[5px]'>
                    <input type="text" className=' bg-gray-600 h-[40px] outline-none pl-[13px] w-[350px] rounded-tl-[5px] placeholder:text-[14px] leading-[20px] font-normal' placeholder='Search for...' />
                    <div className='bg-[#4E73DF] h-[40px] px-[14px] flex items-center justify-center cursor-pointer rounded-tr-[5px] rounded-br-[5px]'>
                        <FaSearch color='white' />
                    </div>

                </div>
                <div className='flex items-center gap-[20px] text-white'>
                    <div className='flex items-center gap-[25px] border-r-[1px] pr-[25px]'>
                        <FaRegBell />
                        <FaEnvelope />
                    </div>
                    <div className='flex items-center gap-[15px] relative'  >{/* onClick={showProfile} */}
                        <p>Harshit And Saksham</p>
                        <div className='h-[50px] w-[50px] rounded-full bg-[#4E73DF] cursor-pointer flex items-center justify-center relative z-40' >
                             <img src={profile} alt="" className='rounded-full' />

                        </div>

                    </div>
                </div>
            </div>
        </div>
  )
}

export default Staff_Header;
