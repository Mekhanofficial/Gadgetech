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
  faPhone,
  faEnvelope,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import logo from "../pictures/logo.png";

const HeaderPage = ({
  cart = [],
  wishlist = [],
  removeFromCart,
  updateCartItemQuantity,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [dropdowns, setDropdowns] = useState({
    categories: false,
    shop: false,
    cart: false,
    account: false,
  });
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [searchQuery, setSearchQuery] = useState("");

  const navigate = useNavigate();
  const dropdownRefs = {
    categories: useRef(null),
    shop: useRef(null),
    cart: useRef(null),
    account: useRef(null),
  };

  const categories = [
    "All Categories",
    "Smartphones",
    "Laptops",
    "Tablets",
    "Smartwatches",
    "Headphones",
    "Cameras",
    "Gaming",
    "Accessories",
  ];

  const techDepartments = [
    {
      name: "Smartphones",
      path: "smartphones",
      subcategories: [
        { name: "Android", path: "android" },
        { name: "iOS", path: "ios" },
        { name: "5G Phones", path: "5g-phones" },
      ],
    },
    {
      name: "Laptops",
      path: "laptops",
      subcategories: [
        { name: "Gaming", path: "gaming" },
        { name: "Ultrabooks", path: "ultrabooks" },
        { name: "Business", path: "business" },
      ],
    },
    {
      name: "Tablets",
      path: "tablets",
      subcategories: [
        { name: "iPad", path: "ipad" },
        { name: "Android", path: "android" },
      ],
    },
    {
      name: "Smartwatches",
      path: "smartwatches",
      subcategories: [
        { name: "Fitness", path: "fitness" },
        { name: "Luxury", path: "luxury" },
      ],
    },
    {
      name: "Headphones",
      path: "headphones",
      subcategories: [
        { name: "Wireless", path: "wireless" },
        { name: "Noise Cancelling", path: "noise-cancelling" },
      ],
    },
    {
      name: "Cameras",
      path: "cameras",
      subcategories: [
        { name: "DSLR", path: "dslr" },
        { name: "Mirrorless", path: "mirrorless" },
      ],
    },
    {
      name: "Gaming",
      path: "gaming",
      subcategories: [
        { name: "Consoles", path: "consoles" },
        { name: "Accessories", path: "accessories" },
      ],
    },
    {
      name: "Accessories",
      path: "accessories",
      subcategories: [
        { name: "Chargers", path: "chargers" },
        { name: "Cases", path: "cases" },
      ],
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getTotalItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };

  const getWishlistCount = () => {
    return wishlist.length;
  };

  const handleClickOutside = (event) => {
    Object.entries(dropdownRefs).forEach(([key, ref]) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setDropdowns((prev) => ({ ...prev, [key]: false }));
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
    setDropdowns((prev) => ({
      ...Object.fromEntries(Object.keys(prev).map((key) => [key, false])),
      [type]: !prev[type],
    }));
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/shop?search=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
      setIsMobileMenuOpen(false);
    }
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-md text-gray-800"
          : "bg-blue-900 text-white"
      }`}
    >
      {/* Top Header */}
      <div className="hidden md:flex justify-between items-center px-4 py-2 mx-auto max-w-7xl">
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faPhone} className="text-sm" />
            <a href="tel:+001123456789" className="hover:text-red-400">
              +001 123 456 789
            </a>
          </div>
          <div className="w-px h-6 bg-gray-400"></div>
          <div className="flex items-center gap-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-sm" />
            <a href="mailto:info@techhaven.com" className="hover:text-red-400">
              info@techhaven.com
            </a>
          </div>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <select
              className={`bg-transparent border-none outline-none font-medium ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
            </select>
          </div>
          <div className="w-px h-6 bg-gray-400"></div>
          <Link to="/about" className="hover:text-red-400">
            About Us
          </Link>
          <div className="w-px h-6 bg-gray-400"></div>
          <Link to="/track-order" className="hover:text-red-400">
            Order Tracking
          </Link>
        </div>
      </div>
      <div className="w-full h-px bg-gray-400"></div>

      {/* Main Header */}
      <div className="flex flex-col md:flex-row justify-between items-center px-4 py-4 mx-auto max-w-7xl">
        {/* Mobile Menu Button */}
        <div className="flex justify-between items-center w-full md:w-auto">
          <Link to="/" onClick={closeMobileMenu}>
            <img className="h-10" src={logo} alt="Tech Haven Logo" />
          </Link>
          <div className="flex items-center gap-4 md:hidden">
            <Link to="/cart" className="relative">
              {cart.length > 0 && (
                <div className="bg-red-500 rounded-full w-5 h-5 absolute -top-2 -right-2 flex items-center justify-center text-xs text-white font-medium">
                  {getTotalItemCount()}
                </div>
              )}
              <FontAwesomeIcon
                icon={faCartShopping}
                className={`text-xl ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              />
            </Link>
            <button onClick={toggleMobileMenu} aria-label="Toggle menu">
              {isMobileMenuOpen ? (
                <FontAwesomeIcon
                  icon={faTimes}
                  className={`text-xl ${
                    isScrolled ? "text-gray-800" : "text-white"
                  }`}
                />
              ) : (
                <FontAwesomeIcon
                  icon={faBars}
                  className={`text-xl ${
                    isScrolled ? "text-gray-800" : "text-white"
                  }`}
                />
              )}
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="hidden md:flex items-center bg-white rounded-lg w-full md:w-1/3 mx-4 relative my-4 md:my-0">
          <div
            className="relative whitespace-nowrap ml-2 font-semibold"
            ref={dropdownRefs.categories}
          >
            <button
              className="text-gray-700 text-sm flex items-center gap-2 py-2 px-3"
              onClick={() => toggleDropdown("categories")}
              aria-expanded={dropdowns.categories}
              aria-haspopup="true"
            >
              {selectedCategory}
              <FontAwesomeIcon
                icon={faChevronDown}
                className={`text-gray-700 text-xs transition-transform ${
                  dropdowns.categories ? "rotate-180" : ""
                }`}
              />
            </button>
            {dropdowns.categories && (
              <div className="absolute bg-white shadow-lg rounded-lg mt-1 z-20 w-48 max-h-96 overflow-y-auto">
                {categories.map((category, index) => (
                  <button
                    key={index}
                    className={`w-full text-left p-2 text-sm ${
                      selectedCategory === category
                        ? "bg-blue-600 text-white"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                    onClick={() => {
                      handleCategoryClick(category);
                      navigate(`/shop`);
                    }}
                  >
                    {category}
                  </button>
                ))}
              </div>
            )}
          </div>
          <input
            type="text"
            placeholder="Search for gadgets..."
            className="w-full text-gray-800 outline-none px-4 py-2 rounded-r-none"
            value={searchQuery}
            onChange={handleSearchInputChange}
            onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            aria-label="Search products"
          />
          <button
            onClick={handleSearch}
            className="bg-blue-600 hover:bg-blue-700 p-3 rounded-r-lg transition-colors"
            aria-label="Search"
          >
            <FontAwesomeIcon icon={faSearch} className="text-white" />
          </button>
        </div>

        {/* User Actions */}
        <div className="hidden md:flex items-center gap-6">
          {/* Account Dropdown */}
          <div
            className="flex items-center gap-2 relative"
            ref={dropdownRefs.account}
            onMouseEnter={() => toggleDropdown("account")}
            onMouseLeave={() => toggleDropdown("account")}
          >
            <FontAwesomeIcon
              icon={faUserAlt}
              className={`h-5 ${isScrolled ? "text-gray-800" : "text-white"}`}
            />
            <div className="flex flex-col">
              <button
                className={`text-sm hover:text-red-400 text-left ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
                onClick={() => toggleDropdown("account")}
              >
                Account
              </button>
            </div>
            {dropdowns.account && (
              <div className="absolute bg-white shadow-lg rounded-lg p-4 top-8 right-0 w-48 z-10">
                <Link
                  to="/login"
                  className="block text-gray-700 hover:text-blue-600 mb-2"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block text-gray-700 hover:text-blue-600 mb-2"
                >
                  Register
                </Link>
                <div className="w-full h-px bg-gray-200 my-2"></div>
                <Link
                  to="/account"
                  className="block text-gray-700 hover:text-blue-600 mb-2"
                >
                  My Account
                </Link>
                <Link
                  to="/orders"
                  className="block text-gray-700 hover:text-blue-600"
                >
                  Order History
                </Link>
              </div>
            )}
          </div>

          {/* Wishlist */}
          <Link
            to="/wishlist"
            className="flex items-center gap-2 relative group"
          >
            <div className="relative">
              {wishlist.length > 0 && (
                <div className="bg-red-500 rounded-full w-5 h-5 absolute -top-2 -right-2 flex items-center justify-center text-xs text-white font-medium">
                  {getWishlistCount()}
                </div>
              )}
              <FontAwesomeIcon
                icon={faHeart}
                className={`h-5 group-hover:text-red-400 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              />
            </div>
            <span
              className={`text-sm group-hover:text-red-400 ${
                isScrolled ? "text-gray-800" : "text-white"
              }`}
            >
              Wishlist
            </span>
          </Link>

          {/* Cart Dropdown */}
          <div
            className="flex items-center gap-2 relative group"
            ref={dropdownRefs.cart}
            onMouseEnter={() => toggleDropdown("cart")}
            onMouseLeave={() => toggleDropdown("cart")}
          >
            <div className="relative">
              {cart.length > 0 && (
                <div className="bg-red-500 rounded-full w-5 h-5 absolute -top-2 -right-2 flex items-center justify-center text-xs text-white font-medium">
                  {getTotalItemCount()}
                </div>
              )}
              <FontAwesomeIcon
                icon={faCartShopping}
                className={`h-5 group-hover:text-red-400 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              />
            </div>
            <div className="flex flex-col">
              <span
                className={`text-sm group-hover:text-red-400 ${
                  isScrolled ? "text-gray-800" : "text-white"
                }`}
              >
                Cart
              </span>
              <span
                className={`text-xs ${
                  isScrolled ? "text-gray-600" : "text-gray-300"
                }`}
              >
                ${getTotalPrice()}
              </span>
            </div>
            {dropdowns.cart && (
              <div className="absolute bg-white shadow-xl rounded-lg p-4 top-10 right-0 w-80 z-20">
                <h3 className="text-gray-800 font-medium mb-3">
                  Shopping Cart ({getTotalItemCount()})
                </h3>
                {cart.length > 0 ? (
                  <>
                    <div className="max-h-60 overflow-y-auto">
                      {cart.map((item) => (
                        <div
                          className="flex items-center gap-3 mb-3 pb-3 border-b border-gray-100"
                          key={item.id}
                        >
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-16 h-16 object-contain"
                          />
                          <div className="flex-1">
                            <h4 className="text-sm text-gray-800 font-medium">
                              {item.name}
                            </h4>
                            <p className="text-sm text-gray-600">
                              ${item.price.toFixed(2)} x {item.quantity}
                            </p>
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500"
                            aria-label="Remove item"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                    </div>
                    <div className="flex justify-between items-center mt-3 mb-4">
                      <span className="text-gray-800 font-medium">
                        Subtotal:
                      </span>
                      <span className="text-gray-800 font-medium">
                        ${getTotalPrice()}
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <Link
                        to="/cart"
                        className="bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded transition-colors"
                        onClick={() => toggleDropdown("cart")}
                      >
                        View Cart
                      </Link>
                      <Link
                        to="/checkout"
                        className="bg-gray-800 hover:bg-gray-900 text-white text-center py-2 px-4 rounded transition-colors"
                        onClick={() => toggleDropdown("cart")}
                      >
                        Checkout
                      </Link>
                    </div>
                  </>
                ) : (
                  <div className="text-center py-4">
                    <p className="text-gray-600">Your cart is empty</p>
                    <Link
                      to="/shop"
                      className="inline-block mt-2 text-blue-600 hover:text-blue-800"
                      onClick={() => toggleDropdown("cart")}
                    >
                      Continue Shopping
                    </Link>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="hidden md:flex justify-between items-center px-4 py-3 mx-auto max-w-7xl border-t border-gray-200">
        {/* Shop by Department */}
        <div
          className="flex items-center gap-3 cursor-pointer relative"
          ref={dropdownRefs.shop}
          onMouseEnter={() => toggleDropdown("shop")}
          onMouseLeave={() => toggleDropdown("shop")}
        >
          <FontAwesomeIcon
            icon={faBars}
            className={`text-lg ${isScrolled ? "text-gray-800" : "text-white"}`}
          />
          <span
            className={`font-medium ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Shop by Department
          </span>
          {dropdowns.shop && (
            <div className="absolute bg-white shadow-2xl rounded-lg p-4 top-10 left-0 w-64 z-20 grid grid-cols-1 gap-1">
              {techDepartments.map((department, index) => (
                <div key={index} className="group relative">
                  <Link
                    to={`/shop/${department.path}`}
                    className="flex justify-between items-center p-2 hover:bg-gray-50 rounded"
                  >
                    <span className="text-gray-800">{department.name}</span>
                    {department.subcategories && (
                      <FontAwesomeIcon
                        icon={faChevronDown}
                        className="text-gray-400 text-xs"
                      />
                    )}
                  </Link>
                  {department.subcategories && (
                    <div className="absolute left-full top-0 ml-1 bg-white shadow-lg rounded-lg p-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      {department.subcategories.map((subcat, subIndex) => (
                        <Link
                          key={subIndex}
                          to={`/shop/${department.path}/${subcat.path}`}
                          className="block p-2 hover:bg-gray-50 rounded text-gray-700 hover:text-blue-600"
                        >
                          {subcat.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Main Navigation */}
        <nav className="flex items-center gap-8">
          <Link
            to="/"
            className={`font-medium hover:text-red-400 ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className={`font-medium hover:text-red-400 ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Shop
          </Link>
          <Link
            to="/deals"
            className={`font-medium hover:text-red-400 ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Hot Deals
          </Link>
          <Link
            to="/new-arrivals"
            className={`font-medium hover:text-red-400 ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            New Arrivals
          </Link>
          <Link
            to="/blog"
            className={`font-medium hover:text-red-400 ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Blog
          </Link>
          <Link
            to="/contact"
            className={`font-medium hover:text-red-400 ${
              isScrolled ? "text-gray-800" : "text-white"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Promo Text */}
        <div
          className={`text-sm ${
            isScrolled ? "text-gray-600" : "text-gray-300"
          }`}
        >
          Free shipping on orders over $200
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div
          className={`md:hidden p-4 max-h-screen overflow-y-auto ${
            isScrolled ? "bg-white text-gray-800" : "bg-blue-800 text-white"
          }`}
        >
          <div className="flex flex-col gap-4">
            <div className="relative mb-4">
              <input
                type="text"
                placeholder="Search for gadgets..."
                className="w-full text-gray-800 outline-none px-4 py-2 rounded"
                value={searchQuery}
                onChange={handleSearchInputChange}
                onKeyPress={(e) => e.key === "Enter" && handleSearch()}
              />
              <button
                onClick={handleSearch}
                className="absolute right-2 top-2 text-gray-500"
              >
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>

            <Link
              to="/"
              className="hover:text-red-400 py-2 border-b border-gray-200"
              onClick={closeMobileMenu}
            >
              Home
            </Link>
            <Link
              to="/shop"
              className="hover:text-red-400 py-2 border-b border-gray-200"
              onClick={closeMobileMenu}
            >
              Shop
            </Link>
            <div className="relative border-b border-gray-200">
              <button
                className="w-full text-left hover:text-red-400 py-2 flex justify-between items-center"
                onClick={() => toggleDropdown("shop-mobile")}
              >
                Categories
                <FontAwesomeIcon
                  icon={faChevronDown}
                  className={`text-xs transition-transform ${
                    dropdowns["shop-mobile"] ? "rotate-180" : ""
                  }`}
                />
              </button>
              {dropdowns["shop-mobile"] && (
                <div className="pl-4 mt-2 space-y-2 pb-2">
                  {techDepartments.map((department, index) => (
                    <div key={index}>
                      <Link
                        to={`/shop/${department.path}`}
                        className="block py-1 hover:text-red-400"
                        onClick={closeMobileMenu}
                      >
                        {department.name}
                      </Link>
                      {department.subcategories && (
                        <div className="pl-4 space-y-1">
                          {department.subcategories.map((subcat, subIndex) => (
                            <Link
                              key={subIndex}
                              to={`/shop/${department.path}/${subcat.path}`}
                              className="block py-1 text-sm hover:text-red-400"
                              onClick={closeMobileMenu}
                            >
                              {subcat.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <Link
              to="/deals"
              className="hover:text-red-400 py-2 border-b border-gray-200"
              onClick={closeMobileMenu}
            >
              Hot Deals
            </Link>
            <Link
              to="/new-arrivals"
              className="hover:text-red-400 py-2 border-b border-gray-200"
              onClick={closeMobileMenu}
            >
              New Arrivals
            </Link>
            <Link
              to="/blog"
              className="hover:text-red-400 py-2 border-b border-gray-200"
              onClick={closeMobileMenu}
            >
              Blog
            </Link>
            <Link
              to="/contact"
              className="hover:text-red-400 py-2 border-b border-gray-200"
              onClick={closeMobileMenu}
            >
              Contact
            </Link>

            <div className="w-full h-px bg-gray-400 my-2"></div>

            <div className="flex items-center gap-3 py-2">
              <FontAwesomeIcon icon={faUserAlt} className="w-5" />
              <Link
                to="/login"
                className="hover:text-red-400"
                onClick={closeMobileMenu}
              >
                Login / Register
              </Link>
            </div>
            <Link
              to="/wishlist"
              className="flex items-center gap-3 py-2"
              onClick={closeMobileMenu}
            >
              <div className="relative">
                {wishlist.length > 0 && (
                  <div className="bg-red-500 rounded-full w-5 h-5 absolute -top-2 -right-2 flex items-center justify-center text-xs text-white font-medium">
                    {getWishlistCount()}
                  </div>
                )}
                <FontAwesomeIcon icon={faHeart} className="w-5" />
              </div>
              <span>Wishlist</span>
            </Link>
            <Link
              to="/cart"
              className="flex items-center gap-3 py-2"
              onClick={closeMobileMenu}
            >
              <div className="relative">
                {cart.length > 0 && (
                  <div className="bg-red-500 rounded-full w-5 h-5 absolute -top-2 -right-2 flex items-center justify-center text-xs text-white font-medium">
                    {getTotalItemCount()}
                  </div>
                )}
                <FontAwesomeIcon icon={faCartShopping} className="w-5" />
              </div>
              <span>Cart (${getTotalPrice()})</span>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default HeaderPage;
