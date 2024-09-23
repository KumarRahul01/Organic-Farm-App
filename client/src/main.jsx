import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ShoppingContextProvider from "./context/ShoppingContext.jsx";
import { GoogleOAuthProvider } from "@react-oauth/google";
import PaymentContextProvider from "./context/PaymentContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <GoogleOAuthProvider clientId="485358143068-9ljnggu7q2hoagomrnp4hsjvork8u6ks.apps.googleusercontent.com">
      <ShoppingContextProvider>
        <PaymentContextProvider>
          <Toaster position="top-right" />
          <App />
        </PaymentContextProvider>
      </ShoppingContextProvider>
    </GoogleOAuthProvider>
  </BrowserRouter>
);
