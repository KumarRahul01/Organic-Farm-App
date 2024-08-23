import React, { useEffect } from "react";
import { IoLogoTwitter } from "react-icons/io";
import { IoLogoFacebook } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io";
// aos
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Footer = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <>
      <div className="w-full bg-green-500 pb-5">
        <div className="sm:w-10/12 mx-auto px-3 sm:px-0 grid grid-rows-4 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-4 md:grid-rows-1 gap-5 text-center sm:text-left">
          {/* Brand Name */}
          <div className="text-slate-100" data-aos="fade-right">
            <h1 className="text-xl font-semibold mb-3 mt-5 text-black">
              Organic Farm
            </h1>
            <p className="mb-1">A108 Adam Street</p>
            <p className="mb-5">New York, NY 535022</p>

            <div className="">
              <p className="font-medium text-zinc-900">
                Phone:{" "}
                <span className="font-normal ml-1">+1 5589 55488 55</span>
              </p>
              <p className="font-medium text-zinc-900">
                Email: <span className="font-normal ml-1">info@gmail.com</span>
              </p>
            </div>
          </div>

          {/* Useful links */}
          <div data-aos="fade-right" data-aos-delay="300" className="">
            <h1 className="font-semibold text-xl mb-3 mt-5">Useful Links</h1>
            <ul className="">
              <li className="mb-2 arrow">
                <a href="/" className="text-slate-100 hover:text-zinc-800 text-[16px]">
                  Home
                </a>
              </li>
              <li className="mb-2 arrow">
                <a href="/about-us" className="text-slate-100 hover:text-zinc-800 text-[16px]">
                  About Us
                </a>
              </li>
              <li className="mb-2 arrow">
                <a href="/contact-us" className="text-slate-100 hover:text-zinc-800 text-[16px]">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* More links */}
          <div data-aos="fade-right" data-aos-delay="300" className="">
            <h1 className="font-semibold text-xl mb-3 mt-5">My Links</h1>
            <ul>
              <li className="mb-2 arrow">
                <a
                  href="https://github.com/kumarRahul01"
                  target="_blank"
                  className="text-slate-100 hover:text-zinc-800"
                >
                  Github
                </a>
              </li>
              <li className="mb-2 arrow">
                <a
                  href="https://www.linkedin.com/in/rahul-kumar-chandra"
                  target="_blank"
                  className="text-slate-100 hover:text-zinc-800"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>

          {/* Follow Us */}
          <div data-aos="fade-right" data-aos-delay="700" className="">
            <h1 className="font-semibold text-lg mb-3 mt-5">Follow Us</h1>
            <p className="text-sm text-zinc-100">
              Follow us on various social networks and make your lifestyle
              healty with Organic Farm
            </p>
            <div className="flex justify-between pr-5 mt-5">
              <div className="border border-zinc-800 p-2 rounded-full hover:border-white hover:text-white">
                <a href="#">
                  <IoLogoTwitter size={"26px"} />
                </a>
              </div>

              <div className="border border-zinc-800 p-2 rounded-full hover:border-white hover:text-white">
                <a href="#">
                  <IoLogoFacebook size={"26px"} />
                </a>
              </div>

              <div className="border border-zinc-800 p-2 rounded-full hover:border-white hover:text-white">
                <a href="https://github.com/kumarRahul01" target="_blank">
                  <FaGithub size={"26px"} />
                </a>
              </div>

              <div className="border border-zinc-800 p-2 rounded-full hover:border-white hover:text-white">
                <a
                  href="https://www.linkedin.com/in/rahul-kumar-chandra"
                  target="_blank"
                >
                  <IoLogoLinkedin size={"26px"} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
