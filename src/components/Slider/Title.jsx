import React from "react";

const Title = ({ title }) => {
  return (
    <>
      <div className="w-full">
        <h1 className="sm:text-3xl text-2xl font-semibold text-center">
          {title}
        </h1>
        <div className="flex justify-center items-center mt-2">
          <div className="bg-green-500 h-1 w-16 rounded"></div>
        </div>
      </div>
    </>
  );
};

export default Title;
