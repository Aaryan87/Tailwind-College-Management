import { Outlet } from 'react-router-dom'
import Student_SideBar from './Student_SideBar'
import Student_Header from './Student_Header'

function Student_App() {

  return (
    <div className='flex'>
      <div className='basis-[12%] h-[100vh] border'>
        <Student_SideBar/>
      </div>
      <div className='basis-[88%] border overflow-scroll h-[100vh]'>
        <Student_Header/>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}

export default Student_App;
