import { createContext, useState } from "react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import toast from "react-hot-toast";

export const ShoppingContext = createContext();

const ShoppingContextProvider = (props) => {
  const cartItems = [];

  const [cartQuantity, setCartQuantity] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState("");

  let userData;

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const res = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          {
            headers: {
              Authorization: `Bearer ${response.access_token}`,
            },
          }
        );
        userData = res.data;
        toast.success(`Welcome ${userData.name}`);
        setIsLoggedIn(true);
        setUser(userData.name);
      } catch (error) {
        console.log(error);
      }
    },
  });


  return (
    <ShoppingContext.Provider
      value={{
        cartQuantity,
        setCartQuantity,
        cartItems,
        login,
        user,
        isLoggedIn,
        setIsLoggedIn,
      }}
    >
      {props.children}
    </ShoppingContext.Provider>
  );
};

export default ShoppingContextProvider;
