
// import React, { useState, useEffect } from "react";
// import {
//   FaEnvelope,
//   FaPhoneAlt,
//   FaGlobe,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [langOpen, setLangOpen] = useState(false);

//   const languages = [
//     { flag: "🇮🇳", name: "Hindi" },
//     { flag: "🇺🇸", name: "English" },
//     { flag: "🇫🇷", name: "French" },
//     { flag: "🇩🇪", name: "German" },
//     { flag: "🇪🇸", name: "Spanish" },
//     { flag: "🇮🇹", name: "Italian" },
//     { flag: "🇯🇵", name: "Japanese" },
//     { flag: "🇨🇳", name: "Chinese" },
//     { flag: "🇰🇷", name: "Korean" },
//     { flag: "🇷🇺", name: "Russian" },
//     { flag: "🇧🇷", name: "Portuguese" },
//     { flag: "🇸🇦", name: "Arabic" },
//     { flag: "🇹🇷", name: "Turkish" },
//     { flag: "🇳🇱", name: "Dutch" },
//     { flag: "🇮🇩", name: "Indonesian" },
//   ];

//   // Close dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (!e.target.closest("#language-menu")) setLangOpen(false);
//     };
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   return (
//     <nav className="w-full font-sans text-[15px] text-gray-800 sticky top-0 z-50 bg-white shadow-md">
//       {/* 🔹 Top Bar (Now visible on ALL screens) */}
//       <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-200 px-4 sm:px-6 md:px-8 py-3 text-sm">
//         {/* Left Section */}
//         <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
//           <div className="flex items-center gap-2">
//             <FaEnvelope className="text-black" />
//             <a
//               href="mailto:info@brothersindia.com"
//               className="hover:text-gray-700"
//             >
//               info@brothersindia.com
//             </a>
//           </div>
//           <div className="flex items-center gap-2">
//             <FaPhoneAlt className="text-black" />
//             <a href="tel:+919825037971" className="hover:text-gray-700">
//               +91 9825037971
//             </a>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-end relative">
//           {/* 🌍 Language Dropdown */}
//           <div id="language-menu" className="relative">
//             <button
//               onClick={() => setLangOpen(!langOpen)}
//               className="flex items-center gap-1 text-blue-500 hover:text-blue-600 transition-colors duration-200"
//             >
//               <FaGlobe className="text-blue-500" />
//               <span className="font-medium">Language</span>
//             </button>

//             {langOpen && (
//               <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-64 overflow-y-auto">
//                 <ul className="p-2">
//                   {languages.map((lang, idx) => (
//                     <li
//                       key={idx}
//                       className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors duration-150"
//                       onClick={() => setLangOpen(false)}
//                     >
//                       <span className="text-xl">{lang.flag}</span>
//                       <span className="text-gray-800">{lang.name}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>

//           <a
//             onClick={() => navigate("/globalpresence")}
//             className="text-xs sm:text-sm text-gray-500 hover:text-gray-700 cursor-pointer"
//           >
//             Global Presence
//           </a>
//           <a
//             onClick={() => navigate("/client")}
//             className="text-xs sm:text-sm text-gray-500 hover:text-gray-700 cursor-pointer"
//           >
//             Client
//           </a>
//           <a
//             onClick={() => navigate("/sitemap")}
//             className="text-xs sm:text-sm text-gray-500 hover:text-gray-700 cursor-pointer"
//           >
//             Sitemap
//           </a>
//         </div>
//       </div>

//       {/* 🔹 Main Navbar */}
//       <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 py-3 relative">
//         {/* Logo */}
//         <div className="flex items-center gap-3">
//           <img
//             src="https://www.brothersindia.com/images/logo/logo.png"
//             alt="Brothers Logo"
//             onClick={() => navigate("/")}
//             className="w-[130px] sm:w-36 md:w-[180px] lg:w-[200px] object-contain cursor-pointer"
//           />
//         </div>

//         {/* Hamburger Button */}
//         <button
//           className="text-2xl lg:hidden text-gray-800 focus:outline-none"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex items-center gap-6 xl:gap-10 font-medium">
//           <li>
//             <a href="#"
//              onClick={() => navigate("/")}
//               className="hover:text-black text-gray-800">
//               Home
//             </a>
//           </li>
//           <li>
//             <a href="#"
//                         onClick={() => navigate("/about")}

//              className="hover:text-black text-gray-800">
//               About Us
//             </a>
//           </li>
//           <li>
//             <a href="#"
//               onClick={() => navigate("/products")}

//              className="hover:text-black text-gray-800">
//               Products
//             </a>
//           </li>
//           <li>
//             <a href="#"
//                           onClick={() => navigate("/news_events")}
//             className="hover:text-black text-gray-800">
//               News & Events
//             </a>
//           </li>
//           <li>
//             <a href="#"
//             onClick={() => navigate("/application")}
//              className="hover:text-black text-gray-800">
//               Application
//             </a>
//           </li>
//           <li>
//             <a href="#"
//             onClick={() => navigate("/client")}
//              className="hover:text-black text-gray-800">
//               Our Client
//             </a>
//           </li>
//           <li>
//             <a href="#"
//             onClick={() => navigate("/contact_us")}
//              className="hover:text-black text-gray-800">
//               Contact Us
//             </a>
//           </li>
//         </ul>

//         {/* Enquiry Button */}
//         <button 
//           onClick={() => navigate("/enquiry")}
//           className="hidden lg:block bg-black text-white px-5 py-2 rounded-full hover:bg-gray-900 transition">
//           Enquiry →
//         </button>

//         {/* Mobile Menu Drawer */}
//         {menuOpen && (
//           <div className="absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-200 lg:hidden z-40 animate-slideDown">
//             <ul className="flex flex-col items-center py-6 space-y-5 text-lg font-medium">
//               {[
//                 "Home",
//                 "About Us",
//                 "Products",
//                 "News & Events",
//                 "Application",
//                 "Our Client",
//                 "Contact Us",
//               ].map((item) => (
//                 <li key={item}>
//                   <a
//                     href="#"
//                     className="hover:text-blue-700"
//                     onClick={() => setMenuOpen(false)}
//                   >
//                     {item}
//                   </a>
//                 </li>
//               ))}
//               <li>
//                 <button className="bg-black text-white px-8 py-2 rounded-full hover:bg-gray-900 transition">
//                   Enquiry →
//                 </button>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



// import React, { useState, useEffect } from "react";
// import {
//   FaEnvelope,
//   FaPhoneAlt,
//   FaGlobe,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [langOpen, setLangOpen] = useState(false);

//   const languages = [
//     { flag: "🇮🇳", name: "Hindi" },
//     { flag: "🇺🇸", name: "English" },
//     { flag: "🇫🇷", name: "French" },
//     { flag: "🇩🇪", name: "German" },
//     { flag: "🇪🇸", name: "Spanish" },
//     { flag: "🇮🇹", name: "Italian" },
//     { flag: "🇯🇵", name: "Japanese" },
//     { flag: "🇨🇳", name: "Chinese" },
//     { flag: "🇰🇷", name: "Korean" },
//     { flag: "🇷🇺", name: "Russian" },
//     { flag: "🇧🇷", name: "Portuguese" },
//     { flag: "🇸🇦", name: "Arabic" },
//     { flag: "🇹🇷", name: "Turkish" },
//     { flag: "🇳🇱", name: "Dutch" },
//     { flag: "🇮🇩", name: "Indonesian" },
//   ];

//   // 🔹 Close dropdown on outside click
//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (!e.target.closest("#language-menu")) setLangOpen(false);
//     };
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   // 🔹 Menu items with navigation
//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Products", path: "/products" },
//     { name: "News & Events", path: "/news_events" },
//     { name: "Application", path: "/application" },
//     { name: "Our Client", path: "/client" },
//     { name: "Contact Us", path: "/contact_us" },
//   ];

//   return (
//     <nav className="w-full font-sans text-[15px] text-gray-800 sticky top-0 z-50 bg-white shadow-md">
//       {/* 🔹 Top Bar */}
//       <div className="flex flex-col sm:flex-row justify-between items-center border-b border-gray-200 px-4 sm:px-6 md:px-8 py-3 text-sm">
//         {/* Left Section */}
//         <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-start">
//           <div className="flex items-center gap-2">
//             <FaEnvelope className="text-black" />
//             <a
//               href="mailto:info@brothersindia.com"
//               className="hover:text-gray-700"
//             >
//               info@brothersindia.com
//             </a>
//           </div>
//           <div className="flex items-center gap-2">
//             <FaPhoneAlt className="text-black" />
//             <a href="tel:+917317018945" className="hover:text-gray-700">
//               +91 7317018945
//             </a>
//           </div>
//         </div>

//         {/* Right Section */}
//         <div className="flex items-center gap-4 flex-wrap justify-center sm:justify-end relative">
//           {/* 🌍 Language Dropdown */}
//           <div id="language-menu" className="relative">
//             <button
//               onClick={() => setLangOpen(!langOpen)}
//               className="flex items-center gap-1 text-blue-500 hover:text-blue-600 transition-colors duration-200"
//             >
//               <FaGlobe className="text-blue-500" />
//               <span className="font-medium">Language</span>
//             </button>

//             {langOpen && (
//               <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-64 overflow-y-auto">
//                 <ul className="p-2">
//                   {languages.map((lang, idx) => (
//                     <li
//                       key={idx}
//                       className="flex items-center gap-2 px-3 py-2 rounded-lg cursor-pointer hover:bg-blue-100 transition-colors duration-150"
//                       onClick={() => setLangOpen(false)}
//                     >
//                       <span className="text-xl">{lang.flag}</span>
//                       <span className="text-gray-800">{lang.name}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>

//           <a
//             onClick={() => navigate("/globalpresence")}
//             className="text-xs sm:text-sm text-gray-500 hover:text-gray-700 cursor-pointer"
//           >
//             Global Presence
//           </a>
//           <a
//             onClick={() => navigate("/client")}
//             className="text-xs sm:text-sm text-gray-500 hover:text-gray-700 cursor-pointer"
//           >
//             Client
//           </a>
//           <a
//             onClick={() => navigate("/sitemap")}
//             className="text-xs sm:text-sm text-gray-500 hover:text-gray-700 cursor-pointer"
//           >
//             Sitemap
//           </a>
//         </div>
//       </div>

//       {/* 🔹 Main Navbar */}
//       <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 py-3 relative">
//         {/* Logo */}
//         <div className="flex items-center gap-3">
//           <img
//             src="https://www.brothersindia.com/images/logo/logo.png"
//             alt="Brothers Logo"
//             onClick={() => navigate("/")}
//             className="w-[130px] sm:w-36 md:w-[180px] lg:w-[200px] object-contain cursor-pointer"
//           />
//         </div>

//         {/* Hamburger Button */}
//         <button
//           className="text-2xl lg:hidden text-gray-800 focus:outline-none"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex items-center gap-6 xl:gap-10 font-medium">
//           {navItems.map((item) => (
//             <li key={item.name}>
//               <button
//                 onClick={() => navigate(item.path)}
//                 className="hover:text-black text-gray-800"
//               >
//                 {item.name}
//               </button>
//             </li>
//           ))}
//         </ul>

//         {/* Enquiry Button */}
//         <button
//           onClick={() => navigate("/enquiry")}
//           className="hidden lg:block bg-black text-white px-5 py-2 rounded-full hover:bg-gray-900 transition"
//         >
//           Enquiry →
//         </button>

//         {/* 🔹 Mobile Menu Drawer */}
//         {menuOpen && (
//           <div className="absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-200 lg:hidden z-40 animate-slideDown">
//             <ul className="flex flex-col items-center py-6 space-y-5 text-lg font-medium">
//               {navItems.map((item) => (
//                 <li key={item.name}>
//                   <button
//                     onClick={() => {
//                       navigate(item.path);
//                       setMenuOpen(false);
//                     }}
//                     className="hover:text-blue-700"
//                   >
//                     {item.name}
//                   </button>
//                 </li>
//               ))}
//               <li>
//                 <button
//                   onClick={() => {
//                     navigate("/enquiry");
//                     setMenuOpen(false);
//                   }}
//                   className="bg-black text-white px-8 py-2 rounded-full hover:bg-gray-900 transition"
//                 >
//                   Enquiry →
//                 </button>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;


// import React, { useState, useEffect } from "react";
// import {
//   FaEnvelope,
//   FaPhoneAlt,
//   FaGlobe,
//   FaBars,
//   FaTimes,
// } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [langOpen, setLangOpen] = useState(false);

//   const languages = [
//     { flag: "🇮🇳", name: "Hindi" },
//     { flag: "🇺🇸", name: "English" },
//     { flag: "🇫🇷", name: "French" },
//     { flag: "🇩🇪", name: "German" },
//     { flag: "🇪🇸", name: "Spanish" },
//     { flag: "🇮🇹", name: "Italian" },
//     { flag: "🇯🇵", name: "Japanese" },
//     { flag: "🇨🇳", name: "Chinese" },
//     { flag: "🇰🇷", name: "Korean" },
//     { flag: "🇷🇺", name: "Russian" },
//     { flag: "🇧🇷", name: "Portuguese" },
//     { flag: "🇸🇦", name: "Arabic" },
//     { flag: "🇹🇷", name: "Turkish" },
//     { flag: "🇳🇱", name: "Dutch" },
//     { flag: "🇮🇩", name: "Indonesian" },
//   ];

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (!e.target.closest("#language-menu")) setLangOpen(false);
//     };
//     document.addEventListener("click", handleClickOutside);
//     return () => document.removeEventListener("click", handleClickOutside);
//   }, []);

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Products", path: "/products" },
//     { name: "News & Events", path: "/news_events" },
//     { name: "Application", path: "/application" },
//     { name: "Our Client", path: "/client" },
//     { name: "Contact Us", path: "/contact_us" },
//   ];

//   return (
//     <nav className="w-full font-sans text-[15px] text-gray-800 sticky top-0 z-50 bg-white shadow-md">
//       {/* 🔹 Top Bar */}
//       <div className="border-b border-gray-200 px-4 sm:px-6 md:px-8 py-3 text-sm">
//         {/* ✅ Mobile: Number + Language in one row */}
//         <div className="flex sm:hidden justify-between items-center w-full">
//           <div className="flex items-center gap-2">
//             <FaPhoneAlt className="text-black" />
//             <a href="tel:+917317018945" className="hover:text-gray-700">
//               +91 7317018945
//             </a>
//           </div>
//           <div id="language-menu" className="relative">
//             <button
//               onClick={() => setLangOpen(!langOpen)}
//               className="flex items-center gap-1 text-blue-500 hover:text-blue-600 transition-colors duration-200"
//             >
//               <FaGlobe className="text-blue-500" />
//               <span className="font-medium">Language</span>
//             </button>

//             {langOpen && (
//               <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-56 overflow-y-auto">
//                 <ul className="p-1">
//                   {languages.map((lang, idx) => (
//                     <li
//                       key={idx}
//                       className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer hover:bg-blue-100 transition-colors"
//                       onClick={() => setLangOpen(false)}
//                     >
//                       <span className="text-lg">{lang.flag}</span>
//                       <span>{lang.name}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* ✅ Desktop Layout */}
//         <div className="hidden sm:flex justify-between items-center flex-wrap">
//           <div className="flex items-center gap-4 flex-wrap">
//             <div className="flex items-center gap-2">
//               <FaEnvelope className="text-black" />
//               <a
//                 href="mailto:info@brothersindia.com"
//                 className="hover:text-gray-700"
//               >
//                 info@brothersindia.com
//               </a>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaPhoneAlt className="text-black" />
//               <a href="tel:+917317018945" className="hover:text-gray-700">
//                 +91 7317018945
//               </a>
//             </div>
//           </div>

//           <div className="flex items-center gap-4">
//             <div id="language-menu" className="relative">
//               <button
//                 onClick={() => setLangOpen(!langOpen)}
//                 className="flex items-center gap-1 text-blue-500 hover:text-blue-600 transition-colors duration-200"
//               >
//                 <FaGlobe className="text-blue-500" />
//                 <span className="font-medium">Language</span>
//               </button>
//             </div>

//             <a
//               onClick={() => navigate("/globalpresence")}
//               className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer"
//             >
//               Global Presence
//             </a>
//             <a
//               onClick={() => navigate("/client")}
//               className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer"
//             >
//               Client
//             </a>
//             <a
//               onClick={() => navigate("/sitemap")}
//               className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer"
//             >
//               Sitemap
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* 🔹 Main Navbar */}
//       <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 py-3 relative">
//         {/* Logo */}
//         <div className="flex items-center gap-3">
//           <img
//             src="https://www.brothersindia.com/images/logo/logo.png"
//             alt="Brothers Logo"
//             onClick={() => navigate("/")}
//             className="w-[130px] sm:w-36 md:w-[180px] lg:w-[200px] object-contain cursor-pointer"
//           />
//         </div>

