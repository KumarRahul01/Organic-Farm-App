import React, { useContext } from "react";
import LocationBar from "./Header-Parts/LocationBar";
import LogoBar from "./Header-Parts/LogoBar";
import Navbar from "./Header-Parts/Navbar";

const Header = () => {


  return (
    <>
      {/* Location NavBar */}
      <div className="w-full bg-white  border-b-2">
        <LocationBar />
      </div>

      {/* Logo & Cart Navbar */}
      <div className="w-full bg-white">
        <LogoBar />
      </div>

      {/* Navbar */}
      <div className="w-full bg-gray-800">
        <Navbar />
      </div>
    </>
  );
};

export default Header;
