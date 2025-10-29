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


// const Enquiry = () => {
//   return (
// <>
//     <div className="w-full min-h-[60vh] bg-[#edf7ff] flex flex-col items-center justify-center px-4 py-10 sm:px-6 md:px-10">
//       {/* Title */}
//       <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-blue-700 mb-8 sm:mb-10 text-center tracking-wide">
//         Get in Touch
//       </h1>

//       {/* Form */}
//       <form className="w-full max-w-5xl bg-white rounded-3xl shadow-lg p-5 sm:p-8 md:p-12 space-y-6 sm:space-y-8">
//         {/* Row 1: Name + Email */}
//         <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
//           <div className="flex flex-col w-full sm:w-1/2">
//             <label className="text-gray-800 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
//               Name
//             </label>
//             <input
//               type="text"
//               placeholder="Your Name"
//               className="border border-gray-300 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//           <div className="flex flex-col w-full sm:w-1/2">
//             <label className="text-gray-800 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
//               Email
//             </label>
//             <input
//               type="email"
//               placeholder="Your Email"
//               className="border border-gray-300 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//         </div>

//         {/* Row 2: Phone + Location */}
//         <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
//           <div className="flex flex-col w-full sm:w-1/2">
//             <label className="text-gray-800 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
//               Phone Number
//             </label>
//             <input
//               type="text"
//               placeholder="Phone / Mobile Number"
//               className="border border-gray-300 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//           <div className="flex flex-col w-full sm:w-1/2">
//             <label className="text-gray-800 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
//               Location
//             </label>
//             <input
//               type="text"
//               placeholder="City / Country"
//               className="border border-gray-300 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
//             />
//           </div>
//         </div>

//         {/* Message */}
//         <div className="flex flex-col">
//           <label className="text-gray-800 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
//             Message
//           </label>
//           <textarea
//             placeholder="Write your message..."
//             rows="4"
//             className="border border-gray-300 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
//           ></textarea>
//         </div>

//         {/* Validation Code */}
//         <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
//           <label className="text-gray-800 font-semibold text-sm sm:text-base">
//             Validation Code:
//           </label>
//           <span className="bg-blue-100 text-blue-700 font-bold px-5 sm:px-6 py-2 sm:py-3 rounded-xl shadow-inner text-base sm:text-lg text-center">
//             770379
//           </span>
//           <input
//             type="text"
//             placeholder="Enter Validation Code"
//             className="flex-1 border border-gray-300 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
//           />
//         </div>

//         {/* Submit Button */}
//         <div className="flex justify-center pt-4 sm:pt-6">
//           <button
//             type="submit"
//             className="bg-linear-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold text-sm sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
//           >
//             Submit Now
//           </button>
//         </div>
//       </form>
//     </div>


//         {/* fooder */}
//          <footer className="bg-white text-gray-800 font-sans">
//               {/* 🔹 Top Contact Section */}
//               <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-200 px-6 sm:px-10 py-8 max-w-7xl mx-auto text-center md:text-left">
//                 {/* Logo */}
//                 <div className="flex flex-col items-center md:items-start">
//                   <img
//                     src="https://www.brothersindia.com/images/logo/logo.png"
//                     alt="Brothers Logo"
//                     className="w-[180px] sm:w-[200px] object-contain mb-2"
//                   />
//                 </div>
        
//                 {/* Call Us */}
//                 <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4">
//                   <div className="bg-blue-100 p-3 sm:p-4 rounded-full text-blue-600 text-xl sm:text-2xl">
//                     <FaPhoneAlt />
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-semibold text-blue-600 uppercase">
//                       Call Us
//                     </h4>
//                     <p className="text-base sm:text-lg font-semibold">
//                       +91 7317018945
//                     </p>
//                   </div>
//                 </div>
        
//                 {/* Email */}
//                 <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4">
//                   <div className="bg-blue-100 p-3 sm:p-4 rounded-full text-blue-600 text-xl sm:text-2xl">
//                     <FaEnvelope />
//                   </div>
//                   <div>
//                     <h4 className="text-sm font-semibold text-blue-600 uppercase">
//                       Send E-mail
//                     </h4>
//                     <p className="text-base sm:text-lg font-semibold">
//                       info@brothersindia.com
//                     </p>
//                   </div>
//                 </div>
//               </div>
        
//               {/* 🔹 Footer Links Section */}
//               <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 px-6 sm:px-10 py-10">
//                 {/* Company Info */}
//                 <div>
//                   <h3 className="text-lg font-bold mb-3">
//                     Brothers Pharmamach (India) Pvt.Ltd.
//                   </h3>
//                   <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
//                     Brothers Pharmamach, the largest Manufacturer & Supplier of
//                     Pharmaceutical and Packaging Machinery in India.
//                   </p>
//                   <p className="text-2xl sm:text-2xl font-bold">
//                     <span className="text-black  font-bold ">50+</span>{" "}
//                     <span className="text-gray-700 italic text-base sm:text-lg">
//                       Years of Experience
//                     </span>
//                   </p>
//                   <div className="flex gap-4 mt-4 text-gray-600 justify-center sm:justify-start">
//                     <FaFacebookF className="hover:text-blue-600 cursor-pointer text-lg sm:text-xl" />
//                     <FaTwitter className="hover:text-blue-600 cursor-pointer text-lg sm:text-xl" />
//                     <FaLinkedinIn className="hover:text-blue-600 cursor-pointer text-lg sm:text-xl" />
//                     <FaYoutube className="hover:text-blue-600 cursor-pointer text-lg sm:text-xl" />
//                   </div>
//                 </div>
        
