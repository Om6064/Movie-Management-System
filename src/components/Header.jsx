import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
    const [isLogin, setIsLogin] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { pathname } = useLocation();
    const navigate = useNavigate();

    const loginStatus = async () => {
        try {
            const res = await axios.get("http://localhost:5000/islogin");
            setIsLogin(res.data[0].status);
        } catch (err) {
            console.error("Error fetching login status:", err);
        }
    };

    const handleLogout = async () => {
        try {
            await axios.put("http://localhost:5000/islogin/1", { status: false });
            setIsLogin(false);
            navigate("/login");
        } catch (err) {
            console.error("Error during logout:", err);
        }
    };

    useEffect(() => {
        loginStatus();
    }, []);

    const linkClass = (path) =>
        `${pathname === path ? "text-orange-500" : "text-white"} hover:text-orange-500`;

    return (
        <div className="absolute w-full z-50 py-4 bg-black/70">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <Link to={"/"}>
                        <img src="/logo-white.png" alt="Logo" className="h-10" />
                    </Link>

                    {/* Mobile Menu Icon */}
                    <div className="md:hidden text-white text-2xl">
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
                            <i className={`ri-${isMenuOpen ? "close-line" : "menu-line"}`}></i>
                        </button>
                    </div>

                    {/* Desktop Nav */}
                    <ul className="hidden md:flex gap-8 text-white items-center font-medium">
                        <Link to="/" className={linkClass("/")}>Home</Link>
                        <Link to="/contect" className={linkClass("/contect")}>Contect</Link>
                        {isLogin && (
                            <Link
                                to="/dashboard"
                                className={
                                    pathname === "/dashboard" ||
                                        pathname === "/Form" ||
                                        pathname.includes("/editmovie")
                                        ? "text-orange-500"
                                        : "text-white"
                                }
                            >
                                Dashboard
                            </Link>
                        )}
                        {isLogin ? (
                            <button
                                onClick={handleLogout}
                                className="bg-orange-500 hover:bg-orange-600 px-4 rounded py-2"
                            >
                                Logout
                            </button>
                        ) : (
                            <Link
                                to="/login"
                                className="bg-orange-500 hover:bg-orange-600 px-4 rounded py-2"
                            >
                                Login
                            </Link>
                        )}
                    </ul>
                </div>


                {isMenuOpen && (
                    <ul className="md:hidden mt-4 space-y-4 text-white font-medium text-center">
                        <div>
                            <Link onClick={() => setIsMenuOpen(false)} to="/" className={linkClass("/")}>
                                Home
                            </Link>
                        </div>
                        <div>
                            <Link onClick={() => setIsMenuOpen(false)} to="/contect" className={linkClass("/contect")}>
                                Contect
                            </Link>
                        </div>
                        <div>
                            {isLogin && (
                                <Link
                                    onClick={() => setIsMenuOpen(false)}
                                    to="/dashboard"
                                    className={
                                        pathname === "/dashboard" ||
                                            pathname === "/Form" ||
                                            pathname.includes("/editmovie")
                                            ? "text-orange-500"
                                            : "text-white"
                                    }
                                >
                                    Dashboard
                                </Link>
                            )}
                        </div>
                        {isLogin ? (
                            <button
                                onClick={() => {
                                    handleLogout();
                                    setIsMenuOpen(false);
                                }}
                                className="bg-orange-500 hover:bg-orange-600 px-4 rounded py-2 w-full"
                            >
                                Logout
                            </button>
                        ) : (
                            <Link
                                onClick={() => setIsMenuOpen(false)}
                                to="/login"
                                className="bg-orange-500 hover:bg-orange-600 px-4 rounded py-2 inline-block"
                            >
                                Login
                            </Link>
                        )}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Header;
