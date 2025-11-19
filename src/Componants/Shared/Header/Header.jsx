import React, { useState } from 'react';
import { FiMenu, FiX } from "react-icons/fi";
import headerimg from "../../../assets/Image/WhatsApp_Image_2025-11-08_at_15.36.59_5701c10d-removebg-preview.png";

const Header = () => {

    const [open, setOpen] = useState(false);

    const toggleMenu = () => setOpen(!open);

    return (
        <div className="bg-[#212428] sticky top-0 z-50 shadow-md">
            <div className="flex items-center justify-between container mx-auto py-3 px-4 md:px-0">

                {/* Logo */}
                <div className="flex items-center gap-2">
                    <img 
                        className="rounded-full w-14 h-14 border border-gray-600" 
                        src={headerimg} 
                        alt="" 
                    />
                    <h2 className="text-2xl font-semibold tc">
                        ANI<span className="text-[#FF014F]">SUR</span>
                    </h2>
                </div>

                {/* Desktop Menu */}
                <ul className="hidden md:flex tc gap-8">
                    <li className="hover:border-b border-[#FF014F] duration-300">
                        <a href="#home">HOME</a>
                    </li>
                    <li className="hover:border-b border-[#FF014F] duration-300">
                        <a href="#about">ABOUT</a>
                    </li>
                    <li className="hover:border-b border-[#FF014F] duration-300">
                        <a href="#services">SERVICES</a>
                    </li>
                    <li className="hover:border-b border-[#FF014F] duration-300">
                        <a href="#project">PROJECT</a>
                    </li>
                    <li className="hover:border-b border-[#FF014F] duration-300">
                        <a href="#resume">RESUME</a>
                    </li>
                    <li className="hover:border-b border-[#FF014F] duration-300">
                        <a href="#testimonial">TESTIMONIAL</a>
                    </li>
                    <li className="hover:border-b border-[#FF014F] duration-300">
                        <a href="#pricing">PRICING</a>
                    </li>
                    <li className="hover:border-b border-[#FF014F] duration-300">
                        <a href="#contact">CONTACT</a>
                    </li>
                </ul>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    {open ? (
                        <FiX 
                            className="text-3xl text-white cursor-pointer" 
                            onClick={toggleMenu} 
                        />
                    ) : (
                        <FiMenu 
                            className="text-3xl text-white cursor-pointer" 
                            onClick={toggleMenu} 
                        />
                    )}
                </div>

            </div>

            {/* Mobile Dropdown Menu */}
            {open && (
                <div className="md:hidden bg-[#1C1F23] border-t border-gray-700 py-5 px-6">
                    <ul className="flex flex-col gap-4 text-gray-200">
                        <li><a onClick={toggleMenu} href="#home">HOME</a></li>
                        <li><a onClick={toggleMenu} href="#about">ABOUT</a></li>
                        <li><a onClick={toggleMenu} href="#services">SERVICES</a></li>
                        <li><a onClick={toggleMenu} href="#project">PROJECT</a></li>
                        <li><a onClick={toggleMenu} href="#resume">RESUME</a></li>
                        <li><a onClick={toggleMenu} href="#testimonial">TESTIMONIAL</a></li>
                        <li><a onClick={toggleMenu} href="#pricing">PRICING</a></li>
                        <li><a onClick={toggleMenu} href="#contact">CONTACT</a></li>
                    </ul>
                </div>
            )}

        </div>
    );
};

export default Header;
