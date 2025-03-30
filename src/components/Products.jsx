import ex1 from "../pictures/ex1.jpg";
import ex2 from "../pictures/ex2.avif";
import ex3 from "../pictures/ex3.jpg";
import ex4 from "../pictures/ex4.jpg";
import ex5 from "../pictures/ex5.jpg";
import ex6 from "../pictures/ex6.avif";
import ex7 from "../pictures/ex7.jpg";
import ex8 from "../pictures/ex8.jpg";
import ex9 from "../pictures/ex9.avif";
import ex10 from "../pictures/ex10.jpg";
import ex11 from "../pictures/ex11.avif";
import ex12 from "../pictures/ex12.jpg";
import ex13 from "../pictures/ex13.avif";
import ex14 from "../pictures/ex14.avif";
import ex15 from "../pictures/ex15.avif";
import ex16 from "../pictures/ex16.jpg";
import ex17 from "../pictures/ex17.jpg";
import ex18 from "../pictures/ex18.jpg";
import ex19 from "../pictures/ex19.jpg";
import ex20 from "../pictures/ex20.jpeg";
import ex21 from "../pictures/ex21.jpeg";
import ex22 from "../pictures/ex22.png";
import ex23 from "../pictures/ex23.webp";
import ex24 from "../pictures/ex24.webp";
import ex25 from "../pictures/ex25.jpg";
import ex26 from "../pictures/ex26.jpeg";
import ex27 from "../pictures/ex27.jpg";

