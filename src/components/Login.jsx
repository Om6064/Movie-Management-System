import React from 'react'
import BlurText from './BlurText'

const Login = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Hero Section */}
            <div className="bg-[url('/background-header-2.jpg')] relative bg-cover bg-center min-h-[500px] py-20 text-center text-white flex flex-col justify-center items-center">
                <p>Home <i class="ri-arrow-drop-right-line"></i> Login</p>
                <BlurText
                    text="Login"
                    delay={200}
                    animateBy="words"
                    direction="center"
                    className="text-4xl md:text-5xl font-bold z-20"
                />
                <p className="mt-4 text-lg text-purple-200">Aurthenticate Here</p>
                <div className="absolute inset-0 bg-black/50 z-10"></div>
            </div>

            {/* Contact Section */}
            <section className="container mx-auto px-6 py-20 text-center">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div>
                        <p className="text-2xl text-orange-500"><i class="ri-movie-2-line"></i></p>
                        <p className="text-gray-600 font-semibold ">Contect With Us</p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="font-bold text-5xl">Feel Free to Write us <br />
                            Anytime</h2>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="my-24">
                    <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input type="text" placeholder="Your Name" className="p-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400" />
                        <input type="email" placeholder="Your Email" className="p-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400" />
                        <input type="text" placeholder="Subject" className="p-4 rounded-lg bg-gray-100 md:col-span-2 focus:outline-none focus:ring-2 focus:ring-purple-400" />
                        <textarea placeholder="Message" rows="6" className="p-4 rounded-lg bg-gray-100 md:col-span-2 focus:outline-none focus:ring-2 focus:ring-purple-400"></textarea>
                        <button type="submit" className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition md:col-span-2">
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

        </div>
    )
}

export default Login