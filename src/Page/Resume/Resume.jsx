import React, { useEffect, useState } from 'react';
import SectionHeader1 from '../../Componants/Shared/SectionHeader1';
import Education from './ResumeComponants/Education';
import ProfotionalSkill from './ResumeComponants/ProfotionalSkill';
import CategoryResume from './ResumeComponants/CategoryResume';

const Resume = () => {
    const [resumeCategory, setResumeCategory] = useState([]);
    const [categoryID, setCategoryId] = useState(1); // default 1 = Professional Skill

    useEffect(() => {
        fetch("ResumeCategory.json")
            .then(res => res.json())
            .then(data => setResumeCategory(data));
    }, []);

    const handleResume = (id) => {
        setCategoryId(id);
    }

    return (
        <div id='resume' className="py-10">
            <SectionHeader1 title={"View My Details"} name={"Resume"} />

            <CategoryResume 
                resumeCategory={resumeCategory} 
                handleResume={handleResume} 
                activeCategory={categoryID} 
            />

            <div className="mt-8">
                {categoryID === 1 && <ProfotionalSkill />}
                {categoryID === 2 && <Education />}
            </div>
        </div>
    );
};

export default Resume;
