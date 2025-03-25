import plainfried from "../pictures/plainfried.jpg";
import pineshrimprice from "../pictures/pineshrimprice.jpg";
// import jambalayarice from "../pictures/jambalayarice.jpg";
import jollof from "../pictures/jollof.jpg";
import shrimpfriedrice from "../pictures/shrimpfriedrice.jpg";
import coconutrice from "../pictures/coconutrice.jpeg";
import chineserice from "../pictures/chineserice.jpg";
import riceandstew from "../pictures/riceandstew.jpg";
import grilledchicken from "../pictures/grilledchic.jpg";
import grilledchicmed from "../pictures/grilledchicmed.avif";
// import grilledturkey from "../pictures/fx15.png";
import pepperedchic from "../pictures/pepperedchic.jpg";
import pepperedturkey from "../pictures/plainfried.jpg";
import stewedbeef from "../pictures/stewedbeef.jpg";
import crispychic from "../pictures/crispychic.jpg";
import pepperedbeef from "../pictures/pepperedbeef.jpg";
import croaker from "../pictures/croaker.jpg";
import hakefish from "../pictures/hakefish.jpg";
// import assortedmeat from "../pictures/fx15.png";
import stewedtitus from "../pictures/stewedtitus.jpg";
import coleslaw from "../pictures/coleslaw.jpg";
import dodo from "../pictures/dodo.jpg";
import moi from "../pictures/moi.jpg";
import pepperedsnail from "../pictures/pepperedsnail.jpg";
import bananabread from "../pictures/bananabread.jpg";
import bananabmed from "../pictures/bananabmed.jpg";
import meatpie from "../pictures/meatpie.jpg";
import chickenpie from "../pictures/chickenpie.jpg";
import jamdou from "../pictures/jamdou.jpg";
import sausage from "../pictures/sausage.jpg";
import chickensandwich from "../pictures/chickensandwich.jpg";
import longbun from "../pictures/longbun.jpg";
import burgers from "../pictures/burgers.jpg";
import chocolatevan from "../pictures/chocolatevan.jpg";
// import suyarice from "../pictures/fx15.png";
import fx14 from "../pictures/fx14.jpg";
import fx22 from "../pictures/fx22.jpg";
import px27 from "../pictures/px28.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import HeaderPage from "../components/Header";
import FooterPage from "../components/Footer";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";

