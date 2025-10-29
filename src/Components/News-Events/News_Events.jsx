
// import React, { useState } from "react";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaYoutube,
//   FaEnvelope,
//   FaPhoneAlt,
//   FaMapMarkerAlt,
// } from "react-icons/fa";


// const News_Events = () => {
//   const [selectedYear, setSelectedYear] = useState("All");

//   const events = {
//     All: [
//       { title: "Exhibition - 1", images: [
//         "https://www.brothersindia.com/images/news-events/1.jpg",
//         "https://www.brothersindia.com/images/news-events/2.jpg",
//         "https://www.brothersindia.com/images/news-events/3.jpg",
//         "https://www.brothersindia.com/images/news-events/4.jpg",
//       ]},
//       { title: "Event - 2", images: [
//         "https://www.brothersindia.com/images/news-events/2.jpg",
//         "https://www.brothersindia.com/images/news-events/4.jpg",
//       ]},
//       { title: "Exhibition - 2", images: [
//         "https://www.brothersindia.com/images/news-events/5.jpg",
//         "https://www.brothersindia.com/images/news-events/6.jpg",
//       ]},
//       { title: "Exhibition - 3", images: [
//         "https://www.brothersindia.com/images/news-events/7.jpg",
//         "https://www.brothersindia.com/images/news-events/8.jpg",
//         "https://www.brothersindia.com/images/news-events/9.jpg",
//       ]},
//       { title: "Exhibition - 4", images: [
//         "https://www.brothersindia.com/images/news-events/10.jpg",
//         "https://www.brothersindia.com/images/news-events/11.jpg",
//         "https://www.brothersindia.com/images/news-events/12.jpg",
//       ]},
//       { title: "Exhibition - 5", images: [
//         "https://www.brothersindia.com/images/news-events/13.jpg",
//         "https://www.brothersindia.com/images/news-events/14.jpg",
//       ]},
//       { title: "Exhibition - 6", images: [
//         "https://www.brothersindia.com/images/news-events/15.jpg",
//         "https://www.brothersindia.com/images/news-events/16.jpg",
//       ]},
//     ],
//     2019: [
//       { title: "Exhibition - 1", images: [
//         "https://www.brothersindia.com/images/news-events/1.jpg",
//         "https://www.brothersindia.com/images/news-events/2.jpg",
//         "https://www.brothersindia.com/images/news-events/3.jpg",
//         "https://www.brothersindia.com/images/news-events/4.jpg",
//       ]},
//       { title: "Event - 2", images: [
//         "https://www.brothersindia.com/images/news-events/2.jpg",
//         "https://www.brothersindia.com/images/news-events/4.jpg",
//       ]},
//     ],
//     2020: [
//       { title: "Exhibition - 2", images: [
//         "https://www.brothersindia.com/images/news-events/5.jpg",
//         "https://www.brothersindia.com/images/news-events/6.jpg",
//       ]},
//     ],
//     2021: [
//       { title: "Exhibition - 3", images: [
//         "https://www.brothersindia.com/images/news-events/7.jpg",
//         "https://www.brothersindia.com/images/news-events/8.jpg",
//         "https://www.brothersindia.com/images/news-events/9.jpg",
//       ]},
//     ],
//     2022: [
//       { title: "Exhibition - 4", images: [
//         "https://www.brothersindia.com/images/news-events/10.jpg",
//         "https://www.brothersindia.com/images/news-events/11.jpg",
//         "https://www.brothersindia.com/images/news-events/12.jpg",
//       ]},
//     ],
//     2023: [
//       { title: "Exhibition - 5", images: [
//         "https://www.brothersindia.com/images/news-events/13.jpg",
//         "https://www.brothersindia.com/images/news-events/14.jpg",
//       ]},
//     ],
//     2024: [
//       { title: "Exhibition - 6", images: [
//         "https://www.brothersindia.com/images/news-events/15.jpg",
//         "https://www.brothersindia.com/images/news-events/16.jpg",
//       ]},
//     ],
//   };

//   const years = ["All", "2019", "2020", "2021", "2022", "2023", "2024"];