export const allGadgets = [
  // Smartphones (6 items)
  {
    id: 1,
    name: "iPhone 14 Pro Max",
    price: 1099,
    originalPrice: 1199,
    brand: "Apple",
    category: "Smartphones",
    type: "Smartphone",
    os: "iOS",
    rating: 4.8,
    reviews: 1245,
    image: ex9,
    features: ['6.7" Super Retina XDR', "A16 Bionic", "5G", "48MP Camera"],
    releaseDate: "2022-09-16",
  },
  {
    id: 2,
    name: "Galaxy S23 Ultra",
    price: 1199,
    brand: "Samsung",
    category: "Smartphones",
    type: "Smartphone",
    os: "Android",
    rating: 4.7,
    reviews: 892,
    image: ex10,
    features: [
      '6.8" Dynamic AMOLED',
      "Snapdragon 8 Gen 2",
      "200MP Camera",
      "S Pen",
    ],
    releaseDate: "2023-02-17",
  },
  {
    id: 3,
    name: "Pixel 7 Pro",
    price: 899,
    brand: "Google",
    category: "Smartphones",
    type: "Smartphone",
    os: "Android",
    rating: 4.6,
    reviews: 567,
    image: ex11,
    features: ['6.7" OLED', "Google Tensor G2", "50MP Camera", "30x Zoom"],
    releaseDate: "2022-10-13",
  },
  {
    id: 4,
    name: "OnePlus 11",
    price: 699,
    brand: "OnePlus",
    category: "Smartphones",
    type: "Smartphone",
    os: "Android",
    rating: 4.5,
    reviews: 432,
    image: ex12,
    features: ['6.7" Fluid AMOLED', "Snapdragon 8 Gen 2", "Hasselblad Camera"],
    releaseDate: "2023-01-04",
  },
  {
    id: 5,
    name: "iPhone SE (3rd Gen)",
    price: 429,
    brand: "Apple",
    category: "Smartphones",
    type: "Smartphone",
    os: "iOS",
    rating: 4.3,
    reviews: 321,
    image: ex13,
    features: ['4.7" Retina HD', "A15 Bionic", "5G", "Touch ID"],
    releaseDate: "2022-03-18",
  },
  {
    id: 6,
    name: "Galaxy Z Flip 4",
    price: 999,
    brand: "Samsung",
    category: "Smartphones",
    type: "Foldable",
    os: "Android",
    rating: 4.4,
    reviews: 278,
    image: ex14,
    features: ['6.7" Foldable', "Snapdragon 8+ Gen 1", "Compact Design"],
    releaseDate: "2022-08-26",
  },

  // Laptops (6 items)
  {
    id: 7,
    name: 'MacBook Pro 16" M2 Max',
    price: 2499,
    brand: "Apple",
    category: "Laptops",
    type: "Ultrabook",
    rating: 4.9,
    reviews: 876,
    image: ex14,
    features: ["M2 Max chip", "32GB RAM", "1TB SSD", "Liquid Retina XDR"],
    releaseDate: "2023-01-24",
  },
  {
    id: 8,
    name: "XPS 15",
    price: 1499,
    brand: "Dell",
    category: "Laptops",
    type: "Ultrabook",
    rating: 4.7,
    reviews: 654,
    image: ex15,
    features: ['15.6" 4K OLED', "Intel i7", "16GB RAM", "512GB SSD"],
    releaseDate: "2022-05-15",
  },
  {
    id: 9,
    name: "ROG Zephyrus G14",
    price: 1599,
    brand: "ASUS",
    category: "Laptops",
    type: "Gaming",
    rating: 4.8,
    reviews: 543,
    image: ex16,
    features: ['14" QHD', "Ryzen 9", "RTX 3060", "16GB RAM"],
    releaseDate: "2022-02-10",
  },
  {
    id: 10,
    name: "ThinkPad X1 Carbon",
    price: 1399,
    brand: "Lenovo",
    category: "Laptops",
    type: "Business",
    rating: 4.6,
    reviews: 432,
    image: ex1,
    features: ['14" WUXGA', "Intel i7", "16GB RAM", "Military Grade"],
    releaseDate: "2022-04-22",
  },
  {
    id: 11,
    name: "Surface Laptop 5",
    price: 1299,
    brand: "Microsoft",
    category: "Laptops",
    type: "Ultrabook",
    rating: 4.5,
    reviews: 321,
    image: ex2,
    features: ['13.5" Touch', "Intel i5", "8GB RAM", "Windows 11"],
    releaseDate: "2022-10-25",
  },
  {
    id: 12,
    name: "MacBook Air M2",
    price: 1199,
    brand: "Apple",
    category: "Laptops",
    type: "Ultrabook",
    rating: 4.8,
    reviews: 765,
    image: ex3,
    features: ['13.6" Liquid Retina', "M2 chip", "8GB RAM", "256GB SSD"],
    releaseDate: "2022-07-15",
  },

  // Tablets (3 items)
  {
    id: 13,
    name: 'iPad Pro 12.9"',
    price: 1099,
    brand: "Apple",
    category: "Tablets",
    type: "Tablet",
    os: "iPadOS",
    rating: 4.7,
    reviews: 543,
    image: ex4,
    features: ["M2 chip", "Liquid Retina XDR", "Face ID", "Thunderbolt"],
    releaseDate: "2022-10-26",
  },
  {
    id: 14,
    name: "Galaxy Tab S8 Ultra",
    price: 1099,
    brand: "Samsung",
    category: "Tablets",
    type: "Tablet",
    os: "Android",
    rating: 4.6,
    reviews: 432,
    image: ex5,
    features: ['14.6" AMOLED', "S Pen", "Snapdragon 8 Gen 1"],
    releaseDate: "2022-02-25",
  },
  {
    id: 15,
    name: "Surface Pro 9",
    price: 999,
    brand: "Microsoft",
    category: "Tablets",
    type: "2-in-1",
    os: "Windows",
    rating: 4.5,
    reviews: 321,
    image: ex6,
    features: ['13" PixelSense', "Intel i5", "8GB RAM", "Surface Pen"],
    releaseDate: "2022-10-25",
  },

  // Smartwatches (3 items)
  {
    id: 16,
    name: "Apple Watch Ultra",
    price: 799,
    brand: "Apple",
    category: "Smartwatches",
    type: "Fitness",
    rating: 4.8,
    reviews: 654,
    image: ex7,
    features: [
      "49mm Titanium",
      "GPS + Cellular",
      "Blood Oxygen",
      "Depth Gauge",
    ],
    releaseDate: "2022-09-23",
  },
  {
    id: 17,
    name: "Galaxy Watch 5 Pro",
    price: 449,
    brand: "Samsung",
    category: "Smartwatches",
    type: "Fitness",
    rating: 4.6,
    reviews: 432,
    image: ex8,
    features: ["45mm Titanium", "Wear OS", "BioActive Sensor", "GPS"],
    releaseDate: "2022-08-26",
  },
  {
    id: 18,
    name: "Garmin Fenix 7",
    price: 699,
    brand: "Garmin",
    category: "Smartwatches",
    type: "Fitness",
    rating: 4.7,
    reviews: 321,
    image: ex17,
    features: ["Solar Charging", "Multi-band GPS", "32GB Storage", "Topo Maps"],
    releaseDate: "2022-01-18",
  },

  // Headphones (3 items)
  {
    id: 19,
    name: "AirPods Pro 2",
    price: 249,
    brand: "Apple",
    category: "Headphones",
    type: "Wireless",
    rating: 4.8,
    reviews: 876,
    image: ex18,
    features: ["Active Noise Cancellation", "Adaptive Transparency", "H2 Chip"],
    releaseDate: "2022-09-23",
  },
  {
    id: 20,
    name: "WH-1000XM5",
    price: 399,
    brand: "Sony",
    category: "Headphones",
    type: "Wireless",
    rating: 4.9,
    reviews: 765,
    image: ex19,
    features: ["Industry-leading ANC", "30hr Battery", "Multi-point Pairing"],
    releaseDate: "2022-05-19",
  },
  {
    id: 21,
    name: "QuietComfort 45",
    price: 329,
    brand: "Bose",
    category: "Headphones",
    type: "Wireless",
    rating: 4.7,
    reviews: 543,
    image: ex20,
    features: ["Noise Cancelling", "24hr Battery", "TriPort Acoustic"],
    releaseDate: "2021-09-23",
  },

  // Cameras (3 items)
  {
    id: 22,
    name: "EOS R5",
    price: 3899,
    brand: "Canon",
    category: "Cameras",
    type: "Mirrorless",
    rating: 4.8,
    reviews: 321,
    image: ex21,
    features: ["45MP Full Frame", "8K Video", "IBIS", "Dual Pixel AF"],
    releaseDate: "2020-07-30",
  },
  {
    id: 23,
    name: "A7 IV",
    price: 2499,
    brand: "Sony",
    category: "Cameras",
    type: "Mirrorless",
    rating: 4.9,
    reviews: 432,
    // image: ex22,
    features: ["33MP Full Frame", "4K60p", "Real-time Tracking"],
    releaseDate: "2021-12-23",
  },
  {
    id: 24,
    name: "HERO11 Black",
    price: 499,
    brand: "GoPro",
    category: "Cameras",
    type: "Action",
    rating: 4.6,
    reviews: 543,
    image: ex22,
    features: ["5.3K60", "HyperSmooth 5.0", "10-bit Color", "Waterproof"],
    releaseDate: "2022-09-14",
  },

  // Gaming (3 items)
  {
    id: 25,
    name: "PlayStation 5",
    price: 499,
    brand: "Sony",
    category: "Gaming",
    type: "Console",
    rating: 4.8,
    reviews: 987,
    image: ex23,
    features: ["4K/120fps", "825GB SSD", "3D Audio", "DualSense"],
    releaseDate: "2020-11-12",
  },
  {
    id: 26,
    name: "Xbox Series X",
    price: 499,
    brand: "Microsoft",
    category: "Gaming",
    type: "Console",
    rating: 4.7,
    reviews: 876,
    image: ex24,
    features: ["4K/120fps", "1TB SSD", "Quick Resume", "Backward Compatible"],
    releaseDate: "2020-11-10",
  },
  {
    id: 27,
    name: "Nintendo Switch OLED",
    price: 349,
    brand: "Nintendo",
    category: "Gaming",
    type: "Console",
    rating: 4.6,
    reviews: 765,
    // image: ex26,
    features: ['7" OLED', "64GB Storage", "Tabletop Mode", "Joy-Con"],
    releaseDate: "2021-10-08",
  },

  // Accessories (3 items)
  {
    id: 28,
    name: "MagSafe Charger",
    price: 39,
    brand: "Apple",
    category: "Accessories",
    type: "Charger",
    rating: 4.3,
    reviews: 432,
    image: ex25,
    features: ["15W Fast Charging", "LED Indicator", "Compatible with Cases"],
    releaseDate: "2020-10-23",
  },
  {
    id: 29,
    name: "Galaxy Buds2 Pro",
    price: 229,
    brand: "Samsung",
    category: "Accessories",
    type: "Earbuds",
    rating: 4.5,
    reviews: 321,
    image: ex26,
    features: ["24-bit Hi-Fi", "ANC", "Iex7 Waterproof"],
    releaseDate: "2022-08-26",
  },
  {
    id: 30,
    name: "MX Master 3S",
    price: 99,
    brand: "Logitech",
    category: "Accessories",
    type: "Mouse",
    rating: 4.7,
    reviews: 543,
    image: ex27,
    features: ["8K DPI", "Silent Clicks", "Multi-device", "USB-C"],
    releaseDate: "2022-06-07",
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
export const trendingNow = allGadgets
  .filter((product) => product.rating >= 4.7)
  .slice(0, 4);
export const bestSellers = [...allGadgets]
  .sort((a, b) => b.reviews - a.reviews)
  .slice(0, 4);
export const newReleases = [...allGadgets]
  .sort((a, b) => new Date(b.releaseDate) - new Date(a.releaseDate))
  .slice(0, 4);
export const deals = allGadgets
  .filter((product) => product.originalPrice)
  .sort((a, b) => b.originalPrice - b.price - (a.originalPrice - a.price))
  .slice(0, 4);
