import axios from "axios";
import { useEffect, useState } from "react";

const Form = () => {
    const [input, setInput] = useState({
        title: "",
        img_url: "",
        genre: "",
        description: "",
    });

    const [movies, setMovies] = useState([]);
    const [error, setError] = useState({});

    useEffect(() => {
        let url = "http://localhost:5000/movies"

        const fetchData = async () => {
            let res = await axios.get(url)
            console.log(res);
        }

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
            const newMovie = { ...input, id: Date.now() };
            setMovies([...movies, newMovie]);
            setInput({ title: "", img_url: "", genre: "", description: "" });
        }
    };

    return (
        <div className="h-screen flex items-center justify-center">
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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
                            onChange={handleChange}
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


                <div className="mt-6">
                    <h2 className="text-lg font-semibold">Movies List:</h2>
                    <ul>
                        {movies.map((movie) => (
                            <li key={movie.id} className="mt-2">
                                <strong>{movie.title}</strong> - {movie.genre}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Form;
