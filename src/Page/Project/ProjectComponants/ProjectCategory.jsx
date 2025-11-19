import React from 'react';

const ProjectCategory = ({ projects, categoryId }) => {

    const filterCategory = categoryId
        ? projects.filter(item => item.categoryid == categoryId)
        : projects;

    return (
        <div className='container mx-auto px-4 md:px-20 py-10'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>

                {filterCategory.map(p =>
                    <div 
                        key={p.id}
                        data-aos="zoom-in-down"
                        className='overflow-hidden bg-[#1C1F23] rounded-xl 
                        shadow-gray-700 shadow-xl border border-gray-800 
                        hover:-translate-y-2 duration-300'
                    >
                        <div className='border-b border-gray-700 overflow-hidden'>
                            <img 
                                className='w-full h-60 sm:h-64 md:h-72 lg:h-80 object-cover hover:scale-110 duration-500'
                                src={p.image} 
                                alt="" 
                            />
                        </div>
                        <div className='flex flex-col gap-4 px-5 py-4'>
                            <h2 className='text-xl font-bold'>{p.title}</h2>

                            <div className='flex flex-col gap-2'>
                                <h2 className='text-[#FF014F] font-semibold'>Tech Stack:</h2>

                                <div className='flex items-start justify-between gap-4'>
                                    
                                    <div className='text-gray-300 text-sm'>
                                        <p>{p.language}</p>
                                        <p>{p.library}</p>
                                        <p>{p.framework}</p>
                                    </div>
                                    <a target='_blank' rel='noopener noreferrer' href={p.live} className='px-5 py-2 rounded-md bg-[#FF014F] border border-gray-600 hover:bg-[#1C1F23] hover:text-white duration-300 cursor-pointer text-sm'>
                                        View Site
                                    </a>

                                </div>
                            </div>

                        </div>
                    </div>
                )}
            </div>

        </div>
    );
};

export default ProjectCategory;
