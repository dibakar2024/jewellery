import React from "react";
import { Link } from "react-router-dom";

function ThankYouPage() {
  return (
    <div className="max-w-screen-md mx-auto py-20 text-center px-6">
      <h1 className="text-4xl font-bold mb-6">Thank You for Your Order!</h1>
      <p className="text-gray-600 mb-8">We appreciate your purchase and will be in touch shortly.</p>
      <Link to="/" className="bg-black text-white px-6 py-3 rounded inline-block">
        Continue Shopping
      </Link>
    </div>
  );
}

export default ThankYouPage;
