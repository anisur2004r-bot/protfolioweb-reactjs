import React from 'react';
import line from "../../../assets/Image/nodes.png";

const Education = () => {
    return (
        <div data-aos="flip-up" className="py-10 px-4 md:px-48">

            {/* Timeline Wrapper */}
            <div className="relative container mx-auto flex flex-col gap-10 border-l-4 border-gray-700 pl-8 md:pl-12">

                {/* Node Icons */}
                <img
                    className="absolute top-4 left-[-13px] w-8 rotate-45 bg-gray-600 rounded-tl-xl rounded-br-xl"
                    src={line}
                    alt=""
                />
                <img
                    className="absolute top-1/2 left-[-13px] w-8 rotate-45 bg-gray-600 rounded-tl-xl rounded-br-xl -translate-y-1/2"
                    src={line}
                    alt=""
                />
                <img
                    className="absolute bottom-4 left-[-13px] w-8 rotate-45 bg-gray-600 rounded-tl-xl rounded-br-xl"
                    src={line}
                    alt=""
                />

                {/* Card 1 */}
                <div className="bg-[#1C1F23] rounded-xl shadow-gray-700 shadow-xl border border-gray-800 
                    px-6 sm:px-10 py-5 flex flex-col gap-3">
                    <h2 className="text-xl font-bold">Diploma In Engineering</h2>
                    <h3 className="text-gray-300">TMSS Polytechnic Institute Rangpur <span>(2021–2025)</span></h3>
                    <h4 className="text-gray-300">
                        Department: <span className="font-bold text-[#F10148]">Computer Science and Technology</span>
                    </h4>
                    <p className="text-gray-500 text-justify">
                        Successfully completed a 4-year diploma program in Computer Science and Technology,
                        gaining strong foundational knowledge in programming, web development, database
                        management, and networking. Focused on hands-on projects using HTML, CSS,
                        JavaScript, React, and Tailwind CSS.
                    </p>
                </div>

                {/* Card 2 */}
                <div className="bg-[#1C1F23] rounded-xl shadow-gray-700 shadow-xl border border-gray-800 
                    px-6 sm:px-10 py-5 flex flex-col gap-3">
                    <h2 className="text-xl font-bold">Secondary School Certificate (SSC)</h2>
                    <h3 className="text-gray-300">
                        Gandhamarua School & College <span>(2015–2021)</span>
                    </h3>
                    <h4 className="text-gray-300">
                        Major: <span className="font-bold text-[#F10148]">Science</span>
                    </h4>
                    <p className="text-gray-500 text-justify">
                        Completed Secondary School Certificate (SSC) with a major in Science. Developed 
                        a strong foundation in Physics, Chemistry, and Mathematics, along with basic 
                        computing knowledge and problem-solving skills.
                    </p>
                </div>

                {/* Card 3 */}
                <div className="bg-[#1C1F23] rounded-xl shadow-gray-700 shadow-xl border border-gray-800 
                    px-6 sm:px-10 py-5 flex flex-col gap-3">
                    <h2 className="text-xl font-bold">Training</h2>
                    <h3 className="text-gray-300">Bd Calling Academy</h3>
                    <h4 className="font-bold text-[#F10148]">Web Development</h4>
                    <p className="text-gray-500 text-justify">
                        Completed industrial training at BD Calling IT, focusing on real-world web development
                        projects. Gained practical experience building responsive websites using React,
                        Tailwind CSS, and JavaScript. Learned best practices in frontend development,
                        version control, and team collaboration.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Education;
