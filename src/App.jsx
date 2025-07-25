// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import FloatingIcons from "./component/FloatingIcons";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Products from "./pages/Products";
import Contact from "./pages/Contact";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ProductCategory from "./pages/ProductCategory";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-[#fdf8f3] font-sans scroll-smooth">
      {/* Header Navigation */}
      <Header />
      <FloatingIcons />
      {/* Main Pages */}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:category" element={<ProductCategory />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
        <ToastContainer position="top-right" autoClose={3000} />

    </div>
  );
}

export default App;
