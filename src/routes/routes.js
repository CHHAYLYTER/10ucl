import React from "react";
import Home from "../views/home/home"
import About from "../views/about/about";
import Popular from "../views/popular/popular";
import Order from "../views/order/order";
import Blogs from "../views/blogs/blogs";
import BoBo from "../views/BoBo/bobo";


import { Routes, Route } from "react-router-dom";

function RouteComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/popular" element={<Popular />} />
      <Route path="/order" element={<Order />} />
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/fsalkfhsdal" element={<BoBo />} />

    </Routes>
  );
}
export default RouteComponent;