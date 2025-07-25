const Header = () => {
    return (
        <div className="absolute w-full z-50 py-4">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-center">
                    <div>
                        <img src="/logo-white.png" alt="Logo" className="h-10" />
                    </div>
                    <ul className="flex gap-8 text-white font-medium">
                        <li className="hover:text-purple-400 cursor-pointer">Home</li>
                        <li className="hover:text-purple-400 cursor-pointer">Service</li>
                        <li className="hover:text-purple-400 cursor-pointer">Contact</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
