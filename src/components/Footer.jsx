import React from 'react';

const Footer = () => {
    return (
        <footer className="bg-white text-gray-600 px-6 py-10 md:px-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
                
                <div>
                    <h1 className="text-blue-600 text-3xl font-bold mb-3">MORENT</h1>

                    <p className="text-sm leading-relaxed">
                        Our vision is to provide convenience<br />
                        and help increase your sales business.
                    </p>
                </div>

                
                <div>
                    <h3 className="font-semibold text-gray-900 mb-3">About</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-blue-600">How it works</a></li>
                        <li><a href="#" className="hover:text-blue-600">Featured</a></li>
                        <li><a href="#" className="hover:text-blue-600">Partnership</a></li>
                        <li><a href="#" className="hover:text-blue-600">Business Relation</a></li>
                    </ul>
                </div>

                 
                <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Community</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-blue-600">Events</a></li>
                        <li><a href="#" className="hover:text-blue-600">Blog</a></li>
                        <li><a href="#" className="hover:text-blue-600">Podcast</a></li>
                        <li><a href="#" className="hover:text-blue-600">Invite a friend</a></li>
                    </ul>
                </div>

                
                <div>
                    <h3 className="font-semibold text-gray-900 mb-3">Socials</h3>
                    <ul className="space-y-2 text-sm">
                        <li><a href="#" className="hover:text-blue-600">Discord</a></li>
                        <li><a href="#" className="hover:text-blue-600">Instagram</a></li>
                        <li><a href="#" className="hover:text-blue-600">Twitter</a></li>
                        <li><a href="#" className="hover:text-blue-600">Facebook</a></li>
                    </ul>
                </div>
            </div>

             
            <div className="border-t border-gray-200 mt-10 pt-6 flex flex-col md:flex-row justify-between text-sm text-gray-500">
                <p>©2022 MORENT. All rights reserved</p>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <a href="#" className="hover:text-blue-600">Privacy & Policy</a>
                    <a href="#" className="hover:text-blue-600">Terms & Condition</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
