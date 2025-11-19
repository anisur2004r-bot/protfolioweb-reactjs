import React, { useEffect } from 'react';
import Home from './Page/Home/Home';
import About from './Page/About/About';
import Services from './Page/Services/Services';
import Project from './Page/Project/Project';
import Resume from './Page/Resume/Resume';
import Testimonial from './Page/Testimonial/Testimonial';
import Pricing from './Page/Pricing/Pricing';
import Contact from './Page/Contact/Contact';
import Header from './Componants/Shared/Header/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Footer from './Componants/Footer';




const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000,
      once: true,     
    });
  }, []);

  return (
    <div className='bg-[#212428] text-white'>
      <Header></Header>
      <Home></Home>
      <About></About>
      <Services></Services>
      <Project></Project>
      <Resume></Resume>
      <Testimonial></Testimonial>
      <Pricing></Pricing>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  );
};

export default App;