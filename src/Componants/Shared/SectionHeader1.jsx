import React from 'react';

const SectionHeader1 = ({ title, name }) => {
    return (
        <div 
            data-aos="flip-left" 
            className='flex flex-col items-center justify-center py-4 mt-10 sm:py-10 md:py-16'
        >
            {/* Title */}
            <p className='text-lg sm:text-xl text-center md:text-2xl text-[#FF014F]'>
                {title}
            </p>

            {/* Main Heading */}
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold border-b border-gray-700 pb-3 mt-2'>
                {name}
            </h1>
        </div>
    );
};

export default SectionHeader1;
