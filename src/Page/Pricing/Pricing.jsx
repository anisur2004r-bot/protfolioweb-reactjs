import React from 'react';
import SectionHeader1 from '../../Componants/Shared/SectionHeader1';
import { IoMdCheckmark } from 'react-icons/io';

const Pricing = () => {
    return (
        <div id='pricing'>
            <SectionHeader1 name={"My Pricing"} title={"PRICING"}></SectionHeader1>
            <div className='grid md:grid-cols-3 sm:grid-cols-1 container mx-auto justify-center gap-10 py-10 px-18'>
                <div data-aos="fade-right" className='flex flex-col container mx-auto gap-4 border border-gray-700 rounded-xl shadow-gray-700 shadow-xl w-80 md:w-110 items-start md:px-10 px-10 py-7'>
                    <h2 className='text-2xl font-semibold border-b text-[#FF093A]'>Static</h2>
                    <h2 className='text-xl md:text-3xl text-gray-100'>Make Single Page</h2>
                    <h2 className='text-4xl font-bold text-[#FF093A]'>$30.00</h2>
                    <p className='md:w-98 w-70 text-gray-100'>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>
                    <div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex md:text-xl tc items-center gap-3'>
                                <IoMdCheckmark />
                                <p>1 Page with Elementor</p>
                            </div>
                            <div className='flex md:text-xl tc items-center gap-3'>
                                <IoMdCheckmark />
                                <p>Design Customization</p>
                            </div>
                            <div className='flex text-xl tc items-center gap-3'>
                                <IoMdCheckmark />
                                <p>Responsive Design</p>
                            </div>
                            <div className='flex md:text-xl tc items-center gap-3'>
                                <IoMdCheckmark />
                                <p>Content Upload</p>
                            </div>
                            <div className='flex md:text-xl tc items-center gap-3'>
                                <IoMdCheckmark />
                                <p>Design Customization</p>
                            </div>
                            <div className='flex md:text-xl tc items-center gap-3'>
                                <IoMdCheckmark />
                                <p>2 Plugins/Extensions</p>
                            </div>
                        </div>
                    </div>
                    <p className='w-40 rounded-md font-semibold text-center py-2 bg-[#FF093A] hover:bg-gray-700 duration-300 cursor-pointer'><a href='#contact'>Order Now</a></p>
                </div>
                <div data-aos="fade-up" className='flex flex-col container mx-auto gap-4 border border-gray-700 rounded-xl shadow-gray-700 shadow-xl w-80 md:w-110 items-start md:px-10 px-10 py-7'>
                    <h2 className='text-2xl font-semibold border-b text-[#FF093A]'>Standard</h2>
                    <h2 className='text-3xl text-gray-100'>Design Make a Page</h2>
                    <h2 className='text-4xl font-bold text-[#FF093A]'>$50.00</h2>
                    <p className='md:w-98 w-70 text-gray-100'>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>
                    <div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex text-xl tc items-center gap-3'>
                                <IoMdCheckmark />
                                <p>5 Page with Elementor</p>
                            </div>
                            <div className='flex text-xl tc items-center gap-3'>
                                <IoMdCheckmark />
                                <p>Design Customization</p>
                            </div>
                            <div className='flex text-xl tc items-center gap-3'>
                                <IoMdCheckmark />
                                <p>Responsive Design</p>
                            </div>
                            <div className='flex text-xl tc items-center gap-3'>
                                <IoMdCheckmark />
                                <p>Content Upload</p>
                            </div>
                            <div className='flex text-xl tc items-center gap-3'>
                                <IoMdCheckmark />
                                <p>Design Customization</p>
                            </div>
                            <div className='flex text-xl tc items-center gap-3'>
                                <IoMdCheckmark />
                                <p>5 Plugins/Extensions</p>
                            </div>
                        </div>
                    </div>
                    <p className='w-40 rounded-md font-semibold text-center py-2 bg-[#FF093A] hover:bg-gray-700 duration-300 cursor-pointer'><a href='#contact'>Order Now</a></p>
                </div>
                <div data-aos="fade-left" className='flex flex-col container mx-auto gap-4 border border-gray-700 rounded-xl shadow-gray-700 shadow-xl w-80 md:w-110 items-start md:px-10 px-10 py-7'>
                    <h2 className='text-2xl font-semibold border-b text-[#FF093A]'>Static</h2>
                    <h2 className='text-3xl text-gray-100'>Coustomize All Page</h2>
                    <h2 className='text-4xl font-bold text-[#FF093A]'>$90.00</h2>
                    <p className='md:w-98 w-70 text-gray-100'>All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary</p>
                    <div>
                        <div className='flex flex-col gap-3'>
                            <div className='flex text-xl tc items-center gap-3'>
                                <IoMdCheckmark />
                                <p>10 Page with Elementor</p>
                            </div>
                            <div className='flex text-xl tc items-center gap-3'>
                                <IoMdCheckmark />
                                <p>Design Customization</p>
                            </div>
                            <div className='flex text-xl tc items-center gap-3'>
                                <IoMdCheckmark />
                                <p>Responsive Design</p>
                            </div>
                            <div className='flex text-xl tc items-center gap-3'>
                                <IoMdCheckmark />
                                <p>Content Upload</p>
                            </div>
                            <div className='flex text-xl tc items-center gap-3'>
                                <IoMdCheckmark />
                                <p>Design Customization</p>
                            </div>
                            <div className='flex text-xl tc items-center gap-3'>
                                <IoMdCheckmark />
                                <p>20 Plugins/Extensions</p>
                            </div>
                        </div>
                    </div>
                    <p className='w-40 rounded-md font-semibold text-center py-2 bg-[#FF093A] hover:bg-gray-700 duration-300 cursor-pointer'><a href='#contact'>Order Now</a></p>
                </div>
            </div>
        </div>
    );
};

export default Pricing;