
import { Helmet } from 'react-helmet-async';
import './Banner.css'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const Home = () => {

    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: 'ease-in-out', 
        });
      }, []);

    return (
        <div className="background1 font-Inter " >
            <Helmet>
                <title> ST || Home </title>
            </Helmet>

            <div data-aos="fade-up" className='space-y-2 md:space-y-3 w-9/12 mx-auto md:mx-0 md:w-full  lg:w-5/12 pt-16  md:pt-20 md:pl-10 lg:pt-40 lg:pl-20 '  >
            <h2 data-aos="fade-up" className=' text-center md:text-start  font-bold text-3xl md:text-5xl text-white' >Manage work <br /> <span className='text-[#F2F7A1]' > Efficiently
                </span> </h2>
            <h4 data-aos="fade-up" className=' text-lg md:text-2xl font-semibold md:font-bold text-white' >Plan, Track and Organise your work.</h4>
            <p data-aos="fade-up" className='text-sm text-justify md:text-start font-light md:font-medium text-white' >An Intranet platform to Manage projects, organise work and focus on what’s important.</p>
            <div data-aos="fade-up" className='flex justify-center md:justify-start ' >
            <Link to="/dashboard" ><button  className='mt-10 md:mt-0 btn text-lg font-bold bg-[#F2F7A1] hover:bg-[#F2F7A1] text-black' >Let’s Explore</button></Link>
            </div>
            </div>
            
        </div>
    );
};

export default Home;