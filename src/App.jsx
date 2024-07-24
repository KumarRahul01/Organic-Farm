import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Cart from "./components/Cart";
import About from "./components/About";
import Blog from "./components/Blog";
import Conatct from "./Conatct";


const App = () => {
  return (
    <div>
      <Routes>
        <Route exact path="/Organic-Farm/" element={<Home />} />
        <Route path="/Organic-Farm/about" element={<About />} />
        <Route path="/Organic-Farm/blog" element={<Blog />} />
        <Route path="/Organic-Farm/contact" element={<Conatct />} />
        <Route path="/Organic-Farm/cart" element={<Cart />} />
      </Routes>
    </div>
  );
};

export default App;
