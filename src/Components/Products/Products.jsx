
// import React from "react";
// import { IoIosArrowForward } from "react-icons/io";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaYoutube,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
// } from "react-icons/fa";


// const Products = () => {
//   const relatedCategories = [
//     "Pharmaceutical",
//     "Nutraceutical",
//     "FMCG",
//     "Injectable",
//     "Cosmetics",
//     "Packaging",
//     "Consumer",
//     "HealthCare",
//     "Tablet & Capsules",
//     "Food & Beverages",
//     "Pesticides",
//     "Lubricants",
//   ];

//   const productList = [
//     {
//       title: "Washing and Air Jet Cleaning Machine",
//       subtitle: "Washing and Air Jet Cleaning Machines",
//       img: "https://www.brothersindia.com/images/products/wash-air/AIRWASH-240-INV.jpg",
//     },
//     {
//       title: "Dry Syrup Powder Filling Machine",
//       subtitle: "Dry Syrup Powder Filling Machines",
//       img: "https://www.brothersindia.com/images/products/dry-syrup/DRYFILL-20.jpg",
//     },
//     {
//       title: "Liquid Filling Machine",
//       subtitle: "Liquid Filling Machines",
//       img: "https://www.brothersindia.com/images/products/Liquid-Filling-Machine/LIQFILL-150FM.jpg",
//     },
//     {
//       title: "Capping Machine",
//       subtitle: "Capping Machines",
//       img: "https://www.brothersindia.com/images/products/bottle-caping-machine/CAPSEAL-80L.jpg",
//     },
//     {
//       title: "Leaflet / Outserter Pasting Machine",
//       subtitle: "Leaflet / Outserter Pasting Machines",
//       img: "https://www.brothersindia.com/images/products/leaflet-outserter-pasting-machine/LOPM_AHLI-150-Prod.jpg",
//     },
//     {
//       title: "Shrink Sleeve Machine",
//       subtitle: "Shrink Sleeve Machines",
//       img: "https://www.brothersindia.com/images/products/shrink-sleeve-machines/SleevPACK-150.jpg",
//     },
//     {
//       title: "Rotary Labelling Machine",
//       subtitle: "Rotary Labelling Machines",
//       img: "https://www.brothersindia.com/images/products/rotary-labelling-machine/LABELSTIK-600.jpg",
//     },
//     {
//       title: "Sticker Labelling Machine",
//       subtitle: "Sticker Labelling Machines",
//       img: "https://www.brothersindia.com/images/products/stiker-labeling-machine/LABELSTIK-150.jpg",
//     },
//     {
//       title: "Wet Glue Labelling Machine",
//       subtitle: "Wet Glue Labelling Machines",
//       img: "https://www.brothersindia.com/images/products/wet-glue-labeling-machine/BS-40.jpg",
//     },
//     {
//       title: "Capsule Filling Machine",
//       subtitle: "Capsule Filling Machine",
//       img: "https://www.brothersindia.com/images/products/capsule-filling-machine/automatic-table-top2.jpg",
//     },
//     {
//       title: "Checkweigher Machine",
//       subtitle: "Check Weigher",
//       img: "https://www.brothersindia.com/images/products/check-weigher.jpg",
//     },
//     {
//       title: "Automatic Bottle Feeder Machine",
//       subtitle: "Bottle Feeder",
//       img: "https://www.brothersindia.com/images/products/bottle-feeder/bottle-feeder.jpg",
//     },
//     {
//       title: "Cap Elevator",
//       subtitle: "Cap Elevator",
//       img: "https://www.brothersindia.com/images/products/cap-elevator/cap-elevetor.jpg",
//     },
//     {
//       title: "Pharmaceutical Conveyors",
//       subtitle: "Conveyors",
//       img: "https://www.brothersindia.com/images/products/conveyors/inspection-conveyor.jpg",
//     },
//   ];

//   return (
//     <>
//     <div className="w-full min-h-screen bg-white px-4 sm:px-6 lg:px-10 py-8">
//       {/* 🔹 Top Section */}
      // <div className="w-full h-[30vh] sm:h-[35vh] md:h-[40vh] bg-linear-to-r from-blue-600 via-blue-500 to-blue-400 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg">
      //   <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold mb-2 tracking-wide">
      //     Products
      //   </h1>
      //   <h3 className="text-blue-100 text-sm sm:text-lg md:text-xl font-semibold">
      //     Home / Products
      //   </h3>
      // </div>

