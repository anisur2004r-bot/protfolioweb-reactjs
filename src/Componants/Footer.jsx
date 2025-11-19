import React from 'react';
import headerimg from "../../src/assets/Image/WhatsApp_Image_2025-11-08_at_15.36.59_5701c10d-removebg-preview.png";

const Footer = () => {
    return (
        <div>
            <div className='grid md:grid-cols-4 justify-center md:items-start container mx-auto px-10 md:px-0 py-10 mt-10 border-b gap-4 border-gray-700'>
                <div className="flex items-center gap-2">
                    <img
                        className="rounded-full w-14 h-14 border-3 border-gray-600"
                        src={headerimg}
                        alt=""
                    />
                    <h2 className="text-2xl font-semibold tc">
                        ANI<span className="text-[#FF014F]">SUR</span>
                    </h2>
                </div>
                <div className='flex flex-col gap-6'>
                    <h2 className='text-xl text-[#FF014F] font-semibold'>QUICK LINK</h2>
                    <ul className='flex flex-col gap-6'>
                        <li className="hover:text-[#FF014F] duration-300 text-gray-300">
                            <a href="#home">HOME</a>
                        </li>
                        <li className="hover:text-[#FF014F] duration-300 text-gray-300">
                            <a href="#about">ABOUT</a>
                        </li>
                        <li className="hover:text-[#FF014F] duration-300 text-gray-300">
                            <a href="#project">PROJECT</a>
                        </li>
                        <li className="hover:text-[#FF014F] duration-300 text-gray-300">
                            <a href="#resume">RESUME</a>
                        </li>
                        <li className="hover:text-[#FF014F] duration-300 text-gray-300">
                            <a href="#contact">CONTACT</a>
                        </li>
                    </ul>
                </div>
                <div className='flex flex-col gap-6'>
                    <h3 className='text-xl text-[#FF014F] font-semibold'>RESOURCES</h3>
                    <p className='tc'>Authentication</p>
                    <p className='tc'>System Stutas</p>
                    <p className='tc'>Terms of Services</p>
                    <p className='tc'>Pricing</p>
                    <p className='tc'>Over Right</p>
                </div>
                <div className='flex flex-col gap-6'>
                    <h3 className='text-xl text-[#FF014F] font-semibold'>DEVELOPERS</h3>
                    <p className='tc'>Documentation</p>
                    <p className='tc'>Authentication</p>
                    <p className='tc'>API Reference</p>
                    <p className='tc'>Support</p>
                    <p className='tc'>Open Sourse</p>
                </div>
            </div>
            <div className='flex items-center justify-center container mx-auto py-5'>
                <p className='tc'>&copy;2025.All right reserved by <span className='text-gray-100 font-semibold'>MD ANISUR RAHMAN</span></p>
            </div>
        </div>
    );
};

export default Footer;