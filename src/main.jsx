import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./pages/Home";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import AboutPage from "./pages/About";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GadgetShop from "./pages/Shop";
// import BlogPage from "./pages/Blog";
// import ContactPage from "./pages/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));

const proRouter = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  // {
  //   path: "/About",
  //   element: <AboutPage />,
  // },
  // {
  //   path: "/Blog",
  //   element: <BlogPage />,
  // },
  // {
  //   path: "/Contact",
  //   element: <ContactPage />,
  // },
  {
    path: "/Shop",
    element: <GadgetShop />,
  },
]);

root.render(
  <React.StrictMode>
    {/* <CartProvider> */}
    <RouterProvider router={proRouter} />
    {/* </CartProvider> */}
  </React.StrictMode>
);
