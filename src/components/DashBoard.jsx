import React from 'react'
import BlurText from './BlurText'
import Footer from './Footer'
import { Link } from 'react-router-dom'

const DashBoard = () => {
    return (
        <div className="bg-white text-gray-800">
            {/* Hero Section */}
            <div className="bg-[url('/background-header-2.jpg')] relative bg-cover bg-center min-h-[500px] py-20 text-center text-white flex flex-col justify-center items-center">
                <p>Home <i class="ri-arrow-drop-right-line"></i> Dashboard</p>
                <BlurText
                    text="Dashboard"
                    delay={200}
                    animateBy="words"
                    direction="center"
                    className="text-4xl md:text-5xl font-bold z-20"
                />
                <p className="mt-4 text-lg text-purple-200">You Can Manage All Movies From Here</p>
                <div className="absolute inset-0 bg-black/50 z-10"></div>
            </div>

            {/* Contact Section */}
            <section className="container mx-auto px-6 py-20 text-center">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div>
                        <p className="text-2xl text-orange-500"><i class="ri-movie-2-line"></i></p>
                        <p className="text-gray-600 font-semibold ">Movies</p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="font-bold text-5xl">You Can Manage All Movies<br /> From Here</h2>
                    </div>
                </div>

                <div>
                    <div className='my-20 text-right'>
                        <Link to={"/Form"} className="bg-orange-500 hover:bg-orange-600 px-4 rounded py-2"> + Add Movies</Link>
                    </div>

                    <div class="relative overflow-x-auto shadow-md sm:rounded-lg my-20">
                        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
                                <tr>
                                    <th scope="col" className="px-6 py-3">
                                        Product name
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Color
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Category
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Price
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        <span className="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-black border-b border-gray-200 hover:bg-orange-500 text-white">
                                    <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                        Apple MacBook Pro 17"
                                    </th>
                                    <td className="px-6 py-4">
                                        Silver
                                    </td>
                                    <td className="px-6 py-4">
                                        Laptop
                                    </td>
                                    <td className="px-6 py-4">
                                        $2999
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Edit</a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>

                </div>
            </section>
            <Footer />
        </div>
    )
}

export default DashBoard