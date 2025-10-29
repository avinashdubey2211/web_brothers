
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


// const Sitemap = () => {
//   const data = [
//     {
//       title: "Washing & AirJet Cleaning Machines",
//       items: [
//         "AIRWASH - 240-INV",
//         "AIRWASH - 300.UN",
//         "AIRWASH - 100",
//         "BOTTLEWASH - 90",
//         "BOTTLEWASH - 120",
//         "VIALWASH - 120R",
//       ],
//     },
//     {
//       title: "Dry Syrup Powder Filling Machine",
//       items: [
//         "DRYFILL - 20",
//         "DRYFILL - 60.TWIN",
//         "DRYFILL - 120RC/80RC",
//         "DRYFILL - 120i",
//         "DRYFILL - 250i.TWIN",
//       ],
//     },
//     {
//       title: "Liquid Filling Machine",
//       items: [
//         "LIQFILL - 150FM",
//         "LIQFILL - 100IR",
//         "LIQFILL - 120MB",
//         "LIQFILL - 250.MOTION",
//         "LIQFILL - 240FM",
//         "LIQFILL - 60E/120E",
//         "LIQFILL - 150MBS",
//         "LIQFILL - 80FM",
//         "LIQFILL - 160/160.MOTION",
//         "VACFILL - 250.MBL",
//         "LIQFILL- 80",
//         "VISCOFILL - 300",
//         "VISCOFILL - 20.HOT FILL",
//         "LIQFILL - 160",
//         "LIQFILL - 120",
//         "VISCOFILL - 120",
//         "LIQFILL - 120 MOTION",
//         "LIQFLL - 20",
//       ],
//     },
//     {
//       title: "Bottle Capping Machine",
//       items: [
//         "CAPSEAL - 80L",
//         "CAPSEAL - 160R",
//         "CAPSEAL - 20",
//         "CAPSEAL - 120SR.PNP",
//         "CAPSEAL - 40R",
//         "CAPPRESS- 150",
//         "CAPSEAL - 240SR.PNP",
//         "CAPSEAL - 300SR.PNP",
//         "CAPSEAL - 120SR",
//         "CAPSEAL - 120R",
//         "CAPSEAL - 400",
//       ],
//     },
//     {
//       title: "Leaflet Outserter Posting Machine",
//       items: ["AHLI - 150", "Octopus - 300"],
//     },
//     {
//       title: "Automatic Shrink Sleeve Machine",
//       items: ["SLEEVPACK - 300", "SLEEVPACK - 150"],
//     },
//     {
//       title: "Rotary Labelling Machine",
//       items: ["LABELSTIK - 600", "LABELSTIK - 800", "LABELSTIK - 120.R", "LABELSTIK - 600R"],
//     },
//     {
//       title: "Stiker Labelling Machine",
//       items: [
//         "LABELSTIK - 150",
//         "LABELSTIK - 150B",
//         "LABELSTIK - 20/40",
//         "LABELSTIK - 120/250C.TWIN",
//         "LABELSTIK - 120H",
//         "LABELSTIK - 300",
//         "LABELSTIK - 300LR",
//         "LABELSTIK - 100F.TWIN",
//         "LABELSTIK - 250F.TWIN",
//         "LABELSTIK-EXCEL",
//         "LABELSTIK - 400R",
//         "LABELSTIK - 120R.TWIN",
//         "LABELSTUBE - 60",
//         "LABELSTIK - 150B.TWIN",
//         "LABELSTIK - 400.C",
//       ],
//     },
//     {
//       title: "Wet Glue Labelling Machine",
//       items: ["BS - 40", "LABELWET - 300"],
//     },
//     {
//       title: "Capsule Filling Machine",
//       items: [
//         "AUTOMATIC CAPSULE FILLING MACHINE",
//         "AUTOMATIC TABLE TOP CAPSULE FILLING MACHINE",
//       ],
//     },
//     {
//       title: "Check Weigher",
//       items: ["CHECK WEIGHER - 120"],
//     },
//     {
//       title: "Bottle Feeder",
//       items: ["Bottle Feeder", "Vial/Bottle Belt Feeder"],
//     },
//     {
//       title: "Cap Elevator",
//       items: ["CAP ELEVATOR SYSTEM"],
//     },
//     {
//       title: "Turn Table",
//       items: ["TURN TABLE"],
//     },
//     {
//       title: "Conveyors",
//       items: ["INSPECTION CONVEYORS BELT SYSTEM", "SWING/TRANSFER CONVEYORS"],
//     },
//   ];

