import { createContext, useContext } from "react";
import { ShoppingContext } from "./ShoppingContext";
import toast from "react-hot-toast";
import axios from "axios";

export const PaymentContext = createContext();

const PaymentContextProvider = (props) => {

  const { isLoggedIn} = useContext(ShoppingContext);

  // CARD NUMBER - 4208585190116667 for payment PhonePe

  // PAYMENT CONTEXT START

  const itemData = JSON.parse(localStorage.getItem("cartItems"));

  const calculateTotalAmt = () => {
    let total = 0;
    itemData.forEach((item) => {
      total += item.currPrice * item.quantity;
    });
    console.log("Total", total);
    return total;
  };

  const orderHandler = async () => {
    const totalAmt = calculateTotalAmt();

    if (!isLoggedIn) {
      toast.error("Please Sign In to place order");
      return;
    }

    // Data inside function

    let data = {
      name: "Rahul",
      amount: totalAmt,
      number: "1234567890",
      MID: "MID" + Date.now(),
      transactionId: "TID" + Date.now(),
    };

    try {
      await axios
        .post("http://localhost:8000/order", data)
        .then((res) => {
          console.log(res.data);

          if (res.data.success === true) {
            window.location.href =
              res.data.data.instrumentResponse.redirectInfo.url;
          }
        })
        .then(() => {
          toast.success("Order placed successfully!");
          localStorage.clear();
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  // PAYMENT CONTEXT END

  
  return (
    <PaymentContext.Provider value={{ orderHandler }}>
      {props.children}
    </PaymentContext.Provider>
  );
  
}

export default PaymentContextProvider;