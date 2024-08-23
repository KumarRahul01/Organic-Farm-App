import React, { useContext, useEffect, useState } from "react";
import toast from "react-hot-toast";
import { MdDelete } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header/Header";
import axios from "axios";
import { ShoppingContext } from "../context/ShoppingContext";
import { PaymentContext } from "../context/PaymentContext";

const Cart = () => {
  const { setCartQuantity } = useContext(ShoppingContext);
  const { orderHandler } = useContext(PaymentContext);

  const navigate = useNavigate();

  let itemData = JSON.parse(localStorage.getItem("cartItems"));

  useEffect(() => {
    if (itemData) {
      setCartQuantity(itemData.length);
    }
  }, [itemData]);

  if (
    !itemData ||
    itemData === null ||
    itemData === undefined ||
    itemData.length === 0
  ) {
    return (
      <>
        <Header />
        <div className="sm:w-10/12 px-3 sm:px-0 sm:mx-auto text-center">
          <h1 className="text-xl sm:text-3xl font-semibold text-center my-10">
            Shopping Cart
          </h1>
          <h3 className="my-2 text-lg sm:text-2xl mt-10 sm:mt-20 font-semibold">
            Oops ....
          </h3>
          <p className="text-lg sm:text-xl font-medium md:mt-5">
            No items in the cart.
          </p>
          <button
            className="bg-green-500 text-white px-4 py-[6px] rounded-md my-5"
            onClick={() => navigate("/")}
          >
            Go Back
          </button>
        </div>
      </>
    );
  }

  const removeFromCart = (item) => {
    console.log(`This is item: ${item.prodId}`);
    itemData = itemData.filter((myItem) => myItem.prodId !== item.prodId);
    console.log("This is new Data", itemData);
    localStorage.setItem("cartItems", JSON.stringify(itemData));
    setTimeout(() => {
      window.location.reload();
    }, 500);
    toast.success(`${item.name} removed from cart`);
  };

  const increaseHandler = (item) => {
    let newData = JSON.parse(localStorage.getItem("cartItems"));
    newData.filter((myItem) => {
      if (myItem.prodId === item.prodId) {
        myItem.quantity += 1;
      }
    });
    localStorage.setItem("cartItems", JSON.stringify(newData));
    window.location.reload();
  };

  const decreaseHandler = (item) => {
    let newData = JSON.parse(localStorage.getItem("cartItems"));
    newData.filter((myItem) => {
      if (myItem.prodId === item.prodId) {
        myItem.quantity -= 1;
        if (myItem.quantity <= 0) {
          toast.error(`${item.name} removed from cart`);
          return (newData = newData.filter(
            (myItem) => myItem.prodId !== item.prodId
          ));
        }
      }
    });
    localStorage.setItem("cartItems", JSON.stringify(newData));
    setTimeout(() => {
      window.location.reload();
    },300);
  };

  return (
    <>
      <Header />
      <div className="sm:w-10/12 px-3 sm:px-0 sm:mx-auto">
        <h1 className="text-xl sm:text-3xl font-semibold underline underline-offset-4 text-center my-10">
          Shopping Cart
        </h1>
        {/* cart Ites */}

        <div className="grid sm:grid-cols-2 sm:gap-10 gap-5 overflow-x-scroll sm:overflow-hidden z-10">
          {itemData.map((item, i) => {
            return (
              <div
                className="bg-gray-200 rounded-md py-2 sm:p-2 relative mb-5 sm:mb-0"
                key={i}
              >
                <div className="flex items-center justify-between px-5 sm:px-0 ">
                  <div className="w-36 sm:w-60 -ml-5 sm:ml-0">
                    <img
                      className="w-fit object-cover"
                      src={item.img}
                      alt={item.name}
                    />
                  </div>
                  <div className="sm:px-24 px-10">
                    <h2
                      className={`font-semibold sm:text-2xl text-lg sm:mb-5 mb-3`}
                    >
                      {item.name}
                    </h2>
                    <p className="sm:text-lg font-medium numFont">
                      Quantity:{" "}
                      <button
                        className="w-5 bg-gray-400 mr-1"
                        onClick={() => increaseHandler(item)}
                      >
                        +
                      </button>
                      <span className="font-semibold text-green-500">
                        {item.quantity}
                      </span>
                      <button
                        className="w-5 bg-gray-400 ml-1"
                        onClick={() => decreaseHandler(item)}
                      >
                        -
                      </button>
                    </p>
                    <p className="sm:text-lg font-medium numFont">
                      Price:{" "}
                      <span className="font-semibold text-green-500">
                        {" "}
                        ₹ {item.currPrice * item.quantity}
                      </span>
                    </p>
                  </div>
                  <div className="absolute top-[50%] right-0 ">
                    <button
                      className="sm:pr-10 pr-5"
                      onClick={() => removeFromCart(item)}
                    >
                      <MdDelete size={"1.6rem"} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="flex justify-end items-center">
          <button
            className="w-fit bg-green-500 hover:bg-green-600 hover:ring-2 ring-green-500 transition-all duration-150 text-white px-4 py-2 rounded-md font-medium my-5"
            onClick={() => orderHandler()}
          >
            Order Now
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
