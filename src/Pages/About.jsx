import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import aboutUsImg from "../assets/images/about-us.jpg";

function About() {
  return (
    <>
      

      <section className="py-16 md:py-24 px-4 max-w-screen-2xl mx-auto">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
          {/* Left Image */}
          <div className="flex-1">
            <img
              src={aboutUsImg} 
              alt="About Us"
              className="w-full h-auto rounded-2xl shadow-lg"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              Founded with a passion for timeless beauty and exceptional craftsmanship, our collection is carefully curated to offer elegant pieces that blend tradition with modern sophistication. From dazzling earrings and intricate necklaces to bold rings and graceful bracelets, each item is designed to make you feel confident, radiant, and unforgettable.
            </p>

            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <Phone className="text-indigo-600 mt-1" />
                <p className="text-gray-700">(+11) 800-000-1234</p>
              </div>
              <div className="flex items-start gap-4">
                <Mail className="text-indigo-600 mt-1" />
                <p className="text-gray-700">support@jewelleryshopping.com</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
