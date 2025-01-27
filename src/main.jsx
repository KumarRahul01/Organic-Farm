import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ToastContainer } from 'react-toastify';
import CartDetails from "./context/ShoppingContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <CartDetails>
      <Toaster position="top-right" />
      <App />
      <ToastContainer />
    </CartDetails>
  </BrowserRouter>
);
