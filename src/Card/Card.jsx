import React from 'react';
import { FaRegHeart } from "react-icons/fa6";
import { FaGasPump } from "react-icons/fa";
import { GiCartwheel } from "react-icons/gi";
import { IoMdPeople } from "react-icons/io";
import { useFavoriteStore } from '../store/favoriteStore';

const Card = ({
    id,
    name,
    type,
    img,
    bok,
    rule,
    capacity,
    price,
    button,
    discount,
    handleSubmit,
    car
}) => {
    const { addFavorites, isFavorite, removeFavorit } = useFavoriteStore();



    const toggleFavorite = () => {
        isFavorite(car.id) ? removeFavorit(car.id) : addFavorites(car);
    };

    return (
        <div className='w-[304px] h-[388px] bg-white px-3 py-8 my-3 rounded-2xl hover:border-2'>
            <div className='flex justify-between items-center'>
                <h1 className='text-black text-2xl font-bold'>{name}</h1>
                <button onClick={toggleFavorite}>
                    {isFavorite(car.id) ? "❤️" : "🤍"}
                </button>
            </div>

            <h3 className='text-gray-400 font-semibold text-[14px]'>{type}</h3>
            <img src={img} loading='lazy' onClick={handleSubmit} alt="car" className='w-[242px] h-[82px] mt-10 mb-10' />

            <div className='flex justify-between items-center mt-2'>
                <div className='flex gap-2'>
                    <FaGasPump className='text-gray-500 text-2xl' />
                    <p className='text-gray-500 text-1xl'>{bok}</p>
                </div>
                <div className='flex gap-2'>
                    <GiCartwheel className='text-gray-500 text-2xl' />
                    <p className='text-gray-500 text-1xl'>{rule}</p>
                </div>
                <div className='flex gap-2'>
                    <IoMdPeople className='text-gray-500 text-2xl' />
                    <p className='text-gray-500 text-1xl'>{capacity}</p>
                </div>
            </div>

            <div className='flex justify-between items-center mt-2.5'>
                <div className='flex gap-0 flex-col'>
                    <div className='flex gap-2.5 items-center mt-2'>
                        <p className='text-2xl font-bold'>{price}</p>
                        <p className='text-[18px] text-gray-500'>a day</p>
                    </div>
                    <p className='line-through text-[18px] text-gray-500'>{discount}</p>
                </div>
                <button className='w-[116px] h-[44px] items-center bg-blue-500 rounded-[4px] text-white mt-1.5 hover:bg-white hover:text-black hover:border-blue-700 hover:border-1'>
                    {button}
                </button>
            </div>
        </div>
    );
};

export default Card;
