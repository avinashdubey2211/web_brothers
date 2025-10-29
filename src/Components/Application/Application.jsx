

// import React, { useState, useRef } from "react";
// import { IoIosArrowUp, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaYoutube,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
// } from "react-icons/fa";


// const Application = () => {
//   const [openIndex, setOpenIndex] = useState(null);
//   const scrollRef = useRef(null);

//   const toggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const scroll = (direction) => {
//     if (scrollRef.current) {
//       const scrollAmount = scrollRef.current.clientWidth;
//       scrollRef.current.scrollBy({
//         left: direction === "left" ? -scrollAmount : scrollAmount,
//         behavior: "smooth",
//       });
//     }
//   };

//   const images = [
//     "https://www.brothersindia.com/images/application/packaging.jpg",
//     "https://www.brothersindia.com/images/application/nutrical.jpg",
//     "https://www.brothersindia.com/images/application/herbals.jpg",
//     "https://www.brothersindia.com/images/application/tablet.jpg",
//     "https://www.brothersindia.com/images/application/food-beverages.jpg",
//     "https://www.brothersindia.com/images/application/pesticides.jpg",
//     "https://www.brothersindia.com/images/application/lubricants.jpg",
//     "https://www.brothersindia.com/images/application/1.jpg",
//     "https://www.brothersindia.com/images/application/nutraceutical.jpg",
//     "https://www.brothersindia.com/images/application/fmcg.jpg",
//     "https://www.brothersindia.com/images/application/cosmetics.jpg",
//   ];

//   const sections = [
//     {
//       title: "Engineered for Excellence",
//       content:
//         "In modern manufacturing, accuracy and efficiency are critical to maintaining high production standards. Brothers Pharmamach integrates cutting-edge automation and high-speed technology to deliver machines that ensure consistent precision in labeling, filling, capping, and washing processes. Our solutions are designed to minimize errors, reduce wastage, and maximize throughput, making them ideal for industries that demand superior quality control, such as pharmaceuticals, food & beverages, and FMCG.",
//     },
//     {
//       title: "Designed for Every Industry",
//       content:
//         "Every industry has distinct packaging requirements, and a one-size-fits-all approach simply doesn’t work. That’s why Brothers Pharmamach focuses on custom-built machinery, designed to adapt to different product viscosities, container shapes, and regulatory standards. Whether it’s delicate glass vials in pharmaceuticals, corrosive chemicals, or thick pastes in cosmetics, our engineers develop tailor-made solutions that meet the most stringent industry demands, ensuring operational efficiency and long-term reliability.",
//     },
//     {
//       title: "Innovation in Automation",
//       content:
//         "The future of manufacturing lies in automation and intelligent technology, and Brothers Pharmamach is at the forefront of this transformation. Our machines incorporate smart sensors, servo-driven systems, and AI-powered monitoring, providing real-time data analysis, remote diagnostics, and seamless integration with existing production lines. By leveraging Industry 4.0 innovations, we help businesses enhance their production efficiency, reduce downtime, and achieve unparalleled scalability, keeping them ahead in a competitive market.",
//     },
//   ];

//   return (
//     <>
//       {/* 🔹 TOP BLUE SECTION */}
//       <div className="w-full bg-white px-4 sm:px-6 lg:px-10 py-8">
//         <div className="w-full h-[30vh] sm:h-[35vh] md:h-[40vh] bg-linear-to-r from-blue-600 via-blue-500 to-blue-400 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg">
//           <h1 className="text-black text-2xl sm:text-4xl md:text-5xl font-extrabold mb-2 tracking-wide">
//             Application
//           </h1>
//           <h3 className="text-blue-100 text-sm sm:text-lg md:text-xl font-semibold">
//             Home / Application
//           </h3>
//         </div>
//       </div>

