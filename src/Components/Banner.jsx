import React, { useState, useEffect } from "react";
import bannerData from "../js/bannerData";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % bannerData.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-[650px] overflow-hidden">
      {bannerData.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out z-0 ${
            index === current ? "opacity-100 scale-100 z-10" : "opacity-0 scale-105 z-0"
          }`}
          style={{
            backgroundImage: `url(${slide.backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            transition: "opacity 1s ease-in-out, transform 1s ease-in-out",
          }}
        >
          <div className="w-full h-full bg-black/40 flex items-center">
            <div className="max-w-screen-2xl w-full mx-auto px-8 z-20">
              {index === current && (
                <motion.div
                  className="text-white max-w-2xl"
                  key={slide.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >
                  <h3 className="text-2xl pb-4 text-gray-200">
                    {slide.subtitle}
                  </h3>

                  <h1 className="text-5xl md:text-6xl !leading-[4.375rem] font-bold leading-tight py-4">
                    {slide.title}
                  </h1>

                  <p className="text-lg md:text-xl text-gray-200 py-4">
                    {slide.description}
                  </p>

                  <Link
                    to={slide.buttonLink}
                    className="inline-block bg-slate-800 hover:bg-orange-400	 text-white font-medium px-6 py-3 mt-4 rounded-lg transition duration-300"
                  >
                    {slide.buttonText}
                  </Link>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Banner;
