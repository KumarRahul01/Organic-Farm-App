import React, { useContext, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import toast from "react-hot-toast";
import { FaUser } from "react-icons/fa";
import { ShoppingContext } from "../../../context/ShoppingContext";


const LocationBar = () => {

  const {user, login, isLoggedIn, setIsLoggedIn} = useContext(ShoppingContext);

  const userLogin = () => {
    login();
  }

  const userLogout = () => {
    localStorage.removeItem('userData');
    setIsLoggedIn(false);
    toast.success("Logged out successfully!");
  }




  return (
    <>
      <div className="sm:w-10/12 px-3 sm:px-0 mx-auto bg-white flex justify-between items-center py-[2px]">
        <div className="flex items-center text-xs sm:text-sm">
          <FaMapMarkerAlt color={"#22c55e"} size={"1.15rem"} />{" "}
          <div className="px-1">Store Location: Noida | India</div>
        </div>

        {/* SignUp/ Login */}
        <div className="flex items-center">
          {isLoggedIn ? (
            <div className="flex items-center gap-2">
              <div className="sm:pr-5 sm:flex items-center gap-1 text-green-500 hidden"> <FaUser /> <span className="text-black font-medium">{user}</span></div>
              <button className="bg-green-500 text-white px-3 py-1 rounded-md text-sm sm:text-base" onClick={() => userLogout()}>Logout</button>
            </div>
          ) : (
            <button className="bg-green-500 text-white px-3 py-1 rounded-md text-sm sm:text-base" onClick={()=> userLogin()}>Sign In</button>
          )}
        </div>
      </div>
    </>
  );
};

export default LocationBar;
