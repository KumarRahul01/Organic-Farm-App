import React, { useState } from "react";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const list = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "About Us",
      path: "/about-us",
    },
    {
      name: "Contact Us",
      path: "/contact-us",
    },
  ];

  const [showNavbar, setShowNavbar] = useState(false);

  return (
    <>
      <div className="sm:w-10/12 px-3 sm:px-0 mx-auto py-2 text-white">
        {/* Mobile Nav */}
        <div className="flex sm:hidden items-center justify-between relative">
          <p className="font-medium px-1 sm:px-0">+91 1234567890</p>
          <button className="" onClick={() => setShowNavbar(!showNavbar)}>
            <IoMdMenu size={"1.6rem"} />

            {/* nav Contrainer */}
            {showNavbar ? (
              <div
                className={`absolute w-full left-0 top-10 bg-gray-800 text-white shadow-sm py-2 px-4 ${
                  showNavbar ? "slider-open" : ""
                }`}
              >
                {list.map((item) => (
                  <a
                    href={item.path}
                    key={item.name}
                    className="block px-4 py-2 text-sm hover:bg-gray-100"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            ) : null}
          </button>
        </div>

        {/* Destop Nav */}
        <div className="hidden sm:flex justify-between items-center">
          <div className="flex items-center gap-12 py-1">
            {list.map((item) => (
              <a
                href={item.path}
                key={item.name}
                className="font-medium hover:text-gray-400 transition-all duration-150"
              >
                {item.name}
              </a>
            ))}
          </div>
          {/* Mobile No. */}
          <p className="font-medium">+91 1234567890</p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
