import React, { useState, useEffect } from 'react';
import { ShoppingCart, Heart, Menu, X, Search } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import logo from '../assets/images/logo.jpg';
import { useWishlist } from '../js/WishlistContext';
import products from '../js/products';
import { useNavigate } from 'react-router-dom';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { wishlist } = useWishlist();
  const [cartCount, setCartCount] = useState(0);
  const [showSearch, setShowSearch] = useState(false);
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const updateCartCount = () => {
      if (typeof window !== 'undefined') {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const count = cart.reduce((acc, item) => acc + item.quantity, 0);
        setCartCount(count);
      }
    };

    updateCartCount();
    if (typeof window !== 'undefined') {
      window.addEventListener('storage', updateCartCount);
      return () => window.removeEventListener('storage', updateCartCount);
    }
  }, []);

  const handleSearch = (e) => {
    if (e.key === 'Enter') {
      const foundProduct = products.find((product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase())
      );

      if (foundProduct) {
        navigate(`/product/${foundProduct.id}`);
        setShowSearch(false);
        setSearchText('');
      } else {
        alert('Product not found');
      }
    }
  };

  const menuVariants = {
    hidden: {
      opacity: 0,
      scaleY: 0,
      transformOrigin: 'top',
      transition: { duration: 0.25, ease: 'easeInOut' },
    },
    visible: {
      opacity: 1,
      scaleY: 1,
      transformOrigin: 'top',
      transition: { duration: 0.25, ease: 'easeInOut' },
    },
    exit: {
      opacity: 0,
      scaleY: 0,
      transformOrigin: 'top',
      transition: { duration: 0.2, ease: 'easeInOut' },
    },
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 py-2">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        
        {/* Logo */}
        <div className="max-w-24">
          <img src={logo} alt="Logo" className="h-16 w-auto" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-8 text-gray-700 text-lg">
          <a href="/" className="hover:text-yellow-600">Home</a>
          <a href="/about" className="hover:text-yellow-600">About Us</a>
          <a href="/shop" className="hover:text-yellow-600">Shop</a>
          <a href="/contact" className="hover:text-yellow-600">Contact Us</a>
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-4 relative">
          {/* Search */}
          <div className="relative">
            <Search
              className="h-6 w-6 text-gray-700 hover:text-blue-500 cursor-pointer"
              onClick={() => setShowSearch(!showSearch)}
            />
            {showSearch && (
              <input
                type="text"
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                onKeyDown={handleSearch}
                placeholder="Search product..."
                className="absolute top-8 right-0 w-48 md:w-64 px-2 py-1 border border-gray-300 rounded-md shadow-md focus:outline-none text-sm bg-white z-10"
                autoFocus
              />
            )}
          </div>

          {/* Wishlist */}
          <div className="relative cursor-pointer">
            <Heart className="h-6 w-6 text-gray-700 hover:text-pink-500" />
            {wishlist.length > 0 && (
              <span className="absolute -top-2 -right-2 bg-pink-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {wishlist.length}
              </span>
            )}
          </div>

          {/* Cart */}
          <div
            className="relative cursor-pointer"
            onClick={() => navigate('/cart')}
          >
            <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-yellow-600" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-yellow-500 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-yellow-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={menuVariants}
            className="md:hidden origin-top bg-white px-4 py-4 space-y-3 text-gray-700 font-medium shadow-md"
          >
            <a href="/" className="block hover:text-indigo-600" onClick={() => setIsOpen(false)}>Home</a>
            <a href="/about" className="block hover:text-indigo-600" onClick={() => setIsOpen(false)}>About Us</a>
            <a href="/shop" className="block hover:text-indigo-600" onClick={() => setIsOpen(false)}>Shop</a>
            <a href="/contact" className="block hover:text-indigo-600" onClick={() => setIsOpen(false)}>Contact Us</a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Header;
