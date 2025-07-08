import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaCreditCard } from "react-icons/fa";
import { FaMoneyBillWave } from "react-icons/fa";

function CheckoutPage() {
  const [checkoutItems, setCheckoutItems] = useState([]);
  const [form, setForm] = useState({
    firstName: "", lastName: "", email: "", phone: "",
    address: "", city: "", country: "", state: "", zip: "",
    cardNumber: "", expiryMonth: "", expiryYear: "", cvv: ""
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const storedCheckout = JSON.parse(localStorage.getItem("checkout")) || [];
    setCheckoutItems(storedCheckout);
  }, []);

  const total = checkoutItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const validate = () => {
    const newErrors = {};

    const requiredFields = [
      "firstName", "lastName", "email", "phone", "address", "city",
      "country", "state", "zip", "cardNumber", "expiryMonth", "expiryYear", "cvv"
    ];

    requiredFields.forEach(field => {
      if (!form[field]?.trim()) {
        newErrors[field] = "Required";
      }
    });

    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Invalid email";
    }

    if (form.phone && !/^\d{10}$/.test(form.phone)) {
      newErrors.phone = "Must be 10 digits";
    }

    if (form.zip && !/^\d{5,6}$/.test(form.zip)) {
      newErrors.zip = "Invalid ZIP code";
    }

    if (form.cardNumber && !/^\d{12,19}$/.test(form.cardNumber)) {
      newErrors.cardNumber = "Invalid card number";
    }

    if (form.cvv && !/^\d{3,4}$/.test(form.cvv)) {
      newErrors.cvv = "Invalid CVV";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePlaceOrder = () => {
    if (validate()) {
      alert("Order placed successfully!");
      localStorage.removeItem("checkout");
      localStorage.removeItem("cart");
      navigate("/thank-you");
    }
  };

  if (checkoutItems.length === 0) {
    return (
      <div className="max-w-screen-xl mx-auto p-6 text-center">
        <h2 className="text-2xl font-semibold">No items for checkout.</h2>
      </div>
    );
  }

  const inputClass = "border p-3 rounded w-full";
  const errorClass = "text-red-500 text-sm mt-1";

  return (
    <div className="max-w-screen-xl mx-auto p-6 md:px-10 md:py-24">
      <h1 className="text-3xl font-bold mb-6">Complete Your Order Today</h1>
      <p className="mb-8 text-gray-600">Act now so you don’t miss out on this offer.</p>

      <div className="grid md:grid-cols-3 gap-10">
        {/* Left Column */}
        <div className="md:col-span-2 space-y-8">
          {/* Shipping Info */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Shipping Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { name: "firstName", label: "First Name" },
                { name: "lastName", label: "Last Name" },
                { name: "email", label: "Email Address" },
                { name: "phone", label: "Phone" },
                { name: "address", label: "Your Address" },
                { name: "city", label: "Your City" },
              ].map(({ name, label }) => (
                <div key={name}>
                  <input
                    name={name}
                    placeholder={label}
                    value={form[name]}
                    onChange={handleChange}
                    className={inputClass}
                  />
                  {errors[name] && <div className={errorClass}>{errors[name]}</div>}
                </div>
              ))}
              <div>
                <select name="country" value={form.country} onChange={handleChange} className={inputClass}>
                  <option value="">Country</option>
                  <option value="India">India</option>
                </select>
                {errors.country && <div className={errorClass}>{errors.country}</div>}
              </div>
              <div>
                <select name="state" value={form.state} onChange={handleChange} className={inputClass}>
                  <option value="">Select State</option>
                  <option value="West Bengal">West Bengal</option>
                </select>
                {errors.state && <div className={errorClass}>{errors.state}</div>}
              </div>
              <div className="md:col-span-2">
                <input
                  name="zip"
                  placeholder="Zip Code"
                  value={form.zip}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.zip && <div className={errorClass}>{errors.zip}</div>}
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Payment Information</h2>

            <div className="flex gap-4 mb-4">
              <FaCreditCard title="CreditCard" className="text-[#EB001B] text-3xl" />
              <FaMoneyBillWave title="Cash on Delivery" className="text-green-600 text-3xl" />
            </div>
              <p className="flex pb-4 text-slate-400">*Only COD Available</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="md:col-span-3">
                <input
                  name="cardNumber"
                  placeholder="Card Number"
                  value={form.cardNumber}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.cardNumber && <div className={errorClass}>{errors.cardNumber}</div>}
              </div>
              <div>
                <select name="expiryMonth" value={form.expiryMonth} onChange={handleChange} className={inputClass}>
                  <option value="">Month</option>
                  {[...Array(12)].map((_, i) => (
                    <option key={i}>{String(i + 1).padStart(2, "0")}</option>
                  ))}
                </select>
                {errors.expiryMonth && <div className={errorClass}>{errors.expiryMonth}</div>}
              </div>
              <div>
                <select name="expiryYear" value={form.expiryYear} onChange={handleChange} className={inputClass}>
                  <option value="">Year</option>
                  {[2025, 2026, 2027].map(year => (
                    <option key={year}>{year}</option>
                  ))}
                </select>
                {errors.expiryYear && <div className={errorClass}>{errors.expiryYear}</div>}
              </div>
              <div>
                <input
                  name="cvv"
                  placeholder="CVV"
                  value={form.cvv}
                  onChange={handleChange}
                  className={inputClass}
                />
                {errors.cvv && <div className={errorClass}>{errors.cvv}</div>}
              </div>
            </div>
          </div>

          <button
            onClick={handlePlaceOrder}
            className="bg-black text-white px-6 py-3 rounded mt-6 w-full md:w-auto"
          >
            Complete Checkout
          </button>
        </div>

        {/* Order Summary */}
        <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
          {checkoutItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4 mb-4">
              <img src={item.image} alt={item.name} className="w-16 h-16 object-contain rounded" />
              <div className="flex-1">
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
              </div>
              <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
            </div>
          ))}
          <div className="border-t pt-4 mt-4">
            <div className="flex justify-between text-sm mb-2">
              <span>Price:</span>
              <span>${total.toFixed(2)}</span>
            </div>
            <div className="flex justify-between text-sm mb-2">
              <span>Shipping:</span>
              <span>$0.00</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
