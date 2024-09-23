import React, { useContext, useEffect, useState } from "react";
import { TbShoppingBag } from "react-icons/tb";
import { BiSolidLeaf } from "react-icons/bi";
import { ShoppingContext } from "../../../context/ShoppingContext";
import { useNavigate } from "react-router-dom";

const LogoBar = () => {
  const navigate = useNavigate();

  const {cartQuantity} = useContext(ShoppingContext);


  return (
    <>
      <div className="sm:w-10/12 px-3 sm:px-0 mx-auto text-xl py-2">
        <div className="flex items-center justify-between">
          <div className="font-medium flex items-center flex-row-reverse">
            <p className="font-medium px-1 sm:px-0 cursor-pointer" onClick={()=> navigate('/')}>Orgainc Farm</p>
            <BiSolidLeaf color={"#22c55e"} size={"1.6rem"} />
          </div>

          <button className="relative" onClick={() => navigate("/cart")}>
            <div>
              <TbShoppingBag size={"2rem"} />
            </div>
            <span className="absolute bottom-2 right-0 text-xs bg-red-500 text-white rounded-full px-1">
              {cartQuantity}
            </span>
          </button>
        </div>
      </div>
    </>
  );
};

export default LogoBar;
