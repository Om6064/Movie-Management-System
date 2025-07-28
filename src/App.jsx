import { BrowserRouter, Route, Routes } from "react-router-dom"
import Form from "./components/Form"
import Home from "./components/Home"
import Header from "./components/Header"
import Contact from "./components/Contact"
import 'remixicon/fonts/remixicon.css'
import Login from "./components/Login"
import { ToastContainer } from "react-toastify"
import DashBoard from "./components/DashBoard"
import EditMovie from "./components/EditMovie"
import MovieDetails from "./components/MovieDetails"
import ProtectedRoutes from "./components/ProtectedRoutes"
import ReverceProtectedRoutes from "./components/ReverceProtectedRoutes"


const App = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/form" element={<ProtectedRoutes Component={Form}/>} />
                <Route path="/contect" element={<Contact />} />
                <Route path="/dashboard" element={<ProtectedRoutes Component={DashBoard}/>} />
                <Route path="/login" element={<ReverceProtectedRoutes Component={Login}/>} />
                <Route path="/editmovie/:id" element={<ProtectedRoutes Component={EditMovie}/>} />
                <Route path="/moviedetail/:id" element={<ProtectedRoutes Component={MovieDetails}/>} />
            </Routes>
            <ToastContainer/>
        </BrowserRouter>
    )
}

export default App