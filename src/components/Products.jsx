import px1 from "../pictures/px10.webp";
import px2 from "../pictures/px10.webp";
import px3 from "../pictures/px10.webp";
import px4 from "../pictures/px10.webp";
import px5 from "../pictures/px10.webp";
import px6 from "../pictures/px10.webp";
import px7 from "../pictures/px10.webp";
import px8 from "../pictures/px10.webp";

export const allGadgets = [
  {
    id: 1,
    name: 'Ultra HD Smart TV 55"',
    price: 699.99,
    originalPrice: 799.99,
    brand: "Samsung",
    category: "TVs",
    rating: 4.7,
    reviews: 1245,
    image: px1,
    isNew: true,
    features: ["4K UHD", "Smart OS", "HDR"],
  },
  {
    id: 2,
    name: "Wireless Noise Cancelling Headphones",
    price: 349.99,
    brand: "Sony",
    category: "Headphones",
    rating: 4.8,
    reviews: 892,
    image: px2,
    features: ["Bluetooth 5.0", "30hr battery", "Touch controls"],
  },
  {
    id: 3,
    name: 'Pro Laptop 16"',
    price: 1899.99,
    brand: "Apple",
    category: "Laptops",
    rating: 4.9,
    reviews: 1567,
    image: px3,
    features: ["M1 Pro chip", "32GB RAM", "1TB SSD"],
  },
  {
    id: 4,
    name: "Smartphone Pro Max",
    price: 1099.99,
    originalPrice: 1199.99,
    brand: "Apple",
    category: "Smartphones",
    rating: 4.6,
    reviews: 2345,
    image: px4,
    discount: 8,
    features: ['6.7" OLED', "A15 Bionic", "5G"],
  },
  {
    id: 5,
    name: "Fitness Smartwatch",
    price: 199.99,
    brand: "Fitbit",
    category: "Smartwatches",
    rating: 4.3,
    reviews: 567,
    image: px5,
    isNew: true,
    features: ["Heart rate", "GPS", "7-day battery"],
  },
  {
    id: 6,
    name: "Gaming Console",
    price: 499.99,
    brand: "Sony",
    category: "Gaming",
    rating: 4.8,
    reviews: 3210,
    image: px6,
    features: ["4K Gaming", "1TB SSD", "Backward compatible"],
  },
  {
    id: 7,
    name: "Wireless Earbuds Pro",
    price: 249.99,
    brand: "Bose",
    category: "Headphones",
    rating: 4.5,
    reviews: 789,
    image: px7,
    features: ["Active noise cancelling", "24hr battery", "IPX4"],
  },
  {
    id: 8,
    name: "4K Action Camera",
    price: 399.99,
    brand: "GoPro",
    category: "Cameras",
    rating: 4.7,
    reviews: 432,
    image: px8,
    features: ["4K60 video", "Waterproof", "HyperSmooth"],
  },
];

// Filter functions for all categories
export const smartphones = allGadgets.filter(
  (product) => product.category === "Smartphones"
);
export const laptops = allGadgets.filter(
  (product) => product.category === "Laptops"
);
export const tablets = allGadgets.filter(
  (product) => product.category === "Tablets"
);
export const smartwatches = allGadgets.filter(
  (product) => product.category === "Smartwatches"
);
export const headphones = allGadgets.filter(
  (product) => product.category === "Headphones"
);
export const cameras = allGadgets.filter(
  (product) => product.category === "Cameras"
);
export const gaming = allGadgets.filter(
  (product) => product.category === "Gaming"
);
export const accessories = allGadgets.filter(
  (product) => product.category === "Accessories"
);

// Collections
export const trendingNow = allGadgets.filter((_, index) => index < 4);
export const bestSellers = [...allGadgets]
  .sort((a, b) => b.reviews - a.reviews)
  .slice(0, 4);
export const newReleases = allGadgets.filter((product) => product.isNew);
export const deals = allGadgets.filter((product) => product.discount);