//       {/* 🔹 TEXT + ACCORDION SECTION */}
//       <div className="w-full bg-gray-50 py-10 px-6 md:px-16 flex flex-col md:flex-row gap-10">
//         {/* LEFT */}
//         <div className="md:w-1/2 space-y-4">
//           <h2 className="text-3xl md:text-4xl font-bold text-blue-700">
//             Precision-Engineered Packaging Solutions for Diverse Industries
//           </h2>
//           <p className="text-gray-700 leading-relaxed">
//             At Brothers Pharmamach, we understand that each industry demands specific packaging
//             solutions. In today’s fast-paced manufacturing landscape, efficiency, accuracy, and
//             reliability in packaging processes are essential for businesses across various industries.
//             Brothers Pharmamach, a leading manufacturer and exporter, specializes in high-performance
//             labeling, washing, capping, and filling machines that cater to a wide range of
//             applications, including Food, Beverages, Pharmaceuticals, Chemicals, Herbals, FMCG, and
//             more.
//           </p>
//         </div>

//         {/* RIGHT */}
//         <div className="md:w-1/2 space-y-4">
//           {sections.map((item, index) => (
//             <div
//               key={index}
//               className="bg-white shadow-md rounded-2xl p-5 cursor-pointer transition-all duration-300"
//               onClick={() => toggle(index)}
//             >
//               <div className="flex justify-between items-center">
//                 <h3 className="text-xl font-semibold text-gray-900">{item.title}</h3>
//                 <IoIosArrowUp
//                   className={`text-blue-600 transform transition-transform duration-300 ${
//                     openIndex === index ? "rotate-180" : ""
//                   }`}
//                   size={24}
//                 />
//               </div>
//               {openIndex === index && (
//                 <p className="text-gray-700 mt-3 leading-relaxed">{item.content}</p>
//               )}
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* 🔹 IMAGE SCROLLER SECTION */}
//       <div className="relative w-full bg-white py-12 px-6 md:px-16">
//         <h2 className="text-3xl font-bold text-blue-700 text-center mb-6">
//           Related Applications
//         </h2>

//         {/* Scroll buttons */}
//         <button
//           onClick={() => scroll("left")}
//           className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-blue-500 hover:text-white text-gray-700 p-3 rounded-full shadow-md z-10"
//         >
//           <IoIosArrowBack size={24} />
//         </button>

//         <div
//           ref={scrollRef}
//           className="flex overflow-x-auto space-x-6 scrollbar-hide scroll-smooth"
//         >
//           {images.map((img, index) => (
//             <div
//               key={index}
//               className="min-w-[200px] sm:min-w-[220px] md:min-w-[250px] shrink-0"
//             >
//               <img
//                 src={img}
//                 alt={`Application ${index}`}
//                 className="w-full h-48 sm:h-56 md:h-60 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
//               />
//             </div>
//           ))}
//         </div>

//         <button
//           onClick={() => scroll("right")}
//           className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-blue-500 hover:text-white text-gray-700 p-3 rounded-full shadow-md z-10"
//         >
//           <IoIosArrowForward size={24} />
//         </button>
//       </div>

//  {/* fooder */}
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

