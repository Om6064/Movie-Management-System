import { BrowserRouter, Route, Routes } from "react-router-dom"
import Form from "./components/Form"
import Home from "./components/Home"
import Header from "./components/Header"
import Contact from "./components/Contact"
import 'remixicon/fonts/remixicon.css'
import Login from "./components/Login"


const App = () => {
    return (
        <BrowserRouter>
        <Header/>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/form" element={<Form />} />
                <Route path="/contect" element={<Contact />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App