//       {/* 🔹 Intro Section */}
//       <div className="w-full bg-linear-to-b from-white via-blue-50 to-blue-100 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 py-10 sm:py-14 rounded-3xl shadow-inner mt-10">
//         <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-blue-700 mb-6 leading-snug">
//           Brothers — Efficiency and Accuracy Redefined
//         </h1>
//         <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-4xl leading-relaxed font-medium">
//           Our range of advanced machinery caters to every stage of your production line. 
//           From precision filling and capping solutions to efficient labeling and packaging systems, 
//           each machine is designed for seamless performance. Enhance productivity with innovative 
//           cleaning, conveying, and weighing technologies. 
//           <span className="block text-blue-600 font-semibold mt-2">
//             Trust in quality, reliability, and efficiency for all your industrial needs.
//           </span>
//         </p>
//       </div>

//       {/* 🔹 Related Applications + Products */}
//       <div className="w-full mt-10 flex flex-col lg:flex-row gap-8">
//         {/* Left Section */}
//         <div className="w-full lg:w-[25%] bg-gray-100 rounded-2xl p-5 sm:p-6 shadow-md">
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center lg:text-left">
//             Related Application
//           </h2>
//           <div className="flex flex-col gap-3">
//             {relatedCategories.map((item, index) => (
//               <div
//                 key={index}
//                 className="flex items-center justify-between bg-gray-200 px-3 sm:px-4 py-2.5 sm:py-3 rounded-full hover:bg-blue-100 transition duration-300 cursor-pointer"
//               >
//                 <span className="text-black text-[14px] sm:text-[15px] font-medium">
//                   {item}
//                 </span>
//                 <IoIosArrowForward className="text-black text-lg sm:text-xl" />
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="w-full lg:w-[75%] bg-white rounded-2xl p-5 sm:p-6 shadow-md">
//           <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center lg:text-left">
//             Our Product Range
//           </h2>
//           <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
//             {productList.map((product, index) => (
//               <div
//                 key={index}
//                 className="border border-gray-200 rounded-2xl p-4 sm:p-5 bg-gray-50 hover:shadow-lg transition duration-300"
//               >
//                 <img
//                   src={product.img}
//                   alt={product.title}
//                   className="w-full h-40 sm:h-48 object-cover rounded-xl mb-4"
//                 />
//                 <h3 className="text-blue-700 font-semibold text-base sm:text-lg mb-2 text-center">
//                   {product.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm sm:text-[15px] mb-3 text-center">
//                   {product.subtitle}
//                 </p>
//                 <div className="flex justify-center">
//                   <button className="text-xs sm:text-sm text-white bg-blue-600 px-4 py-1.5 rounded-full hover:bg-blue-700 transition">
//                     Read More
//                   </button>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//     {/* fooder */}

//      <footer className="bg-white text-gray-800 font-sans">
//           {/* 🔹 Top Contact Section */}
//           <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-200 px-6 sm:px-10 py-8 max-w-7xl mx-auto text-center md:text-left">
//             {/* Logo */}
//             <div className="flex flex-col items-center md:items-start">
//               <img
//                 src="https://www.brothersindia.com/images/logo/logo.png"
//                 alt="Brothers Logo"
//                 className="w-[180px] sm:w-[200px] object-contain mb-2"
//               />
//             </div>
    
//             {/* Call Us */}
//             <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4">
//               <div className="bg-blue-100 p-3 sm:p-4 rounded-full text-blue-600 text-xl sm:text-2xl">
//                 <FaPhoneAlt />
//               </div>
//               <div>
//                 <h4 className="text-sm font-semibold text-blue-600 uppercase">
//                   Call Us
//                 </h4>
//                 <p className="text-base sm:text-lg font-semibold">
//                   +91 7317018945
//                 </p>
//               </div>
//             </div>
    
//             {/* Email */}
//             <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4">
//               <div className="bg-blue-100 p-3 sm:p-4 rounded-full text-blue-600 text-xl sm:text-2xl">
//                 <FaEnvelope />
//               </div>
//               <div>
//                 <h4 className="text-sm font-semibold text-blue-600 uppercase">
//                   Send E-mail
//                 </h4>
//                 <p className="text-base sm:text-lg font-semibold">
//                   info@brothersindia.com
//                 </p>
//               </div>
//             </div>
//           </div>
    
