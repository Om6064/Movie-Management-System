import axios from "axios";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);
    const { pathname } = useLocation()
    const navigate = useNavigate()

    const loginStatus = async () => {
        const res = await axios.get("http://localhost:5000/islogin");
        setIsLogin(res.data[0].status);
    };

    const handleLogout = async () => {
        await axios.put("http://localhost:5000/islogin/1", { status: false });
        setIsLogin(false);
        navigate("/login")
    };


    loginStatus();


    return (
        <div className="absolute w-full z-50 py-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div>
                        <Link to={"/"}>
                            <img src="/logo-white.png" alt="Logo" className="h-10" />
                        </Link>
                    </div>
                    <ul className="flex gap-8 text-white items-center font-medium">
                        <Link
                            to="/"
                            className={`${pathname === "/" ? "text-orange-500" : "text-white"} hover:text-orange-500 cursor-pointer`}
                        >
                            Home
                        </Link>
                        <Link
                            to="/contect"
                            className={`${pathname === "/contect" ? "text-orange-500" : "text-white"} hover:text-orange-500 cursor-pointer`}
                        >
                            Contect
                        </Link>
                        {
                            isLogin && <Link
                                to="/dashboard"
                                className={`${pathname === "/dashboard" || pathname === "/Form" || pathname.includes("/editmovie") ? "text-orange-500" : "text-white"} hover:text-orange-500 cursor-pointer`}
                            >
                                Dashboard
                            </Link>
                        }
                        {
                            isLogin
                                ? <button onClick={handleLogout} className="bg-orange-500 hover:bg-orange-600 px-4 rounded py-2">Logout</button>
                                : <Link to={"/login"} className="bg-orange-500 hover:bg-orange-600 px-4 rounded py-2">Login</Link>
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
