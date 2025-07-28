import { useState } from 'react'
import BlurText from './BlurText'
import Footer from './Footer'
import { toast } from 'react-toastify';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();

        const res = await axios.get("http://localhost:5000/users");
        const users = res.data;

        const matchedUser = users.find(
            (u) => u.email === input.email && u.password === input.password
        );

        if (matchedUser) {
            await axios.put("http://localhost:5000/islogin/1", { status: true });
            toast.success('Login Successful!');
            setInput({ email: '', password: '' });
            navigate("/dashboard")
        } else {
            toast.error("Invalid Credentials");
        }
    };




    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value });
    };
    console.log(input);


    return (
        <div className="bg-white text-gray-800">

            <div className="bg-[url('/background-header-2.jpg')] relative bg-cover bg-center min-h-[500px] py-20 text-center text-white flex flex-col justify-center items-center">
                <p>Home <i className="ri-arrow-drop-right-line"></i> Login</p>
                <BlurText
                    text="Login"
                    delay={200}
                    animateBy="words"
                    direction="center"
                    className="text-4xl md:text-5xl font-bold z-20"
                />
                <p className="mt-4 text-lg text-purple-200">Authenticate Here</p>
                <div className="absolute inset-0 bg-black/50 z-10"></div>
            </div>


            <section className="container mx-auto px-6 py-20 text-center">
                <div className="space-y-8">
                    <div>
                        <p className="text-2xl text-orange-500"><i className="ri-movie-2-line"></i></p>
                        <p className="text-gray-600 font-semibold">Authenticate Here</p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="font-bold text-5xl">Login To Access All The <br /> Things</h2>
                    </div>
                </div>

                <div className="my-24 flex justify-center">
                    <form
                        className="w-full md:w-6/12 grid grid-cols-1 gap-6"
                        onSubmit={handleSubmit}
                    >
                        <input
                            id="email"
                            type="email"
                            placeholder="Your Email"
                            className="p-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            onChange={handleChange}
                            value={input.email}
                        />
                        <input
                            id="password"
                            type="password"
                            placeholder="Password"
                            className="p-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
                            onChange={handleChange}
                            value={input.password}
                        />
                        <button
                            type="submit"
                            className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition"
                        >
                            Submit
                        </button>
                    </form>
                </div>

            </section>
            <Footer />
        </div>
    );
};

export default Login;
