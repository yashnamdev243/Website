import React from "react";
import { useParams } from "react-router-dom";
import products from "../data/products";
import ProductCard from "../component/ProductCard";

const ProductCategory = () => {
  const { category } = useParams();

  const filteredProducts = products.filter(
    (product) => product.category === category
  );

  return (
    <section className="py-12 px-4 sm:px-16  min-h-screen">
      <h2 className="lg:text-3xl text-2xl font-bold text-center text-[#b84d1c] mb-8 capitalize">
        {category} Products
      </h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 max-w-6xl mx-auto">
        {filteredProducts.length ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className="text-center col-span-full text-gray-600 text-lg">
            No products found in this category.
          </p>
        )}
      </div>
    </section>
  );
};

export default ProductCategory;
