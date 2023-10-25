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
import Student_Filter_Index from "../Student/Student_Filter_Index"
import Index1 from "../Staff/Index1"
import Staff_Filter_Index from "../Staff/Staff_Filter_Index"
import Student_Attendance from "../Student-Details/Student_Attendance"
import Gate_Pass from "../Student-Details/GatePass"
import Staff_App from "../Staff-Dash-Board/Staff_App"
import Staff_Main from "../Staff-Dash-Board/Staff_Main"
import DisplayGatePassData from "../Student-Details/Staff_GatePass"
import Home_App from "../Home-Page/Home_App"
import Student_Marks from "../Student-Details/Student_Marks"
import Marks_Display from "../Student-Details/Marks_Display"
import Display_Marks_Student from "../Staff-Details/Display_Marks_Student"

const Router = () => {
  return (
    <div>
        <BrowserRouter>
                <Routes>
                    
                    <Route path="/home" element={<Home_App />} index />

                    <Route path="/register" element={<Register/>} />
                    <Route path="/login" element={<Login/>} />

                    {/* Admin dashboard Routing done here */}
                    <Route path="/" element={<App />}>
                        <Route index element={<Main />} />

                        <Route path="addstudent" element={<Index/>} />
                        <Route path="/filter-student" element={<Student_Filter_Index/>}/>

                        <Route path="addstaff" element={<Index1/>}/>
                        <Route path="/filter-staff" element={<Staff_Filter_Index/>}/>

                        <Route path="assisgnment" element={<FileUpload/>} />
                        <Route path="contactus" element={<ContactUs/>} />
                        <Route path="calendar" element={<Calendar/>}/>
                    </Route>

                    {/* Student dashboard Routing done here */}
                    <Route path="/student-dashboard" element={<Student_App/>} >
                        <Route index element={<Student_Main/>}/>
                        <Route path="student-attendance" element={<Student_Attendance/>}/>
                        <Route path="display-marks" element={<Marks_Display/>}/>
                        
                        <Route path="assisgnment" element={<FileUpload/>}/>
                        <Route path="contactus" element={<ContactUs/>}/>
                        <Route path="calendar" element={<Calendar/>}/>
                        
                        {/* Student can apply for gate pass */}
                        <Route path="gate-pass" element={<Gate_Pass/>}/>
                    </Route>

                    {/* Staff DashBoard is here */}
                    <Route path="/staff-dashboard" element={<Staff_App/>} >
                        <Route index element={<Staff_Main/>}/>
                        <Route path="addstudent" element={<Index/>} />

                        {/* This Will show the table of marks and staff can remove if he/she thinks its wrong */}
                        <Route path="/staff-dashboard/remove-marks-staff" element={<Display_Marks_Student/>}/>
                        
                        <Route path="assisgnment" element={<FileUpload/>}/>
                        <Route path="contactus" element={<ContactUs/>}/>
                        <Route path="calendar" element={<Calendar/>}/>

                        <Route path="student-marks" element={<Student_Marks/>}/>

                        {/* Staff can see the gate pass data */}
                        <Route path="staff-gate-pass" element={<DisplayGatePassData/>}/>
                    </Route>

                </Routes>
            </BrowserRouter>
    </div>
  )
}

export default Router;