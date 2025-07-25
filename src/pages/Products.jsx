// ===== Products.jsx =====
import React, { useEffect, useState } from "react";
import ProductCard from "../Component/ProductCard";
import products from "../data/products";

const Products = () => {
  return (
    <section className=" py-10 px-4 md:px-10 lg:px-20">
      <h2 className="lg:text-3xl text-2xl font-bold text-center text-[#b84d1c] mb-8">
        Our Products
      </h2>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default Products;
