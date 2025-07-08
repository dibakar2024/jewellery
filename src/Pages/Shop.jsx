import React, { useState } from "react";
import products from "../js/products";
import ProductCard from "../Components/ProductCard";

const categories = ["All", "Earring", "Ring", "Bracelet", "Necklace"];

function ShopPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((product) => product.category === selectedCategory);

  return (
    <section className="px-4 py-24 max-w-screen-2xl mx-auto">
      {/* Header */}
      <div className="text-center mb-10">
        <h2 className="text-5xl font-bold">Our Collections</h2>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full border text-sm font-medium transition-all duration-300
              ${
                selectedCategory === category
                  ? "bg-black text-white border-black"
                  : "bg-white text-black border-gray-300 hover:border-black"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="flex flex-wrap justify-center gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="w-full sm:w-[47%] md:w-[31%] lg:w-[23%]"
          >
            <ProductCard product={product} />
          </div>
        ))}
      </div>
    </section>
  );
}

export default ShopPage;
