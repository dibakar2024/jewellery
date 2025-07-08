import React, { useEffect, useState } from "react";

// Updated product data with both mobile and desktop positions
const productData = [
  {
    id: 1,
    title: "Bold Earrings",
    price: "$28.00",
    image: "/assets/images/earring1.png",
    position: {
      desktop: { top: "32%", left: "63%" },
      mobile: { top: "35%", left: "74%" },
    },
  },
  {
    id: 2,
    title: "Layered Necklace",
    price: "$34.00",
    image: "/assets/images/necklace1.png",
    position: {
      desktop: { top: "81%", left: "23%" },
      mobile: { top: "78%", left: "3%" },
    },
  },
  {
    id: 3,
    title: "Trending Bracelet",
    price: "$12.00",
    image: "/assets/images/bracelet1.png",
    position: {
      desktop: { top: "77%", left: "11%" },
      mobile: { top: "46%", left: "28%" },
    },
  },
];

export default function Lookbook() {
  const [selected, setSelected] = useState(productData[0]);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 667);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 667);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex justify-between flex-col-reverse md:flex-row items-center bg-zinc-200 mt-8 w-full">
      {/* Left: Text + Product Preview */}
      <div className="w-full md:w-1/2 p-4 md:p-0">
        <div className="flex justify-end py-12">
          <div className="flex flex-col max-w-3xl p-0 md:ps-4">
          <div>
          <h4 className="text-lg tracking-wide text-gray-500 uppercase my-4">Latest</h4>
          <h2 className="text-5xl font-bold text-gray-800">Trends & Timeless Styles</h2>
          <p className="mt-8 text-gray-600 text-base">
            Discover a selection that blends the latest trends with timeless styles. Our collection offers versatile pieces that elevate your wardrobe and ensure you look chic for any occasion.
          </p>
        </div>

        {/* Selected Product Info */}
        <div className="flex items-center gap-4 p-4 shadow-lg border rounded-lg max-w-xs bg-gray-50 mt-6">
          <img src={selected.image} alt={selected.title} className="w-16 h-16 object-contain" />
          <div>
            <h3 className="text-lg font-semibold">{selected.title}</h3>
            <p className="text-base text-gray-700">{selected.price}</p>
          </div>
        </div>
        </div>
        </div>
      </div>

      {/* Right: Image + Hotspots */}
      <div className="relative w-full max-h-full md:w-1/2">
        <img
          src="/assets/images/latestimg.jpg"
          alt="Latest"
          className="w-full object-cover max-h-full"
        />

        {productData.map((item) => {
          const pos = isMobile ? item.position.mobile : item.position.desktop;
          return (
            <button
              key={item.id}
              className={`absolute w-8 h-8 rounded-full bg-white border-2 border-gray-400 text-base font-bold flex items-center justify-center shadow-md animate-blink transition-all duration-300 ${
                selected.id === item.id ? "ring-2 ring-black" : ""
              }`}
              style={{ top: pos.top, left: pos.left }}
              onClick={() => setSelected(item)}
            >
              {item.id}
            </button>
          );
        })}
      </div>
    </div>
  );
}