export default function MenuPage() {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  // Show or hide the button based on scroll position
  const handleScroll = () => {
    if (window.scrollY > 200) {
      setShowScrollToTop(true);
    } else {
      setShowScrollToTop(false);
    }
  };

  // Scroll to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    // Add the scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [selectedMenu, setSelectedMenu] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const menuItems = {
    all: [
      {
        name: "White Rice & Stew",
        price: "#1000",
        description: "Steamed white rice served with spicy tomato stew",
        image: riceandstew,
      },
      {
        name: "Grilled Chicken",
        price: "#4000",
        description: "Juicy grilled chicken",
        image: grilledchicken,
      },
      {
        name: "Special Shrimps FriedRice",
        price: "#2000",
        description: "Deluxe fried rice with jumbo shrimp",
        image: shrimpfriedrice,
      },
      {
        name: "Grilled Chicken Medium",
        price: "#3500",
        description: "Medium-sized grilled chicken",
        image: grilledchicmed,
      },
      {
        name: "Peppered Chicken",
        price: "#4000",
        description: "Spicy peppered chicken",
        image: pepperedchic,
      },
      {
        name: "Chinese Rice",
        price: "#1500",
        description: "Authentic Chinese-style fried rice",
        image: chineserice,
      },
      {
        name: "Crispy Chicken",
        price: "#3000",
        description: "Crunchy fried crispy chicken",
        image: crispychic,
      },
      {
        name: "Plantain",
        price: "#1000",
        description: "Fried sweet plantains",
        image: dodo,
      },
      {
        name: "Stewed Beef",
        price: "#1500",
        description: "Beef cooked in rich tomato sauce",
        image: stewedbeef,
      },
      {
        name: "Moi Moi",
        price: "#1000",
        description: "Steamed bean pudding",
        image: moi,
      },
      {
        name: "Banana Bread",
        price: "#2500",
        description: "Moist homemade banana bread",
        image: bananabread,
      },
      {
        name: "Banana Bread Medium",
        price: "#2000",
        description: "Medium-sized banana bread",
        image: bananabmed,
      },
      {
        name: "Meat Pie",
        price: "#1000",
        description: "Flaky pastry stuffed with minced meat",
        image: meatpie,
      },
      {
        name: "Chicken Pie",
        price: "#1200",
        description: "Pastry filled with seasoned chicken",
        image: chickenpie,
      },
      {
        name: "Jam Doughnuts",
        price: "#700",
        description: "Soft doughnuts filled with jam",
        image: jamdou,
      },
      {
        name: "Sausage",
        price: "#1000",
        description: "Savory sausage snack",
        image: sausage,
      },
      {
        name: "Chicken Sandwich",
        price: "#2000",
        description: "Grilled chicken sandwich with lettuce and mayo",
        image: chickensandwich,
      },
      {
        name: "Burgers",
        price: "#5000",
        description: "Juicy beef or chicken burger",
        image: burgers,
      },
      {
        name: "Long Bun Chicken Sandwich",
        price: "#3000",
        description: "Long bun sandwich with crispy chicken",
        image: longbun,
      },
      {
        name: "Peppered Beef",
        price: "#1500",
        description: "Spicy beef chunks",
        image: pepperedbeef,
      },
      {
        name: "Peppered Snail",
        price: "#5000",
        description: "Delicacy of spicy cooked snails",
        image: pepperedsnail,
      },
      {
        name: "Peppered Fried Croaker Fish",
        price: "#4000",
        description: "Spicy deep-fried croaker fish",
        image: croaker,
      },
      {
        name: "Peppered Fried Hake Fish",
        price: "#4000",
        description: "Crispy fried hake fish with pepper sauce",
        image: hakefish,
      },
      {
        name: "Party Jollof Rice",
        price: "#1000",
        description: "Classic Nigerian party jollof rice",
        image: jollof,
      },
      {
        name: "Pineapple Shrimps Fried Rice",
        price: "#2500",
        description: "Fried rice with shrimp and pineapple",
        image: pineshrimprice,
      },
      {
        name: "Jambalaya Rice",
        price: "#2200",
        description: "Spicy Creole rice with seafood and sausage",
        // image: jambalayarice,
      },
      {
        name: "Grilled Turkey",
        price: "#5000",
        description: "Flavorful grilled turkey",
        // image: grilledturkey,
      },
      {
        name: "Plain Fried Rice",
        price: "#1000",
        description: "Simple fried rice with vegetables",
        image: plainfried,
      },
      {
        name: "Suya Rice",
        price: "#1800",
        description: "Spiced suya-flavored rice with beef",
        // image: suyarice,
      },
      {
        name: "Asun Coconut Rice",
        price: "#1700",
        description: "Coconut rice with spicy goat meat (asun)",
        image: coconutrice,
      },

      {
        name: "Assorted Meat",
        price: "#1500",
        description: "Variety of spicy meats",
        // image: assortedmeat,
      },
      {
        name: "Stewed Titus",
        price: "#3000",
        description: "Titus fish cooked in tomato stew",
        image: stewedtitus,
      },
      {
        name: "Coleslaw",
        price: "#1000",
        description: "Creamy coleslaw salad",
        image: coleslaw,
      },
      {
        name: "Peppered Turkey",
        price: "#5000",
        description: "Spicy peppered turkey",
        // image: pepperedturkey,
      },
      {
        name: "Chocolate & Vanilla Cookies",
        price: "#500",
        description: "Freshly baked chocolate and vanilla cookies",
        image: chocolatevan,
      },
    ],
    breakfast: [
      {
        name: "Banana Bread",
        price: "#2500",
        description:
          "Freshly baked banana bread, soft and delicious with a hint of sweetness.",
        image: bananabread,
      },
      {
        name: "Banana Bread Medium",
        price: "#2000",
        description:
          "A larger portion of our signature banana bread, perfect for sharing.",
        image: bananabmed,
      },
      {
        name: "Jam Doughnuts",
        price: "#700",
        description:
          "Soft, fluffy doughnuts filled with sweet fruit jam, perfect for a quick snack.",
        image: jamdou,
      },
      {
        name: "Chocolate x Vanilla Cookies",
        price: "#500",
        description:
          "A decadent mix of chocolate and vanilla cookies, chewy and rich in flavor.",
        image: chocolatevan,
      },
      {
        name: "Chicken Sandwich",
        price: "#2000",
        description:
          "A crispy chicken fillet served with fresh lettuce, tomato, and mayo in a soft bun.",
        image: chickensandwich,
      },
      {
        name: "Long Bun Chicken Sandwich",
        price: "#3000",
        description:
          "A juicy, crispy chicken fillet served in a long, soft bun with all the toppings.",
        image: longbun,
      },
      {
        name: "Party Jollof Rice",
        price: "#1000",
        description:
          "A hearty serving of flavorful Jollof rice, perfect for sharing at parties.",
        image: jollof,
      },
      {
        name: "Plain Fried Rice",
        price: "#1000",
        description:
          "A simple yet delicious fried rice made with fresh vegetables and seasoned to perfection.",
        image: plainfried,
      },
      {
        name: "Plantain",
        price: "#1000",
        description:
          "Golden fried plantain slices, crispy on the outside and tender on the inside.",
        image: dodo,
      },
      {
        name: "Stewed Beef",
        price: "#1500",
        description:
          "Tender beef stewed in a rich, flavorful sauce, served hot and juicy.",
        image: stewedbeef,
      },
      {
        name: "Peppered Chicken",
        price: "#4000",
        description:
          "Spicy grilled chicken seasoned with peppers and herbs, served with a kick.",
        image: pepperedchic,
      },
      {
        name: "Peppered Beef",
        price: "#1500",
        description:
          "Tender beef cooked in a spicy pepper sauce, packed with flavor.",
        image: pepperedbeef,
      },
      {
        name: "Burgers",
        price: "#5000",
        description:
          "Juicy beef burger served with lettuce, tomato, and a special sauce.",
        image: burgers,
      },
    ],
    brunch: [
      {
        name: "Meat Pie",
        price: "#1000",
        description:
          "Flaky pastry filled with a savory mix of seasoned meat and vegetables.",
        image: meatpie,
      },
      {
        name: "Chicken Pie",
        price: "#1200",
        description:
          "Flaky pastry filled with tender chicken and a rich, creamy filling.",
        image: chickenpie,
      },
      {
        name: "Chicken Sandwich",
        price: "#2000",
        description:
          "A crispy chicken sandwich served with lettuce, tomato, and mayo.",
        image: chickensandwich,
      },
      {
        name: "Long Bun Chicken Sandwich",
        price: "#3000",
        description:
          "A juicy chicken fillet served in a long bun, with fresh toppings and a savory sauce.",
        image: longbun,
      },
    ],
    lunch: [
      {
        name: "Party Jollof Rice",
        price: "#1000",
        description:
          "A rich and flavorful Jollof rice, cooked to perfection and perfect for lunch gatherings.",
        image: jollof,
      },
      {
        name: "Assorted Meat",
        price: "#1500",
        description: "Variety of spicy meats",
        // image: assortedmeat,
      },
      {
        name: "Pineapple Shrimps Fried Rice",
        price: "#2500",
        description:
          "A delightful mix of shrimps, fried rice, and tangy pineapple chunks.",
        image: pineshrimprice,
      },
      {
        name: "Jambalaya Rice",
        price: "#2200",
        description:
          "A spiced rice dish with a mix of chicken, sausage, and shrimp, all cooked together.",
        // image: jambalayarice,
      },
      {
        name: "Plain Fried Rice",
        price: "#1000",
        description:
          "Delicious fried rice made with fresh ingredients, lightly seasoned for a satisfying meal.",
        image: plainfried,
      },
      {
        name: "Suya Rice",
        price: "#1800",
        description:
          "Fragrant rice served with spiced beef, grilled to perfection.",
        image: suyarice,
      },
      {
        name: "Special Shrimps FriedRice",
        price: "#2000",
        description:
          "Shrimps fried rice, a seasonal favorite with an extra dose of flavor.",
        image: shrimpfriedrice,
      },
      {
        name: "Asun Coconut Rice",
        price: "#1700",
        description:
          "A fusion of coconut rice served with tender grilled beef, perfect for a tropical touch.",
        image: coconutrice,
      },
      {
        name: "White Rice x Stew",
        price: "#1000",
        description:
          "Simple and classic white rice served with a rich, flavorful stew.",
        image: riceandstew,
      },
      {
        name: "Coleslaw",
        price: "#1000",
        description:
          "A refreshing side of creamy coleslaw, perfect to balance any meal.",
        image: coleslaw,
      },
      {
        name: "Chinese Rice",
        price: "#1500",
        description:
          "A chef's special fried rice, packed with vegetables and seasoned with authentic Chinese spices.",
        image: chineserice,
      },
    ],
    dinner: [
      {
        name: "Stewed Beef",
        price: "#1500",
        description:
          "Tender beef cooked in a rich tomato sauce, a perfect dinner option.",
        image: stewedbeef,
      },
      {
        name: "Peppered Turkey",
        price: "#5000",
        description: "Spicy peppered turkey",
        // image: pepperedturkey,
      },
      {
        name: "Grilled Chicken",
        price: "#4000",
        description:
          "Grilled chicken seasoned with fresh herbs and spices, served with a side of vegetables.",
        image: grilledchicken,
      },
      {
        name: "Grilled Turkey",
        price: "#5000",
        description:
          "Juicy grilled turkey, marinated in a blend of spices and served with mashed potatoes.",
        // image: grilledturkey,
      },
      {
        name: "Crispy Chicken",
        price: "#3000",
        description:
          "Crispy fried chicken served with your choice of dipping sauce.",
        image: crispychic,
      },
      {
        name: "Peppered Snail",
        price: "#5000",
        description:
          "A delicacy of spicy cooked snails, a perfect dinner choice for seafood lovers.",
        image: pepperedsnail,
      },
      {
        name: "Peppered Fried Fish",
        price: "#4000",
        description:
          "A flavorful fried fish, topped with spicy pepper sauce for an extra kick.",
        image: croaker,
      },
    ],
  };

  const totalPages = Math.ceil(menuItems[selectedMenu].length / itemsPerPage);
  const paginatedItems = menuItems[selectedMenu].slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  useEffect(() => {}, [selectedMenu, currentPage]);

  return (
    <>
      <section className="overflow-x-hidden">
        <HeaderPage />
        <div
          className="relative -mt-24 top-1 flex items-center justify-center text-center"
          style={{ height: "100vh" }}
        >
          <div
            className="absolute top-0 left-0 w-full h-full bg-zinc-950 opacity-80"
            style={{ zIndex: "-2" }} // Set to -2 so it's below content
          ></div>

          <img
            style={{
              height: "100vh",
              width: "100%",
              position: "absolute",
              top: "0",
              left: "0",
              zIndex: "-3", // Ensures image stays behind all content
              objectFit: "cover",
            }}
            src={px27}
            alt="Background image showcasing a restaurant or food ambiance"
          />

          <motion.div
            className="z-10 relative" // Added 'relative' here to ensure it layers properly on top of the image
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white">
              Our Menu
            </h1>
            <h3 className="text-red-700 font-semibold text-xl mt-2">
              <Link to="/">HOME-</Link>MENU
            </h3>
          </motion.div>
        </div>

        <motion.div
          className="relative w-full"
          style={{
            backgroundImage: `url(${fx14})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            paddingBottom: "350px",
            paddingTop: "50px",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.div
            className="absolute inset-0 bg-zinc-950 bg-opacity-90 z-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.9 }}
            transition={{ duration: 1 }}
          ></motion.div>

          <motion.div
            className="text-center px-6 sm:px-12 md:px-24 lg:px-48 absolute left-0 w-full z-10"
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-red-500 text-xl mb-5">TEST A LITTLE BIT</h2>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-5">
              Our Special Menu
            </h3>

            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-7 mt-5 justify-center items-center mb-12">
              {["all", "breakfast", "brunch", "lunch", "dinner"].map((menu) => (
                <motion.button
                  key={menu}
                  className={`border-2 p-3 font-semibold text-center ${
                    selectedMenu === menu
                      ? "text-red-500 border-orange-500"
                      : "text-white border-white"
                  }`}
                  onClick={() => setSelectedMenu(menu)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {menu.charAt(0).toUpperCase() + menu.slice(1)}
                </motion.button>
              ))}
            </div>
          </motion.div>

          <div className="relative min-h-screen top-80 z-10 text-zinc-400">
            <motion.div
              className="flex flex-wrap gap-6 justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              {paginatedItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-zinc-900 rounded-lg shadow-lg p-4 flex flex-col items-center gap-4 relative"
                  initial={{ x: -50, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  style={{
                    width: "280px",
                    height: "330px",
                  }}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-44 h-44 rounded-lg"
                  />
                  <div className="text-left">
                    <h2 className="font-bold text-xl">{item.name}</h2>
                    <p className="font-light text-sm mt-2">
                      {item.description}
                    </p>
                    <h2 className="font-semibold text-lg mt-4">{item.price}</h2>
                  </div>

                  {/* WhatsApp Button next to price */}
                  <a
                    href="https://wa.me/2349160002471" // Link to WhatsApp chat
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute bottom-4 right-4 bg-red-500 text-white p-2 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
                  >
                    <FontAwesomeIcon icon={faWhatsapp} className="text-xl" />
                  </a>
                </motion.div>
              ))}
            </motion.div>

            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                className="px-4 py-2 bg-red-500 text-white rounded shadow disabled:bg-gray-500"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Previous
              </button>
              <span className="text-white font-semibold">
                Page {currentPage} of {totalPages}
              </span>
              <button
                className="px-4 py-2 bg-red-500 text-white rounded shadow disabled:bg-gray-500"
                onClick={() =>
                  setCurrentPage((prev) => Math.min(prev + 1, totalPages))
                }
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>
          </div>
        </motion.div>

        <div className="flex flex-col md:flex-row relative z-10 bg-zinc-900">
          <motion.img
            className="w-full md:w-1/2 h-48 md:h-72"
            src={fx22}
            alt="Newsletter Background"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
          <motion.div
            className="w-full md:w-1/2 bg-zinc-950 text-center p-4 md:p-6"
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-red-500 text-lg md:text-2xl font-mono font-semibold mb-3">
              NEWSLETTER
            </h2>
            <h1 className="text-2xl md:text-4xl font-bold text-white mb-3">
              Subscribe to Our Newsletter
            </h1>
            <h3 className="text-sm md:text-lg text-white mb-4">
              To get the latest updates, offers, and promotions
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center">
              <input
                className="w-full md:w-3/4 p-3 bg-transparent border-2 border-zinc-600 text-white placeholder-zinc-400 mb-4 md:mb-0 md:mr-4"
                type="email"
                placeholder="Enter your email"
              />
              <button className="w-full md:w-auto px-5 py-2 text-zinc-800 font-semibold bg-white hover:bg-red-500 hover:text-white transition">
                Subscribe
              </button>
            </div>
            <h3 className="text-lg md:text-xl mt-4 text-white">
              Call for Reservation
              <a href="tel:+2349160002472">
                <span className="text-red-500 underline ml-2">
                  +234 916 000 2472
                </span>
              </a>
            </h3>
          </motion.div>
        </div>
      </section>
      <FooterPage />

      {/* Scroll to Top Button */}
      {showScrollToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 right-4 z-10 bg-red-500 text-white p-3 w-10 rounded-full shadow-lg hover:bg-red-600 transition duration-300"
        >
          ↑
        </button>
      )}
    </>
  );
}
