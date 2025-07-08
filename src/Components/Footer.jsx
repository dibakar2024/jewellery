import React, { useState } from 'react';
import logo from "../assets/images/logo.png";
import {
  FaFacebookF,
  FaXTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaInstagram,
} from "react-icons/fa6";

import { BsGeoAltFill, BsTelephoneFill, BsEnvelopeFill } from "react-icons/bs";

function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-700 py-10 px-4">
      <div className="max-w-screen-2xl mx-auto flex flex-col md:flex-row flex-wrap gap-24 justify-between px-4">
        
        {/* Logo + Contact Info */}
        <div className="flex-1 min-w-[250px]">
          <img src={logo} alt="Logo" className="mb-4 w-16" />
          <p className="mb-1 flex items-start">
            <BsGeoAltFill className="mt-1 mr-2" />
            Apt. 407 943 Bernier Mill,<br />South Clintborough, WA 41222-0367
            </p>
            <p className="mb-1 flex items-center">
            <BsTelephoneFill className="mr-2" /> (+11) 800-000-1234
            </p>
            <p className="flex items-center">
            <BsEnvelopeFill className="mr-2" /> support@trendy-shopping.com
            </p>
        </div>

        {/* Quick Links */}
        <div className="flex-1 flex min-w-[250px] justify-between">
          <div>
            <h5 className="text-lg font-semibold mb-3">Quick Links</h5>
            <ul className="space-y-2">
              <li><a href="/about" className="hover:text-yellow-500">About Us</a></li>
              <li><a href="/shop" className="hover:text-yellow-500">Brands</a></li>
              <li><a href="/faq" className="hover:text-yellow-500">FAQ’s</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-semibold mb-3 invisible">.</h5>
            <ul className="space-y-2">
              <li><a href="/terms" className="hover:text-yellow-500">Terms & Conditions</a></li>
              <li><a href="/privacy" className="hover:text-yellow-500">Privacy Policy</a></li>
              <li><a href="/contact" className="hover:text-yellow-500">Customer Support</a></li>
            </ul>
          </div>
        </div>

        {/* Social & Newsletter */}
        <div className="flex-1 min-w-[250px]">
          <h5 className="text-lg font-semibold mb-3">Join With Us</h5>
          <div className="flex space-x-4 mb-4">
            <a href="#" className="text-gray-700 hover:text-yellow-500 text-xl"><FaFacebookF /></a>
            <a href="#" className="text-gray-700 hover:text-yellow-500 text-xl"><FaXTwitter /></a>
            <a href="#" className="text-gray-700 hover:text-yellow-500 text-xl"><FaLinkedinIn /></a>
            <a href="#" className="text-gray-700 hover:text-yellow-500 text-xl"><FaYoutube /></a>
            <a href="#" className="text-gray-700 hover:text-yellow-500 text-xl"><FaInstagram /></a>
          </div>
          <h6 className="text-md font-semibold mb-2">Newsletter</h6>
          <form className="flex">
            <input
              type="email"
              placeholder="Email address"
              className="flex-grow border border-gray-300 px-3 py-2 rounded-l focus:outline-none"
            />
            <button
              type="submit"
              className="bg-gray-600 text-white px-4 py-2 rounded-r hover:bg-gray-700"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