//   return (
//     <>
//     <div className="w-full min-h-screen bg-white px-4 sm:px-6 lg:px-10 py-8">
//       {/* 🔹 Top Section */}
//       <div className="w-full h-[30vh] sm:h-[35vh] md:h-[40vh] bg-linear-to-r from-blue-600 via-blue-500 to-blue-400 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg">
//         <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold mb-2 tracking-wide">
//           News & Events
//         </h1>
//         <h3 className="text-blue-100 text-sm sm:text-lg md:text-xl font-semibold">
//           Home / News & Events
//         </h3>
//       </div>

//       {/* 🔹 Full-Screen Section for Tagline */}
//       <div className="w-full flex items-center justify-center bg-linear-to-b from-blue-100 via-white to-blue-50 text-center px-6 py-10">
//         <h1 className="text-xl sm:text-lg md:text-lg font-bold text-black max-w-5xl leading-snug">
//           Brothers Pharmamach, the largest Manufacturer & Supplier of
//           Pharmaceutical and Packaging Machinery in India.
//         </h1>
//       </div>

//       {/* 🔹 Year Filter Buttons */}
//       <div className="w-full flex flex-wrap items-center justify-center gap-4 py-8 bg-linear-to-r from-blue-50 via-white to-blue-50">
//         {years.map((year) => (
//           <button
//             key={year}
//             onClick={() => setSelectedYear(year)}
//             className={`px-6 py-2 rounded-full border font-semibold transition duration-300 ${
//               selectedYear === year
//                 ? "bg-blue-600 text-white border-blue-600"
//                 : "text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
//             }`}
//           >
//             {year}
//           </button>
//         ))}
//       </div>

//       {/* 🔹 Events Section */}
//       <div className="w-full mt-10 space-y-10">
//         {events[selectedYear].map((event, index) => (
//           <div key={index}>
//             <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700 mb-6 text-center">
//               {event.title}
//             </h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2 sm:px-10">
//               {event.images.map((img, i) => (
//                 <img
//                   key={i}
//                   src={img}
//                   alt={`${event.title}-${i}`}
//                   className="rounded-2xl shadow-md hover:scale-105 transition duration-300 object-cover w-full h-60"
//                 />
//               ))}
//             </div>
//           </div>
//         ))}
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

// export default News_Events;


