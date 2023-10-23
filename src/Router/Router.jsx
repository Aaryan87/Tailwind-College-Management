import { BrowserRouter, Routes, Route } from "react-router-dom"
import App from '../App'
import Main from "../Dash-Board/Main"
import Index from "../Student/Index"
import FileUpload from "../File-Upload/FileUpload"
import Login from "../Starting-Pages/Login"
import Register from "../Starting-Pages/Register"
import ContactUs from "../Last-Pages/ContactUs"

const Router = () => {
  return (
    <div>
        <BrowserRouter>
                <Routes>
                    <Route path="/register" element={<Register/>} />
                    <Route path="/login" element={<Login/>} />
                    <Route path="/" element={<App />}>
                        <Route index element={<Main />} />
                        <Route path="addstudent" element={<Index/>} />
                        <Route path="assisgnment" element={<FileUpload/>} />
                        <Route path="contactus" element={<ContactUs/>} />
                    </Route>
                </Routes>
            </BrowserRouter>
    </div>
  )
}

export default Router