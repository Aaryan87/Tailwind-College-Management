import { Outlet } from 'react-router-dom'
import Staff_Header from './Staff_Header'
import Staff_SideBar from './Staff_SideBar'

const Staff_App = () => {
  return (
    <div className='flex'>
      <div className='basis-[12%] h-[100vh] border'>
        <Staff_SideBar/>
      </div>
      <div className='basis-[88%] border overflow-scroll h-[100vh]'>
        <Staff_Header />
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}

export default Staff_App