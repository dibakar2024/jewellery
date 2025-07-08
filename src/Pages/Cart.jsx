import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { X } from "lucide-react";

function CartPage() {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  const updateCart = (updatedCart) => {
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    window.dispatchEvent(new Event("storage"));
  };

  const handleQuantity = (index, delta) => {
    const updatedCart = [...cart];
    updatedCart[index].quantity = Math.max(1, updatedCart[index].quantity + delta);
    updateCart(updatedCart);
  };

  const removeItem = (index) => {
    const updatedCart = cart.filter((_, i) => i !== index);
    updateCart(updatedCart);
  };

  const handleCheckout = () => {
    localStorage.setItem("checkout", JSON.stringify(cart));
    navigate("/checkout");
  };

  const totalPrice = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="max-w-screen-xl mx-auto px-6 py-24 text-center">
        <h2 className="text-2xl font-semibold">Your cart is empty.</h2>
        <button
          onClick={() => navigate("/shop")}
          className="mt-4 px-6 py-2 bg-black text-white rounded"
        >
          Return to Shop
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>

      <div className="space-y-6">
        {cart.map((item, index) => (
          <div
            key={index}
            className="flex items-center justify-between border shadow px-6 py-4 rounded-md"
          >
            {/* Remove button */}
            <button onClick={() => removeItem(index)} className="text-gray-400 hover:text-red-500 mr-4">
              <X size={24} />
            </button>

            {/* Product Image */}
            <img
              src={item.image}
              alt={item.name}
              className="w-24 h-24 object-contain"
            />

            {/* Product Info */}
            <div className="flex-1 ml-6">
              <h2 className="text-lg font-semibold">{item.name}</h2>
            </div>

            {/* Price */}
            <div className="w-24 text-right mr-2 font-semibold">${item.price.toFixed(2)}</div>

            {/* Quantity Controls */}
            <div className="flex items-center border rounded overflow-hidden">
              <button
                onClick={() => handleQuantity(index, -1)}
                className="px-4 py-1 text-xl hover:bg-gray-100"
              >
                -
              </button>
              <span className="px-4">{item.quantity}</span>
              <button
                onClick={() => handleQuantity(index, 1)}
                className="px-4 py-1 text-xl hover:bg-gray-100"
              >
                +
              </button>
            </div>

            {/* Total for this item */}
            <div className="w-24 text-right font-semibold">
              ${(item.price * item.quantity).toFixed(2)}
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="flex justify-end items-center mt-10 gap-8">
        <h2 className="text-2xl font-bold">Total: ${totalPrice.toFixed(2)}</h2>
        <button
          onClick={handleCheckout}
          className="border-2 border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition"
        >
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
}

export default CartPage;
