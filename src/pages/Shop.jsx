import { useState } from "react";
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
import HeaderPage from "../components/Header";

const GadgetShop = () => {
  const [openDropdowns, setOpenDropdowns] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState(allGadgets);
  const [activeFilter, setActiveFilter] = useState("All Gadgets");
  const [priceRange, setPriceRange] = useState([0, 2000]);
  const [brandFilter, setBrandFilter] = useState([]);
  const [ratingFilter, setRatingFilter] = useState(0);

  const toggleDropdown = (dropdownId) => {
    setOpenDropdowns((prev) =>
      prev.includes(dropdownId)
        ? prev.filter((id) => id !== dropdownId)
        : [...prev, dropdownId]
    );
  };

  const handleFilter = (products, filterName) => {
    const filtered = applyAllFilters(products);
    setFilteredProducts(filtered);
    setActiveFilter(filterName);
  };

  const applyAllFilters = (products) => {
    return products.filter((product) => {
      const priceMatch =
        product.price >= priceRange[0] && product.price <= priceRange[1];
      const brandMatch =
        brandFilter.length === 0 || brandFilter.includes(product.brand);
      const ratingMatch = product.rating >= ratingFilter;
      return priceMatch && brandMatch && ratingMatch;
    });
  };

  const clearFilters = () => {
    setFilteredProducts(allGadgets);
    setActiveFilter("All Gadgets");
    setOpenDropdowns([]);
    setPriceRange([0, 2000]);
    setBrandFilter([]);
    setRatingFilter(0);
  };

  const handlePriceChange = (min, max) => {
    setPriceRange([min, max]);
    if (activeFilter !== "All Gadgets") {
      const currentFilter = findCurrentFilter(activeFilter);
      if (currentFilter) {
        const filtered = applyAllFilters(currentFilter.products);
        setFilteredProducts(filtered);
      }
    } else {
      const filtered = applyAllFilters(allGadgets);
      setFilteredProducts(filtered);
    }
  };

  const toggleBrand = (brand) => {
    setBrandFilter((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
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

  const isDropdownOpen = (dropdownId) => {
    return openDropdowns.includes(dropdownId);
  };

  const categories = {
    "Shop by Category": {
      "All Gadgets": { products: allGadgets, name: "All Gadgets" },
      Smartphones: {
        products: smartphones,
        name: "Smartphones",
        subcategories: {
          Android: {
            products: smartphones.filter((p) => p.os === "Android"),
            name: "Android Phones",
          },
          iOS: {
            products: smartphones.filter((p) => p.os === "iOS"),
            name: "iOS Phones",
          },
        },
      },
      Laptops: {
        products: laptops,
        name: "Laptops",
        subcategories: {
          Gaming: {
            products: laptops.filter((p) => p.type === "Gaming"),
            name: "Gaming Laptops",
          },
          Ultrabooks: {
            products: laptops.filter((p) => p.type === "Ultrabook"),
            name: "Ultrabooks",
          },
        },
      },
      Tablets: { products: tablets, name: "Tablets" },
      Smartwatches: { products: smartwatches, name: "Smartwatches" },
      Headphones: {
        products: headphones,
        name: "Headphones",
        subcategories: {
          Wireless: {
            products: headphones.filter((p) => p.type === "Wireless"),
            name: "Wireless Headphones",
          },
          NoiseCancelling: {
            products: headphones.filter((p) =>
              p.features.includes("Noise Cancelling")
            ),
            name: "Noise Cancelling",
          },
        },
      },
      Cameras: { products: cameras, name: "Cameras" },
      Gaming: { products: gaming, name: "Gaming" },
      Accessories: { products: accessories, name: "Accessories" },
    },
    Collections: {
      "Trending Now": { products: trendingNow, name: "Trending Now" },
      "Best Sellers": { products: bestSellers, name: "Best Sellers" },
      "New Releases": { products: newReleases, name: "New Releases" },
      "Deals & Offers": { products: deals, name: "Deals & Offers" },
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

      if (["products", "name", "subcategories"].includes(itemName)) return null;

      if (itemData.products && !itemData.subcategories) {
        return (
          <div
            key={itemId}
            className={`py-2 px-3 rounded transition-colors ${
              activeFilter === itemData.name
                ? "bg-blue-100 text-blue-800 font-medium"
                : "hover:bg-gray-100 text-gray-800"
            }`}
          >
            <button
              className="w-full text-left text-sm"
              onClick={() => handleFilter(itemData.products, itemData.name)}
            >
              {itemName}
            </button>
          </div>
        );
      }

      return (
        <div key={itemId} className="mb-1">
          <div
            className="flex justify-between items-center py-2 px-3 rounded hover:bg-gray-100 cursor-pointer transition-colors"
            onClick={() => toggleDropdown(itemId)}
          >
            <span className="text-gray-800 hover:text-gray-900 font-medium text-sm">
              {itemName}
            </span>
            <ChevronIcon isOpen={isDropdownOpen(itemId)} />
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

  return (
    <>
      <HeaderPage />

      <div className="flex flex-col mt-24 md:flex-row min-h-screen bg-gray-50">
        {/* Sidebar - Modern Tech Design */}
        <div className="w-full md:w-80 bg-white p-5 border-r border-gray-200 shadow-sm">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-4 text-gray-900">
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

          {/* Price Filter */}
          <div className="mb-6 bg-gray-50 p-3 rounded-lg">
            <h3
              className="text-md font-semibold mb-3 cursor-pointer flex justify-between items-center text-gray-800"
              onClick={() => toggleDropdown("price-filter")}
            >
              Price Range
              <ChevronIcon isOpen={isDropdownOpen("price-filter")} />
            </h3>

            {isDropdownOpen("price-filter") && (
              <div className="pl-1">
                <div className="py-2 px-1">
                  <div className="flex justify-between mb-3">
                    <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
                      ${priceRange[0]}
                    </span>
                    <span className="text-sm text-gray-600 bg-gray-100 px-2 py-1 rounded">
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
                </div>
              </div>
            )}
          </div>

          {/* Brand Filter */}
          <div className="mb-6 bg-gray-50 p-3 rounded-lg">
            <h3
              className="text-md font-semibold mb-3 cursor-pointer flex justify-between items-center text-gray-800"
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
                      className="h-4 w-4 text-blue-600 rounded focus:ring-blue-500"
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
          <div className="mb-6 bg-gray-50 p-3 rounded-lg">
            <h3 className="text-md font-semibold mb-3 text-gray-800">
              Customer Rating
            </h3>
            <div className="flex space-x-2">
              {[4, 3, 2, 1].map((rating) => (
                <button
                  key={rating}
                  onClick={() => setRatingFilter(rating)}
                  className={`px-2 py-1 text-sm rounded-md ${
                    ratingFilter === rating
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                  }`}
                >
                  {rating}+
                </button>
              ))}
              {ratingFilter > 0 && (
                <button
                  onClick={() => setRatingFilter(0)}
                  className="px-2 py-1 text-sm text-gray-500 hover:text-gray-700"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Categories */}
          {Object.entries(categories).map(([category, items]) => {
            const categoryId = category.replace(/\s+/g, "-").toLowerCase();

            return (
              <div key={categoryId} className="mb-6 bg-gray-50 p-3 rounded-lg">
                <h3
                  className="text-md font-semibold mb-3 cursor-pointer flex justify-between items-center text-gray-800"
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

        {/* Main Content - Tech Showcase */}
        <div className="flex-1 p-6">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {activeFilter}{" "}
              <span className="text-gray-500 font-normal">
                ({filteredProducts.length} products)
              </span>
            </h2>
            <div className="flex items-center">
              <span className="text-sm text-gray-600 mr-2">Sort by:</span>
              <select className="border border-gray-300 rounded-md px-3 py-1 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>Featured</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Customer Rating</option>
                <option>Newest Arrivals</option>
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
              <p className="text-gray-500 text-lg">
                No products match your filters.
              </p>
              <button
                onClick={clearFilters}
                className="mt-4 text-blue-600 hover:text-blue-800 font-medium"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredProducts.map((product) => (
                <GadgetCard key={product.id} product={product} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

// Modern Gadget Card Component
const GadgetCard = ({ product }) => (
  <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100">
    <div className="relative">
      <div className="h-48 bg-gray-100 flex items-center justify-center overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-contain p-4"
          />
        ) : (
          <div className="text-gray-400">Product Image</div>
        )}
      </div>
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
        <span className="text-xs text-gray-500">{product.brand}</span>
        <div className="flex items-center">
          <svg
            className="w-4 h-4 text-yellow-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-sm text-gray-700 ml-1">
            {product.rating}
            <span className="text-gray-500"> ({product.reviews})</span>
          </span>
        </div>
      </div>
      <h3 className="font-medium text-gray-900 mb-2 line-clamp-2">
        {product.name}
      </h3>
      <div className="flex items-center">
        {product.originalPrice && (
          <span className="text-sm text-gray-500 line-through mr-2">
            ${product.originalPrice.toFixed(2)}
          </span>
        )}
        <p className="text-gray-900 font-semibold">
          ${product.price.toFixed(2)}
        </p>
      </div>
      <div className="mt-3 flex justify-between items-center">
        <button className="text-sm text-blue-600 hover:text-blue-800 font-medium flex items-center">
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
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            />
          </svg>
          Save
        </button>
        <button className="bg-blue-600 hover:bg-blue-700 text-white py-1.5 px-4 rounded-md text-sm font-medium transition-colors duration-200 flex items-center">
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
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          Add to Cart
        </button>
      </div>
    </div>
  </div>
);

// Chevron Icon Component remains the same
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
