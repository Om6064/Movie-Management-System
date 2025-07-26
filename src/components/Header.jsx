import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="absolute w-full z-50 py-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div>
                        <Link to={"/"}><img src="/logo-white.png" alt="Logo" className="h-10" /></Link>
                    </div>
                    <ul className="flex gap-8 text-white items-center font-medium">
                        <Link to={"/"} className="hover:text-purple-400 cursor-pointer">Home</Link>
                        <li className="hover:text-purple-400 cursor-pointer">Service</li>
                        <Link to={"/contect"} className="hover:text-purple-400 cursor-pointer">Contact</Link>
                        <Link to={"/login"} className="bg-orange-500 hover:bg-orange-600 px-4 rounded py-2">Login</Link>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
