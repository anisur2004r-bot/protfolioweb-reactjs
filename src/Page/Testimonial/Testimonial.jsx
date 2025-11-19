import React from 'react';
import SectionHeader1 from '../../Componants/Shared/SectionHeader1';
import image from "../../assets/Image/Gemini_Generated_Image_2esqrg2esqrg2esq.png";
import image2 from "../../assets/Image/close (1).png";
import { FaStar } from 'react-icons/fa';

const Testimonial = () => {
    return (
        <div id="testimonial" className="px-4 md:px-0">
            <SectionHeader1 
                name={"Testimonial"} 
                title={"What Clients Say"} 
            />

            {/* Main Layout */}
            <div className="container mx-auto py-10 flex flex-col lg:flex-row items-center justify-center gap-10">

                {/* Left Card */}
                <div 
                    data-aos="fade-right" 
                    className="bg-[#222529] shadow-gray-400 border border-gray-500 
                    shadow-md rounded-xl w-full sm:w-[380px] md:h-120 lg:w-[400px] flex flex-col 
                    items-center justify-center py-8 px-4"
                >
                    <div className="border border-gray-500 rounded-xl overflow-hidden">
                        <img 
                            className="w-full sm:w-72 md:w-80 rounded-xl hover:scale-110 duration-300" 
                            src={image} 
                            alt="" 
                        />
                    </div>

                    <div className="space-y-1 mt-8  text-start mr-22">
                        <h2 className="text-xl font-semibold text-gray-300">
                            Shekh Sakibul Hasan
                        </h2>
                        <h3 className="text-gray-200">
                            Marn Stack Development<br/>
                            <span className="text-[#FF0345]">(Department Head)</span>
                        </h3>
                        <p className="text-gray-400">Bd Calling Academy</p>
                    </div>
                </div>

                {/* Right Content */}
                <div data-aos="fade-left" className="w-full lg:w-auto flex flex-col gap-5">

                    <img className="w-24 mx-auto lg:mx-0" src={image2} alt="" />

                    <div 
                        className="flex flex-col gap-8 border border-gray-600 shadow-gray-500 
                        shadow-md rounded-xl py-8 px-6 sm:px-10 w-full lg:w-[599px]"
                    >
                        {/* Title + Stars */}
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                            
                            <div>
                                <h2 className="font-bold text-2xl sm:text-3xl">
                                    Senior MERN Stack Developer
                                </h2>
                                <h4 className="text-gray-300 font-bold mt-2">
                                    Trainer Bd Calling Academy
                                </h4>
                            </div>

                            {/* Stars */}
                            <div 
                                className="flex text-yellow-500 gap-1 border px-4 py-3 
                                border-gray-700 shadow-gray-700 shadow-md rounded-md self-center"
                            >
                                <FaStar /><FaStar /><FaStar /><FaStar /><FaStar />
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 text-justify leading-relaxed">
                            A highly skilled and passionate MERN Stack Developer with excellent 
                            teaching abilities. Known for clear explanations, practical examples, 
                            and strong problem-solving skills. Dedicated to guiding students in 
                            mastering modern web technologies with real-world approaches.
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Testimonial;
