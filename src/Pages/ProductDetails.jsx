import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import products from "../js/products";
import {
  FaCcVisa,
  FaCcMastercard,
  FaCcAmex,
  FaCcPaypal,
  FaCcDiscover,
} from "react-icons/fa";


function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((item) => item.id.toString() === id);
  const [quantity, setQuantity] = useState(1);

  if (!product) return <div className="text-center mt-10">Product not found</div>;

  // Add to localStorage cart
  const handleAddToCart = () => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
    const updatedCart = [...existingCart];
    const index = updatedCart.findIndex((item) => item.id === product.id);

    if (index !== -1) {
      updatedCart[index].quantity += quantity;
    } else {
      updatedCart.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storage")); // trigger header update
  };

  // Buy now: set checkout data directly and go to checkout
  const handleBuyNow = () => {
    const checkoutItem = [{ ...product, quantity }];
    localStorage.setItem("checkout", JSON.stringify(checkoutItem));
    navigate("/checkout");
  };

  return (
    <div className="max-w-screen-2xl mx-auto px-4 py-24">
      <div className="flex flex-col md:flex-row gap-10">
        {/* Left: Product Image */}
        <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-h-96 object-contain"
          />
        </div>

        {/* Right: Product Info */}
        <div className="w-full md:w-1/2 flex items-center">
          <div className="flex flex-col w-fit text-left space-y-6">
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <p className="text-xl font-semibold">Price: ${product.price.toFixed(2)}</p>
            {product.originalPrice && (
              <p className="text-red-500 line-through text-lg">
                ${product.originalPrice.toFixed(2)}
              </p>
            )}
            <p className="mt-2">{product.description}</p>

            {/* Quantity Selector */}
            <div>
              <p className="font-semibold mb-1">Quantity:</p>
              <div className="flex border rounded w-32 items-center justify-between">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="w-8 h-8 text-xl"
                >
                  -
                </button>
                <span className="w-8 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="w-8 h-8 text-xl"
                >
                  +
                </button>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row md:space-x-4 mt-4 space-y-2 md:space-y-0">
              <button
                onClick={handleAddToCart}
                className="border border-black px-6 py-2 rounded hover:bg-black hover:text-white transition"
              >
                Add To Cart
              </button>
              <button
                onClick={handleBuyNow}
                className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
              >
                Buy It Now
              </button>
            </div>

            {/* Secure Checkout Icons */}
            <div className="mt-6">
              <p className="font-semibold mb-2">Guaranteed safe checkout:</p>
              <div className="flex space-x-4 text-4xl">
                <FaCcVisa title="Visa" className="text-[#1A1F71]" />
                <FaCcMastercard title="MasterCard" className="text-[#EB001B]" />
                <FaCcAmex title="Amex" className="text-[#2E77BC]" /> 
                <FaCcPaypal title="PayPal" className="text-[#003087]" /> 
                <FaCcDiscover title="Discover" className="text-[#FF6000]" /> 
              </div>
            </div>


          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
