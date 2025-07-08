import React from "react";
import categoryData from "../js/categoryData";
import CategoryCard from "../Components/CategoryCard";

function CategorySection() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-4 py-10 max-w-screen-2xl mx-auto">
      {categoryData.map((item) => (
        <CategoryCard
          key={item.id}
          title={item.title}
          productCount={item.productCount}
          imageUrl={item.imageUrl}
        />
      ))}
    </div>
  );
}

export default CategorySection;