//   return (
//     <>
//     <div className="w-full min-h-screen bg-linear-to-b from-white via-blue-50 to-white px-4 sm:px-6 md:px-10 py-10">
//       {/* Top Section */}
//       <div className="w-full bg-blue-600 rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center text-center py-10 shadow-md">
//         <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 tracking-wide">
//           Sitemap
//         </h1>
//         <h3 className="text-gray-200 text-sm sm:text-base md:text-lg font-medium">
//           Home / Sitemap
//         </h3>
//       </div>

//       {/* Card Grid */}
//       <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
//         {data.map((section, idx) => (
//           <div
//             key={idx}
//             className="bg-white border border-blue-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col hover:-translate-y-1"
//           >
//             <h2 className="text-lg sm:text-xl font-bold text-blue-700 mb-4 text-center uppercase tracking-wide">
//               {section.title}
//             </h2>
//             <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
//               {section.items.map((item, i) => (
//                 <li key={i} className="hover:text-blue-600 transition-colors duration-200">
//                   {item}
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>

//     {/* fooder */}


//        <footer className="bg-white text-gray-800 font-sans">
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

// export default Sitemap;


import React, { useEffect } from "react";
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

const Sitemap = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  const data = [
    {
      title: "Washing & AirJet Cleaning Machines",
      items: [
        "AIRWASH - 240-INV",
        "AIRWASH - 300.UN",
        "AIRWASH - 100",
        "BOTTLEWASH - 90",
        "BOTTLEWASH - 120",
        "VIALWASH - 120R",
      ],
    },
    {
      title: "Dry Syrup Powder Filling Machine",
      items: [
        "DRYFILL - 20",
        "DRYFILL - 60.TWIN",
        "DRYFILL - 120RC/80RC",
        "DRYFILL - 120i",
        "DRYFILL - 250i.TWIN",
      ],
    },
    {
      title: "Liquid Filling Machine",
      items: [
        "LIQFILL - 150FM",
        "LIQFILL - 100IR",
        "LIQFILL - 120MB",
        "LIQFILL - 250.MOTION",
        "LIQFILL - 240FM",
        "LIQFILL - 60E/120E",
        "LIQFILL - 150MBS",
        "LIQFILL - 80FM",
        "LIQFILL - 160/160.MOTION",
        "VACFILL - 250.MBL",
        "LIQFILL- 80",
        "VISCOFILL - 300",
        "VISCOFILL - 20.HOT FILL",
        "LIQFILL - 160",
        "LIQFILL - 120",
        "VISCOFILL - 120",
        "LIQFILL - 120 MOTION",
        "LIQFLL - 20",
      ],
    },
    {
      title: "Bottle Capping Machine",
      items: [
        "CAPSEAL - 80L",
        "CAPSEAL - 160R",
        "CAPSEAL - 20",
        "CAPSEAL - 120SR.PNP",
        "CAPSEAL - 40R",
        "CAPPRESS- 150",
        "CAPSEAL - 240SR.PNP",
        "CAPSEAL - 300SR.PNP",
        "CAPSEAL - 120SR",
        "CAPSEAL - 120R",
        "CAPSEAL - 400",
      ],
    },
    {
      title: "Leaflet Outserter Posting Machine",
      items: ["AHLI - 150", "Octopus - 300"],
    },
    {
      title: "Automatic Shrink Sleeve Machine",
      items: ["SLEEVPACK - 300", "SLEEVPACK - 150"],
    },
    {
      title: "Rotary Labelling Machine",
      items: ["LABELSTIK - 600", "LABELSTIK - 800", "LABELSTIK - 120.R", "LABELSTIK - 600R"],
    },
    {
      title: "Stiker Labelling Machine",
      items: [
        "LABELSTIK - 150",
        "LABELSTIK - 150B",
        "LABELSTIK - 20/40",
        "LABELSTIK - 120/250C.TWIN",
        "LABELSTIK - 120H",
        "LABELSTIK - 300",
        "LABELSTIK - 300LR",
        "LABELSTIK - 100F.TWIN",
        "LABELSTIK - 250F.TWIN",
        "LABELSTIK-EXCEL",
        "LABELSTIK - 400R",
        "LABELSTIK - 120R.TWIN",
        "LABELSTUBE - 60",
        "LABELSTIK - 150B.TWIN",
        "LABELSTIK - 400.C",
      ],
    },
    {
      title: "Wet Glue Labelling Machine",
      items: ["BS - 40", "LABELWET - 300"],
    },
    {
      title: "Capsule Filling Machine",
      items: [
        "AUTOMATIC CAPSULE FILLING MACHINE",
        "AUTOMATIC TABLE TOP CAPSULE FILLING MACHINE",
      ],
    },
    {
      title: "Check Weigher",
      items: ["CHECK WEIGHER - 120"],
    },
    {
      title: "Bottle Feeder",
      items: ["Bottle Feeder", "Vial/Bottle Belt Feeder"],
    },
    {
      title: "Cap Elevator",
      items: ["CAP ELEVATOR SYSTEM"],
    },
    {
      title: "Turn Table",
      items: ["TURN TABLE"],
    },
    {
      title: "Conveyors",
      items: ["INSPECTION CONVEYORS BELT SYSTEM", "SWING/TRANSFER CONVEYORS"],
    },
  ];

  return (
    <>
      {/* 🔹 Top Section */}
      <div
        className="w-full min-h-[40vh] bg-blue-600 rounded-2xl sm:rounded-3xl flex flex-col items-center justify-center text-center py-10 shadow-md"
        data-aos="fade-down"
      >
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 tracking-wide">
          Sitemap
        </h1>
        <h3 className="text-gray-200 text-sm sm:text-base md:text-lg font-medium">
          Home / Sitemap
        </h3>
      </div>

      {/* 🔹 Card Grid */}
      <div
        className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 px-4 sm:px-6 md:px-10"
        data-aos="fade-up"
      >
        {data.map((section, idx) => (
          <div
            key={idx}
            className="bg-white border border-blue-200 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 p-6 flex flex-col hover:-translate-y-1"
            data-aos="flip-up"
          >
            <h2 className="text-lg sm:text-xl font-bold text-blue-700 mb-4 text-center uppercase tracking-wide">
              {section.title}
            </h2>
            <ul className="list-disc list-inside text-gray-700 text-sm sm:text-base leading-relaxed space-y-2">
              {section.items.map((item, i) => (
                <li
                  key={i}
                  className="hover:text-blue-600 transition-colors duration-200"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* 🔹 Footer */}
      <footer className="bg-white text-gray-800 font-sans mt-16">
        {/* Top Contact Section */}
        <div
          className="w-full flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-200 px-6 sm:px-10 py-8 max-w-7xl mx-auto text-center md:text-left"
          data-aos="fade-right"
        >
          <div className="flex flex-col items-center md:items-start">
            <img
              src="https://www.brothersindia.com/images/logo/logo.png"
              alt="Brothers Logo"
              className="w-[180px] sm:w-[200px] object-contain mb-2"
            />
          </div>

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

        {/* Middle Footer Grid */}
        <div
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 px-6 sm:px-10 py-10"
          data-aos="zoom-in"
        >
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
              <span className="text-black font-bold">50+</span>{" "}
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
                Plot No.2, Phase II, GIDC Vatva, Ahmedabad 382 445 Gujarat,
                INDIA.
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

        {/* Bottom Section */}
        <div
          className="border-t border-gray-200 py-4 text-center text-gray-600 text-sm px-4"
          data-aos="fade-left"
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

export default Sitemap;
