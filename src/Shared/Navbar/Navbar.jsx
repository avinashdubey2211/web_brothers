// import React from "react";
// import { FaEnvelope, FaPhoneAlt, FaGlobe } from "react-icons/fa";

// const Navbar = () => {
//   return (
// <div className="w-full font-sans text-[15px] text-gray-800 sticky top-0 z-50 bg-white shadow-md">
//       {/* Top Bar */}
//       <div className="flex justify-between items-center border-b border-gray-200 px-6 py-5 text-sm">
//         <div className="flex items-center gap-5">
//           <div className="flex items-center gap-2">
//             <FaEnvelope className="text-black" />
//             <a href="mailto:info@brothersindia.com" className="hover:text-gray-700">
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

//         <div className="flex items-center gap-5">
//           <div className="flex items-center gap-1">
//             <FaGlobe className="text-blue-500" />
//             <span className="text-blue-500">Language</span>
//           </div>
//           <a href="#" className="text-xs text-gray-500 hover:text-gray-700">Global Presence</a>
//           <a href="#" className="text-xs text-gray-500 hover:text-gray-700">Client</a>
//           <a href="#" className=" text-xs text-gray-500 hover:text-gray-700">Sitemap</a>
//         </div>
//       </div>

//       {/* Main Navbar */}
//       <div className="flex justify-between items-center px-10 py-3">
//         {/* Logo */}
//         <div className="flex items-center gap-3">
//           <img
//             src="https://www.brothersindia.com/images/logo/logo.png"
//             alt="Brothers Logo"
//             className="w-[200px] object-contain"
//           />
//         </div>

//         {/* Menu */}
//         <ul className="flex items-center gap-10 font-medium">
//           <li><a href="#" className="hover:text-black text-gray-800">Home</a></li>
//           <li><a href="#" className="hover:text-black text-gray-800">About Us</a></li>
//           <li><a href="#" className="hover:text-black text-gray-800">Products</a></li>
//           <li><a href="#" className="hover:text-black text-gray-800">News & Events</a></li>
//           <li><a href="#" className="hover:text-black text-gray-800">Application</a></li>
//           <li><a href="#" className="hover:text-black text-gray-800">Our Client</a></li>
//           <li><a href="#" className="hover:text-black text-gray-800">Contact Us</a></li>
//         </ul>

//         {/* Enquiry Button */}
//         <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition">
//           Enquiry →
//         </button>
//       </div>
//     </div>
//   );
// };

// export default Navbar;



import React, { useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaGlobe, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full font-sans text-[15px] text-gray-800 sticky top-0 z-50 bg-white shadow-md">
      {/* 🔹 Top Bar (Hidden on small screens) */}
      <div className="hidden lg:flex justify-between items-center border-b border-gray-200 px-6 py-3 text-sm">
        <div className="flex items-center gap-5 flex-wrap">
          <div className="flex items-center gap-2">
            <FaEnvelope className="text-black" />
            <a href="mailto:info@brothersindia.com" className="hover:text-gray-700">
              info@brothersindia.com
            </a>
          </div>
          <div className="flex items-center gap-2">
            <FaPhoneAlt className="text-black" />
            <a href="tel:+919825037971" className="hover:text-gray-700">
              +91 9825037971
            </a>
          </div>
        </div>

        <div className="flex items-center gap-5 flex-wrap">
          <div className="flex items-center gap-1">
            <FaGlobe className="text-blue-500" />
            <span className="text-blue-500">Language</span>
          </div>
          <a href="#" className="text-xs text-gray-500 hover:text-gray-700">
            Global Presence
          </a>
          <a href="#" className="text-xs text-gray-500 hover:text-gray-700">
            Client
          </a>
          <a href="#" className="text-xs text-gray-500 hover:text-gray-700">
            Sitemap
          </a>
        </div>
      </div>

      {/* 🔹 Main Navbar */}
      <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 py-3 relative">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src="https://www.brothersindia.com/images/logo/logo.png"
            alt="Brothers Logo"
            className="w-[140px] sm:w-40 md:w-[180px] lg:w-[200px] object-contain"
          />
        </div>

        {/* Hamburger Button (Visible on mobile & tablet) */}
        <button
          className="text-2xl lg:hidden text-gray-800 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

        {/* Menu (Desktop & Tablet view) */}
        <ul className="hidden lg:flex items-center gap-6 xl:gap-10 font-medium">
          <li><a href="#" className="hover:text-black text-gray-800">Home</a></li>
          <li><a href="#" className="hover:text-black text-gray-800">About Us</a></li>
          <li><a href="#" className="hover:text-black text-gray-800">Products</a></li>
          <li><a href="#" className="hover:text-black text-gray-800">News & Events</a></li>
          <li><a href="#" className="hover:text-black text-gray-800">Application</a></li>
          <li><a href="#" className="hover:text-black text-gray-800">Our Client</a></li>
          <li><a href="#" className="hover:text-black text-gray-800">Contact Us</a></li>
        </ul>

        {/* Enquiry Button (Desktop & Tablet) */}
        <button className="hidden lg:block  bg-black text-white px-5 py-2 rounded-full hover:bg-gray-900 transition">
          Enquiry →
        </button>

        {/* 🔹 Mobile/Tablet Menu Drawer */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-white shadow-md border-t border-gray-200 lg:hidden z-40 animate-slideDown">
            <ul className="flex flex-col items-center py-6 space-y-5 text-lg font-medium">
              {["Home", "About Us", "Products", "News & Events", "Application", "Our Client", "Contact Us"].map((item) => (
                <li key={item}>
                  <a
                    href="#"
                    className="hover:text-blue-700"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <button className="bg-black text-white px-8 py-2 rounded-full hover:bg-gray-900 transition">
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
