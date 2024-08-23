import React, { useContext, useState } from "react";
import { featuredVegetables as vege } from "../assets/featuredVeges.js";
import toast from "react-hot-toast";
import { ShoppingContext } from "../context/ShoppingContext.jsx";

const VegesComponent = ({ cartItems }) => {
  const { cartQuantity, setCartQuantity } = useContext(ShoppingContext);

  function giveStars(num) {
    if (num === 1) {
      return (
        <span className="text-yellow-500 text-2xl">
          &#9733;&#9734;&#9734;&#9734;&#9734;
        </span>
      );
    } else if (num === 2) {
      return (
        <span className="text-yellow-500 text-2xl">
          &#9733;&#9733;&#9734;&#9734;&#9734;
        </span>
      );
    } else if (num === 3) {
      return (
        <span className="text-yellow-500 text-2xl">
          &#9733;&#9733;&#9733;&#9734;&#9734;
        </span>
      );
    } else if (num === 4) {
      return (
        <span className="text-yellow-500 text-2xl">
          &#9733;&#9733;&#9733;&#9733;&#9734;
        </span>
      );
    } else {
      return (
        <span className="text-yellow-500 text-2xl">
          &#9733;&#9733;&#9733;&#9733;&#9733;
        </span>
      );
    }
  }

  const addToCart = (vege) => {
    let matchingItem;

    cartItems.map((item) => {
      if (item.prodId === vege.id) {
        matchingItem = item;
      }
    });

    if (matchingItem) {
      toast.success(`${vege.name} added to cart`);
      matchingItem.quantity += 1;
      // return;
    } else {
      setCartQuantity(cartItems.length + 1);
      cartItems.push({
        prodId: vege.id,
        name: vege.name,
        img: vege.img,
        currPrice: vege.currPrice,
        quantity: 1,
      });
    }
    if (!matchingItem) {
      toast.success(`${vege.name} added to cart`);
    }
    console.log(cartItems);
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  };

  return (
    <>
      <div className="w-full bg-red-90 rounded-md gap-x-5 gap-y-10 flex flex-col sm:flex-row mt-10 pb-10 flex-wrap justify-center items-center">
        {/* Render only 5 objects for better UI/UX */}
        {vege.map((vege) => {
          return (
            <div
              key={vege.id}
              className="h-[26rem] w-[18rem] rounded-md border-2 hover:border-green-500 transition-all duration-150 flex flex-col justify-center items-center"
            >
              <div className="h-[200px] flex justify-center items-center overflow-hidden imgContainer">
                <img
                  className="object-cover transition-all duration-150"
                  src={vege.img}
                  alt={vege.name}
                />
              </div>
              <h3 className="text-xl font-medium px-3">{vege.name}</h3>
              <div className="flex items-center gap-5 px-3 sm:pt-2">
                <h4 className="text-lg font-medium line-through numFont">
                  ₹ {vege.prevPrice}
                </h4>
                <h4 className="text-lg font-semibold numFont">
                  ₹ {vege.currPrice}
                </h4>
              </div>
              <div className="px-3 flex items-center gap-2">
                {giveStars(vege.stars)}
                {/* <div className="hover:underline cursor-pointer">
                  {vege.ratings}
                </div> */}
              </div>
              <div className="w-10/12 mx-auto mt-3">
                <button
                  className="w-full text-center p-[6px] bg-green-500 hover:bg-green-600 transition-all duration-150 text-white rounded-md"
                  onClick={() => addToCart(vege)}
                >
                  Add To Cart
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default VegesComponent;
