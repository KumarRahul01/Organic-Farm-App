import React from "react";
import Title from "./Slider/Title";
import VegesComponent from "./VegesComponent";

const TopProducts = () => {

  const cartItems = [];

  return (
    <>
      <div className="sm:w-10/12 px-3 sm:px-0 sm:mx-auto sm:mt-16">
        <Title title={"Top Products"} />
        <VegesComponent cartItems={cartItems} />
      </div>
    </>
  );
};

export default TopProducts;
