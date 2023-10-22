import Header from './components/header/Header'
import Sidebar from './components/sidebar/Sidebar'
import { Outlet } from 'react-router-dom'
/* import NavBar from './NavBar/NavBar' */
/* To upload charts use npm i recharts */

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
