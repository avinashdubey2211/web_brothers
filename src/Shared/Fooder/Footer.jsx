// import React from "react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaYoutube,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
// } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-white text-gray-800 font-sans">
//       {/* 🔹 Top Contact Section */}
//       <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-200 px-6 sm:px-10 py-8 max-w-7xl mx-auto">
//         {/* Logo */}
//         <div className="flex flex-col items-center md:items-start text-center md:text-left">
//           <img
//             src="https://www.brothersindia.com/images/logo/logo.png"
//             alt="Brothers Logo"
//             className="w-[200px] object-contain mb-2"
//           />
//         </div>

//         {/* Call Us */}
//         <div className="flex items-center gap-4">
//           <div className="bg-blue-100 p-4 rounded-full text-blue-600 text-2xl">
//             <FaPhoneAlt />
//           </div>
//           <div>
//             <h4 className="text-sm font-semibold text-blue-600 uppercase">
//               Call Us
//             </h4>
//             <p className="text-lg font-semibold">+91 9825037971</p>
//           </div>
//         </div>

//         {/* Email */}
//         <div className="flex items-center gap-4">
//           <div className="bg-blue-100 p-4 rounded-full text-blue-600 text-2xl">
//             <FaEnvelope />
//           </div>
//           <div>
//             <h4 className="text-sm font-semibold text-blue-600 uppercase">
//               Send E-mail
//             </h4>
//             <p className="text-lg font-semibold">info@brothersindia.com</p>
//           </div>
//         </div>
//       </div>

//       {/* 🔹 Footer Links Section */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 px-6 sm:px-10 py-12">
//         {/* Company Info */}
//         <div>
//           <h3 className="text-lg font-bold mb-3">
//             Brothers Pharmamach (India) Pvt.Ltd.
//           </h3>
//           <p className="text-gray-600 mb-4 leading-relaxed">
//             Brothers Pharmamach, the largest Manufacturer & Supplier of
//             Pharmaceutical and Packaging Machinery in India.
//           </p>
//           <p className="text-2xl font-bold">
//             <span className="text-blue-600">50+</span>{" "}
//             <span className="text-gray-700 italic text-lg">
//               Years of Experience
//             </span>
//           </p>
//           <div className="flex gap-4 mt-4 text-gray-600">
//             <FaFacebookF className="hover:text-blue-600 cursor-pointer" />
//             <FaTwitter className="hover:text-blue-600 cursor-pointer" />
//             <FaLinkedinIn className="hover:text-blue-600 cursor-pointer" />
//             <FaYoutube className="hover:text-blue-600 cursor-pointer" />
//           </div>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h3 className="text-lg font-bold mb-3">Quick Links</h3>
//           <ul className="space-y-2 text-gray-600">
//             <li><a href="#" className="hover:text-blue-600">Home</a></li>
//             <li><a href="#" className="hover:text-blue-600">About Us</a></li>
//             <li><a href="#" className="hover:text-blue-600">Products</a></li>
//             <li><a href="#" className="hover:text-blue-600">News & Event</a></li>
//             <li><a href="#" className="hover:text-blue-600">Application</a></li>
//             <li><a href="#" className="hover:text-blue-600">Contact Us</a></li>
//           </ul>
//         </div>

//         {/* Other Links */}
//         <div>
//           <h3 className="text-lg font-bold mb-3">Other Links</h3>
//           <ul className="space-y-2 text-gray-600">
//             <li><a href="#" className="hover:text-blue-600">Our Management Team</a></li>
//             <li><a href="#" className="hover:text-blue-600">Our Milestones</a></li>
//             <li><a href="#" className="hover:text-blue-600">Manufacturing Facility</a></li>
//             <li><a href="#" className="hover:text-blue-600">Global Presence</a></li>
//             <li><a href="#" className="hover:text-blue-600">Our Clients</a></li>
//             <li><a href="#" className="hover:text-blue-600">Sitemap</a></li>
//             <li><a href="#" className="hover:text-blue-600">Blogs</a></li>
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h3 className="text-lg font-bold mb-3">Contact Us</h3>
//           <p className="font-semibold mb-2">
//             Brothers Pharmamach (India) Pvt.Ltd.
//           </p>
//           <ul className="space-y-3 text-gray-600 text-sm">
//             <li className="flex items-start gap-3">
//               <FaMapMarkerAlt className="text-blue-600 mt-1" />
//               Plot No.2, Phase II, GIDC Vatva, Ahmedabad 382 445 Gujarat, INDIA.
//             </li>
//             <li className="flex items-center gap-3">
//               <FaPhoneAlt className="text-blue-600" /> +91-7940213220
//             </li>
//             <li className="flex items-center gap-3">
//               <FaPhoneAlt className="text-blue-600" /> +91 9825037971
//             </li>
//             <li className="flex items-center gap-3">
//               <FaPhoneAlt className="text-blue-600" /> +91-7925835885
//             </li>
//             <li className="flex items-center gap-3">
//               <FaEnvelope className="text-blue-600" /> info@brothersindia.com
//             </li>
//           </ul>
//         </div>
//       </div>

//       {/* 🔹 Bottom Copyright */}
//       <div className="border-t border-gray-200 py-4 text-center text-gray-600 text-sm">
//         <p>Copyright © 2025 Brothers</p>
//         <div className="flex justify-center gap-4 mt-2 flex-wrap">
//           <a href="#" className="hover:text-blue-600">Privacy Policy</a>
//           <a href="#" className="hover:text-blue-600">Return & Refund Policy</a>
//           <a href="#" className="hover:text-blue-600">Shipping Policy</a>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;


import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-800 font-sans">
      {/* 🔹 Top Contact Section */}
      <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-200 px-6 sm:px-10 py-8 max-w-7xl mx-auto text-center md:text-left">
        {/* Logo */}
        <div className="flex flex-col items-center md:items-start">
          <img
            src="https://www.brothersindia.com/images/logo/logo.png"
            alt="Brothers Logo"
            className="w-[180px] sm:w-[200px] object-contain mb-2"
          />
        </div>

        {/* Call Us */}
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4">
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
        <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4">
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
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 px-6 sm:px-10 py-10">
        {/* Company Info */}
        <div>
          <h3 className="text-lg font-bold mb-3">
            Brothers Pharmamach (India) Pvt.Ltd.
          </h3>
          <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
            Brothers Pharmamach, the largest Manufacturer & Supplier of
            Pharmaceutical and Packaging Machinery in India.
          </p>
          <p className="text-2xl sm:text-2xl font-bold">
            <span className="text-black  font-bold ">50+</span>{" "}
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
        <div className="text-center sm:text-left">
          <h3 className="text-lg font-bold mb-3">Quick Links</h3>
          <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
            {["Home", "About Us", "Products", "News & Event", "Application", "Contact Us"].map((item) => (
              <li key={item}>
                <a href="#" className="hover:text-blue-600 transition">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Other Links */}
        <div className="text-center sm:text-left">
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
        <div className="text-center sm:text-left">
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
      <div className="border-t border-gray-200 py-4 text-center text-gray-600 text-sm px-4">
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
  );
};

export default Footer;
