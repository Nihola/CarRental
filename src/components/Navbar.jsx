
import avatar from '../assets/avatar.png';

import { BsSearch, BsFilterSquareFill } from "react-icons/bs";
import { IoHeart, IoNotifications, IoSettingsSharp } from "react-icons/io5";

import { useNavigate } from 'react-router-dom';
import { useFavoriteStore } from '../store/favoriteStore';


export default function Navbar() {
    const navigate=useNavigate()
    const {handleSearch}=useFavoriteStore()
    const handleClick = () => {
        try {
            navigate("/favorites");
        } catch (err) {
            console.error("Navigation failed:", err);
        }
    };
      
    return (
        <nav className="w-full px-4 py-4 shadow-md">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">

                 
                <div className="flex flex-col md:flex-row items-center gap-4 md:gap-14 w-full md:w-auto">
                    <h1 className="text-blue-600 text-3xl font-bold">MORENT</h1>

                    
                    <div className="flex items-center justify-between gap-4 border border-gray-300 px-4 py-2 rounded-full w-full md:w-auto">
                        <div className="flex items-center gap-2 flex-1">
                            <BsSearch className="text-xl" />
                            <input
                            onChange={(e)=>handleSearch(e.target.value)}
                                type="text"
                                placeholder="Search something here"
                                className="focus:outline-none text-[16px] w-full"
                            />
                        </div>
                        <BsFilterSquareFill className="text-xl hidden sm:block" />
                    </div>
                </div>

               
                <div className="flex items-center gap-6">
                    
                     
                        <div
                            onClick={handleClick}
                            className="rounded-full border border-gray-300 p-2 hover:bg-cyan-500 transition cursor-pointer"
                        >
                            <IoHeart />
                        </div>
                     
                    <div className="rounded-full border border-gray-300 p-2 hover:bg-cyan-500 transition">
                        <IoNotifications />
                    </div>
                    <div className="rounded-full border border-gray-300 p-2 hover:bg-cyan-500 transition">
                        <IoSettingsSharp />
                    </div>
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img src={avatar} alt="avatar" className="w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </nav>
    );
}
