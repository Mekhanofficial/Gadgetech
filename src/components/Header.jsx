import { Link, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronDown,
  faSearch,
  faUserAlt,
  faHeart,
  faCartShopping,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../pictures/logo.png";

export default function HeaderPage() {
  // Cart state and functions
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const getTotalItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.salePrice * item.quantity, 0)
      .toFixed(2);
  };

  const getWishlistCount = () => {
    return wishlist.length;
  };

  const removeItemFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  // Dropdown state and functions
  const [cate, setCate] = useState({
    categories: false,
    shop: false,
    newArrivals: false,
    cart: false,
  });
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const dropdownRefs = {
    categories: useRef(null),
    shop: useRef(null),
    newArrivals: useRef(null),
    cart: useRef(null),
  };

  const categories = [
    "All Categories",
    "Best Seller Products",
    "Top 10 Offers",
    "New Arrivals",
    "Phones & Tablets",
    "Electronics & Digital",
    "Fashion & Clothings",
    "Jewelry & Watches",
    "Health & Beauty",
    "Sound & Speakers",
    "TV & Audio",
    "Computers",
  ];

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCate((prev) => ({ ...prev, categories: false }));
  };

  const handleClickOutside = (event) => {
    Object.entries(dropdownRefs).forEach(([key, ref]) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setCate((prev) => ({ ...prev, [key]: false }));
      }
    });
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleDropdown = (type) => {
    setCate((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const handleMouseOver = () => toggleDropdown("cart");
  const handleMouseOut = () => toggleDropdown("cart");

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-zinc-950 text-white w-full top-0 z-50">
      {/* Top Header */}
      <div className="hidden md:flex justify-between items-center px-4 py-2 mx-auto max-w-7xl">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-2">
              <h2>Language:</h2>
              <select className="bg-transparent border-none outline-none text-white font-semibold">
                <option>English</option>
                <option>Deutsch</option>
                <option>Francais</option>
                <option>Espanol</option>
              </select>
            </div>
            <div className="w-px h-6 bg-gray-400"></div>
            <div className="flex items-center gap-2">
              <h2>Currency:</h2>
              <select className="bg-transparent border-none outline-none text-white font-semibold">
                <option>USD</option>
                <option>EUR</option>
                <option>INR</option>
                <option>BDT</option>
                <option>BGD</option>
              </select>
            </div>
          </div>
          <div className="w-px h-6 bg-gray-400"></div>
          <a href="#" className="text-white hover:text-red-400">
            Need Help? +001 123 456 789
          </a>
        </div>
        <div className="flex items-center gap-5">
          <Link to="/about-us" className="text-white hover:text-red-400">
            About Us
          </Link>
          <div className="w-px h-6 bg-gray-400"></div>
          <Link to="/contact-us" className="text-white hover:text-red-400">
            Order Tracking
          </Link>
          <div className="w-px h-6 bg-gray-400"></div>
          <Link to="/contact-us" className="text-white hover:text-red-400">
            Contact Us
          </Link>
          <div className="w-px h-6 bg-gray-400"></div>
          <Link to="/Faqs" className="text-white hover:text-red-400">
            FAQS
          </Link>
        </div>
      </div>
      <div className="w-full h-px bg-gray-400"></div>

      {/* Main Header */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 py-4 mx-auto max-w-7xl">
        {/* Mobile Menu Button */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link to="/" className="md:hidden">
            <img className="h-10" src={logo} alt="Logo" />
          </Link>
          <button className="md:hidden text-white" onClick={toggleMobileMenu}>
            <FontAwesomeIcon icon={faBars} className="text-2xl" />
          </button>
        </div>

        {/* Logo */}
        <Link to="/" className="hidden md:block">
          <img className="h-10" src={logo} alt="Logo" />
        </Link>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white rounded-lg w-full md:w-1/3 mx-4 relative my-4 md:my-0">
          <div
            className="relative whitespace-nowrap ml-2 font-semibold"
            ref={dropdownRefs.categories}
          >
            <h3
              className="text-gray-700 text-sm cursor-pointer hover:text-red-400 flex items-center gap-2"
              onClick={() => toggleDropdown("categories")}
            >
              {selectedCategory}
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`text-gray-700 text-xs transform ${
                  cate.categories ? "rotate-180" : "rotate-0"
                }`}
              />
            </h3>
            {cate.categories && (
              <div className="absolute bg-white shadow-lg rounded-lg mt-2 z-10 w-48">
                {categories.map((category, index) => (
                  <h4
                    key={index}
                    className={`p-2 text-sm cursor-pointer ${
                      selectedCategory === category
                        ? "bg-red-400 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCategoryClick(category);
                    }}
                  >
                    {category}
                  </h4>
                ))}
              </div>
            )}
          </div>
          <input
            type="text"
            placeholder="I'm shopping for..."
            className="w-full text-black outline-none px-2 py-2"
            value={searchQuery}
            onChange={handleInputChange}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="bg-red-400 p-3 rounded-r-lg"
          >
            <FontAwesomeIcon icon={faSearch} className="text-white" />
          </button>
        </div>

        {/* Mobile Search (appears below on mobile) */}
        <div className="flex md:hidden items-center bg-white rounded-lg w-full my-2 relative">
          <input
            type="text"
            placeholder="I'm shopping for..."
            className="w-full text-black outline-none px-4 py-2"
            value={searchQuery}
            onChange={handleInputChange}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="bg-red-400 p-3 rounded-r-lg"
          >
            <FontAwesomeIcon icon={faSearch} className="text-white" />
          </button>
        </div>

        {/* User Actions */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faUserAlt} className="h-6" />
            <div className="flex flex-col">
              <a href="#" className="text-blue-400 hover:text-red-400 text-sm">
                Login
              </a>
              <Link
                to="/my-account"
                className="text-white hover:text-red-400 text-sm"
              >
                My Account
              </Link>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="relative">
              <div className="bg-red-400 rounded-full w-4 h-4 absolute -top-1 -right-1 flex items-center justify-center text-xs font-medium">
                {getWishlistCount()}
              </div>
              <FontAwesomeIcon icon={faHeart} className="h-6" />
            </div>
            <div className="flex flex-col">
              <a href="#" className="text-blue-400 hover:text-red-400 text-sm">
                Favorite
              </a>
              <Link
                to="/my-wishlists"
                className="text-white hover:text-red-400 text-sm"
              >
                My Wishlist
              </Link>
            </div>
          </div>

          <div
            className="flex items-center gap-2 relative"
            onMouseEnter={handleMouseOver}
            onMouseLeave={handleMouseOut}
          >
            <div className="relative">
              <div className="bg-red-400 rounded-full w-4 h-4 absolute -top-1 -right-1 flex items-center justify-center text-xs font-medium">
                {getTotalItemCount()}
              </div>
              <FontAwesomeIcon icon={faCartShopping} className="h-6" />
            </div>
            <div className="flex flex-col">
              <a href="#" className="text-blue-400 hover:text-red-400 text-sm">
                Your Cart
              </a>
              <Link
                to="/cart"
                className="text-white hover:text-red-400 text-sm"
              >
                ${getTotalPrice()}
              </Link>
            </div>
            {cate.cart && (
              <div className="absolute bg-white shadow-lg rounded-lg p-4 top-12 right-0 w-72 z-10">
                <h2 className="text-gray-700 text-sm font-normal">
                  Your Cart <span>({getTotalItemCount()} Item in Cart)</span>
                </h2>
                <div className="w-full h-px bg-gray-300 my-2"></div>
                {cart.length > 0 ? (
                  cart.map((item) => (
                    <div className="flex items-center gap-4 mb-4" key={item.id}>
                      <img
                        src={item.img}
                        alt=""
                        className="w-16 h-16 object-cover"
                      />
                      <div className="flex flex-col">
                        <h2 className="text-gray-700 text-sm">{item.name}</h2>
                        <h2 className="text-gray-700 text-sm">
                          ${item.salePrice.toFixed(2)}
                        </h2>
                        <button
                          className="text-red-500 text-sm"
                          onClick={() => removeItemFromCart(item.id)}
                        >
                          x
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-700 text-sm">Your cart is empty</p>
                )}
                <div className="w-full h-px bg-gray-300 my-2"></div>
                <div className="flex justify-between items-center">
                  <h4 className="text-gray-700 text-sm">Subtotal</h4>
                  <h4 className="text-gray-700 text-sm">${getTotalPrice()}</h4>
                </div>
                <div className="flex flex-col gap-2 mt-4">
                  <Link to="/cart">
                    <button className="bg-red-400 text-white font-bold py-2 px-4 rounded w-full">
                      View cart
                    </button>
                  </Link>
                  <Link to="/checkout">
                    <button className="bg-red-400 text-white font-bold py-2 px-4 rounded w-full">
                      CHECKOUT
                    </button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-gray-400"></div>

      {/* Navigation */}
      <div className="hidden md:flex justify-between items-center px-4 py-2 mx-auto max-w-7xl">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => toggleDropdown("shop")}
          ref={dropdownRefs.shop}
        >
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faBars} className="text-xl" />
            <h1 className="text-lg font-semibold">SHOP BY DEPARTMENT</h1>
          </div>
        </div>

        <div className="flex items-center gap-5">
          <Link to="/" className="text-white hover:text-red-400">
            HOME
          </Link>
          <Link to="/shopping-page" className="text-white hover:text-red-400">
            SHOP
          </Link>
          <Link to="/about-us" className="text-white hover:text-red-400">
            ABOUT US
          </Link>
          <Link to="/pages" className="text-white hover:text-red-400">
            PAGES
          </Link>
        </div>

        <h3 className="text-sm hidden lg:block">
          Spend $120 more and get free shipping!
        </h3>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-800 p-4">
          <div className="flex flex-col gap-4">
            <Link
              to="/"
              className="text-white hover:text-red-400"
              onClick={toggleMobileMenu}
            >
              HOME
            </Link>
            <Link
              to="/shopping-page"
              className="text-white hover:text-red-400"
              onClick={toggleMobileMenu}
            >
              SHOP
            </Link>
            <Link
              to="/about-us"
              className="text-white hover:text-red-400"
              onClick={toggleMobileMenu}
            >
              ABOUT US
            </Link>
            <Link
              to="/pages"
              className="text-white hover:text-red-400"
              onClick={toggleMobileMenu}
            >
              PAGES
            </Link>
            <div className="w-full h-px bg-gray-400"></div>
            <div className="flex items-center gap-2">
              <FontAwesomeIcon icon={faUserAlt} className="h-5" />
              <a href="#" className="text-white hover:text-red-400">
                Login / My Account
              </a>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="bg-red-400 rounded-full w-4 h-4 absolute -top-1 -right-1 flex items-center justify-center text-xs font-medium">
                  {getWishlistCount()}
                </div>
                <FontAwesomeIcon icon={faHeart} className="h-5" />
              </div>
              <Link
                to="/my-wishlists"
                className="text-white hover:text-red-400"
                onClick={toggleMobileMenu}
              >
                My Wishlist
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <div className="bg-red-400 rounded-full w-4 h-4 absolute -top-1 -right-1 flex items-center justify-center text-xs font-medium">
                  {getTotalItemCount()}
                </div>
                <FontAwesomeIcon icon={faCartShopping} className="h-5" />
              </div>
              <Link
                to="/cart"
                className="text-white hover:text-red-400"
                onClick={toggleMobileMenu}
              >
                Your Cart (${getTotalPrice()})
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Shop Dropdown */}
      {cate.shop && (
        <div
          className="hidden md:block absolute bg-white shadow-lg rounded-lg p-4 mt-2 ml-4 w-64 z-10"
          ref={dropdownRefs.shop}
        >
          <div className="flex items-center justify-between">
            <a href="#" className="text-gray-700 hover:text-red-400">
              All Categories
            </a>
            <FontAwesomeIcon icon={faChevronDown} className="text-gray-700" />
          </div>
          <div className="w-full h-px bg-gray-300 my-2"></div>
          <div className="flex items-center justify-between">
            <a href="#" className="text-gray-700 hover:text-red-400">
              Phone & Electronics
            </a>
            <FontAwesomeIcon icon={faChevronDown} className="text-gray-700" />
          </div>
          <div className="w-full h-px bg-gray-300 my-2"></div>
          <div className="flex items-center justify-between">
            <a href="#" className="text-gray-700 hover:text-red-400">
              Best Seller Products
            </a>
            <FontAwesomeIcon icon={faChevronDown} className="text-gray-700" />
          </div>
          <div className="w-full h-px bg-gray-300 my-2"></div>
          <a href="#" className="text-gray-700 hover:text-red-400">
            Top 10 Offers
          </a>
          <div className="w-full h-px bg-gray-300 my-2"></div>
          <div
            className="flex items-center justify-between cursor-pointer"
            onClick={() => toggleDropdown("newArrivals")}
          >
            <h3 className="text-gray-700">New Arrivals</h3>
            <FontAwesomeIcon icon={faChevronDown} className="text-gray-700" />
          </div>
          {cate.newArrivals && (
            <div
              className="absolute bg-white shadow-lg rounded-lg p-4 mt-2 w-64 z-10"
              ref={dropdownRefs.newArrivals}
            >
              <h4 className="text-gray-700 font-semibold">Home Appliances</h4>
              <h4
                className="text-gray-700 font-semibold cursor-pointer"
                onClick={() => toggleDropdown("newArrivals")}
              >
                Technology
              </h4>
              {cate.newArrivals && (
                <div className="bg-white shadow-lg rounded-lg p-4 mt-2 w-64">
                  <h5 className="text-gray-700 font-semibold">
                    Storage Devices
                  </h5>
                  <h5 className="text-gray-700 font-semibold">Monitors</h5>
                  <h5 className="text-gray-700 font-semibold">Laptops</h5>
                </div>
              )}
              <h4 className="text-gray-700 font-semibold">Office Equipments</h4>
            </div>
          )}
          <div className="w-full h-px bg-gray-300 my-2"></div>
          <a href="#" className="text-gray-700 hover:text-red-400">
            TV & Audio
          </a>
          <div className="w-full h-px bg-gray-300 my-2"></div>
          <a href="#" className="text-gray-700 hover:text-red-400">
            Electronics & Digitals
          </a>
          <div className="w-full h-px bg-gray-300 my-2"></div>
          <a href="#" className="text-gray-700 hover:text-red-400">
            Fashion & Clothings
          </a>
          <div className="w-full h-px bg-gray-300 my-2"></div>
          <a href="#" className="text-gray-700 hover:text-red-400">
            Jewelry & Watches
          </a>
          <div className="w-full h-px bg-gray-300 my-2"></div>
          <a href="#" className="text-gray-700 hover:text-red-400">
            Health & Beauty
          </a>
        </div>
      )}
    </header>
  );
}
