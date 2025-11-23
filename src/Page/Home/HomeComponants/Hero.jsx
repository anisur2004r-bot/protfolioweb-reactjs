import React, { useEffect, useState } from 'react';
import icon1 from "../../../../src/assets/Image/facebook-logo.png"
import icon2 from "../../../../src/assets/Image/github.png"
import icon3 from "../../../../src/assets/Image/linkedin (1).png"
import icon4 from "../../../../src/assets/Image/twitter (1).png"
import myimg from "../../../../src/assets/Image/myimg.png"

import skill1 from '../../../assets/Image/html-5.png';
import skill2 from '../../../assets/Image/css-3.png';
import skill3 from '../../../assets/Image/js.png';
import skill4 from '../../../assets/Image/physics.png';
const Hero = () => {
    const texts = ["FRONTEND DEVELOPER","WORDPRESS EXPERT", "WEB DEVELOPER", "CREATIVE DESIGNER", ];
    const [index, setIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const current = texts[index];
        let speed = isDeleting ? 20 : 80;

        const timeout = setTimeout(() => {
            setText(
                isDeleting
                    ? current.substring(0, text.length - 1)
                    : current.substring(0, text.length + 1)
            );

            if (!isDeleting && text === current) {
                setTimeout(() => setIsDeleting(true), 1000);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setIndex((prev) => (prev + 1) % texts.length);
            }
        }, speed);

        return () => clearTimeout(timeout);
    }, );
    return (
        <div id='home' data-aos="fade-up">
            <div className='relative'>
                <div className='flex items-center justify-center border-b border-gray-600 mt-20 py-8 '>
                    <img className='w-120 mask-b-from-160' src={myimg} alt="" />
                </div>
                <div className='absolute top-50 md:top-70 flex flex-col gap-3 text-gray-100 items-center justify-center w-screen'>
                    <h1  data-aos="zoom-in" className='text-2xl md:text-6xl font-bold text-gray-200'>Hi.I'm <span>ANI<span className='text-[#FF014F]'>SUR</span> RAHMAN</span></h1>
                    <p  data-aos="flip-left" className='text-center tc md:text-gray-200 font-semibold w-90 md:w-180'>“I am a passionate Web Developer creating modern and responsive websites  with clean code and great user experience.”</p>
                    <h3 className='md:text-3xl text-xl font-semibold'>I'm a <span className='text-[#FF014F] font-bold border-r'> {text}</span></h3>
                </div>
                <div  className='absolute top-100 md:top-120 w-screen'>
                    <div className=' container mx-auto md:flex md:flex-row justify-between items-center px-10'>
                        <div  data-aos="fade-right" className='flex flex-col items-center gap-2'>
                            <p className='tc'>FIND WITH ME</p>
                            <div className='flex gap-4'>
                                <a href='https://www.facebook.com/md.anisur.rahman.764890' target='blank'><img className=' hover:bg-gray-700 duration-300 cursor-pointer px-2 py-1 md:px-3 md:py-3 border-gray-700 bg-gray-800 shadow-xl'  src={icon1} alt="" /></a>
                                <a href='https://github.com/anisur2004r-bot' target='blank'><img className=' hover:bg-gray-700 duration-300 cursor-pointer px-2 py-1 md:px-3 md:py-3 border-gray-700 bg-gray-800 shadow-xl'  src={icon2} alt="" /></a>
                                <a href='https://www.linkedin.com/in/md-anisur-rahman-2b9544384' target='blank'><img className=' hover:bg-gray-700 duration-300 cursor-pointer px-2 py-1 md:px-3 md:py-3 border-gray-700 bg-gray-800 shadow-xl'  src={icon3} alt="" /></a>
                                <a href='https://my-personal-protfolio01.netlify.app/' target='blank'><img className=' hover:bg-gray-700 duration-300 cursor-pointer px-2 py-1 md:px-3 md:py-3 border-gray-700 bg-gray-800 shadow-xl'  src={icon4} alt="" /></a>
                            </div>
                        </div>
                        <div data-aos="fade-left" className='flex flex-col items-center gap-2'>
                            <p className='tc'>BEST SKILL ON</p>
                            <div className='flex gap-4'>
                                <img className=' px-2 py-1 md:px-3 md:py-3 border-gray-700 bg-gray-800 shadow-xl' src={skill1} alt="" />
                                <img className=' px-3 py-3 border-gray-700 bg-gray-800 shadow-xl' src={skill2} alt="" />
                                <img className='  px-2 py-1 md:px-3 md:py-3 border-gray-700 bg-gray-800 shadow-xl' src={skill3} alt="" />
                                <img className=' px-2 py-1 md:px-3 md:py-3 border-gray-700 bg-gray-800 shadow-xl' src={skill4} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;