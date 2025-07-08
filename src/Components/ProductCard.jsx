import React from "react";
import { Heart, Eye, ShoppingCart } from "lucide-react";
import { useWishlist } from "../js/WishlistContext";
import { Link } from "react-router-dom";
import { addToCart } from "../js/useCart";

function ProductCard({ product }) {
  const { wishlist, toggleWishlist } = useWishlist();
  const isInWishlist = wishlist.some((item) => item.id === product.id);

  // Function to render star ratings
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const totalStars = 5;

    return (
      <div className="flex justify-center text-yellow-400 text-sm space-x-0.5">
        {[...Array(fullStars)].map((_, i) => (
          <span key={`full-${i}`}>★</span>
        ))}
        {halfStar && <span>☆</span>}
        {[...Array(totalStars - fullStars - (halfStar ? 1 : 0))].map((_, i) => (
          <span key={`empty-${i}`} className="text-gray-300">★</span>
        ))}
      </div>
    );
  };

  return (
    <div className="group relative overflow-hidden transition-all">
      <div className="prodTop bg-slate-200 p-3 relative cursor-pointer rounded-t">
        {/* Discount Badge */}
        {product.discount && (
          <span className="absolute top-2 left-2 bg-yellow-400 text-xs font-semibold px-2 py-1 rounded z-10">
            {product.discount}
          </span>
        )}

        {/* Action Icons */}
        <div className="flex flex-col absolute top-2 right-2 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity duration-600 z-40">
          {/* Quick View */}
          <Link
            to={`/product/${product.id}`}
            className="bg-white p-1 rounded shadow hover:bg-gray-100 transform transition-transform duration-600 hover:scale-110 hover:-translate-y-1"
          >
            <Eye size={18} />
          </Link>

          {/* Wishlist */}
          <button
            onClick={() => toggleWishlist(product)}
            className="bg-white p-1 rounded shadow hover:bg-gray-100 transform transition-transform duration-600 hover:scale-110 hover:-translate-y-1"
          >
            <Heart
              size={18}
              className={`transition ${
                isInWishlist ? "text-pink-500 fill-pink-500" : "text-gray-500"
              }`}
            />
          </button>
        </div>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-contain mx-auto transition-transform duration-500 group-hover:scale-150"
        />

        {/* Add to Cart Button */}
        <button
          onClick={() => addToCart(product)}
          className="w-full bg-white text-sm font-medium py-2 rounded shadow opacity-0 group-hover:opacity-100 hover:bg-gray-100 relative z-40 flex items-center justify-center gap-2"
        >
          <ShoppingCart size={16} /> ADD TO CART
        </button>
      </div>

      {/* Bottom Section */}
      <div className="prodBot">
        <div className="mt-4 text-center">
          <h3 className="text-xl font-semibold cursor-pointer">{product.name}</h3>

          {/* Dynamic Star Ratings */}
          <div className="mt-1">{renderStars(product.rating)}</div>

          {/* Price */}
          <div className="mt-1 text-lg">
            <span className="font-semibold">${product.price.toFixed(2)}</span>
            {product.originalPrice && (
              <span className="text-red-500 line-through ml-2">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
