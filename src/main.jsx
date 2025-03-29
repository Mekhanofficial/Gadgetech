import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProductDetail from "./components/ProductDetail";
import App from "./App";
import HomePage from "./pages/Home";
import GadgetShop from "./pages/Shop";
import CartPage from "./components/CartPage";
import WishlistPage from "./components/WishlistPage";

const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <GadgetShop />,
      },
      {
        path: "shop/:category",
        element: <GadgetShop />,
      },
      {
        path: "products/:id",
        element: <ProductDetail />,
      },
      {
        path: "cart",
        element: <CartPage />,
      },
      {
        path: "wishlist",
        element: <WishlistPage />,
      },
      // Uncomment these when you create these pages
      // {
      //   path: "about",
      //   element: <AboutPage />,
      // },
      // {
      //   path: "blog",
      //   element: <BlogPage />,
      // },
      // {
      //   path: "contact",
      //   element: <ContactPage />,
      // },
    ],
  },
]);

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
