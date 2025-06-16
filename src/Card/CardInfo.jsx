import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { card } from '../App';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import './styles.css'; // Custom CSS for swiper sizing

import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function CardInfo() {
    const { id } = useParams();
    const car = card.find(c => c.id === parseInt(id));
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    if (!car) {
        return <div className="text-center text-red-500 mt-20 text-xl font-semibold">Car not found!</div>;
    }

    return (
       <>
        <Navbar/>
            <div className="  bg-gray-50 p-6  flex flex-col lg:flex-row gap-6 justify-center items-start ">
                {/* Left: Swiper Section */}
                <div className="lg:w-1/2 w-full">
                    <Swiper
                        style={{
                            '--swiper-navigation-color': '#fff',
                            '--swiper-pagination-color': '#fff',
                        }}
                        spaceBetween={10}
                        navigation={true}
                        thumbs={{ swiper: thumbsSwiper }}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper2 rounded-xl overflow-hidden"
                    >
                        {[car.img, car.img_second, car.img_third].map((src, i) => (
                            <SwiperSlide key={i}>
                                <img src={`/${src}`} className=" w-full h-80 object-cover" />
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* Thumbnails */}
                    <Swiper
                        onSwiper={setThumbsSwiper}
                        spaceBetween={10}
                        slidesPerView={3}
                        freeMode={true}
                        watchSlidesProgress={true}
                        modules={[FreeMode, Navigation, Thumbs]}
                        className="mySwiper mt-4"
                    >
                        {[car.img, car.img_second, car.img_third].map((src, i) => (
                            <SwiperSlide key={i}>
                                <img src={`/${src}`} className="w-full h-20 object-cover rounded-lg border hover:border-blue-500 transition" />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                {/* Right: Info Panel */}
                <div className="lg:w-1/2 w-full space-y-4 pt-3.5">
                    <h2 className="text-3xl font-bold text-gray-800">{car.name}</h2>

                    {/* Star Rating */}
                    <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                            <FaStar key={i} className={i < car.rating ? 'text-yellow-400' : 'text-gray-300'} />
                        ))}
                        <span className="text-sm text-gray-500 ml-2">440+ reviews</span>
                    </div>

                    <p className="text-gray-700">{car.description}</p>

                    <div className="grid grid-cols-2 gap-4 text-sm text-gray-600">
                        <div><span className="text-gray-400">Type Car:</span> <b>{car.type}</b></div>
                        <div><span className="text-gray-400">Capacity:</span> <b>{car.capacity}</b></div>
                        <div><span className="text-gray-400">Steering:</span> <b>{car.rule}</b></div>
                        <div><span className="text-gray-400">Fuel:</span> <b>{car.bok}</b></div>
                    </div>

                    {/* Price + Button */}
                    <div className="flex items-center gap-6 mt-6">
                        <div>
                            <div className="text-2xl font-bold text-black">{car.price}<span className="text-sm text-gray-500">/day</span></div>
                            {car.discount && (
                                <div className="text-sm text-gray-400 line-through">{car.discount}</div>
                            )}
                        </div>
                        <button className="bg-blue-600 text-white px-6 py-2 rounded-full shadow hover:bg-blue-700">
                            {car.button}
                        </button>
                    </div>
                </div>
            </div>

        <Footer/>
       </>

    );
}
