import React from "react";
import { assets } from "../../assets/myImages.js";
import { LiaShippingFastSolid } from "react-icons/lia";
import { BiSupport } from "react-icons/bi";
import { TbShoppingBagCheck } from "react-icons/tb";
import { PiPackage } from "react-icons/pi";

const Slider = () => {
  return (
    <>
      <div className="sm:w-10/12 px-3 sm:px-0 sm:mx-auto relative">
        <div className="w-full flex justify-between sm:items-center flex-col sm:flex-row p-5 my-5 rounded-md bg-[#EDF3EF]">
          {/* left */}
          <div className="sm:w-1/2 mx-auto sm:pl-10 text-center sm:text-left">
            <h3 className="text-green-500 font-semibold sm:text-xl text-xl">
              Welcome To Organic Farm
            </h3>
            <h2 className="sm:text-6xl font-semibold mt-3 sm:w-10/12 text-3xl">
              Fresh & Healty <span className="sm:text-5xl">Organic Food</span>
            </h2>
            <h4 className="text-lg font-medium mt-5">
              Sale Upto{" "}
              <span className="text-orange-400 font-semibold text-xl">40% OFF</span>
            </h4>
          </div>

          {/* right */}
          <div className="sm:w-1/2 mx-auto">
            <img
              src={assets.bg_img}
              alt="slider"
              className="object-cover w-fit sm:ml-10"
            />
          </div>
        </div>
      </div>

      {/* Carousel */}
      <div className="sm:w-10/12 px-3 sm:px-0 sm:mx-auto absolute hidden xl:block bottom-14 right-32 h-20 bg-white shadow-lg rounded-md">
          <div className="w-full flex justify-around items-center h-full px-4 py-2">
            <div className="flex items-center gap-4">
              {/* img */}
              <LiaShippingFastSolid
                size={"1.8rem"}
                color={'#22c55e'}
              />
              {/* text */}
              <div>
                <h2 className="text-[16px] font-bold">Free Shiping</h2>
                <p className="text-xs font-light mt-1">
                  Free shiping on all your orders
                </p>
              </div>
            </div>

            {/* 2nd */}
            <div className="flex items-center gap-4">
              {/* img */}
              <BiSupport size={"1.8rem"} color={'#22c55e'} />
              {/* text */}
              <div>
                <h2 className="text-[16px] font-bold">Customer Support 24x7</h2>
                <p className="text-xs font-light mt-1">
                  Instant access to support
                </p>
              </div>
            </div>

            {/* 3rd */}
            <div className="flex items-center gap-4">
              {/* img */}
              <TbShoppingBagCheck size={"1.8rem"} color={'#22c55e'} />
              {/* text */}
              <div>
                <h2 className="text-[16px] font-bold">100% Secure Payment</h2>
                <p className="text-xs font-light mt-1">
                  We ensure your money is safe
                </p>
              </div>
            </div>

            {/* 4th */}
            <div className="flex items-center gap-4">
              {/* img */}
              <PiPackage size={"1.8rem"} color={'#22c55e'} />
              {/* text */}
              <div>
                <h2 className="text-[16px] font-bold">Money Back Guarantee</h2>
                <p className="text-xs font-light mt-1">
                  30 Days money back guarantee
                </p>
              </div>
            </div>
          </div>
        </div>
    </>
  );
};

export default Slider;
