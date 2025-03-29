import { useState, useEffect} from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faStar,
  faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import {
  allGadgets,
  smartphones,
  laptops,
  tablets,
  smartwatches,
  headphones,
  cameras,
  gaming,
  accessories,
  trendingNow,
  bestSellers,
  newReleases,
  deals,
} from "../components/Products";

const GadgetShop = ({
  cart,
  wishlist,
  addToCart,
  toggleWishlist,
  isInWishlist,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [openDropdowns, setOpenDropdowns] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(allGadgets);
  const [activeFilter, setActiveFilter] = useState("All Gadgets");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [brandFilter, setBrandFilter] = useState([]);
  const [ratingFilter, setRatingFilter] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(8);
  const [sortOption, setSortOption] = useState("featured");
  const [searchQuery, setSearchQuery] = useState("");

  // Parse URL parameters
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const search = params.get("search");
    if (search) {
      setSearchQuery(search);
      handleSearch(search);
    }

    const categoryPath = location.pathname.split("/shop/")[1];
    if (categoryPath) {
      const categoryData = findCategoryByPath(categoryPath);
      if (categoryData) {
        handleFilter(categoryData.products, categoryData.name, categoryPath);
      }
    }
  }, [location]);

  // Get current products
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total pages
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const toggleDropdown = (dropdownId) => {
    setOpenDropdowns((prev) =>
      prev.includes(dropdownId)
        ? prev.filter((id) => id !== dropdownId)
        : [...prev, dropdownId]
    );
  };

  const isDropdownOpen = (dropdownId) => {
    return openDropdowns.includes(dropdownId);
  };

  const handleFilter = (products, filterName, categoryPath = "") => {
    const filtered = applyAllFilters(products);
    setFilteredProducts(filtered);
    setActiveFilter(filterName);
    setCurrentPage(1);
  };

  const applyAllFilters = (products) => {
    let filtered = [...products];

    // Apply search filter
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.brand.toLowerCase().includes(query) ||
          product.description.toLowerCase().includes(query)
      );
    }

    // Apply price filter
    filtered = filtered.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    // Apply brand filter
    if (brandFilter.length > 0) {
      filtered = filtered.filter((product) =>
        brandFilter.includes(product.brand)
      );
    }

    // Apply rating filter
    if (ratingFilter > 0) {
      filtered = filtered.filter((product) => product.rating >= ratingFilter);
    }

    // Apply sorting
    switch (sortOption) {
      case "price-low":
        filtered.sort((a, b) => a.price - b.price);
        break;
      case "price-high":
        filtered.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        filtered.sort((a, b) => b.rating - a.rating);
        break;
      case "newest":
        filtered.sort(
          (a, b) => new Date(b.releaseDate) - new Date(a.releaseDate)
        );
        break;
      default:
        // Featured (default sorting)
        break;
    }

    return filtered;
  };

  const clearFilters = () => {
    setFilteredProducts(allGadgets);
    setActiveFilter("All Gadgets");
    setOpenDropdowns([]);
    setPriceRange([0, 2000]);
    setBrandFilter([]);
    setRatingFilter(0);
    setCurrentPage(1);
    setSortOption("featured");
    setSearchQuery("");
    navigate("/shop");
  };

  const handlePriceChange = (min, max) => {
    setPriceRange([min, max]);
    updateFilteredProducts();
  };

  const toggleBrand = (brand) => {
    setBrandFilter((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
    setCurrentPage(1);
  };

  const updateFilteredProducts = () => {
    const currentFilter = findCurrentFilter(activeFilter);
    const productsToFilter = currentFilter?.products || allGadgets;
    const filtered = applyAllFilters(productsToFilter);
    setFilteredProducts(filtered);
  };

  const findCurrentFilter = (filterName) => {
    for (const [category, items] of Object.entries(categories)) {
      for (const [itemName, itemData] of Object.entries(items)) {
        if (itemData.name === filterName) return itemData;
        if (itemData.subcategories) {
          for (const [subName, subData] of Object.entries(
            itemData.subcategories
          )) {
            if (subData.name === filterName) return subData;
          }
        }
      }
    }
    return null;
  };

  const findCategoryByPath = (path) => {
    for (const [category, items] of Object.entries(categories)) {
      for (const [itemName, itemData] of Object.entries(items)) {
        if (itemData.path === path) return itemData;
        if (itemData.subcategories) {
          for (const [subName, subData] of Object.entries(
            itemData.subcategories
          )) {
            if (subData.path === path) return subData;
          }
        }
      }
    }
    return null;
  };

  const handleSearch = (query = searchQuery) => {
    if (query.trim()) {
      const filtered = allGadgets.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.brand.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredProducts(filtered);
      setActiveFilter(`Search: "${query}"`);
      setCurrentPage(1);
    } else {
      updateFilteredProducts();
    }
  };

  const categories = {
    "Shop by Category": {
      "All Gadgets": {
        products: allGadgets,
        name: "All Gadgets",
        path: "",
      },
      Smartphones: {
        products: smartphones,
        name: "Smartphones",
        path: "smartphones",
        subcategories: {
          Android: {
            products: smartphones.filter((p) => p.os === "Android"),
            name: "Android Phones",
            path: "android",
          },
          iOS: {
            products: smartphones.filter((p) => p.os === "iOS"),
            name: "iOS Phones",
            path: "ios",
          },
          "5G Phones": {
            products: smartphones.filter((p) => p.features.includes("5G")),
            name: "5G Phones",
            path: "5g-phones",
          },
        },
      },
      // ... other categories with similar structure
    },
    Collections: {
      "Trending Now": {
        products: trendingNow,
        name: "Trending Now",
        path: "trending",
      },
      "Best Sellers": {
        products: bestSellers,
        name: "Best Sellers",
        path: "bestsellers",
      },
      "New Releases": {
        products: newReleases,
        name: "New Releases",
        path: "new-releases",
      },
      "Deals & Offers": {
        products: deals,
        name: "Deals & Offers",
        path: "deals",
      },
    },
  };

  const brands = [
    "Apple",
    "Samsung",
    "Sony",
    "Bose",
    "Microsoft",
    "Dell",
    "HP",
    "Lenovo",
    "Google",
    "OnePlus",
  ];

  const renderCategoryItems = (items, parentId = "") => {
    return Object.entries(items).map(([itemName, itemData]) => {
      const itemId = `${parentId}-${itemName}`
        .replace(/\s+/g, "-")
        .toLowerCase();

      if (["products", "name", "path", "subcategories"].includes(itemName))
        return null;

      if (itemData.products && !itemData.subcategories) {
        return (
          <div
            key={itemId}
            className={`py-2 px-3 rounded transition-colors ${
              activeFilter === itemData.name
                ? "bg-blue-50 text-blue-700 font-medium"
                : "hover:bg-gray-50 text-gray-700"
            }`}
          >
            <Link
              to={`/shop/${itemData.path}`}
              className="w-full text-left text-sm flex items-center"
              onClick={() =>
                handleFilter(itemData.products, itemData.name, itemData.path)
              }
            >
              {itemName}
              {itemData.products.length > 0 && (
                <span className="ml-auto text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                  {itemData.products.length}
                </span>
              )}
            </Link>
          </div>
        );
      }

      return (
        <div key={itemId} className="mb-1">
          <div
            className="flex justify-between items-center py-2 px-3 rounded hover:bg-gray-50 cursor-pointer transition-colors"
            onClick={() => toggleDropdown(itemId)}
          >
            <span className="text-gray-700 hover:text-gray-900 font-medium text-sm">
              {itemName}
            </span>
            <div className="flex items-center">
              {itemData.products && itemData.products.length > 0 && (
                <span className="mr-2 text-xs text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">
                  {itemData.products.length}
                </span>
              )}
              <ChevronIcon isOpen={isDropdownOpen(itemId)} />
            </div>
          </div>

          {isDropdownOpen(itemId) && itemData.subcategories && (
            <div className="pl-4 mt-1 space-y-1">
              {renderCategoryItems(itemData.subcategories, itemId)}
            </div>
          )}
        </div>
      );
    });
  };

  // Update filtered products when filters change
  useEffect(() => {
    updateFilteredProducts();
  }, [brandFilter, ratingFilter, sortOption, searchQuery]);

  return (
    <div className="flex flex-col mt-20 md:flex-row min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-full md:w-72 lg:w-80 bg-white p-5 border-r border-gray-100 shadow-sm">
        <div className="mb-6">
          <h2 className="text-xl font-bold mb-4 text-gray-900 flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 mr-2 text-blue-600"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                clipRule="evenodd"
              />
            </svg>
            Tech Haven
          </h2>
          <button
            className="text-blue-600 hover:text-blue-800 text-sm font-medium transition-colors flex items-center"
            onClick={clearFilters}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 mr-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
            Reset Filters
          </button>
        </div>

        {/* Search */}
        <div className="mb-6 bg-gray-50 p-3 rounded-lg border border-gray-100">
          <div className="relative">
            <input
              type="text"
              placeholder="Search products..."
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={(e) => e.key === "Enter" && handleSearch()}
            />
            <button
              onClick={() => handleSearch()}
              className="absolute right-2 top-2 text-gray-500 hover:text-blue-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Price Filter */}
        <div className="mb-6 bg-gray-50 p-3 rounded-lg border border-gray-100">
          <h3
            className="text-sm font-semibold mb-3 cursor-pointer flex justify-between items-center text-gray-800"
            onClick={() => toggleDropdown("price-filter")}
          >
            Price Range
            <ChevronIcon isOpen={isDropdownOpen("price-filter")} />
          </h3>

          {isDropdownOpen("price-filter") && (
            <div className="pl-1">
              <div className="py-2 px-1">
                <div className="flex justify-between mb-3">
                  <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                    ${priceRange[0]}
                  </span>
                  <span className="text-xs text-gray-600 bg-gray-100 px-2 py-1 rounded">
                    ${priceRange[1]}
                  </span>
                </div>
                <div className="relative mb-6">
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    value={priceRange[0]}
                    onChange={(e) =>
                      handlePriceChange(Number(e.target.value), priceRange[1])
                    }
                    className="w-full absolute z-20 opacity-0 h-4 cursor-pointer"
                  />
                  <input
                    type="range"
                    min="0"
                    max="2000"
                    value={priceRange[1]}
                    onChange={(e) =>
                      handlePriceChange(priceRange[0], Number(e.target.value))
                    }
                    className="w-full absolute z-20 opacity-0 h-4 cursor-pointer"
                  />
                  <div className="relative z-10 h-1">
                    <div className="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200"></div>
                    <div
                      className="absolute z-20 top-0 bottom-0 rounded-md bg-blue-500"
                      style={{
                        left: `${(priceRange[0] / 2000) * 100}%`,
                        right: `${100 - (priceRange[1] / 2000) * 100}%`,
                      }}
                    ></div>
                    <div
                      className="absolute z-30 w-4 h-4 top-0 -mt-1.5 bg-blue-600 rounded-full border-2 border-white shadow"
                      style={{
                        left: `${(priceRange[0] / 2000) * 100}%`,
                      }}
                    ></div>
                    <div
                      className="absolute z-30 w-4 h-4 top-0 -mt-1.5 bg-blue-600 rounded-full border-2 border-white shadow"
                      style={{
                        left: `${(priceRange[1] / 2000) * 100}%`,
                      }}
                    ></div>
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  <button
                    onClick={() => handlePriceChange(0, 200)}
                    className={`text-xs py-1 px-2 rounded ${
                      priceRange[0] === 0 && priceRange[1] === 200
                        ? "bg-blue-100 text-blue-700 border border-blue-200"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Under $200
                  </button>
                  <button
                    onClick={() => handlePriceChange(200, 500)}
                    className={`text-xs py-1 px-2 rounded ${
                      priceRange[0] === 200 && priceRange[1] === 500
                        ? "bg-blue-100 text-blue-700 border border-blue-200"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    $200-$500
                  </button>
                  <button
                    onClick={() => handlePriceChange(500, 2000)}
                    className={`text-xs py-1 px-2 rounded ${
                      priceRange[0] === 500 && priceRange[1] === 2000
                        ? "bg-blue-100 text-blue-700 border border-blue-200"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    Over $500
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Brand Filter */}
        <div className="mb-6 bg-gray-50 p-3 rounded-lg border border-gray-100">
          <h3
            className="text-sm font-semibold mb-3 cursor-pointer flex justify-between items-center text-gray-800"
            onClick={() => toggleDropdown("brand-filter")}
          >
            Brands
            <ChevronIcon isOpen={isDropdownOpen("brand-filter")} />
          </h3>

          {isDropdownOpen("brand-filter") && (
            <div className="space-y-2 pl-1">
              {brands.map((brand) => (
                <div key={brand} className="flex items-center">
                  <input
                    type="checkbox"
                    id={`brand-${brand}`}
                    checked={brandFilter.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                    className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
                  />
                  <label
                    htmlFor={`brand-${brand}`}
                    className="ml-2 text-sm text-gray-700"
                  >
                    {brand}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Rating Filter */}
        <div className="mb-6 bg-gray-50 p-3 rounded-lg border border-gray-100">
          <h3 className="text-sm font-semibold mb-3 text-gray-800">
            Customer Rating
          </h3>
          <div className="flex flex-wrap gap-1">
            {[4, 3, 2, 1].map((rating) => (
              <button
                key={rating}
                onClick={() =>
                  setRatingFilter(ratingFilter === rating ? 0 : rating)
                }
                className={`px-2 py-1 text-xs rounded-md flex items-center ${
                  ratingFilter === rating
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {rating}+
                <FontAwesomeIcon icon={faStar} className="w-3 h-3 ml-1" />
              </button>
            ))}
          </div>
        </div>

        {/* Categories */}
        {Object.entries(categories).map(([category, items]) => {
          const categoryId = category.replace(/\s+/g, "-").toLowerCase();

          return (
            <div
              key={categoryId}
              className="mb-6 bg-gray-50 p-3 rounded-lg border border-gray-100"
            >
              <h3
                className="text-sm font-semibold mb-3 cursor-pointer flex justify-between items-center text-gray-800"
                onClick={() => toggleDropdown(categoryId)}
              >
                {category}
                <ChevronIcon isOpen={isDropdownOpen(categoryId)} />
              </h3>

              {isDropdownOpen(categoryId) && (
                <div className="pl-1">
                  {renderCategoryItems(items, categoryId)}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
          <h2 className="text-xl font-bold text-gray-900">
            {activeFilter}{" "}
            <span className="text-gray-500 font-normal text-sm">
              ({filteredProducts.length}{" "}
              {filteredProducts.length === 1 ? "item" : "items"})
            </span>
          </h2>
          <div className="flex items-center w-full sm:w-auto">
            <span className="text-sm text-gray-600 mr-2 whitespace-nowrap">
              Sort by:
            </span>
            <select
              className="border border-gray-300 rounded-md px-3 py-2 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 w-full sm:w-auto"
              value={sortOption}
              onChange={(e) => setSortOption(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-low">Price: Low to High</option>
              <option value="price-high">Price: High to Low</option>
              <option value="rating">Customer Rating</option>
              <option value="newest">Newest Arrivals</option>
            </select>
          </div>
        </div>

        {filteredProducts.length === 0 ? (
          <div className="text-center py-12">
            <div className="inline-block p-6 bg-gray-100 rounded-full mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No products found
            </h3>
            <p className="text-gray-500 mb-4">
              Try adjusting your filters or search for something else
            </p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Clear all filters
            </button>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {currentProducts.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 border border-gray-100 group"
                >
                  <div className="relative">
                    <Link to={`/products/${product.id}`}>
                      <div className="h-48 bg-gray-50 flex items-center justify-center p-4">
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                      </div>
                    </Link>
                    {product.isNew && (
                      <div className="absolute top-2 left-2 bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                        NEW
                      </div>
                    )}
                    {product.discount && (
                      <div className="absolute top-2 right-2 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
                        {product.discount}% OFF
                      </div>
                    )}
                  </div>
                  <div className="p-4">
                    <div className="flex justify-between items-start mb-1">
                      <span className="text-xs text-gray-500">
                        {product.brand}
                      </span>
                      <div className="flex items-center">
                        <FontAwesomeIcon
                          icon={faStar}
                          className="w-3.5 h-3.5 text-yellow-400"
                        />
                        <span className="text-xs text-gray-700 ml-1">
                          {product.rating}
                          <span className="text-gray-400">
                            {" "}
                            ({product.reviews})
                          </span>
                        </span>
                      </div>
                    </div>
                    <Link to={`/products/${product.id}`}>
                      <h3 className="font-medium text-gray-900 mb-2 line-clamp-2 text-sm hover:text-blue-600">
                        {product.name}
                      </h3>
                    </Link>
                    <div className="flex items-center mb-3">
                      {product.originalPrice && (
                        <span className="text-xs text-gray-400 line-through mr-2">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                      <p className="text-gray-900 font-semibold">
                        ${product.price.toFixed(2)}
                      </p>
                    </div>
                    <div className="flex justify-between items-center">
                      <button
                        onClick={() => toggleWishlist(product)}
                        className="text-xs flex items-center font-medium"
                      >
                        <FontAwesomeIcon
                          icon={faHeart}
                          className={`h-4 w-4 mr-1 ${
                            isInWishlist(product.id)
                              ? "text-red-500"
                              : "text-gray-400 hover:text-red-500"
                          }`}
                        />
                        {isInWishlist(product.id) ? "Saved" : "Save"}
                      </button>
                      <button
                        onClick={() => addToCart(product)}
                        className="bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-3 rounded-md text-xs font-medium transition-colors duration-200 flex items-center"
                      >
                        <FontAwesomeIcon
                          icon={faShoppingCart}
                          className="h-3.5 w-3.5 mr-1"
                        />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {filteredProducts.length > productsPerPage && (
              <div className="flex justify-center mt-8">
                <nav className="flex items-center gap-1">
                  <button
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`px-3 py-1 rounded-md ${
                      currentPage === 1
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (number) => (
                      <button
                        key={number}
                        onClick={() => paginate(number)}
                        className={`px-3 py-1 rounded-md ${
                          currentPage === number
                            ? "bg-blue-500 text-white"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        {number}
                      </button>
                    )
                  )}

                  <button
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`px-3 py-1 rounded-md ${
                      currentPage === totalPages
                        ? "text-gray-400 cursor-not-allowed"
                        : "text-gray-700 hover:bg-gray-100"
                    }`}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                </nav>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

const ChevronIcon = ({ isOpen }) => (
  <svg
    className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19 9l-7 7-7-7"
    />
  </svg>
);

export default GadgetShop;
