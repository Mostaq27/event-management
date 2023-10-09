import React from "react";
import { FaAngleRight } from "react-icons/fa";
import  person  from "../../../assets/about.jpg";
import  parts  from "../../../assets/wedding-arch.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const About = () => {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, [])
  return (
    <>
      <div className="hero min-h-screen bg-base-200 pt-32"
        data-aos="fade-down"
        data-aos-easing="linear"
        data-aos-duration="1500">
        <div className="hero-content flex flex-col gap-20 lg:flex-row mx-10">
          <div className="lg:w-1/2 relative">
            <img src={person} className="w-3/4 rounded-lg shadow-2xl" />
            <img
              src={parts}
              className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-white shadow-2xl"
            />
          </div>
          <div className="lg:w-1/2 space-y-5 p-4">
            <h3 className="text-5xl  font-bold text-blue-600">About Us</h3>
            <h1 className="text-3xl font-bold ">
              We are qualified & of experience in this field
            </h1>
            <p className="text-lg font-medium text-gray-400">
            With a wealth of experience and a proven track record in social event management, we bring your celebrations to life. Our dedicated team of professionals is committed to crafting unforgettable experiences, whether it's a wedding, birthday party, corporate gathering, or any special occasion. From meticulous planning to seamless execution, we take care of every detail, allowing you to savor every moment of your event.
            </p>
             
            <button className="btn btn-outline btn-primary  ">
              <div className="flex items-center gap-2 m-2">
                <p>Get More Info </p><p><FaAngleRight /></p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;

 