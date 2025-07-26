import axios from "axios";
import { useEffect, useState } from "react";
import BlurText from "./BlurText";
import Footer from "./Footer";

const Form = () => {
    const [input, setInput] = useState({
        title: "",
        img_url: "",
        genre: "",
        description: "",
    });

    // const [movies, setMovies] = useState([]);
    const [error, setError] = useState({});
    let url = "http://localhost:5000/movies"
    const fetchData = async () => {
        let res = await axios.get(url)
        console.log(res);
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleChange = (e) => {
        setInput({ ...input, [e.target.id]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const tempErrors = {};
        if (input.title.trim() === "") tempErrors.title = "Title is required";
        if (input.img_url.trim() === "") tempErrors.img_url = "Image URL is required";
        if (input.genre.trim() === "") tempErrors.genre = "Genre is required";
        if (input.description.trim() === "") tempErrors.description = "Description is required";

        setError(tempErrors);

        if (Object.keys(tempErrors).length === 0) {
            // const newMovie = { ...input, id: Date.now() };
            // setMovies([...movies, newMovie]);
            setInput({ title: "", img_url: "", genre: "", description: "" });
            handleAdd()
        }
    };

    const handleAdd = async () => {
        await axios.post(`${url}`, input)
        fetchData()
    }

    return (
        <div className="bg-white text-gray-800">
            {/* Hero Section */}
            <div className="bg-[url('/background-header-2.jpg')] relative bg-cover bg-center min-h-[500px] py-20 text-center text-white flex flex-col justify-center items-center">
                <p>Home <i class="ri-arrow-drop-right-line"></i> Add Movie</p>
                <BlurText
                    text="Add Movie"
                    delay={200}
                    animateBy="words"
                    direction="center"
                    className="text-4xl md:text-5xl font-bold z-20"
                />
                <p className="mt-4 text-lg text-purple-200">Admin Can Add Movie From Here</p>
                <div className="absolute inset-0 bg-black/50 z-10"></div>
            </div>

            {/* Contact Section */}
            <section className="container mx-auto px-6 py-20 text-center">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div>
                        <p className="text-2xl text-orange-500"><i class="ri-movie-2-line"></i></p>
                        <p className="text-gray-600 font-semibold ">Add Movie</p>
                    </div>
                    <div className="space-y-4">
                        <h2 className="font-bold text-5xl">Admin Can Add Movie From <br /> Here</h2>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="my-24">
                    {/* <div className="">
                        <div className="container mx-auto px-4">
                            <form onSubmit={handleSubmit} className="space-y-4">

                                <div>
                                    <label htmlFor="title" className="block mb-1 text-sm font-medium text-gray-900">
                                        Title
                                    </label>
                                    <input
                                        type="text"
                                        id="title"
                                        placeholder="Movie Title"
                                        value={input.title}
                                        onChange={handleChange} value={input}
                                        className="w-full p-2.5 border rounded-lg text-sm"
                                    />
                                    {error.title && <p className="text-red-500 text-sm">{error.title}</p>}
                                </div>


                                <div>
                                    <label htmlFor="img_url" className="block mb-1 text-sm font-medium text-gray-900">
                                        Image URL
                                    </label>
                                    <input
                                        type="url"
                                        id="img_url"
                                        placeholder="https://example.com/image.jpg"
                                        value={input.img_url}
                                        onChange={handleChange} value={input}
                                        className="w-full p-2.5 border rounded-lg text-sm"
                                    />
                                    {error.img_url && <p className="text-red-500 text-sm">{error.img_url}</p>}
                                </div>


                                <div>
                                    <label htmlFor="genre" className="block mb-1 text-sm font-medium text-gray-900">
                                        Genre
                                    </label>
                                    <input
                                        type="text"
                                        id="genre"
                                        placeholder="e.g., Comedy, Action"
                                        value={input.genre}
                                        onChange={handleChange} value={input}
                                        className="w-full p-2.5 border rounded-lg text-sm"
                                    />
                                    {error.genre && <p className="text-red-500 text-sm">{error.genre}</p>}
                                </div>


                                <div>
                                    <label htmlFor="description" className="block mb-1 text-sm font-medium text-gray-900">
                                        Description
                                    </label>
                                    <textarea
                                        id="description"
                                        rows={4}
                                        placeholder="Description about the movie"
                                        value={input.description}
                                        onChange={handleChange} value={input}
                                        className="w-full p-2.5 border rounded-lg text-sm"
                                    ></textarea>
                                    {error.description && <p className="text-red-500 text-sm">{error.description}</p>}
                                </div>


                                <button
                                    type="submit"
                                    className="text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-lg text-sm"
                                >
                                    Submit
                                </button>
                            </form>

                        </div>
                    </div> */}
                    <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                        {/* Title Field */}
                        <div className="flex flex-col md:flex-row gap-4">
                            <div className="flex-1 flex flex-col">
                                <input
                                    type="text"
                                    id="title"
                                    placeholder="Title"
                                    className="p-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                    onChange={handleChange}
                                    value={input.title}
                                />
                                <p className="text-sm h-5 text-red-500">
                                    {error.title && error.title}
                                </p>
                            </div>

                            <div className="flex-1 flex flex-col">
                                <input
                                    type="url"
                                    id="img_url"
                                    placeholder="Image URL"
                                    className="p-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                    onChange={handleChange}
                                    value={input.img_url}
                                />
                                <p className="text-sm h-5 text-red-500">
                                    {error.img_url && error.img_url}
                                </p>
                            </div>
                        </div>

                        {/* Genre Field */}
                        <div className="flex flex-col">
                            <input
                                type="text"
                                id="genre"
                                placeholder="EX. Comedy, Action"
                                className="p-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                onChange={handleChange}
                                value={input.genre}
                            />
                            <p className="text-sm h-5 text-red-500">
                                {error.genre && error.genre}
                            </p>
                        </div>

                        {/* Description Field */}
                        <div className="flex flex-col">
                            <textarea
                                id="description"
                                placeholder="Message"
                                rows="6"
                                className="p-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                onChange={handleChange}
                                value={input.description}
                            />
                            <p className="text-sm h-5 text-red-500">
                                {error.description && error.description}
                            </p>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition self-start md:self-center"
                        >
                            + Add Movie
                        </button>
                    </form>

                </div>
            </section>

           
            <Footer />
        </div>
    );
};

export default Form;
