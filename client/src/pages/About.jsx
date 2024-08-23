import React, { useEffect, useState } from "react";
import img from "../assets/bg_img.png";
import { BsPeople } from "react-icons/bs";
import Navbar from "../components/Header/Header-Parts/Navbar";

// aos
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../components/Footer";


const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  });

  return (

    <>
    <div className="sm:w-10/12 px-3 sm:mb-10 sm:px-0 mx-auto text-center sm:text-left">
      <h1
        data-aos="fade-down"
        className="text-3xl font-semibold text-center pt-20"
      >
        About Us
      </h1>
      <div className="flex justify-center items-center mt-2">
        <div className="bg-green-500 h-1 w-16 rounded"></div>
      </div>

      <div className="flex flex-col md:flex-row items-center md:gap-10">
        <div
          data-aos="fade-up"
          className="md:w-1/2 overflow-hidden"
        >
          <img className="w-fit object-cover lg:ml-20" src={img} alt="img" />
        </div>
        <div className="sm:w-1/2 w-full md:p-0">
          <div data-aos="fade-left">
            <h1 className="md:text-3xl font-semibold">
              Upskilling Edtech
            </h1>
            <p className="text-lg mt-5 text-gray-600 primary-font">
              Edtech platform offering expert mentorship with our tech-powered
              courses in various languages of India.
            </p>
          </div>

          {/* 1st template */}
          <div
            data-aos="zoom-in"
            className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5"
          >
            <div
              className="bg-green-500 w-fit p-2 md:p-5 rounded"
              style={{ color: "white" }}
            >
              <BsPeople size={"28px"} />
            </div>
            <div className="w-full">
              <h2 className="text-xl font-medium">
                The Vernacular Upskilling Edtech
              </h2>
              <p className="text-base text-gray-600 primary-font lg:mt-1 mt-2">
                Explore Our Courses | Bharat ka Career Launchpad
              </p>
            </div>
          </div>

          {/* 2nd template */}
          <div
            data-aos="zoom-in"
            className="flex flex-col lg:flex-row justify-center items-center gap-5 mt-5"
          >
            <div
              className="bg-green-500 w-fit p-2 md:p-5 rounded"
              style={{ color: "white" }}
            >
              <BsPeople size={"28px"} />
            </div>
            <div className="w-full">
              <h2 className="text-xl font-medium">
                Build Your Career, Your Way
              </h2>
              <p className="text-base text-gray-600 primary-font lg:mt-1 mt-2">
                Our Learners Work at Global Companies & Startups
              </p>
            </div>
          </div>

          {/* para */}
          <p
            data-aos="zoom-in"
            className="text-lg mt-5 text-gray-600 primary-font"
          >
            Master industry-relevant skills with our vernacular online courses.
            Choose your program, get certified, and open doors to lucrative
            career opportunities.
          </p>
          <div className="flex flex-col justify-center sm:flex-row items-center mb-12 lg:mb-0 lg:flex-row gap-10 mt-10">
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>

  );
};

export default About;