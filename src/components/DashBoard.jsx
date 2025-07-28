import React, { useEffect, useState } from 'react'
import BlurText from './BlurText'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import axios from 'axios'

const DashBoard = () => {
    const [movie, setMovie] = useState([])

    let url = "http://localhost:5000/movies"
    const fetchData = async () => {
        let res = await axios.get(url)
        setMovie(res.data)
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/movies/${id}`)
        fetchData()
    }
    return (
        <div className="bg-white text-gray-800">
         
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

          
            <section className="container mx-auto px-6 py-20 text-center">
               
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
                                        Image
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Genere
                                    </th>
                                    <th scope="col" className="px-6 py-3">
                                        Action
                                    </th>


                                </tr>
                            </thead>
                            <tbody>
                                {
                                    movie.map((movie, index) => {
                                        return <tr className={`${index % 2 === 0
                                            ? 'bg-orange-500 text-white'
                                            : 'bg-white text-black'
                                            } border-b border-gray-200 hover:opacity-90`}>
                                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                                {movie.title}
                                            </th>
                                            <td className="px-6 py-4">
                                                <img src={movie.img_url} alt="movie_poster" className='h-16 w-16' />
                                            </td>
                                            <td className="px-6 py-4">
                                                {movie.genre}
                                            </td>
                                            <td className="px-6 py-4 mt-5 flex items-center gap-3">
                                                <div>
                                                    <Link to={`/editmovie/${movie.id}`} className="font-medium text-xl text-white-600 dark:text-white-500 hover:underline"><i className="ri-edit-box-line" />
                                                    </Link>
                                                </div>
                                                <div>
                                                    <button onClick={() => {
                                                        handleDelete(movie.id)
                                                    }} className="font-medium text-xl text-white-600 dark:text-white-500 hover:underline"><i className="ri-delete-bin-6-line" />
                                                    </button>
                                                </div>
                                                <div>
                                                    <Link to={`/moviedetail/${movie.id}`} className="font-medium text-xl text-white-600 dark:text-white-500 hover:underline"><i class="ri-eye-line"></i>
                                                    </Link>
                                                </div>
                                            </td>
                                        </tr>
                                    })
                                }
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