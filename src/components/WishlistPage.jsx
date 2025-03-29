import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faShoppingCart,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";

const WishlistPage = ({ wishlist, toggleWishlist, addToCart }) => {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Your Wishlist</h1>

      {wishlist.length === 0 ? (
        <div className="text-center py-12">
          <div className="inline-block p-6 bg-gray-100 rounded-full mb-4">
            <FontAwesomeIcon
              icon={faHeart}
              className="h-12 w-12 text-gray-400"
            />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Your wishlist is empty
          </h3>
          <p className="text-gray-500 mb-4">
            Save your favorite items here for later
          </p>
          <Link
            to="/shop"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {wishlist.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200 border border-gray-100 group relative"
            >
              <button
                onClick={() => toggleWishlist(product)}
                className="absolute top-2 right-2 bg-white p-2 rounded-full shadow-md text-red-500 hover:bg-red-50 z-10"
              >
                <FontAwesomeIcon icon={faTimes} />
              </button>
              <Link to={`/products/${product.id}`}>
                <div className="h-48 bg-gray-50 flex items-center justify-center p-4">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              </Link>
              <div className="p-4">
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
                <button
                  onClick={() => addToCart(product)}
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-3 rounded-md text-xs font-medium transition-colors duration-200 flex items-center justify-center"
                >
                  <FontAwesomeIcon
                    icon={faShoppingCart}
                    className="h-3.5 w-3.5 mr-1"
                  />
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
