import React from 'react';

const CategoryResume = ({ resumeCategory, handleResume }) => {
    return (
        <div className="px-4 md:px-0">
            
            {/* Responsive Category Buttons */}
            <div
                data-aos="flip-left"
                className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 container mx-auto mt-5"
            >
                {
                    resumeCategory.map(r => (
                        <div
                            key={r.id}
                            onClick={() => handleResume(r.id)}
                            className="px-6 sm:px-8 py-3 sm:py-4 bg-[#1C1F23] 
                            rounded-md shadow-md shadow-gray-700 border border-gray-800
                            hover:bg-[#FF014F] cursor-pointer duration-300 text-center"
                        >
                            <h2 className="font-semibold text-sm sm:text-base">{r.name}</h2>
                        </div>
                    ))
                }
            </div>

        </div>
    );
};

export default CategoryResume;
