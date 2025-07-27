import axios from "axios";
import { useEffect, useState } from "react";
import BlurText from "./BlurText";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import MyEditor from "./MyEditor"; // import your Toast UI Editor wrapper

const EditMovie = () => {
  const [input, setInput] = useState({
    title: "",
    img_url: "",
    genre: "",
    description: "",
  });

  const [error, setError] = useState({});
  const navigate = useNavigate();
  const url = "http://localhost:5000/movies";

  const fetchData = async () => {
    try {
      const res = await axios.get(url);
      console.log(res);
    } catch (err) {
      console.error("Error fetching data:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleChange = (e) => {
    setInput({ ...input, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const tempErrors = {};
    if (!input.title.trim()) tempErrors.title = "Title is required";
    if (!input.img_url.trim()) tempErrors.img_url = "Image URL is required";
    if (!input.genre.trim()) tempErrors.genre = "Genre is required";
    if (!input.description.trim()) tempErrors.description = "Description is required";

    setError(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
        await axios.post(url, input);
        setInput({ title: "", img_url: "", genre: "", description: "" });
        fetchData();
        navigate("/dashboard");
    }
  };

  return (
    <div className="bg-white text-gray-800">
      {/* Header */}
      <div className="bg-[url('/background-header-2.jpg')] relative bg-cover bg-center min-h-[500px] py-20 text-center text-white flex flex-col justify-center items-center">
        <p>Home <i className="ri-arrow-drop-right-line"></i> Edit Movie</p>
        <BlurText
          text="Edit Movie"
          delay={200}
          animateBy="words"
          direction="center"
          className="text-4xl md:text-5xl font-bold z-20"
        />
        <p className="mt-4 text-lg text-purple-200">Admin Can Edit Movie From Here</p>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* Form Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="space-y-8">
          <div>
            <p className="text-2xl text-orange-500"><i className="ri-movie-2-line"></i></p>
            <p className="text-gray-600 font-semibold">Edit Movie</p>
          </div>
          <div className="space-y-4">
            <h2 className="font-bold text-5xl">Admin Can Edit Movie From <br /> Here</h2>
          </div>
        </div>

        <div className="my-24">
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">

            {/* Title and Image URL */}
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
                <p className="text-sm h-5 text-red-500">{error.title}</p>
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
                <p className="text-sm h-5 text-red-500">{error.img_url}</p>
              </div>
            </div>

            {/* Genre */}
            <div className="flex flex-col">
              <input
                type="text"
                id="genre"
                placeholder="e.g., Comedy, Action"
                className="p-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
                onChange={handleChange}
                value={input.genre}
              />
              <p className="text-sm h-5 text-red-500">{error.genre}</p>
            </div>

            {/* Description using Toast UI Editor */}
            <div className="flex flex-col text-left">
              <label className="mb-2 font-semibold">Description</label>
              <MyEditor
                value={input.description}
                onChange={(markdown) =>
                  setInput((prev) => ({ ...prev, description: markdown }))
                }
              />
              <p className="text-sm h-5 text-red-500">{error.description}</p>
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

export default EditMovie;
