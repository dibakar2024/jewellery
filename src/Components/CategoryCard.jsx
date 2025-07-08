import React from "react";

function CategoryCard({ title, productCount, imageUrl }) {
  return (
    <div className="relative group overflow-hidden rounded-xl h-[500px]">
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="absolute inset-0 bg-black/20 z-10" />
      <div className="absolute bottom-6 left-6 text-white z-20">
        <h2 className="text-2xl md:text-3xl font-bold">{title}</h2>
        <p className="text-sm mt-1">{productCount} Products</p>
      </div>
    </div>
  );
}

export default CategoryCard;
