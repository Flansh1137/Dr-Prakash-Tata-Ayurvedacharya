import React from "react";
import { Routes, Route } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Home from "../pages/Home";
import Products from "../pages/Products";
import ProductDetail from "../pages/ProductDetail";
import CategoryProductList from "../pages/CategoryProductList";
import Login from "../pages/Login";
import Signup from "../pages/Login";
import Achievements from "../pages/AchievementPage";
import Contact from "../pages/Contact";
import About from "../pages/About";
export default function AppRouter() {
  return (
    <>
      <Navbar />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/categorylist" element={CategoryProductList} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/achievements" element={<Achievements />} />

          <Route
            path="/categories/:categoryName"
            element={<CategoryProductList />}
          />
        </Routes>
      </main>

      <Footer />
    </>
  );
}
