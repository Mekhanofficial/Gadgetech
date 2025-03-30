import { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import HeaderPage from "./components/Header";
import GadgetShop from "./pages/Shop";
import ProductDetail from "./components/ProductDetail";
import HomePage from "./pages/Home";
import CartPage from "./components/CartPage";
import WishlistPage from "./components/WishlistPage";
import FooterPage from "./components/Footer";

function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("techhaven-cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  const [wishlist, setWishlist] = useState(() => {
    const savedWishlist = localStorage.getItem("techhaven-wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  // Save to localStorage whenever cart/wishlist changes
  useEffect(() => {
    localStorage.setItem("techhaven-cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("techhaven-wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  // Shared cart functions
  const addToCart = (product, quantity = 1) => {
    setCart((prevCart) => {
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [...prevCart, { ...product, quantity }];
    });
  };

  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  const updateCartItemQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      removeFromCart(itemId);
      return;
    }
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Shared wishlist functions
  const toggleWishlist = (product) => {
    setWishlist((prev) =>
      prev.some((item) => item.id === product.id)
        ? prev.filter((item) => item.id !== product.id)
        : [...prev, product]
    );
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item.id === productId);
  };

  return (
    <>
      <HeaderPage
        cart={cart}
        wishlist={wishlist}
        removeFromCart={removeFromCart}
        updateCartItemQuantity={updateCartItemQuantity}
      />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/shop"
          element={
            <GadgetShop
              cart={cart}
              wishlist={wishlist}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              isInWishlist={isInWishlist}
            />
          }
        />
        <Route
          path="/shop/:category"
          element={
            <GadgetShop
              cart={cart}
              wishlist={wishlist}
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              isInWishlist={isInWishlist}
            />
          }
        />
        <Route
          path="/products/:id"
          element={
            <ProductDetail
              addToCart={addToCart}
              toggleWishlist={toggleWishlist}
              isInWishlist={isInWishlist}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <CartPage
              cart={cart}
              removeFromCart={removeFromCart}
              updateCartItemQuantity={updateCartItemQuantity}
            />
          }
        />
        <Route
          path="/wishlist"
          element={
            <WishlistPage
              wishlist={wishlist}
              toggleWishlist={toggleWishlist}
              addToCart={addToCart}
            />
          }
        />
      </Routes>
      <FooterPage />
    </>
  );
}

export default App;
