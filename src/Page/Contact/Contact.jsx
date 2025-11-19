import React from 'react';
import SectionHeader1 from '../../Componants/Shared/SectionHeader1';
import icon1 from "../../assets/Image/facebook-logo.png"
import icon2 from "../../assets/Image/github.png"
import icon3 from "../../assets/Image/linkedin (1).png"
import icon4 from "../../assets/Image/twitter (1).png"

const Contact = () => {
    return (
        <div id='contact'>
            <SectionHeader1 title={"Contact"} name={"Contact With Me"}></SectionHeader1>
            <div className='grid md:grid-cols-2 items-center justify-center container mx-auto md:px-40 py-20 gap-8 border-b border-gray-700'>
                <div className=' border border-gray-700 shadow-gray-700 shadow-xl w-80 md:w-114 px-8 py-10 flex flex-col gap-4 rounded-xl'>
                    <div className='overflow-hidden border border-gray-700 rounded-xl'>
                        <img className=' rounded-xl hover:scale-110 duration-300' src="https://rainbowit.net/themes/inbio/wp-content/uploads/2021/08/contact1.png" alt="" />
                    </div>
                    <h2 className='text-2xl font-bold text-gray-100'>Md Anisur Rahman</h2>
                    <h3 className='tc'>Frontend Web Developer</h3>
                    <p className='tc'>I am available for freelance work. Connect with me via and call in to my account.</p>
                    <p className='tc'>Phone: <span className='text-gray-100'>+8801914106079</span></p>
                    <p className='tc'>Email: <span className='text-gray-100'>anisur2004r@gmail.com</span></p>
                    <div>
                        <p className='tc'>FIND WITH ME</p>
                        <div className='flex gap-4 mt-4'>
                            <a href='https://www.facebook.com/md.anisur.rahman.764890' target='blank'><img className=' hover:bg-gray-700 duration-300 cursor-pointer px-2 py-1 md:px-3 md:py-3 border-gray-700 bg-gray-800 shadow-xl' src={icon1} alt="" /></a>
                            <a href='https://github.com/anisur2004r-bot' target='blank'><img className=' hover:bg-gray-700 duration-300 cursor-pointer px-2 py-1 md:px-3 md:py-3 border-gray-700 bg-gray-800 shadow-xl' src={icon2} alt="" /></a>
                            <a href='https://www.linkedin.com/in/md-anisur-rahman-2b9544384' target='blank'><img className=' hover:bg-gray-700 duration-300 cursor-pointer px-2 py-1 md:px-3 md:py-3 border-gray-700 bg-gray-800 shadow-xl' src={icon3} alt="" /></a>
                            <a href='https://my-personal-protfolio01.netlify.app/' target='blank'><img className=' hover:bg-gray-700 duration-300 cursor-pointer px-2 py-1 md:px-3 md:py-3 border-gray-700 bg-gray-800 shadow-xl' src={icon4} alt="" /></a>
                        </div>
                    </div>
                </div>
                <div >
                    <div className='border border-gray-700 rounded-xl shadow-gray-700 shadow-xl w-80 md:w-180 flex flex-col items-center justify-center py-10 gap-4'>
                        <div className='grid md:grid-cols-2 gap-7 '>
                            <div>
                                <p>Your Name</p>
                                <input className=' hover:border border-[#FF014F] mt-4 bg-[#191B1E] rounded-md md:w-80 py-3 outline-none' type="text" />
                            </div>
                            <div>
                                <p>Phone Number</p>
                                <input className=' hover:border border-[#FF014F] md:w-80 mt-4 py-3 outline-none  bg-[#191B1E] rounded-md' type="number" />
                            </div>
                        </div>
                        <div>
                            <p>Email</p>
                            <input className=' hover:border border-[#FF014F] mt-4 md:w-167 py-3 outline-none  bg-[#191B1E] rounded-md' type="email" />
                        </div>
                        <div>
                            <p>Subject</p>
                            <input className=' hover:border border-[#FF014F] mt-4 md:w-167 py-3 outline-none bg-[#191B1E] rounded-md' type="text" />
                        </div>
                        <div>
                            <p>Massage</p>
                            <textarea className=' hover:border border-[#FF014F] mt-4 md:w-167 h-50 outline-none bg-[#191B1E] rounded-md' name="" id=""></textarea>
                        </div>
                        <button className=' border border-gray-700 hover:bg-gray-800 cursor-pointer md:w-167 py-2 rounded-md tc md:px-0 px-4'>SEND MASSAGE</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;