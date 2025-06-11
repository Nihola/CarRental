import React from 'react';
import { useParams } from 'react-router-dom';
import { card } from '../App';

export default function CardInfo() {
    const { id } = useParams();
    const car = card.find(c => c.id === parseInt(id));

    if (!car) {
        return <div className="text-center text-red-500 mt-20 text-xl font-semibold">Car not found!</div>;
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
            <div className="bg-white rounded-2xl shadow-lg max-w-4xl w-full flex flex-col md:flex-row overflow-hidden">
                <img
                    src={`/${car.img}`}
                    alt={car.name}
                    className="w-full md:w-1/2 h-80 object-contain bg-gray-50 p-4"
                />
                <div className="p-6 flex flex-col justify-center text-center md:text-left">
                    <h2 className="text-3xl font-bold text-gray-800 mb-2">{car.name}</h2>
                    <p className="text-lg text-gray-600 mb-1"><strong>Type:</strong> {car.type}</p>
                    <p className="text-lg text-gray-600 mb-1"><strong>Fuel:</strong> {car.bok}</p>
                    <p className="text-lg text-gray-600 mb-1"><strong>Transmission:</strong> {car.rule}</p>
                    <p className="text-lg text-gray-600 mb-1"><strong>Capacity:</strong> {car.capacity}</p>
                    <p className="text-xl text-green-600 font-semibold mt-3">
                        {car.price}a day
                        {car.discount && (
                            <span className="text-red-400 line-through ml-2 text-base font-normal">{car.discount}</span>
                        )}
                    </p>
                    <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow">
                        {car.button}
                    </button>
                </div>
            </div>
        </div>
    );
}
