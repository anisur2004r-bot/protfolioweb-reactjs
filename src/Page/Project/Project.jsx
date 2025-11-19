import React, { useEffect, useState } from 'react';
import SectionHeader1 from '../../Componants/Shared/SectionHeader1';
import ProjectCategory from './ProjectComponants/ProjectCategory';

const Project = () => {

    const [category, setCategory] = useState([]);
    const [projects, setProjects] = useState([]);
    const [categoryId, setCategoryId] = useState();

    // Load Category
    useEffect(() => {
        fetch("ProjectCategory.json")
            .then(res => res.json())
            .then(data => setCategory(data))
    }, []);

    // Load Projects
    useEffect(() => {
        fetch("Project.json")
            .then(res => res.json())
            .then(data => setProjects(data))
    }, []);

    const handleCategory = (id) => {
        setCategoryId(id);
    }

    return (
        <div id='project' data-aos="fade-up" className='px-4 md:px-0'>
            <SectionHeader1
                title={"Visit my portfolio and keep your feedback"}
                name={"My Projects"}
            />

            {/* Categories */}
            <div className='container mx-auto'>
                <div
                    data-aos="flip-left"
                    className='flex flex-wrap items-center justify-center gap-4 sm:gap-5 md:gap-7 mb-10'
                >

                    {/* All Button */}
                    <p
                        onClick={() => setCategoryId()}
                        className='px-6 py-3 sm:px-8 sm:py-4 bg-[#FF014F]
                        rounded-md shadow-md shadow-gray-700 border border-gray-800
                        hover:bg-[#1C1F23] cursor-pointer duration-300 text-center'
                    >
                        All
                    </p>

                    {/* Dynamic Category Buttons */}
                    {
                        category.map(c =>
                            <div
                                key={c.id}
                                onClick={() => handleCategory(c.id)}
                                className='px-6 py-3 sm:px-8 sm:py-4 bg-[#1C1F23]
                                rounded-md shadow-md shadow-gray-700 border border-gray-800
                                hover:bg-[#FF014F] cursor-pointer duration-300 text-center'
                            >
                                <h2 className='font-semibold'>{c.name}</h2>
                            </div>
                        )
                    }
                </div>

                {/* Projects Grid */}
                <ProjectCategory projects={projects} categoryId={categoryId} />
            </div>
        </div>
    );
};

export default Project;
