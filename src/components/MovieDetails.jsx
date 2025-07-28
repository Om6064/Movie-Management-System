import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import Footer from './Footer';
import BlurText from './BlurText';

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  const fetchMovie = async () => {
    const res = await axios.get(`http://localhost:5000/movies/${id}`);
    setMovie(res.data);
  };

  useEffect(() => {
    fetchMovie();
  }, [id]);

  return (
    <div className="bg-white text-gray-800">
      {/* Hero Section */}
      <div className="bg-[url('/background-header-2.jpg')] relative bg-cover bg-center min-h-[500px] py-20 text-center text-white flex flex-col justify-center items-center">
        <p className="mb-2">Home <i className="ri-arrow-drop-right-line"></i> Dashboard <i className="ri-arrow-drop-right-line"></i> Movie Detail</p>
        <BlurText
          text="Movie Detail"
          delay={200}
          animateBy="words"
          direction="center"
          className="text-4xl md:text-5xl font-bold z-20"
        />
        <p className="mt-4 text-lg text-purple-200">Admin Can Show All The Details For Movie From Here</p>
        <div className="absolute inset-0 bg-black/50 z-10"></div>
      </div>

      {/* Movie Details Section */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="space-y-8">
          <div>
            <p className="text-2xl text-orange-500"><i className="ri-movie-2-line"></i></p>
            <p className="text-gray-600 font-semibold">Movie Detail</p>
          </div>
          <div className="space-y-4">
            <h2 className="font-bold text-5xl">Admin Can See All<br /> The Movie Details</h2>
          </div>
        </div>

        {/* Movie Card */}
        {
          movie &&
          <div className="my-20 bg-gray-100 shadow-lg rounded-lg p-10 text-left max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-10">
              <img src={movie.img_url} alt={movie.title} className="w-full md:w-1/3 rounded-lg shadow" />
              <div className="flex-1 space-y-4">
                <h3 className="text-3xl font-bold text-orange-600">{movie.title}</h3>
                <p className="text-lg"><span className="font-semibold text-gray-700">Genre:</span> {movie.genre}</p>
                <div>
                  <p className="font-semibold text-gray-700 mb-2">Description:</p>
                  <div
                    className="prose max-w-full"
                    dangerouslySetInnerHTML={{ __html: movie.description }}
                  />
                </div>
              </div>
            </div>
          </div>
        }
      </section>

      <Footer />
    </div>
  );
};

export default MovieDetails;
