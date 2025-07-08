
import CategoryData from '../Components/CategoryData';
import CategoryCard from '../Components/CategoryCard';

function CategorySection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {CategoryData.map((category) => (
        <CategoryCard
          key={category.id}
          title={category.title}
          productCount={category.productCount}
          imageUrl={category.bacckgroundImage}
        />
      ))}
    </div>
  );
}

export default CategorySection;
