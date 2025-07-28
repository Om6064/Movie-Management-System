import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="bg-black text-gray-400 pt-12">
            <div className="container mx-auto px-6 md:px-12">

                <div className="flex flex-col md:flex-row justify-between border-b border-gray-700 pb-10">

                    <div className="mb-10 md:mb-0 md:w-1/3">
                        <div className="my-10">
                            <Link to={"/"}><img src="/logo-white.png" alt="Logo" className="h-10" /></Link>
                        </div>
                        <p className="text-white font-semibold mb-3">
                            Buy movie tickets easily with <br />
                            Aovis system nationwide
                        </p>
                        <button className="bg-orange-600 text-white font-semibold px-5 py-2 mt-2 rounded">
                            Get Your Ticket
                        </button>
                    </div>


                    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm md:w-2/3">

                        <div>
                            <h4 className="text-white font-semibold mb-4 border-b-2 border-orange-600 w-fit pb-1">
                                Movies
                            </h4>
                            <ul className="space-y-2">
                                <li>Action</li>
                                <li>Adventure</li>
                                <li>Animation</li>
                                <li>Comedy</li>
                                <li>Crime</li>
                            </ul>
                        </div>


                        <div>
                            <h4 className="text-white font-semibold mb-4 border-b-2 border-orange-600 w-fit pb-1">
                                Links
                            </h4>
                            <ul className="space-y-2">
                                <li>About</li>
                                <li>My account</li>
                                <li>News</li>
                                <li>Latest Events</li>
                                <li className="text-orange-500">Contact</li>
                            </ul>
                        </div>


                        <div>
                            <h4 className="text-white font-semibold mb-4 border-b-2 border-orange-600 w-fit pb-1">
                                Newsletter
                            </h4>
                            <p className="mb-3">Subscribe to Leitmotif newsletter this very day.</p>
                            <div className="relative">
                                <input
                                    type="email"
                                    placeholder="Email Address"
                                    className="w-full p-3 pr-10 rounded-sm"
                                />
                                <span className="absolute right-3 top-3 text-black rotate-45">➤</span>
                            </div>
                            <div className="mt-3 flex items-center space-x-2">
                                <input type="checkbox" className="accent-orange-600" />
                                <label className="text-sm">I agree to all terms and policies of the company</label>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="flex flex-col md:flex-row justify-between items-center py-6 border-t border-gray-700 mt-10">
                    <p className="text-sm text-gray-500">© Copyright 2023 by Ovatheme.com</p>
                    <div className="flex space-x-4 mt-4 md:mt-0">
                        <a href="#" className="bg-gray-800 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-orange-600">
                            <i className="ri-twitter-x-fill"></i>
                        </a>
                        <a href="#" className="bg-gray-800 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-orange-600">
                            <i className="ri-facebook-circle-fill"></i>
                        </a>
                        <a href="#" className="bg-gray-800 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-orange-600">
                            <i className="ri-pinterest-fill"></i>
                        </a>
                        <a href="#" className="bg-gray-800 text-white w-10 h-10 flex items-center justify-center rounded-full hover:bg-orange-600">
                            <i className="ri-instagram-fill"></i>
                        </a>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
