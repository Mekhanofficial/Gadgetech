import React, { createContext, useState, useEffect } from "react";

// Create a context for the cart
const CartContext = createContext();

export function CartProvider({ children }) {
  // State to hold the cart items
  const [cart, setCart] = useState([]);
  // State to hold the wishlist items
  const [wishlist, setWishlist] = useState([]);

  // Effect to load the saved cart from localStorage on initial render
  useEffect(() => {
    try {
      const savedCart = JSON.parse(localStorage.getItem("cart")); // Get cart from localStorage
      if (savedCart) {
        setCart(savedCart); // If exists, set it to state
      }
    } catch (error) {
      console.error("error parsing", error); // Log parsing error
      localStorage.removeItem("cart"); // Clear localStorage if there's an error
    }
  }, []);

  // Effect to save the cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart)); // Save cart to localStorage
  }, [cart]);

  // Function to add a product to the cart
  const addToCart = (product) => {
    console.log("adding to cart", product); // Log the product being added
    const existingProduct = cart.find((item) => item.id === product.id); // Check if product is already in cart
    if (existingProduct) {
      alert(`You have increased the quantity of ${product.name}`); // Notify user about quantity increase
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 } // Increase quantity if exists
            : item
        )
      );
    } else {
      alert(`${product.name} has been added to cart.`); // Notify user about new addition
      setCart([...cart, { ...product, quantity: 1 }]); // Add new product with quantity 1
    }
  };
  console.log("addToCart in app:", addToCart); // Log the addToCart function

  // Function to increase the quantity of a product in the cart
  const increaseQuantity = (productId) => {
    setCart(
      cart.map(
        (item) =>
          item.id === productId
            ? { ...item, quantity: item.quantity + 1 }
            : item // Increase quantity
      )
    );
  };

  // Function to decrease the quantity of a product in the cart
  const decreaseQuantity = (productId) => {
    setCart(
      cart
        .map((item) =>
          item.id === productId && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 } // Decrease quantity if greater than 1
            : item
        )
        .filter((item) => item.quantity > 0) // Remove items with quantity 0
    );
  };

  // Function to remove an item from the cart
  const removeItemFromCart = (productId) => {
    setCart(cart.filter((item) => item.id !== productId)); // Filter out the item by ID
  };

  // Function to get the total count of items in the cart
  const getTotalItemCount = () => {
    return cart.reduce((total, item) => total + item.quantity, 0); // Sum the quantities
  };

  // Function to get the total price of items in the cart
  const getTotalPrice = () => {
    return cart
      .reduce((total, item) => total + item.salePrice * item.quantity, 0) // Calculate total price
      .toFixed(2); // Format to two decimal places
  };

  // Function to add a product to the wishlist
  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => {
      if (prevWishlist.some((item) => item.id === product.id)) {
        return prevWishlist; // If already in wishlist, return existing wishlist
      }
      return [...prevWishlist, product]; // Otherwise, add new product
    });
  };

  // Function to remove a product from the wishlist
  const removeFromWishlist = (productId) => {
    setWishlist(
      (prevWishlist) => prevWishlist.filter((item) => item.id !== productId) // Filter out the item by ID
    );
  };

  // Function to get the total count of items in the wishlist
  const getWishlistCount = () => wishlist.length; // Return the length of the wishlist

  

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeItemFromCart,
        getTotalItemCount,
        getTotalPrice,
        increaseQuantity,
        decreaseQuantity,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        getWishlistCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartContext;
