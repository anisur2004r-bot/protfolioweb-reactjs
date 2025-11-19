import React from 'react';
import SectionHeader1 from '../../Componants/Shared/SectionHeader1';
import icon1 from "../../../src/assets/Image/facebook-logo.png"
import icon2 from "../../../src/assets/Image/github.png"
import icon3 from "../../../src/assets/Image/linkedin (1).png"
import icon4 from "../../../src/assets/Image/twitter (1).png"
import cv from "../../assets/Cv/Anisur_Rahman_CV.pdf"

const About = () => {
    return (
        <div id='about' data-aos="fade-up" className='px-4 md:px-0'>
            <SectionHeader1 title={"Get to know me"} name={"About Me"} />

            <div className='container mx-auto mt-10'>
                {/* Responsive Grid */}
                <div className='grid grid-cols-1 md:grid-cols-2 items-center'>

                    {/* Image */}
                    <img 
                        data-aos="zoom-in-right" 
                        className='border border-gray-600 rounded-2xl w-full max-w-sm mx-auto bg-gray-700 shadow-2xl' 
                        src="https://i.ibb.co.com/b5qxd946/Whats-App-Image-2025-11-08-at-15-36-59-5701c10d-removebg-preview.png" 
                        alt="" 
                    />

                    {/* Text Content */}
                    <div data-aos="zoom-in-left" className='flex flex-col gap-4 text-gray-300'>
                        <p className='text-xl text-[#DB1928]'>Who am I?</p>

                        <h1 className='text-3xl md:text-4xl font-semibold text-gray-200'>
                            I'm Md Anisur Rahman, A Frontend Web Developer and Creative Designer
                        </h1>

                        <p className='text-gray-400 border-b pb-4'>
                            Frontend Developer with hands-on experience in building responsive web applications using React.js, Next.js, and Tailwind CSS. Skilled in translating designs into clean UIs, optimizing performance, and integrating APIs. Eager to grow as a professional and contribute to impactful real-world projects.
                        </p>

                        {/* Info Section */}
                        <div className='flex flex-col sm:flex-row gap-6 text-lg'>
                            <div>
                                <p>Name: <span className='text-gray-500'>MD Anisur Rahman</span></p>
                                <p>Age: <span className='text-gray-500'>21</span></p>
                            </div>
                            <div>
                                <p>Email: <span className='text-gray-500'>anisur2004r@gmail.com</span></p>
                                <p>From: <span className='text-gray-500'>Dhaka, Bangladesh</span></p>
                            </div>
                        </div>

                        {/* Buttons and Social Icons */}
                        <div className='mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-5'>
                            <button className='rounded-full hover:bg-gray-400 font-semibold hover:text-black px-8 py-3 bg-[#009E66] transition'>
                                <a href={cv} target='blank'>Download CV</a>
                            </button>

                            <div className='flex gap-4'>
                                <img className='w-8 hover:scale-110 transition' src={icon1} alt="" />
                                <img className='w-8 hover:scale-110 transition' src={icon2} alt="" />
                                <img className='w-8 hover:scale-110 transition' src={icon3} alt="" />
                                <img className='w-8 hover:scale-110 transition' src={icon4} alt="" />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