//           {/* 🔹 Footer Links Section */}
//           <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 px-6 sm:px-10 py-10">
//             {/* Company Info */}
//             <div>
//               <h3 className="text-lg font-bold mb-3">
//                 Brothers Pharmamach (India) Pvt.Ltd.
//               </h3>
//               <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
//                 Brothers Pharmamach, the largest Manufacturer & Supplier of
//                 Pharmaceutical and Packaging Machinery in India.
//               </p>
//               <p className="text-2xl sm:text-2xl font-bold">
//                 <span className="text-black  font-bold ">50+</span>{" "}
//                 <span className="text-gray-700 italic text-base sm:text-lg">
//                   Years of Experience
//                 </span>
//               </p>
//               <div className="flex gap-4 mt-4 text-gray-600 justify-center sm:justify-start">
//                 <FaFacebookF className="hover:text-blue-600 cursor-pointer text-lg sm:text-xl" />
//                 <FaTwitter className="hover:text-blue-600 cursor-pointer text-lg sm:text-xl" />
//                 <FaLinkedinIn className="hover:text-blue-600 cursor-pointer text-lg sm:text-xl" />
//                 <FaYoutube className="hover:text-blue-600 cursor-pointer text-lg sm:text-xl" />
//               </div>
//             </div>
    
//             {/* Quick Links */}
//             <div className="text-center sm:text-left">
//               <h3 className="text-lg font-bold mb-3">Quick Links</h3>
//               <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
//                 {["Home", "About Us", "Products", "News & Event", "Application", "Contact Us"].map((item) => (
//                   <li key={item}>
//                     <a href="#" className="hover:text-blue-600 transition">
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
    
//             {/* Other Links */}
//             <div className="text-center sm:text-left">
//               <h3 className="text-lg font-bold mb-3">Other Links</h3>
//               <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
//                 {[
//                   "Our Management Team",
//                   "Our Milestones",
//                   "Manufacturing Facility",
//                   "Global Presence",
//                   "Our Clients",
//                   "Sitemap",
//                   "Blogs",
//                 ].map((item) => (
//                   <li key={item}>
//                     <a href="#" className="hover:text-blue-600 transition">
//                       {item}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
    
//             {/* Contact Info */}
//             <div className="text-center sm:text-left">
//               <h3 className="text-lg font-bold mb-3">Contact Us</h3>
//               <p className="font-semibold mb-2">
//                 Brothers Pharmamach (India) Pvt.Ltd.
//               </p>
//               <ul className="space-y-3 text-gray-600 text-sm sm:text-base">
//                 <li className="flex justify-center sm:justify-start items-start gap-3">
//                   <FaMapMarkerAlt className="text-blue-600 mt-1 shrink-0" />
//                   Plot No.2, Phase II, GIDC Vatva, Ahmedabad 382 445 Gujarat, INDIA.
//                 </li>
//                 <li className="flex justify-center sm:justify-start items-center gap-3">
//                   <FaPhoneAlt className="text-blue-600" /> +91-7940213220
//                 </li>
//                 <li className="flex justify-center sm:justify-start items-center gap-3">
//                   <FaPhoneAlt className="text-blue-600" /> +91 9825037971
//                 </li>
//                 <li className="flex justify-center sm:justify-start items-center gap-3">
//                   <FaPhoneAlt className="text-blue-600" /> +91-7925835885
//                 </li>
//                 <li className="flex justify-center sm:justify-start items-center gap-3">
//                   <FaEnvelope className="text-blue-600" /> info@brothersindia.com
//                 </li>
//               </ul>
//             </div>
//           </div>
    
//           {/* 🔹 Bottom Copyright */}
//           <div className="border-t border-gray-200 py-4 text-center text-gray-600 text-sm px-4">
//             <p>Copyright © 2025 Brothers</p>
//             <div className="flex justify-center gap-4 mt-2 flex-wrap">
//               <a href="#" className="hover:text-blue-600 transition">
//                 Privacy Policy
//               </a>
//               <a href="#" className="hover:text-blue-600 transition">
//                 Return & Refund Policy
//               </a>
//               <a href="#" className="hover:text-blue-600 transition">
//                 Shipping Policy
//               </a>
//             </div>
//           </div>
//         </footer>
//     </>
//   );
// };

// export default Products;


