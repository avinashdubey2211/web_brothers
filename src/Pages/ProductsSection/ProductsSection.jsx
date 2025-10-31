
import React, { useRef } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 


const products = [
  {
    img: "https://www.brothersindia.com/images/home/wet-glue-labelling-machine.jpg",
    title: "Wet Glue Labelling Machine",
    desc: "India’s first, automatic super high speed vertical labelling machine.",
    path:"/card_detail",

  },
  {
    img: "https://www.brothersindia.com/images/home/LABELSTIK-600.jpg",
    title: "Capsule Filling Machine",
      path:"/card_detail",
      desc: "Manufacturer of a wide range of products which include automatic capsule filling machines.",
  },
  {
    img: "https://www.brothersindia.com/images/home/check-weigher.jpg",
    title: "Check Weigher",
    path:"/card_detail",
     desc: "Check Weigher 120 is a sophisticated weighing system for various industries.",
  },
  {
    img: "https://www.brothersindia.com/images/home/LABELSTIK-600.jpg",
    title: "Rotary Labelling Machines",
    path:"/card_detail",
    desc: "Are you searching for Rotary Labelling Machine solutions?",
  },
  {
    img: "https://www.brothersindia.com/images/home/bottle-feeder.jpg",
    title: "Bottle Feeder",
      path:"/card_detail",
   desc: "Efficient and durable machine designed for smooth bottle feeding operations.",
  },
  {
    img: "https://www.brothersindia.com/images/products/cap-elevator/cap-elevetor.jpg",
    title: "Cap Elevator",
      path:"/card_detail",
  desc: "Are you searching for Cap Elevator Manufacturer?",
  },
  {
    img: "https://www.brothersindia.com/images/products/conveyors/inspection-conveyor.jpg",
    title: "Inspection Conveyor",
     path:"/card_detail",
    desc: "Brothers Pharmamach specializes in high-quality Pharmaceutical Conveyors.",
  },
  {
    img: "https://www.brothersindia.com/images/home/washing-airjet-cleaning-machine.jpg",
    title: "Air Jet Bottle Cleaning Machine",
    path:"/card_detail",
    desc: "Reliable and efficient carton coding and labeling solution.",
  },
  {
    img: "https://www.brothersindia.com/images/products/dry-syrup/IFM_DRYFILL-120i-Twin-big.jpg",
    title: "Dry Syrup Powder Filling Machines",
     path:"/card_detail",
     desc: "Automatic shrink wrapping for secure packaging and enhanced product look.",
  },
  {
    img: "https://www.brothersindia.com/images/home/liquid-filling-machine.jpg",
    title: "Liquid Filling Machine",
     path:"/card_detail",
    desc: "High precision vial filling and sealing machine for pharma industry.",
  },
  {
    img: "https://www.brothersindia.com/images/home/capping-machine.jpg",
    title: "Capping Machine",
     path:"/card_detail",
    desc: "Automatic rotary ampoule washing machine designed for hygienic applications.",
  },
  {
    img: "https://www.brothersindia.com/images/home/leaflet-outserter.jpg",
    title: "Leaflet Outserter Pasting Machine",                     
     path:"/card_detail",
    desc: "Advanced inspection system for quality assurance in production lines.",
  },
];

const ProductsSection = () => {
            const navigate = useNavigate(); 

  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const container = scrollRef.current;
    if (!container) return;
    const scrollAmount = dir === "left" ? -400 : 400;
    container.scrollBy({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <section className="bg-sky-400 py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Header */}
      <div className="max-w-7xl mx-auto text-start mb-10">
        <button className="bg-black text-white px-6 py-2 rounded-full font-semibold mb-4">
          OUR PRODUCTS
        </button>
        <h2 className="text-3xl sm:text-4xl font-bold text-black mb-3">
          Our Products
        </h2>
        <p className="text-gray-800 text-base  sm:text-lg max-w-2xl mx-auto">
          We at Brothers Pharmamach believe it’s the “men behind the machines”
          who have caused all the acceleration.
        </p>
      </div>

      {/* Scroll Buttons */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white text-sky-600 p-3 rounded-full shadow-lg hover:bg-gray-100 z-10 transition"
      >
        <FaChevronLeft />
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white text-sky-600 p-3 rounded-full shadow-lg hover:bg-gray-100 z-10 transition"
      >
        <FaChevronRight />
      </button>

      {/* Product Cards */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-6 px-2"
      >
        {products.map((product, index) => (
          <div
            key={index}
                  onClick={() => product.path && navigate(product.path)} 

            className="bg-white min-w-[85%] sm:min-w-[50%] md:min-w-[30%] lg:min-w-[23%] rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col"
          >
            <div className="relative w-full h-56 sm:h-64 md:h-72 lg:h-64 bg-gray-50 rounded-t-2xl overflow-hidden flex items-center justify-center">
              <img
                src={product.img}
                alt={product.title}
                className="w-full h-full object-contain transition-transform duration-300 hover:scale-105"
              />
            </div>
            <div className="p-5 flex flex-col justify-between text-center flex-1">
              <h3 className="font-bold text-gray-900 text-lg mb-2 leading-snug">
                {product.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {product.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom Note */}
      <div className="max-w-4xl mx-auto mt-10 text-center text-black flex flex-col sm:flex-row items-center justify-center gap-3 px-4">
        <span className="text-xl">💬</span>
        <p className="text-base sm:text-lg font-medium">
          We offer 24/7 customer support, accessible through live chat, phone,
          and email — ensuring assistance anytime.
        </p>
      </div>
    </section>
  );
};

export default ProductsSection;