//         {/* Hamburger Button */}
//         <button
//           className="text-2xl lg:hidden text-gray-800 focus:outline-none"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex items-center gap-6 xl:gap-10 font-medium">
//           {navItems.map((item) => (
//             <li key={item.name}>
//               <button
//                 onClick={() => navigate(item.path)}
//                 className="hover:text-black text-gray-800"
//               >
//                 {item.name}
//               </button>
//             </li>
//           ))}
//         </ul>

//         {/* Enquiry Button */}
//         <button
//           onClick={() => navigate("/enquiry")}
//           className="hidden lg:block bg-black text-white px-5 py-2 rounded-full hover:bg-gray-900 transition"
//         >
//           Enquiry →
//         </button>

//         {/* 🔹 Mobile Menu Drawer */}
//         {menuOpen && (
//           <div className="absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-200 lg:hidden z-40 animate-slideDown">
//             <ul className="flex flex-col items-center py-6 space-y-5 text-lg font-medium">
//               {navItems.map((item) => (
//                 <li key={item.name}>
//                   <button
//                     onClick={() => {
//                       navigate(item.path);
//                       setMenuOpen(false);
//                     }}
//                     className="hover:text-blue-700"
//                   >
//                     {item.name}
//                   </button>
//                 </li>
//               ))}
//               <li>
//                 <button
//                   onClick={() => {
//                     navigate("/enquiry");
//                     setMenuOpen(false);
//                   }}
//                   className="bg-black text-white px-8 py-2 rounded-full hover:bg-gray-900 transition"
//                 >
//                   Enquiry →
//                 </button>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect, useRef } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGlobe,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const langRef = useRef(null); // 👈 Reference for outside click detection

  const languages = [
    { flag: "🇮🇳", name: "Hindi" },
    { flag: "🇺🇸", name: "English" },
    { flag: "🇫🇷", name: "French" },
    { flag: "🇩🇪", name: "German" },
    { flag: "🇪🇸", name: "Spanish" },
    { flag: "🇮🇹", name: "Italian" },
    { flag: "🇯🇵", name: "Japanese" },
    { flag: "🇨🇳", name: "Chinese" },
    { flag: "🇰🇷", name: "Korean" },
    { flag: "🇷🇺", name: "Russian" },
    { flag: "🇧🇷", name: "Portuguese" },
    { flag: "🇸🇦", name: "Arabic" },
    { flag: "🇹🇷", name: "Turkish" },
    { flag: "🇳🇱", name: "Dutch" },
    { flag: "🇮🇩", name: "Indonesian" },
  ];

  // ✅ Proper outside-click handler
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (langRef.current && !langRef.current.contains(e.target)) {
        setLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "News & Events", path: "/news_events" },
    { name: "Application", path: "/application" },
    { name: "Our Client", path: "/client" },
    { name: "Contact Us", path: "/contact_us" },
  ];

  return (
    <nav className="w-full font-sans text-[15px] text-gray-800 sticky top-0 z-50 bg-white shadow-md">
      {/* 🔹 Top Bar */}
      <div className="border-b border-gray-200 px-4 sm:px-6 md:px-8 py-3 text-sm">
        {/* ✅ Mobile Layout */}
        <div className="flex sm:hidden justify-between items-center w-full">
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-black" />
            <a href="tel:+917317018945" className="hover:text-gray-700">
              +91 7317018945
            </a>
          </div>

          {/* Language Menu */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="flex items-center gap-1 text-blue-500 hover:text-blue-600 transition-colors duration-200"
            >
              <FaGlobe className="text-blue-500" />
              <span className="font-medium">Language</span>
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-56 overflow-y-auto">
                <ul className="p-1">
                  {languages.map((lang, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer hover:bg-blue-100 transition-colors"
                      onClick={() => setLangOpen(false)}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span>{lang.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* ✅ Desktop Layout */}
        <div className="hidden sm:flex justify-between items-center flex-wrap">
          <div className="flex items-center gap-4 flex-wrap">
            <div className="flex items-center gap-2">
              <FaEnvelope className="text-black" />
              <a
                href="mailto:info@brothersindia.com"
                className="hover:text-gray-700"
              >
                info@brothersindia.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <FaPhoneAlt className="text-black" />
              <a href="tel:+917317018945" className="hover:text-gray-700">
                +91 7317018945
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div ref={langRef} className="relative">
              <button
                onClick={() => setLangOpen(!langOpen)}
                className="flex items-center gap-1 text-blue-500 hover:text-blue-600 transition-colors duration-200"
              >
                <FaGlobe className="text-blue-500" />
                <span className="font-medium">Language</span>
              </button>

              {langOpen && (
                <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-56 overflow-y-auto">
                  <ul className="p-1">
                    {languages.map((lang, idx) => (
                      <li
                        key={idx}
                        className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer hover:bg-blue-100 transition-colors"
                        onClick={() => setLangOpen(false)}
                      >
                        <span className="text-lg">{lang.flag}</span>
                        <span>{lang.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <a
              onClick={() => navigate("/globalpresence")}
              className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              Global Presence
            </a>
            <a
              onClick={() => navigate("/client")}
              className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              Client
            </a>
            <a
              onClick={() => navigate("/sitemap")}
              className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer"
            >
              Sitemap
            </a>
          </div>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 py-3 relative">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="https://www.brothersindia.com/images/logo/logo.png"
            alt="Brothers Logo"
            onClick={() => navigate("/")}
            className="w-[130px] sm:w-36 md:w-[180px] lg:w-[200px] object-contain cursor-pointer"
          />
        </div>

        {/* Hamburger Button */}
        <button
          className="text-2xl lg:hidden text-gray-800 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-10 font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <button
                onClick={() => navigate(item.path)}
                className="hover:text-black text-gray-800"
              >
                {item.name}
              </button>
            </li>
          ))}
        </ul>

        {/* Enquiry Button */}
        <button
          onClick={() => navigate("/enquiry")}
          className="hidden lg:block bg-black text-white px-5 py-2 rounded-full hover:bg-gray-900 transition"
        >
          Enquiry →
        </button>

        {/* 🔹 Mobile Menu Drawer */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-200 lg:hidden z-40 animate-slideDown">
            <ul className="flex flex-col items-center py-6 space-y-5 text-lg font-medium">
              {navItems.map((item) => (
                <li key={item.name}>
                  <button
                    onClick={() => {
                      navigate(item.path);
                      setMenuOpen(false);
                    }}
                    className="hover:text-blue-700"
                  >
                    {item.name}
                  </button>
                </li>
              ))}
              <li>
                <button
                  onClick={() => {
                    navigate("/enquiry");
                    setMenuOpen(false);
                  }}
                  className="bg-black text-white px-8 py-2 rounded-full hover:bg-gray-900 transition"
                >
                  Enquiry →
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