import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosArrowForward } from "react-icons/io";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Products = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const relatedCategories = [
    "Pharmaceutical",
    "Nutraceutical",
    "FMCG",
    "Injectable",
    "Cosmetics",
    "Packaging",
    "Consumer",
    "HealthCare",
    "Tablet & Capsules",
    "Food & Beverages",
    "Pesticides",
    "Lubricants",
  ];

  const productList = [
    {
      title: "Washing and Air Jet Cleaning Machine",
      subtitle: "Washing and Air Jet Cleaning Machines",
      img: "https://www.brothersindia.com/images/products/wash-air/AIRWASH-240-INV.jpg",
    },
    {
      title: "Dry Syrup Powder Filling Machine",
      subtitle: "Dry Syrup Powder Filling Machines",
      img: "https://www.brothersindia.com/images/products/dry-syrup/DRYFILL-20.jpg",
    },
    {
      title: "Liquid Filling Machine",
      subtitle: "Liquid Filling Machines",
      img: "https://www.brothersindia.com/images/products/Liquid-Filling-Machine/LIQFILL-150FM.jpg",
    },
    {
      title: "Capping Machine",
      subtitle: "Capping Machines",
      img: "https://www.brothersindia.com/images/products/bottle-caping-machine/CAPSEAL-80L.jpg",
    },
    {
      title: "Leaflet / Outserter Pasting Machine",
      subtitle: "Leaflet / Outserter Pasting Machines",
      img: "https://www.brothersindia.com/images/products/leaflet-outserter-pasting-machine/LOPM_AHLI-150-Prod.jpg",
    },
    {
      title: "Shrink Sleeve Machine",
      subtitle: "Shrink Sleeve Machines",
      img: "https://www.brothersindia.com/images/products/shrink-sleeve-machines/SleevPACK-150.jpg",
    },
    {
      title: "Rotary Labelling Machine",
      subtitle: "Rotary Labelling Machines",
      img: "https://www.brothersindia.com/images/products/rotary-labelling-machine/LABELSTIK-600.jpg",
    },
    {
      title: "Sticker Labelling Machine",
      subtitle: "Sticker Labelling Machines",
      img: "https://www.brothersindia.com/images/products/stiker-labeling-machine/LABELSTIK-150.jpg",
    },
    {
      title: "Wet Glue Labelling Machine",
      subtitle: "Wet Glue Labelling Machines",
      img: "https://www.brothersindia.com/images/products/wet-glue-labeling-machine/BS-40.jpg",
    },
    {
      title: "Capsule Filling Machine",
      subtitle: "Capsule Filling Machine",
      img: "https://www.brothersindia.com/images/products/capsule-filling-machine/automatic-table-top2.jpg",
    },
    {
      title: "Checkweigher Machine",
      subtitle: "Check Weigher",
      img: "https://www.brothersindia.com/images/products/check-weigher.jpg",
    },
    {
      title: "Automatic Bottle Feeder Machine",
      subtitle: "Bottle Feeder",
      img: "https://www.brothersindia.com/images/products/bottle-feeder/bottle-feeder.jpg",
    },
    {
      title: "Cap Elevator",
      subtitle: "Cap Elevator",
      img: "https://www.brothersindia.com/images/products/cap-elevator/cap-elevetor.jpg",
    },
    {
      title: "Pharmaceutical Conveyors",
      subtitle: "Conveyors",
      img: "https://www.brothersindia.com/images/products/conveyors/inspection-conveyor.jpg",
    },
  ];

  return (
    <>
      <div className="w-full min-h-screen bg-white px-4 sm:px-6 lg:px-10 py-8">
        {/* 🔹 Top Section */}
        {/* <div
          className="w-full h-[30vh] sm:h-[35vh] md:h-[40vh]bg-linear-to-r from-blue-600 via-blue-500 to-blue-400 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg"
          data-aos="fade-down"
        >
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold mb-2 tracking-wide">
            Products
          </h1>
          <h3 className="text-blue-100 text-sm sm:text-lg md:text-xl font-semibold">
            Home / Products
          </h3>
        </div> */}
          <div className="w-full h-[30vh] sm:h-[35vh] md:h-[40vh] bg-linear-to-r from-blue-600 via-blue-500 to-blue-400 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg">
        <h1 
                  data-aos="fade-down"

        className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold mb-2 tracking-wide">
          Products
        </h1>
        <h3 className="text-blue-100 text-sm sm:text-lg md:text-xl font-semibold">
          Home / Products
        </h3>
      </div>

        {/* 🔹 Intro Section */}
        <div
          className="w-fullbg-linear-to-b from-white via-blue-50 to-blue-100 flex flex-col items-center justify-center text-center px-4 sm:px-8 md:px-12 py-10 sm:py-14 rounded-3xl shadow-inner mt-10"
          data-aos="zoom-in"
        >
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold text-blue-700 mb-6 leading-snug">
            Brothers — Efficiency and Accuracy Redefined
          </h1>
          <p className="text-gray-700 text-base sm:text-lg md:text-xl max-w-4xl leading-relaxed font-medium">
            Our range of advanced machinery caters to every stage of your
            production line. From precision filling and capping solutions to
            efficient labeling and packaging systems, each machine is designed
            for seamless performance. Enhance productivity with innovative
            cleaning, conveying, and weighing technologies.
            <span className="block text-blue-600 font-semibold mt-2">
              Trust in quality, reliability, and efficiency for all your
              industrial needs.
            </span>
          </p>
        </div>

        {/* 🔹 Related Applications + Products */}
        <div className="w-full mt-10 flex flex-col lg:flex-row gap-8">
          {/* Left Section */}
          <div
            className="w-full lg:w-[25%] bg-gray-100 rounded-2xl p-5 sm:p-6 shadow-md"
            data-aos="fade-right"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 text-center lg:text-left">
              Related Application
            </h2>
            <div className="flex flex-col gap-3">
              {relatedCategories.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between bg-gray-200 px-3 sm:px-4 py-2.5 sm:py-3 rounded-full hover:bg-blue-100 transition duration-300 cursor-pointer"
                >
                  <span className="text-black text-[14px] sm:text-[15px] font-medium">
                    {item}
                  </span>
                  <IoIosArrowForward className="text-black text-lg sm:text-xl" />
                </div>
              ))}
            </div>
          </div>

          {/* Right Section */}
          <div
            className="w-full lg:w-[75%] bg-white rounded-2xl p-5 sm:p-6 shadow-md"
            data-aos="fade-left"
          >
            <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 text-center lg:text-left">
              Our Product Range
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
              {productList.map((product, index) => (
                <div
                  key={index}
                  className="border border-gray-200 rounded-2xl p-4 sm:p-5 bg-gray-50 hover:shadow-lg transition duration-300"
                  data-aos="flip-up"
                >
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-40 sm:h-48 object-cover rounded-xl mb-4"
                  />
                  <h3 className="text-blue-700 font-semibold text-base sm:text-lg mb-2 text-center">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-[15px] mb-3 text-center">
                    {product.subtitle}
                  </p>
                  <div className="flex justify-center">
                    <button className="text-xs sm:text-sm text-white bg-blue-600 px-4 py-1.5 rounded-full hover:bg-blue-700 transition">
                      Read More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* 🔹 Footer */}
    <footer className="bg-white text-gray-800 font-sans">
         {/* 🔹 Top Contact Section */}
         <div
           className="w-full flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-200 px-6 sm:px-10 py-8 max-w-7xl mx-auto text-center md:text-left"
           data-aos="zoom-in-down"
         >
           {/* Logo */}
           <div
             className="flex flex-col items-center md:items-start"
             data-aos="zoom-out-left"
           >
             <img
               src="https://www.brothersindia.com/images/logo/logo.png"
               alt="Brothers Logo"
               className="w-[180px] sm:w-[200px] object-contain mb-2"
             />
           </div>
   
           {/* Call Us */}
           <div
             className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4"
             data-aos="zoom-in-left"
           >
             <div className="bg-blue-100 p-3 sm:p-4 rounded-full text-blue-600 text-xl sm:text-2xl">
               <FaPhoneAlt />
             </div>
             <div>
               <h4 className="text-sm font-semibold text-blue-600 uppercase">
                 Call Us
               </h4>
               <p className="text-base sm:text-lg font-semibold">
                 +91 7317018945
               </p>
             </div>
           </div>
   
           {/* Email */}
           <div
             className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4"
             data-aos="zoom-in-left"
           >
             <div className="bg-blue-100 p-3 sm:p-4 rounded-full text-blue-600 text-xl sm:text-2xl">
               <FaEnvelope />
             </div>
             <div>
               <h4 className="text-sm font-semibold text-blue-600 uppercase">
                 Send E-mail
               </h4>
               <p className="text-base sm:text-lg font-semibold">
                 info@brothersindia.com
               </p>
             </div>
           </div>
         </div>
   
         {/* 🔹 Footer Links Section */}
         <div
           className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 px-6 sm:px-10 py-10"
           data-aos="zoom-in-down"
         >
           {/* Company Info */}
           <div data-aos="zoom-out-left">
             <h3 className="text-lg font-bold mb-3">
               Brothers Pharmamach (India) Pvt.Ltd.
             </h3>
             <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
               Brothers Pharmamach, the largest Manufacturer & Supplier of
               Pharmaceutical and Packaging Machinery in India.
             </p>
             <p className="text-2xl sm:text-2xl font-bold">
               <span className="text-black font-bold ">50+</span>{" "}
               <span className="text-gray-700 italic text-base sm:text-lg">
                 Years of Experience
               </span>
             </p>
             <div className="flex gap-4 mt-4 text-gray-600 justify-center sm:justify-start">
               <FaFacebookF className="hover:text-blue-600 cursor-pointer text-lg sm:text-xl" />
               <FaTwitter className="hover:text-blue-600 cursor-pointer text-lg sm:text-xl" />
               <FaLinkedinIn className="hover:text-blue-600 cursor-pointer text-lg sm:text-xl" />
               <FaYoutube className="hover:text-blue-600 cursor-pointer text-lg sm:text-xl" />
             </div>
           </div>
   
           {/* Quick Links */}
           <div className="text-center sm:text-left" data-aos="zoom-in-left">
             <h3 className="text-lg font-bold mb-3">Quick Links</h3>
             <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
               {[
                 "Home",
                 "About Us",
                 "Products",
                 "News & Event",
                 "Application",
                 "Contact Us",
               ].map((item) => (
                 <li key={item}>
                   <a href="#" className="hover:text-blue-600 transition">
                     {item}
                   </a>
                 </li>
               ))}
             </ul>
           </div>
   
           {/* Other Links */}
           <div className="text-center sm:text-left" data-aos="zoom-in-left">
             <h3 className="text-lg font-bold mb-3">Other Links</h3>
             <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
               {[
                 "Our Management Team",
                 "Our Milestones",
                 "Manufacturing Facility",
                 "Global Presence",
                 "Our Clients",
                 "Sitemap",
                 "Blogs",
               ].map((item) => (
                 <li key={item}>
                   <a href="#" className="hover:text-blue-600 transition">
                     {item}
                   </a>
                 </li>
               ))}
             </ul>
           </div>
   
           {/* Contact Info */}
           <div className="text-center sm:text-left" data-aos="zoom-in-left">
             <h3 className="text-lg font-bold mb-3">Contact Us</h3>
             <p className="font-semibold mb-2">
               Brothers Pharmamach (India) Pvt.Ltd.
             </p>
             <ul className="space-y-3 text-gray-600 text-sm sm:text-base">
               <li className="flex justify-center sm:justify-start items-start gap-3">
                 <FaMapMarkerAlt className="text-blue-600 mt-1 shrink-0" />
                 Plot No.2, Phase II, GIDC Vatva, Ahmedabad 382 445 Gujarat, INDIA.
               </li>
               <li className="flex justify-center sm:justify-start items-center gap-3">
                 <FaPhoneAlt className="text-blue-600" /> +91-7940213220
               </li>
               <li className="flex justify-center sm:justify-start items-center gap-3">
                 <FaPhoneAlt className="text-blue-600" /> +91 9825037971
               </li>
               <li className="flex justify-center sm:justify-start items-center gap-3">
                 <FaPhoneAlt className="text-blue-600" /> +91-7925835885
               </li>
               <li className="flex justify-center sm:justify-start items-center gap-3">
                 <FaEnvelope className="text-blue-600" /> info@brothersindia.com
               </li>
             </ul>
           </div>
         </div>
   
         {/* 🔹 Bottom Copyright */}
         <div
           className="border-t border-gray-200 py-4 text-center text-gray-600 text-sm px-4"
           data-aos="zoom-in-down"
         >
           <p>Copyright © 2025 Brothers</p>
           <div className="flex justify-center gap-4 mt-2 flex-wrap">
             <a href="#" className="hover:text-blue-600 transition">
               Privacy Policy
             </a>
             <a href="#" className="hover:text-blue-600 transition">
               Return & Refund Policy
             </a>
             <a href="#" className="hover:text-blue-600 transition">
               Shipping Policy
             </a>
           </div>
         </div>
       </footer>
    </>
  );
};

export default Products;