//                 {/* Quick Links */}
//                 <div className="text-center sm:text-left">
//                   <h3 className="text-lg font-bold mb-3">Quick Links</h3>
//                   <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
//                     {["Home", "About Us", "Products", "News & Event", "Application", "Contact Us"].map((item) => (
//                       <li key={item}>
//                         <a href="#" className="hover:text-blue-600 transition">
//                           {item}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
        
//                 {/* Other Links */}
//                 <div className="text-center sm:text-left">
//                   <h3 className="text-lg font-bold mb-3">Other Links</h3>
//                   <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
//                     {[
//                       "Our Management Team",
//                       "Our Milestones",
//                       "Manufacturing Facility",
//                       "Global Presence",
//                       "Our Clients",
//                       "Sitemap",
//                       "Blogs",
//                     ].map((item) => (
//                       <li key={item}>
//                         <a href="#" className="hover:text-blue-600 transition">
//                           {item}
//                         </a>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
        
//                 {/* Contact Info */}
//                 <div className="text-center sm:text-left">
//                   <h3 className="text-lg font-bold mb-3">Contact Us</h3>
//                   <p className="font-semibold mb-2">
//                     Brothers Pharmamach (India) Pvt.Ltd.
//                   </p>
//                   <ul className="space-y-3 text-gray-600 text-sm sm:text-base">
//                     <li className="flex justify-center sm:justify-start items-start gap-3">
//                       <FaMapMarkerAlt className="text-blue-600 mt-1 shrink-0" />
//                       Plot No.2, Phase II, GIDC Vatva, Ahmedabad 382 445 Gujarat, INDIA.
//                     </li>
//                     <li className="flex justify-center sm:justify-start items-center gap-3">
//                       <FaPhoneAlt className="text-blue-600" /> +91-7940213220
//                     </li>
//                     <li className="flex justify-center sm:justify-start items-center gap-3">
//                       <FaPhoneAlt className="text-blue-600" /> +91 9825037971
//                     </li>
//                     <li className="flex justify-center sm:justify-start items-center gap-3">
//                       <FaPhoneAlt className="text-blue-600" /> +91-7925835885
//                     </li>
//                     <li className="flex justify-center sm:justify-start items-center gap-3">
//                       <FaEnvelope className="text-blue-600" /> info@brothersindia.com
//                     </li>
//                   </ul>
//                 </div>
//               </div>
        
//               {/* 🔹 Bottom Copyright */}
//               <div className="border-t border-gray-200 py-4 text-center text-gray-600 text-sm px-4">
//                 <p>Copyright © 2025 Brothers</p>
//                 <div className="flex justify-center gap-4 mt-2 flex-wrap">
//                   <a href="#" className="hover:text-blue-600 transition">
//                     Privacy Policy
//                   </a>
//                   <a href="#" className="hover:text-blue-600 transition">
//                     Return & Refund Policy
//                   </a>
//                   <a href="#" className="hover:text-blue-600 transition">
//                     Shipping Policy
//                   </a>
//                 </div>
//               </div>
//             </footer>
//     </>
//   );
// };

// export default Enquiry;


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


const Enquiry = () => {
  return (
<>
    <div className="w-full min-h-[60vh] bg-[#edf7ff] flex flex-col items-center justify-center px-4 py-10 sm:px-6 md:px-10">
      {/* Title */}
      <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-blue-700 mb-8 sm:mb-10 text-center tracking-wide">
        Get in Touch
      </h1>

      {/* Form */}
      <form className="w-full max-w-5xl bg-white rounded-3xl shadow-lg p-5 sm:p-8 md:p-12 space-y-6 sm:space-y-8">
        {/* Row 1: Name + Email */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="text-gray-800 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
              Name
            </label>
            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="text-gray-800 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
              Email
            </label>
            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Row 2: Phone + Location */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="text-gray-800 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
              Phone Number
            </label>
            <input
              type="text"
              placeholder="Phone / Mobile Number"
              className="border border-gray-300 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
          <div className="flex flex-col w-full sm:w-1/2">
            <label className="text-gray-800 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
              Location
            </label>
            <input
              type="text"
              placeholder="City / Country"
              className="border border-gray-300 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
          </div>
        </div>

        {/* Message */}
        <div className="flex flex-col">
          <label className="text-gray-800 font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
            Message
          </label>
          <textarea
            placeholder="Write your message..."
            rows="4"
            className="border border-gray-300 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400 resize-none"
          ></textarea>
        </div>

        {/* Validation Code */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
          <label className="text-gray-800 font-semibold text-sm sm:text-base">
            Validation Code:
          </label>
          <span className="bg-blue-100 text-blue-700 font-bold px-5 sm:px-6 py-2 sm:py-3 rounded-xl shadow-inner text-base sm:text-lg text-center">
            770379
          </span>
          <input
            type="text"
            placeholder="Enter Validation Code"
            className="flex-1 border border-gray-300 rounded-xl px-3 sm:px-4 py-2 sm:py-3 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Submit Button */}
        <div className="flex justify-center pt-4 sm:pt-6">
          <button
            type="submit"
            className="bg-linear-to-r from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white font-bold text-sm sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg transition-transform duration-300 hover:scale-105"
          >
            Submit Now
          </button>
        </div>
      </form>
    </div>


        {/* fooder */}
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
    </>
  );
};

export default Enquiry;
