import React, { useState, useEffect } from "react";
import HeaderPage from "../../components/Header";
import { motion } from "framer-motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bg1 from "../../pictures/bg1.jpg";
import bg2 from "../../pictures/bg2.jpg";
import bg3 from "../../pictures/bg3.jpg";
import px33 from "../../pictures/px33.webp";
import px32 from "../../pictures/px32.webp";
import px31 from "../../pictures/px31.webp";
import px30 from "../../pictures/px30.webp";
import px29 from "../../pictures/px29.webp";
import px28 from "../../pictures/px28.webp";
import px27 from "../../pictures/px27.webp";
import px26 from "../../pictures/px26.webp";
import px25 from "../../pictures/px25.webp";
import px21 from "../../pictures/px21.jpg";
import px20 from "../../pictures/px20.jpg";
import px19 from "../../pictures/px19.jpg";
import px18 from "../../pictures/px18.webp";
import px17 from "../../pictures/px17.webp";
import px16 from "../../pictures/px16.webp";
import px15 from "../../pictures/px15.webp";
import px14 from "../../pictures/px14.webp";
import px13 from "../../pictures/px13.webp";
import px12 from "../../pictures/px12.avif";
import px11 from "../../pictures/px11.webp";
import px10 from "../../pictures/px10.webp";
import px9 from "../../pictures/px9.avif";
import px8 from "../../pictures/px8.webp";
import px7 from "../../pictures/px7.png";
import px6 from "../../pictures/px6.png";
import px5 from "../../pictures/px5.png";
import px4 from "../../pictures/px4.png";
import pop1 from "../../pictures/pop1.jpg";
import pop2 from "../../pictures/pop2.jpg";
import pop3 from "../../pictures/pop3.jpg";
import pop4 from "../../pictures/pop4.jpg";
import pop5 from "../../pictures/pop5.jpg";
import pop6 from "../../pictures/pop6.jpg";
import quote from "../../pictures/quote.png";
import br from "../../pictures/br.webp";
import br2 from "../../pictures/br2.webp";
import br3 from "../../pictures/br3.webp";
import br4 from "../../pictures/br4.webp";
import br5 from "../../pictures/br5.webp";
import br6 from "../../pictures/br6.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCommentDots,
  faCreditCard,
} from "@fortawesome/free-regular-svg-icons";
import {
  faArrowRotateLeft,
  faCartShopping,
  faLongArrowRight,
  faStar,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";

const slideProducts = [
  {
    img: bg1,
    sale: "30%",
    title: "SAMSUNG GALAXY",
    subtitle: "BUDS",
    discount: 30,
  },
  {
    img: bg1,
    sale: "20%",
    title: "FUTURE FOOTBALL",
    subtitle: "BOOTS",
    discount: 20,
  },
  {
    img: bg1,
    sale: "30%",
    title: "FUTURE FOOTBALL",
    subtitle: "BOOTS",
    discount: 30,
  },
];

const images = [
  {
    src: px4,
    title: "Title 1",
    subtitle: "Subtitle for Image 1",
  },
  {
    src: px5,
    title: "Title 2",
    subtitle: "Subtitle for Image 2",
  },
  {
    src: px6,
    title: "Title 3",
    subtitle: "Subtitle for Image 3",
  },
  {
    src: px7,
    title: "Title 3",
    subtitle: "Subtitle for Image 3",
  },
];

// brands

const images3 = [
  { src: br, text: "Image 1" },
  { src: br2, text: "Image 2" },
  { src: br3, text: "Image 3" },
  { src: br4, text: "Image 4" },
  { src: br5, text: "Image 5" },
  { src: br6, text: "Image 6" },
];

const HomeHeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slideProducts.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const settingsTwo = {
    infinite: true,
    speed: 900,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    beforeChange: (_, next) => setActiveIndex(next),
  };

  // Slider settings
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true, // Enable auto-slide
    autoplaySpeed: 3000, // Set autoplay interval to 3 seconds
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const popularItems = [
    { src: pop1, name: "Monty jacket", price: "$150.00" },
    { src: pop2, name: "Monty jacket", price: "$150.00" },
    { src: pop3, name: "Monty jacket", price: "$150.00" },
    { src: pop4, name: "Monty jacket", price: "$150.00" },
    { src: pop5, name: "Monty jacket", price: "$150.00" },
    { src: pop6, name: "Monty jacket", price: "$150.00" },
  ];

  const totalStars = 5; // Adjust as needed
  const images2 = [
    { src: px26, text: "Image 1" },
    { src: px27, text: "Image 2" },
    { src: px28, text: "Image 3" },
    { src: px29, text: "Image 4" },
    { src: px30, text: "Image 5" },
    { src: px31, text: "Image 3" },
    { src: px32, text: "Image 4" },
    { src: px33, text: "Image 5" },
  ];
  const latest = [
    { src: px26, text: "Image 1" },
    { src: px27, text: "Image 2" },
    { src: px28, text: "Image 3" },
    { src: px29, text: "Image 4" },
    { src: px30, text: "Image 5" },
    { src: px31, text: "Image 3" },
    { src: px32, text: "Image 4" },
    { src: px33, text: "Image 5" },
  ];

  const testimonials = [
    {
      text: "The Mealsgraffiti is my go-to place for celebrating special occasions. Their food is always delightful and full of flavor.",
      name: "Michael Williamson",
      position: "Food Critic, Local Eats",
      image: px10,
      rightImage: quote,
    },
    {
      text: "The dining experience at The Mealsgraffiti is unmatched! The chefs truly outdo themselves with every dish.",
      name: "david Johnson",
      position: "Restaurant Owner, Taste Haven",
      image: px10,
      rightImage: quote,
    },
    {
      text: "I love the cozy atmosphere and the excellent service at The Mealsgraffiti. Perfect for a relaxed evening with amazing food.",
      name: "sarah Doe",
      position: "Chef, Gourmet Bistro",
      image: px10,
      rightImage: quote,
    },
    {
      text: "The Mealsgraffiti delivers exceptional quality food with a unique taste that keeps me coming back for more.",
      name: "Bill Watson",
      position: "Food Stylist, Elegant Plates",
      image: px10,
      rightImage: quote,
    },
    {
      text: "A hidden gem for food lovers! The Mealsgraffiti's unique menu surprises me in the best way possible every time.",
      name: "Jason Brown",
      position: "Food Blogger, The Flavor Journey",
      image: px10,
      rightImage: quote,
    },
    {
      text: "Every meal at The Mealsgraffiti feels like a celebration of flavors. Truly an unforgettable dining experience.",
      name: "Jessica Adams",
      position: "Gastronomy Enthusiast, Taste Explorers",
      image: px10,
      rightImage: quote,
    },
  ];

  const settingsThree = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, // Default: show 2 slides
    slidesToScroll: 2, // Default: scroll 2 slides at a time
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    customPaging: (i) => <div className="custom-dot"></div>, // Customize the dots
    appendDots: (dots) => (
      <ul className="slick-dots mt-2">
        {dots.slice(0, 2)} {/* Display only two dots */}
      </ul>
    ),
    responsive: [
      {
        breakpoint: 768, // For tablets and smaller
        settings: {
          slidesToShow: 1, // Show 1 slide
          slidesToScroll: 1, // Scroll 1 slide at a time
        },
      },
    ],
  };

  // Blog posts array with additional posts
  const blogPosts = [
    {
      image: px19,
      date: "January 9, 2025",
      author: "Rose",
      title: "New menu added. You can exchange your taste",
    },
    {
      image: px20,
      date: "November 29, 2024",
      author: "Abraham",
      title: "Explore our exciting menu updates for a new experience",
    },
    {
      image: px21,
      date: "July 1, 2024",
      author: "Shady",
      title: "Discover our chef's specials crafted with love",
    },
  ];
  return (
    <>
      <section className="overflow-x-hidden bg-zinc-950 text-white">
        <HeaderPage />

        <div className="w-full mx-auto ">
          <Slider {...settingsTwo}>
            {slideProducts.map((product, index) => (
              <div
                key={index}
                className="relative flex items-center justify-center h-[600px] bg-zinc-950 opacity-70"
              >
                <div className="absolute w-full h-full  z-10"></div>

                <motion.img
                  className="absolute w-full h-full object-cover "
                  src={product.img}
                  alt={`Slide ${index + 1}`}
                  initial={{ scale: 1 }}
                  animate={{ scale: activeIndex === index ? 1.1 : 1 }}
                  transition={{ duration: 10, ease: "linear" }}
                />
                <motion.div
                  className="relative z-20 text-left mt-32  p-10 ml-10 rounded-lg"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: activeIndex === index ? 1 : 0, y: 0 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                >
                  <h1 className="text-5xl font-extrabold text-yellow-400">
                    SALE {product.sale} OFF
                  </h1>
                  <h2 className="text-3xl font-bold mt-2">{product.title}</h2>
                  <h3 className="text-2xl mt-1 text-gray-300">
                    {product.subtitle}
                  </h3>
                  <p className="mt-4 text-lg text-gray-200">
                    Discount {product.discount}% & Free Shipping
                  </p>
                  <button className="mt-6 bg-yellow-500 hover:bg-yellow-600 text-black font-bold px-6 py-3 rounded-lg shadow-md">
                    Discover Now
                  </button>
                </motion.div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 bg-white mx-4 md:mx-16 p-4 md:p-6 rounded-lg shadow-sm relative -top-8">
          {[
            {
              icon: faTruck,
              title: "Free shipping",
              subtitle: "When you spend $120 or more",
            },
            {
              icon: faCommentDots,
              title: "We are available 24/7",
              subtitle: "Need help? Contact us anytime",
            },
            {
              icon: faArrowRotateLeft,
              title: "Satisfied or return",
              subtitle: "Easy 30-day return policy",
            },
            {
              icon: faCreditCard,
              title: "100% secure payments",
              subtitle: "Visa, Mastercard, Stripe, PayPal",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex items-center gap-3 p-2 md:p-3 hover:bg-gray-50 rounded transition-colors"
            >
              <div className="bg-yellow-50 p-3 rounded-full">
                <FontAwesomeIcon
                  className="text-xl md:text-2xl text-yellow-500"
                  icon={item.icon}
                />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-sm md:text-base font-semibold text-gray-900 truncate">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-xs md:text-sm font-medium truncate">
                  {item.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-white p-4 sm:p-6 lg:p-8 mx-4 sm:mx-8 lg:mx-16 my-8 sm:my-12 lg:my-16 rounded-lg shadow-sm">
          <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 md:gap-6">
            {images2.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-md hover:shadow-md transition-all duration-300"
              >
                {/* Image with responsive sizing and hover effect */}
                <div className="aspect-square overflow-hidden">
                  <img
                    src={image.src}
                    alt={image.alt || `Product ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                </div>

                {/* Text with responsive sizing and better spacing */}
                <div className="p-3 sm:p-4">
                  <p className="text-sm sm:text-base font-medium text-gray-800 line-clamp-2">
                    {image.text}
                  </p>
                  {/* Optional: Add price or other metadata */}
                  {image.price && (
                    <p className="mt-1 text-sm font-semibold text-gray-900">
                      {image.price}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-zinc-950 p-4 sm:p-6 lg:p-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {images.map((image, index) => (
              <div
                key={index}
                className="relative group overflow-hidden rounded-md aspect-[3/4]"
              >
                {/* Main Image */}
                <img
                  src={image.src}
                  alt={image.alt || image.title || `Gallery image ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-zinc-950/0 group-hover:bg-zinc-950/80 transition-all duration-500 flex flex-col justify-center items-center p-4 text-center">
                  {/* Animated background elements */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.1)_0%,rgba(0,0,0,0)_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  </div>

                  {/* Text Content with staggered animation */}
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.1 }}
                    className="text-white text-lg md:text-xl font-semibold z-10 mb-2"
                  >
                    {image.title}
                  </motion.p>
                  <motion.p
                    initial={{ y: 20, opacity: 0 }}
                    whileHover={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.4, delay: 0.2 }}
                    className="text-white/80 text-sm md:text-base z-10 max-w-[80%]"
                  >
                    {image.subtitle}
                  </motion.p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col lg:flex-row w-full min-h-screen">
          {/* Left Image - Full width on mobile, half on desktop */}
          <div className="relative flex-1 h-[50vh] lg:h-auto overflow-hidden group">
            <img
              src={px13}
              alt="Left banner image"
              className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
              loading="eager" // Important image loads first
            />
            {/* Optional overlay/text can be added here */}
          </div>

          {/* Right Side - Full width on mobile, half on desktop */}
          <div className="flex flex-col md:flex-row flex-1 h-[50vh] md:h-[50vh] lg:h-auto">
            {/* Top/Bottom or Left/Right depending on screen size */}
            <div className="relative flex-1 overflow-hidden group">
              <img
                src={px14}
                alt="Right top/left image"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                loading="lazy"
              />
            </div>

            <div className="relative flex-1 overflow-hidden group">
              <img
                src={px15}
                alt="Right bottom/right image"
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <div className="bg-white px-6 py-12 md:px-12 lg:px-24 mx-auto max-w-screen-2xl">
          {/* Centered Heading with your descriptive paragraph */}
          <div className="text-center mb-12 md:mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-teal-900 via-purple-500 to-gray-900 text-transparent bg-clip-text">
              Latest Products
            </h1>
            <p className="mt-4 text-gray-600 text-lg md:text-xl font-light">
              Discover our premium collection of cutting-edge products
            </p>
          </div>

          {/* Products Grid with Right-aligned Text in Containers */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {latest.map((product, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
              >
                {/* Image */}
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={product.src}
                    alt={product.alt || product.text}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                </div>

                {/* Right-aligned Text Only in Product Container */}
                <div className="p-5 bg-white text-right">
                  <h3 className="text-xl font-semibold text-gray-800">
                    {product.text}
                  </h3>
                  {product.price && (
                    <p className="mt-2 text-lg font-bold text-gray-900">
                      {product.price}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Full-width Banner */}
          <div className="mt-16 rounded-xl overflow-hidden">
            <img
              src={px25}
              alt="Premium Collection"
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="bg-zinc-950 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Heading */}
            <div className="text-center mb-16">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 tracking-tight">
                Our Featured Products
              </h1>
              <div className="w-24 h-1 bg-gradient-to-r from-orange-500 to-amber-600 mx-auto rounded-full"></div>
            </div>

            {/* Product Slider */}
            <Slider {...settings} className="pb-2">
              {popularItems.map((item, index) => (
                <div key={index} className="px-2 sm:px-3">
                  {/* Product Card */}
                  <div className="bg-zinc-900 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex flex-col">
                    {/* Image with Hover Effect Only */}
                    <div className="relative overflow-hidden aspect-square">
                      <img
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                        src={item.src}
                        alt={item.name}
                        loading="lazy"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl font-semibold mb-2">
                          {item.name}
                        </h3>
                        {/* Star Rating */}
                        <div className="flex items-center mb-3">
                          {[...Array(5)].map((_, i) => (
                            <FontAwesomeIcon
                              key={i}
                              icon={faStar}
                              className={`text-md ${
                                i < item.rating
                                  ? "text-yellow-400"
                                  : "text-yellow-600"
                              }`}
                            />
                          ))}
                        </div>
                      </div>

                      {/* Price + Cart Icon Flex Container */}
                      <div className="flex items-center justify-between mt-4">
                        <p className="text-xl font-bold text-red-700">
                          {item.price}
                        </p>
                        <button className="text-white hover:text-red-500 transition-colors duration-300 p-2 -mr-2">
                          <FontAwesomeIcon
                            icon={faCartShopping}
                            className="w-5 h-5 text-red-800"
                          />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
        <motion.div
          className="relative text-white font-semibold p-16"
          style={{
            backgroundImage: `url(${bg1})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }} // Trigger only once when the section is in view
        >
          {/* Overlay */}
          <div className="absolute inset-0 bg-zinc-950 bg-opacity-90"></div>

          {/* Header */}
          <motion.div
            className="relative z-10 text-center"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h1 className="text-red-500 mb-5 text-lg md:text-xl">
              TESTIMONIALS
            </h1>
            <h3 className="text-2xl md:text-4xl mb-10 md:mb-20">
              Reviews about our test
            </h3>
          </motion.div>

          {/* Slider */}
          <Slider
            {...settingsThree}
            className="max-w-6xl text-left mx-auto slider-with-gap"
          >
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                className="bg-gray-900 text-white p-5 md:p-8 font-semibold flex flex-col justify-between"
                style={{
                  minHeight: "300px",
                  margin: "0 15px",
                  borderRadius: "10px",
                  overflow: "hidden",
                }}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9, delay: index * 0.2 }} // Stagger effect for slides
                viewport={{ once: true }}
              >
                <div className="flex items-start justify-between mb-5">
                  <h4 className="text-lg md:text-xl flex-grow">
                    {testimonial.text}
                  </h4>
                  <img
                    className="flex-shrink-0 ml-3"
                    style={{
                      height: "35px",
                      width: "35px",
                    }}
                    src={testimonial.rightImage}
                    alt={`${testimonial.name} - Quote Icon`}
                  />
                </div>
                <div className="flex items-center gap-5">
                  <img
                    className="flex-shrink-0"
                    style={{
                      height: "80px",
                      width: "80px",
                      borderRadius: "50%",
                      objectFit: "cover",
                    }}
                    src={testimonial.image}
                    alt={testimonial.name}
                  />
                  <div className="flex-grow">
                    <h5 className="text-red-500 text-lg md:text-xl">
                      {testimonial.name}
                    </h5>
                    <h5 className="text-sm md:text-base">
                      {testimonial.position}
                    </h5>
                  </div>
                </div>
              </motion.div>
            ))}
          </Slider>
        </motion.div>
        <div className="bg-white py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 gap-4 sm:gap-6 md:gap-8">
            {images3.map((image, index) => (
              <div
                key={index}
                className="flex justify-center items-center p-2 sm:p-4 group"
              >
                {/* Logo Image Container */}
                <div className="relative w-full aspect-[4/3] flex items-center justify-center">
                  <img
                    src={image.src}
                    alt={image.alt || `Brand ${index + 1}`}
                    className="w-auto h-auto max-w-[80%] max-h-[80%] object-contain grayscale-[70%] opacity-90 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                    loading="lazy"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row w-full h-[500px] md:h-96">
          {/* Left Image - Now with consistent height behavior */}
          <div className="w-full md:w-1/3 h-[200px] md:h-full overflow-hidden">
            <img
              src={px16}
              alt=""
              className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
            />
          </div>

          {/* Right Side - Now with properly sized images on mobile */}
          <div className="flex flex-col md:flex-row w-full md:w-2/3 flex-1">
            {/* First Right Image */}
            <div className="w-full md:w-1/2 h-[150px] md:h-full overflow-hidden">
              <img
                src={px17}
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>

            {/* Second Right Image */}
            <div className="w-full md:w-1/2 h-[150px] md:h-full overflow-hidden">
              <img
                src={px18}
                alt=""
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              />
            </div>
          </div>
        </div>

        {/* Blog Posts Section */}
        <motion.div
          className="relative"
          style={{
            backgroundImage: `url(${px10})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <div className="absolute inset-0 bg-zinc-900 "></div>

          <motion.div
            className="text-center py-10 relative z-10"
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <h1 className="text-red-500 text-xl font-mono font-semibold">
              OUR BLOG
            </h1>
            <h3 className="text-4xl md:text-6xl mb-10 font-semibold text-white">
              Latest Blog Post
            </h3>
            <motion.div
              className="grid gap-5 px-5 md:grid-cols-2 lg:grid-cols-3 lg:mx-20 text-left text-white font-semibold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
            >
              {blogPosts.map((post, index) => (
                <motion.div
                  key={index}
                  className="group"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="overflow-hidden">
                    <img
                      className="w-full h-[200px] md:h-[300px] object-cover transition-transform duration-500 transform group-hover:scale-110 group-hover:skew-y-3"
                      src={post.image}
                      alt={`Blog post ${index + 1}`}
                    />
                  </div>
                  <div className=" p-5">
                    <h3 className="text-red-500 mb-2">
                      Date: {post.date} / By: {post.author}
                    </h3>
                    <h2 className="text-lg md:text-2xl mb-2">{post.title}</h2>
                    <h2>
                      Read more{" "}
                      <span>
                        <FontAwesomeIcon
                          className="h-4 w-5 text-gray-300"
                          icon={faLongArrowRight}
                        />
                      </span>
                    </h2>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default HomeHeroSection;