import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const News_Events = () => {
  const [selectedYear, setSelectedYear] = useState("All");

  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const events = {
    All: [
      {
        title: "Exhibition - 1",
        images: [
          "https://www.brothersindia.com/images/news-events/1.jpg",
          "https://www.brothersindia.com/images/news-events/2.jpg",
          "https://www.brothersindia.com/images/news-events/3.jpg",
          "https://www.brothersindia.com/images/news-events/4.jpg",
        ],
      },
      {
        title: "Event - 2",
        images: [
          "https://www.brothersindia.com/images/news-events/2.jpg",
          "https://www.brothersindia.com/images/news-events/4.jpg",
        ],
      },
      {
        title: "Exhibition - 2",
        images: [
          "https://www.brothersindia.com/images/news-events/5.jpg",
          "https://www.brothersindia.com/images/news-events/6.jpg",
        ],
      },
      {
        title: "Exhibition - 3",
        images: [
          "https://www.brothersindia.com/images/news-events/7.jpg",
          "https://www.brothersindia.com/images/news-events/8.jpg",
          "https://www.brothersindia.com/images/news-events/9.jpg",
        ],
      },
      {
        title: "Exhibition - 4",
        images: [
          "https://www.brothersindia.com/images/news-events/10.jpg",
          "https://www.brothersindia.com/images/news-events/11.jpg",
          "https://www.brothersindia.com/images/news-events/12.jpg",
        ],
      },
      {
        title: "Exhibition - 5",
        images: [
          "https://www.brothersindia.com/images/news-events/13.jpg",
          "https://www.brothersindia.com/images/news-events/14.jpg",
        ],
      },
      {
        title: "Exhibition - 6",
        images: [
          "https://www.brothersindia.com/images/news-events/15.jpg",
          "https://www.brothersindia.com/images/news-events/16.jpg",
        ],
      },
    ],
    2019: [
      {
        title: "Exhibition - 1",
        images: [
          "https://www.brothersindia.com/images/news-events/1.jpg",
          "https://www.brothersindia.com/images/news-events/2.jpg",
          "https://www.brothersindia.com/images/news-events/3.jpg",
          "https://www.brothersindia.com/images/news-events/4.jpg",
        ],
      },
      {
        title: "Event - 2",
        images: [
          "https://www.brothersindia.com/images/news-events/2.jpg",
          "https://www.brothersindia.com/images/news-events/4.jpg",
        ],
      },
    ],
    2020: [
      {
        title: "Exhibition - 2",
        images: [
          "https://www.brothersindia.com/images/news-events/5.jpg",
          "https://www.brothersindia.com/images/news-events/6.jpg",
        ],
      },
    ],
    2021: [
      {
        title: "Exhibition - 3",
        images: [
          "https://www.brothersindia.com/images/news-events/7.jpg",
          "https://www.brothersindia.com/images/news-events/8.jpg",
          "https://www.brothersindia.com/images/news-events/9.jpg",
        ],
      },
    ],
    2022: [
      {
        title: "Exhibition - 4",
        images: [
          "https://www.brothersindia.com/images/news-events/10.jpg",
          "https://www.brothersindia.com/images/news-events/11.jpg",
          "https://www.brothersindia.com/images/news-events/12.jpg",
        ],
      },
    ],
    2023: [
      {
        title: "Exhibition - 5",
        images: [
          "https://www.brothersindia.com/images/news-events/13.jpg",
          "https://www.brothersindia.com/images/news-events/14.jpg",
        ],
      },
    ],
    2024: [
      {
        title: "Exhibition - 6",
        images: [
          "https://www.brothersindia.com/images/news-events/15.jpg",
          "https://www.brothersindia.com/images/news-events/16.jpg",
        ],
      },
    ],
  };

  const years = ["All", "2019", "2020", "2021", "2022", "2023", "2024"];

  return (
    <>
      <div className="w-full min-h-screen bg-white px-4 sm:px-6 lg:px-10 py-8">
        {/* 🔹 Top Section */}
        <div
          className="w-full h-[30vh] sm:h-[35vh] md:h-[40vh] bg-linear-to-r from-blue-600 via-blue-500 to-blue-400 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg"
          data-aos="fade-down"
        >
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold mb-2 tracking-wide">
            News & Events
          </h1>
          <h3 className="text-blue-100 text-sm sm:text-lg md:text-xl font-semibold">
            Home / News & Events
          </h3>
        </div>

        {/* 🔹 Tagline */}
        <div
          className="w-full flex items-center justify-center bg-linear-to-b from-blue-100 via-white to-blue-50 text-center px-6 py-10"
          data-aos="zoom-in"
        >
          <h1 className="text-xl sm:text-lg md:text-lg font-bold text-black max-w-5xl leading-snug">
            Brothers Pharmamach, the largest Manufacturer & Supplier of
            Pharmaceutical and Packaging Machinery in India.
          </h1>
        </div>

        {/* 🔹 Year Buttons */}
        <div
          className="w-full flex flex-wrap items-center justify-center gap-4 py-8 bg-linear-to-r from-blue-50 via-white to-blue-50"
          data-aos="fade-up"
        >
          {years.map((year) => (
            <button
              key={year}
              onClick={() => setSelectedYear(year)}
              className={`px-6 py-2 rounded-full border font-semibold transition duration-300 ${
                selectedYear === year
                  ? "bg-blue-600 text-white border-blue-600"
                  : "text-blue-600 border-blue-600 hover:bg-blue-600 hover:text-white"
              }`}
            >
              {year}
            </button>
          ))}
        </div>

        {/* 🔹 Events Section */}
        <div className="w-full mt-10 space-y-10">
          {events[selectedYear].map((event, index) => (
            <div key={index} data-aos="flip-up">
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-blue-700 mb-6 text-center">
                {event.title}
              </h2>

              <div
                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2 sm:px-10"
                data-aos="zoom-in-up"
              >
                {event.images.map((img, i) => (
                  <img
                    key={i}
                    src={img}
                    alt={`${event.title}-${i}`}
                    className="rounded-2xl shadow-md hover:scale-105 transition duration-300 object-cover w-full h-60"
                  />
                ))}
              </div>
            </div>
          ))}
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

export default News_Events;
