import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './Router/Router.jsx'
import Register from './Register/Register'
import Login from './Login/Login'
import Calendar from './calendar/cn_output'
import ContactUs from './contact-us/ContactUs'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router/>
    {/* <ContactUs/> */}
     {/* <Register/> */}
     {/* <Login/> */}
     {/* <Calendar/> */}
  </React.StrictMode>,
)
