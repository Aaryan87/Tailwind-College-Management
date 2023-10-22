import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './Router/Router.jsx'
import Index from './Student/Index'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router/>
    {/* <Index/> */}
  </React.StrictMode>,
)
