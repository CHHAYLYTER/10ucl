import React from "react";
import Home from "../views/home/home"
import Shop from "../views/shop/shop";
import About from "../views/about/about";
import Blog from "../views/blog/blog";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function RouteComponent() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/about" element={<About />} />
      <Route path="/blog" element={<Blog />} />
    </Routes>
  );
}
export default RouteComponent;