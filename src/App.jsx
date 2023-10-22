import Header from './Dash-Board/Header'
import Sidebar from './Dash-Board/Sidebar'
import { Outlet } from 'react-router-dom'

function App() {

  return (
    <div className='flex'>
      <div className='basis-[12%] h-[100vh] border'>
        <Sidebar/>
      </div>
      <div className='basis-[88%] border overflow-scroll h-[100vh]'>
        <Header/>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  )
}

export default App
