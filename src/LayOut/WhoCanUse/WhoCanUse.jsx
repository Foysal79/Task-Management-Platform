
import Lottie from "lottie-react";
import Animation from"../../../public/Animation - 1703170701612.json"
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

const WhoCanUse = () => {
    useEffect(() => {
        AOS.init({
          duration: 1000, 
          easing: 'ease-in-out', 
        });
      }, []);
    return (
        <div className="bg-[#F8FAFC] lg:flex justify-around items-center font-Inter" >


            <div className=" flex-1 lg:pl-20" >
            <Lottie className=" w-8/12 lg:w-full mx-auto" animationData={Animation} ></Lottie>
            </div>
            
            
            <div data-aos="fade-up" className="flex-1 space-y-3 lg:pr-20 w-10/12 mx-auto mb-10 " >
            <h1 data-aos="fade-up" className="text-3xl font-bold" >Who Benefits Most from Our Platform?</h1>
            <p data-aos="fade-up" className="text-justify" >Discover the Power of Streamlined Task Management: Our website offers a comprehensive task management solution designed to benefit individuals and teams across various industries. From developers organizing coding sprints to corporate professionals handling project timelines and bankers managing financial tasks, our platform provides intuitive tools for efficient task allocation, progress tracking, and collaboration. Experience enhanced productivity, seamless workflow management, and improved project outcomes, regardless of your industry or profession, by utilizing our task management website.</p>


            <div data-aos="fade-up" className="flex " >
            <input type="text" placeholder="Enter Email to Subscribe" className="input input-bordered w-full " />
            <button  className="btn bg-[#6D67E4] text-white hover:bg-[#6D67E4] 
            relative right-24  " >Subscribe</button>

            </div>
            </div>
            
            
        </div>
    );
};

export default WhoCanUse;