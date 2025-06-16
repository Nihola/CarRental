import React from 'react';
import { useFavoriteStore } from './../store/favoriteStore';
import { FaGasPump } from 'react-icons/fa6';
import { GiCartwheel } from 'react-icons/gi';
import { IoMdPeople } from 'react-icons/io';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import {Helmet} from 'react-helmet'

export default function Favourites() {
    const { favorites, removeFavorit } = useFavoriteStore();

    return (
        <div className="flex flex-col min-h-screen">
            
            <Navbar />
           <Helmet>
            <meta title='Favourites Page'/>
            <meta description='Sevimlilar'
            />
           </Helmet>
          
          
           
                <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-6 px-4 justify-items-center flex-grow">
                    {favorites.map((car) => (
                        <div key={car.id} className='w-[304px] h-[388px] bg-white px-3 py-8 my-3 rounded-2xl hover:border-2'>
                            <div className='flex justify-between items-center'>
                                <h1 className='text-black text-2xl font-bold'>{car.name}</h1>
                                <button onClick={() => removeFavorit(car.id)}>🤍</button>
                            </div>

                            <h3 className='text-gray-400 font-semibold text-[14px]'>{car.type}</h3>
                            <img src={car.img} alt="car" className='w-[242px] h-[82px] mt-10 mb-10' />

                            <div className='flex justify-between items-center mt-2'>
                                <div className='flex gap-2'>
                                    <FaGasPump className='text-gray-500 text-2xl' />
                                    <p className='text-gray-500 text-1xl'>{car.bok}</p>
                                </div>
                                <div className='flex gap-2'>
                                    <GiCartwheel className='text-gray-500 text-2xl' />
                                    <p className='text-gray-500 text-1xl'>{car.rule}</p>
                                </div>
                                <div className='flex gap-2'>
                                    <IoMdPeople className='text-gray-500 text-2xl' />
                                    <p className='text-gray-500 text-1xl'>{car.capacity}</p>
                                </div>
                            </div>

                            <div className='flex justify-between items-center mt-2.5'>
                                <div className='flex gap-0 flex-col'>
                                    <div className='flex gap-2.5 items-center mt-2'>
                                        <p className='text-2xl font-bold'>{car.price}</p>
                                        <p className='text-[18px] text-gray-500'>a day</p>
                                    </div>
                                    <p className='line-through text-[18px] text-gray-500'>{car.discount}</p>
                                </div>
                                <button className='w-[116px] h-[44px] items-center bg-blue-500 rounded-[4px] text-white mt-1.5 hover:bg-white hover:text-black hover:border-blue-700 hover:border-1'>
                                    {car.button}
                                </button>
                            </div>
                        </div>
                    ))}
                </main>

          
            <Footer />
        </div>
    );
}
