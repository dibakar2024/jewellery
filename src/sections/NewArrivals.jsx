import React from "react";
import products from "../js/products";
import ProductCard from "../Components/ProductCard";

function NewArrivals() {
  return (
    <section className="px-4 py-12 max-w-screen-2xl mx-auto">
      <div className="text-center mb-10">
        <p className="text-lg text-gray-500">OUR PRODUCT’S</p>
        <h2 className="text-5xl font-bold">New Arrivals</h2>
      </div>

      {/* Flexbox Container */}
      <div className="flex flex-wrap justify-between gap-6">
        {products.slice(0, 5).map((product) => (
          <div
            key={product.id}
            className="w-full sm:w-[47%] md:w-[31%] lg:w-[18%]"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewArrivals;
