<<<<<<< HEAD
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
=======
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "../App";
import Main from "../Dash-Board/Main";
import Index from "../Student/Index";
import FileUpload from "../File-Upload/FileUpload";
import Login from "../Starting-Pages/Login";
import Register from "../Starting-Pages/Register";
import ContactUs from "../Last-Pages/ContactUs";
import Student_App from "../Student-Dash-Board/Student_App";
import Student_Main from "../Student-Dash-Board/Student_Main";
import Calendar from "../calendar/cn_output";
import Student_Filter_Index from "../Student/Student_Filter_Index";
import Index1 from "../Staff/Index1";
import Staff_Filter_Index from "../Staff/Staff_Filter_Index";
import Gate_Pass from "../Student/GatePass";
>>>>>>> 378f1f624633a666edb9d1fb986b47bd1047bc6b

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Admin dashboard Routing done here */}
          <Route path="/" element={<App />}>
            <Route index element={<Main />} />

            <Route path="addstudent" element={<Index />} />
            <Route path="/filter-student" element={<Student_Filter_Index />} />

            <Route path="addstaff" element={<Index1 />} />
            <Route path="/filter-staff" element={<Staff_Filter_Index />} />
            <Route path="/gatepass" element={<Gate_Pass />} />

            <Route path="assisgnment" element={<FileUpload />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="calendar" element={<Calendar />} />
          </Route>

<<<<<<< HEAD
                    {/* Student dashboard Routing done here */}
                    <Route path="/student-dashboard" element={<Student_App/>} >
                        <Route index element={<Student_Main/>}/>
                        <Route path="student-attendance" element={<Student_Attendance/>} />
                        <Route path="assisgnment" element={<FileUpload/>}/>
                        <Route path="contactus" element={<ContactUs/>}/>
                        <Route path="calendar" element={<Calendar/>}/>
                    </Route>

                </Routes>
            </BrowserRouter>
=======
          {/* Student dashboard Routing done here */}
          <Route path="/student-dashboard" element={<Student_App />}>
            <Route index element={<Student_Main />} />
            <Route path="assisgnment" element={<FileUpload />} />
            <Route path="contactus" element={<ContactUs />} />
            <Route path="calendar" element={<Calendar />} />
          </Route>
        </Routes>
      </BrowserRouter>
>>>>>>> 378f1f624633a666edb9d1fb986b47bd1047bc6b
    </div>
  );
};

export default Router;
