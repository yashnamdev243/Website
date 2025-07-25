// src/pages/Home.jsx
import React from "react";
import Testimonials from "../component/Testimonials";
import Hero from "../component/Hero";
import ProductCard from "../Component/ProductCard";

import products from "../data/products";

const Home = () => {
  return (
    <div>
      <Hero />

      <section className="py-12 px-4 sm:px-16 ">
        <h2 className="lg:text-3xl text-2xl font-bold text-center text-[#b84d1c] mb-8">
          Featured Products
        </h2>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
          {/* {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))} */}
          {[
            ...new Map(products.map((item) => [item.category, item])).values(),
          ].map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
};

export default Home;