// export default Application;
import React, { useState, useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { IoIosArrowUp, IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Application = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const scrollRef = useRef(null);

  // ✅ Initialize AOS
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = scrollRef.current.clientWidth;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const images = [
    "https://www.brothersindia.com/images/application/packaging.jpg",
    "https://www.brothersindia.com/images/application/nutrical.jpg",
    "https://www.brothersindia.com/images/application/herbals.jpg",
    "https://www.brothersindia.com/images/application/tablet.jpg",
    "https://www.brothersindia.com/images/application/food-beverages.jpg",
    "https://www.brothersindia.com/images/application/pesticides.jpg",
    "https://www.brothersindia.com/images/application/lubricants.jpg",
    "https://www.brothersindia.com/images/application/1.jpg",
    "https://www.brothersindia.com/images/application/nutraceutical.jpg",
    "https://www.brothersindia.com/images/application/fmcg.jpg",
    "https://www.brothersindia.com/images/application/cosmetics.jpg",
  ];

  const sections = [
    {
      title: "Engineered for Excellence",
      content:
        "In modern manufacturing, accuracy and efficiency are critical to maintaining high production standards. Brothers Pharmamach integrates cutting-edge automation and high-speed technology to deliver machines that ensure consistent precision in labeling, filling, capping, and washing processes.",
    },
    {
      title: "Designed for Every Industry",
      content:
        "Every industry has distinct packaging requirements, and a one-size-fits-all approach simply doesn’t work. That’s why Brothers Pharmamach focuses on custom-built machinery designed to adapt to different product viscosities, container shapes, and regulatory standards.",
    },
    {
      title: "Innovation in Automation",
      content:
        "The future of manufacturing lies in automation and intelligent technology, and Brothers Pharmamach is at the forefront of this transformation. Our machines incorporate smart sensors, servo-driven systems, and AI-powered monitoring.",
    },
  ];

  return (
    <>
      {/* 🔹 TOP BLUE SECTION */}
      <div className="w-full bg-white px-4 sm:px-6 lg:px-10 py-8">
        <div
          className="w-full h-[30vh] sm:h-[35vh] md:h-[40vh] bg-linear-to-r from-blue-600 via-blue-500 to-blue-400 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg"
          data-aos="fade-down"
        >
          <h1 className="text-black text-2xl sm:text-4xl md:text-5xl font-extrabold mb-2 tracking-wide">
            Application
          </h1>
          <h3 className="text-blue-100 text-sm sm:text-lg md:text-xl font-semibold">
            Home / Application
          </h3>
        </div>
      </div>

      {/* 🔹 TEXT + ACCORDION SECTION */}
      <div
        className="w-full bg-gray-50 py-10 px-6 md:px-16 flex flex-col md:flex-row gap-10"
        data-aos="fade-right"
      >
        {/* LEFT */}
        <div className="md:w-1/2 space-y-4">
          <h2
            className="text-3xl md:text-4xl font-bold text-blue-700"
            data-aos="zoom-in"
          >
            Precision-Engineered Packaging Solutions for Diverse Industries
          </h2>
          <p className="text-gray-700 leading-relaxed" data-aos="fade-up">
            At Brothers Pharmamach, we understand that each industry demands
            specific packaging solutions. In today’s fast-paced manufacturing
            landscape, efficiency, accuracy, and reliability in packaging
            processes are essential for businesses across various industries.
          </p>
        </div>

        {/* RIGHT */}
        <div className="md:w-1/2 space-y-4" data-aos="flip-left">
          {sections.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-2xl p-5 cursor-pointer transition-all duration-300"
              onClick={() => toggle(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-gray-900">
                  {item.title}
                </h3>
                <IoIosArrowUp
                  className={`text-blue-600 transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  size={24}
                />
              </div>
              {openIndex === index && (
                <p
                  className="text-gray-700 mt-3 leading-relaxed"
                  data-aos="fade-up"
                >
                  {item.content}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 🔹 IMAGE SCROLLER SECTION */}
      <div
        className="relative w-full bg-white py-12 px-6 md:px-16"
        data-aos="fade-up"
      >
        <h2
          className="text-3xl font-bold text-blue-700 text-center mb-6"
          data-aos="zoom-in-up"
        >
          Related Applications
        </h2>

        {/* Scroll buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-blue-500 hover:text-white text-gray-700 p-3 rounded-full shadow-md z-10"
          data-aos="fade-right"
        >
          <IoIosArrowBack size={24} />
        </button>

        <div
          ref={scrollRef}
          className="flex overflow-x-auto space-x-6 scrollbar-hide scroll-smooth"
          data-aos="flip-up"
        >
          {images.map((img, index) => (
            <div
              key={index}
              className="min-w-[200px] sm:min-w-[220px] md:min-w-[250px] shrink-0"
              data-aos="zoom-in"
            >
              <img
                src={img}
                alt={`Application ${index}`}
                className="w-full h-48 sm:h-56 md:h-60 object-cover rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>

        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-200 hover:bg-blue-500 hover:text-white text-gray-700 p-3 rounded-full shadow-md z-10"
          data-aos="fade-left"
        >
          <IoIosArrowForward size={24} />
        </button>
      </div>

      {/* 🔹 FOOTER SECTION */}
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

export default Application;
