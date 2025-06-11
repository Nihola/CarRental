import React from 'react';

const Data = ({ title, desc, button, img }) => {
    return (
        <div className="rounded-xl p-6 text-white relative overflow-hidden bg-blue-500 flex">

            
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="w-1/2 h-1/2 border-8 border-blue-300 opacity-20 rounded-full absolute"></div>
                <div className="w-[130%] h-[130%] border-8 border-blue-300 opacity-20 rounded-full absolute"></div>
                <div className="w-[110%] h-[110%] border-8 border-blue-300 opacity-20 rounded-full absolute"></div>
                <div className="w-[90%] h-[90%] border-8 border-blue-300 opacity-20 rounded-full absolute"></div>
                <div className="w-[70%] h-[70%] border-8 border-blue-300 opacity-20 rounded-full absolute"></div>
            </div>

            
            <div className="relative z-10 flex flex-col lg:flex-row items-center">
                <div className="flex-1 max-w-md text-center lg:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
                    <p className="text-base md:text-lg font-extralight mt-2">{desc}</p>
                    <button className="mt-6 px-6 py-2 bg-blue-700 rounded-md text-white font-medium hover:bg-blue-600 hover:border-[0,5px]">
                        {button}
                    </button>
                </div>

                <div className="flex-1 max-w-sm mt-4 lg:mt-0">
                    <img src={img} alt="car" className="w-full h-auto object-contain" />
                </div>
            </div>
        </div>
    );
};

export default Data;
