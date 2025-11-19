import React, { useEffect, useState } from 'react';

const ProfotionalSkill = () => {
    const skills = [
        { name: "HTML", level: 95 },
        { name: "CSS", level: 80 },
        { name: "JavaScript", level: 80 },
        { name: "Tailwind CSS", level: 85 },
        { name: "React", level: 80 },
        { name: "Wordpress", level: 70 },
        { name: "Next js", level: 70 }
    ];
    const [filled, setFilled] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setFilled(true);
        }, 500); 
        return () => clearTimeout(timer);
    }, []);

    return (
        <div  data-aos="flip-down" className="container mx-auto py-10 px-18">
            <div className='flex items-center justify-center py-4'>
                <h3 className=' text-center text-xl font-semibold py-4 border-b rounded-full w-140 shadow-xl mb-4'>FrontEnd Development Skill</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
                {skills.map((skill, index) => (
                    <div key={index} className="bg-[#1C1F23] shadow-gray-700 rounded-2xl shadow-md p-5">
                        <div className="flex justify-between mb-2">
                            <span className="font-semibold">{skill.name}</span>
                            <span>{skill.level}%</span>
                        </div>

                        {/* Progress Bar */}
                        <div className="w-full bg-gray-800 rounded-full h-3">
                            <div
                                className="bg-gradient-to-r from-[#6E67CB] to-[#FF014F] h-3 rounded-full transition-all duration-500"
                                style={{
                                    width: filled ? `${skill.level}%` : "0%",}}
                            ></div>
                    </div>
                    </div>
                ))}
        </div>
        </div >
    );
};
export default ProfotionalSkill;