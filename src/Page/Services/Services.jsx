import React from 'react';
import SectionHeader1 from '../../Componants/Shared/SectionHeader1';

const Services = () => {
    return (
        <div id='services' data-aos="fade-up" className='px-4 md:px-40'>
            <SectionHeader1 title={"What I Do"} name={"Services"} />

            {/* Responsive Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 container mx-auto gap-6 md:gap-8 mt-10'>

                {/* Card 1 */}
                <div data-aos="flip-right" className='flex flex-col items-center justify-center gap-4 px-6 py-6 bg-[#1C1F23] rounded-xl shadow-gray-700 shadow-lg border border-gray-800 hover:-translate-y-2 duration-300'>
                    <img className='w-20' src="https://i.ibb.co.com/LDQLvCXq/responsive-design-512.png" alt="" />
                    <h2 className='text-2xl font-semibold'>Business Strategy</h2>
                    <p className='text-center text-gray-400'>
                        I throw myself down among the tall grass by the stream as I lie close to the earth.
                    </p>
                </div>

                {/* Card 2 */}
                <div data-aos="flip-left" className='flex flex-col items-center justify-center gap-4 px-6 py-6 bg-[#1C1F23] rounded-xl shadow-gray-700 shadow-lg border border-gray-800 hover:-translate-y-2 duration-300'>
                    <img className='w-20' src="https://i.ibb.co.com/V0kGnYVR/design-512.png" alt="" />
                    <h2 className='text-2xl font-semibold'>App Development</h2>
                    <p className='text-center text-gray-400'>
                        We’ll handle everything from the app development process to launching your project.
                    </p>
                </div>

                {/* Card 3 */}
                <div data-aos="flip-right" className='flex flex-col items-center justify-center gap-4 px-6 py-6 bg-[#1C1F23] rounded-xl shadow-gray-700 shadow-lg border border-gray-800 hover:-translate-y-2 duration-300'>
                    <img className='w-20' src="https://i.ibb.co.com/chFdqSZq/creative-process-512.png" alt="" />
                    <h2 className='text-2xl font-semibold'>Business Strategy</h2>
                    <p className='text-center text-gray-400'>
                        We’ll help you optimize your business processes to maximize profitability.
                    </p>
                </div>

                {/* Card 4 */}
                <div data-aos="flip-left" className='flex flex-col items-center justify-center gap-4 px-6 py-6 bg-[#1C1F23] rounded-xl shadow-gray-700 shadow-lg border border-gray-800 hover:-translate-y-2 duration-300'>
                    <img className='w-20' src="https://i.ibb.co.com/ynKFkXkh/support-512.png" alt="" />
                    <h3 className='text-2xl font-semibold'>Mobile App</h3>
                    <p className='text-center text-gray-400'>
                        Using our expertise in mobile development to create beautiful pixel-perfect designs.
                    </p>
                </div>

                {/* Card 5 */}
                <div data-aos="flip-right" className='flex flex-col items-center justify-center gap-4 px-6 py-6 bg-[#1C1F23] rounded-xl shadow-gray-700 shadow-lg border border-gray-800 hover:-translate-y-2 duration-300'>
                    <img className='w-20' src="https://i.ibb.co.com/Vc3DtcK2/idea-512.png" alt="" />
                    <h2 className='text-2xl font-semibold'>SEO Optimisation</h2>
                    <p className='text-center text-gray-400'>
                        Our SEO services help your website rise to the top of search engine rankings!
                    </p>
                </div>

                {/* Card 6 */}
                <div data-aos="flip-left" className='flex flex-col items-center justify-center gap-4 px-6 py-6 bg-[#1C1F23] rounded-xl shadow-gray-700 shadow-lg border border-gray-800 hover:-translate-y-2 duration-300'>
                    <img className='w-20' src="https://i.ibb.co.com/xK476nb4/graphics-512.png" alt="" />
                    <h2 className='text-2xl font-semibold'>UX Consulting</h2>
                    <p className='text-center text-gray-400'>
                        A UX consultant helps improve user experience with expert design solutions.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Services;
