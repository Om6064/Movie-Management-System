import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import CircularText from './CircularText';

const slideData = [
    {
        image: '/banner-02.jpg',
        title: 'The Witcher',
        subtitle: 'Season 2',
        description: 'Written and Directed by Aleesha Rose / Ireland 2023',
        theaterDate: 'March 2023',
    },
    {
        image: '/banner3.jpg',
        title: 'Avengers',
        subtitle: 'Endgame',
        description: 'Directed by Russo Brothers / USA 2019',
        theaterDate: 'April 2019',
    },
    {
        image: '/banner-04.jpg',
        title: 'Batman',
        subtitle: 'The Dark Knight',
        description: 'Directed by Christopher Nolan / USA 2008',
        theaterDate: 'July 2008',
    },
];

const Home = () => {
    return (
        <Swiper
            spaceBetween={0}
            centeredSlides={true}
            autoplay={{
                delay: 2500,
                disableOnInteraction: false,
            }}
            pagination={false}
            navigation={false}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
        >
            {slideData.map((slide, index) => (
                <SwiperSlide key={index}>
                    <div className="min-h-screen w-full flex items-center text-white font-sans relative">
                        <div
                            className="absolute inset-0 z-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        ></div>


                        <div className="absolute inset-0 bg-black/60 z-10"></div>

                        <div className="relative z-20 container mx-auto px-6 py-20 flex flex-col lg:flex-row items-center justify-between h-full">

                            <div className=" text-left space-y-6">
                                <p className="text-orange-400 font-bold text-xl">Action Movie</p>
                                <h1 className="text-5xl sm:text-6xl font-bold leading-tight">
                                    {slide.title} <br /> <span className="text-white">{slide.subtitle}</span>
                                </h1>
                                <p className="text-gray-300">{slide.description}</p>
                                <div className="flex gap-4 mt-6">
                                    <button className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition">
                                        More Info
                                    </button>
                                    <button className="bg-orange-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-orange-400 transition">
                                        Get Ticket
                                    </button>
                                </div>
                            </div>


                            <div className="mt-10 lg:mt-0 flex flex-col items-end">
                                <div className="text-right mb-12">
                                    <p className="text-sm text-gray-300">In theater</p>
                                    <p className="text-2xl font-bold text-white border-b-2 border-orange-500 inline-block pb-1">
                                        {slide.theaterDate}
                                    </p>
                                </div>


                                <div className="bg-black/50 p-4 rounded-lg">
                                    <p className="mb-2 text-sm text-gray-400">Trailers</p>
                                    <div className="flex gap-4">

                                        {slide.image && (
                                            <div className="border-2 border-orange-500 rounded overflow-hidden relative group">
                                                <img
                                                    src="/banner-02.jpg"
                                                    alt="Trailer 1"
                                                    className="w-28 h-20 object-cover"

                                                />
                                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                                    <button className="text-white text-xl">▶</button>
                                                </div>
                                            </div>
                                        )}


                                        <div className="rounded overflow-hidden relative group">
                                            <img
                                                src="/banner3.jpg"
                                                alt="Trailer 2"
                                                className="w-28 h-20 object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                                <button className="text-white text-xl">▶</button>
                                            </div>
                                        </div>


                                        <div className="rounded overflow-hidden relative group">
                                            <img
                                                src="/banner-04.jpg"
                                                alt="Trailer 3"
                                                className="w-28 h-20 object-cover"
                                            />
                                            <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition">
                                                <button className="text-white text-xl">▶</button>
                                            </div>
                                        </div>

                                    </div>

                                </div>
                                <CircularText
                                    text="AOVIS*MOVIE*TICKETS*"
                                    onHover="speedUp"
                                    spinDuration={20}
                                    className="text-left mt-28"
                                />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

            ))}
        </Swiper>
    );
};

export default Home;
