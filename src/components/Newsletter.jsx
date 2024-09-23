import React from "react";
import Title from "./Slider/Title";
import toast from "react-hot-toast";

const Newsletter = () => {

  const clickHandler = (e) => {
    e.preventDefault();
    toast.success("Subscribed Successfully!");

    console.log(e.target.value);
  };

  return (
    <div className="w-full bg-[#EDF2EE] mt-14 lg:mt-20">
      <div className="w-10/12 mx-auto py-5 lg:p-10">
        <Title title={"Subscribe Our Newsletter"} />
        <p className="text-center lg:mt-5 hidden lg:block">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit Lorem ipsum
          dolor sit amet.
        </p>
        <p className="text-center lg:-mt-5 lg:hidden block">
          Lorem ipsum dolor sit, amet consectetur.
        </p>

        {/* form */}
        <form className="w-full my-10">
          <div className="w-full flex flex-col lg:flex-row justify-center gap-5 items-center">
            <input
              type="text"
              placeholder="Your email address"
              className="w-full lg:w-1/2 p-2 rounded-md"
              name="subscribe"
              id="subscribe"
            />
            <button className="text-white bg-green-500 font-medium p-2 rounded-md" onClick={(e)=> clickHandler(e)}>
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default React.memo(Newsletter);
