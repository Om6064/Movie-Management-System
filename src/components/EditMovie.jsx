import axios from "axios";
import { useEffect, useState } from "react";
import BlurText from "./BlurText";
import Footer from "./Footer";
import { useNavigate, useParams } from "react-router-dom";
import MyEditor from "./MyEditor";
import { toast } from "react-toastify";

const EditMovie = () => {
  const [input, setInput] = useState({
    title: "",
    img_url: "",
    genre: "",
    description: "",
  });

  const [error, setError] = useState({});
  const { id } = useParams()
  console.log(id);

  const navigate = useNavigate();

  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/movies/${id}`);
      setInput(res.data);
    } catch (error) {
      console.error("Failed to fetch movie data:", error);
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
      try {
        await axios.put(`http://localhost:5000/movies/${id}`, input);
        navigate("/dashboard");
        toast.success("Movie Updated Successfully")
      } catch (error) {
        console.error("Failed to update movie:", error);
      }
    }
  };

  return (
    <div className="bg-white text-gray-800">

      <div className="bg-[url('/background-header-2.jpg')] relative bg-cover bg-center min-h-[500px] py-20 text-center text-white flex flex-col justify-center items-center">
        <p className="mb-2">Home <i className="ri-arrow-drop-right-line"></i> Dahboard <i className="ri-arrow-drop-right-line"></i> Edit Movie</p>
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


      <section className="container mx-auto px-6 py-20 text-center">
        <div className="space-y-8">
          <div>
            <p className="text-2xl text-orange-500"><i className="ri-movie-2-line"></i></p>
            <p className="text-gray-600 font-semibold">Update Movie</p>
          </div>
          <div className="space-y-4">
            <h2 className="font-bold text-5xl">Admin Can Update Movie From <br /> Here</h2>
          </div>
        </div>

        <div className="my-24 grid grid-cols-1 md:grid-cols-6 gap-8">
          <div className="md:col-span-4">
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
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

              <div className="flex flex-col">
                <select
                  id="genre"
                  value={input.genre}
                  onChange={handleChange}
                  className="p-4 rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-purple-400"
                >
                  <option value="">Select Genre</option>
                  <option value="Action">Action</option>
                  <option value="Comedy">Comedy</option>
                  <option value="Drama">Drama</option>
                  <option value="Thriller">Thriller</option>
                  <option value="Horror">Horror</option>
                  <option value="Sci-Fi">Sci-Fi</option>
                  <option value="Romance">Romance</option>
                  <option value="Animation">Animation</option>
                  <option value="Documentary">Documentary</option>
                </select>
                <p className="text-sm h-5 text-red-500">{error.genre}</p>
              </div>

              <div className="flex flex-col text-left">
                <MyEditor
                  value={input.description}
                  onChange={(markdown) =>
                    setInput((prev) => ({ ...prev, description: markdown }))
                  }
                />
                <p className="text-sm h-5 text-red-500">{error.description}</p>
              </div>

              <button
                type="submit"
                className="bg-orange-500 text-white font-semibold px-6 py-3 rounded-lg hover:bg-orange-600 transition self-start md:self-center"
              >
                <i class="ri-edit-2-fill"></i> Update Movie
              </button>
            </form>
          </div>
          <div className="md:col-span-2 flex justify-center items-start">
            {input.img_url ? (
              <img
                src={input.img_url}
                alt="Preview"
                className="w-full h-auto max-h-[400px] rounded-lg object-cover shadow-md"
              />
            ) : (
              <div className="w-full h-[300px] flex items-center justify-center border-2 border-dashed border-gray-300 rounded-lg text-gray-400">
                Image preview
              </div>
            )}
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
};

export default EditMovie;
