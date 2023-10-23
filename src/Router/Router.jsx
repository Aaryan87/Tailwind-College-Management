import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from '../App'
import Main from "../Dash-Board/Main"
import Index from "../Student/Index"
import FileUpload from "../File-Upload/FileUpload"
import Login from "../Starting-Pages/Login"
import Register from "../Starting-Pages/Register"
import ContactUs from "../Last-Pages/ContactUs"
import Student_App from "../Student-Dash-Board/Student_App"
import Student_Main from "../Student-Dash-Board/Student_Main"
import Calendar from "../calendar/cn_output"

const Router = () => {
  return (
    <div>
        <BrowserRouter>
                <Routes>
                    <Route path="/register" element={<Register/>} />
                    <Route path="/login" element={<Login/>} />

                    {/* Admin dashboard Routing done here */}
                    <Route path="/" element={<App />}>
                        <Route index element={<Main />} />
                        <Route path="addstudent" element={<Index/>} />
                        <Route path="assisgnment" element={<FileUpload/>} />
                        <Route path="contactus" element={<ContactUs/>} />
                    </Route>

                    {/* Student dashboard Routing done here */}
                    <Route path="/student-dashboard" element={<Student_App/>} >
                        <Route index element={<Student_Main/>}/>
                        <Route path="assisgnment" element={<FileUpload/>}/>
                        <Route path="contactus" element={<ContactUs/>}/>
                        <Route path="calendar" element={<Calendar/>}/>
                    </Route>

                </Routes>
            </BrowserRouter>
    </div>
  )
}

export default Router