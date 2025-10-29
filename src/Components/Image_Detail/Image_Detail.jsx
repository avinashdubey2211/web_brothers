
// import React from "react";
// import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
// import {
//   FaFacebookF,
//   FaTwitter,
//   FaLinkedinIn,
//   FaYoutube,
//   FaMapMarkerAlt,
// } from "react-icons/fa";



// const Image_Detail = () => {
//   return (
//     <>
//     <div className="w-full min-h-screen bg-white px-4 sm:px-6 lg:px-10 py-8">
//       {/* 🔹 Top Blue Header */}
//       <div className="w-full h-[30vh] sm:h-[35vh] md:h-[40vh] bg-linear-to-r from-blue-600 via-blue-500 to-blue-400 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg mb-10">
//         <h1 className="text-black text-2xl sm:text-4xl md:text-5xl font-extrabold mb-2 tracking-wide">
//           Pharmaceutical News & Insights
//         </h1>
//         <h3 className="text-blue-100 text-sm sm:text-lg md:text-xl font-semibold">
//           Home / Pharmaceutical Market Insights
//         </h3>
//       </div>

//       {/* 🔹 Main Section */}
//       <section className="flex flex-col lg:flex-row items-start justify-between gap-10 bg-[#edf7ff] p-5 sm:p-8 rounded-2xl shadow-md">
//         {/* Left Section */}
//         <div className="w-full lg:w-[70%] bg-white rounded-2xl shadow p-5 sm:p-8">
//           {/* 🔸 Image + Title in Row */}
//           <div className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6">
//             <img
//               src="https://www.brothersindia.com/images/banner/resolution.jpg"
//               alt="Pharmaceutical Packaging"
//               className="rounded-2xl w-full md:w-[45%] lg:w-[40%] object-cover"
//             />
//             <div className="w-full md:w-[55%] lg:w-[60%]">
//               <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 leading-snug">
//                 Pharmaceutical Unit Dose Packaging Market Set for 14.8% CAGR Growth by 2033
//               </h2>
//               <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
//                 The pharmaceutical unit dose packaging market is poised for remarkable
//                 expansion, projected to grow at a robust CAGR of 14.8% through 2033. This
//                 surge is driven by the increasing emphasis on patient safety, dosage accuracy,
//                 and reduced medication errors across healthcare systems worldwide.
//               </p>
//             </div>
//           </div>

//           {/* 🔸 Rest of the Text */}
//           <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
//             Unit dose packaging, which involves individually packaged doses, is gaining rapid
//             traction for its ability to streamline medication administration in hospitals,
//             clinics, and long-term care facilities. One of the standout features of this
//             packaging format is its unmatched precision in drug delivery.
//           </p>

//           <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
//             It ensures that each patient receives the correct dosage at the right time,
//             significantly minimizing the risk of over- or under-dosing. This accuracy plays a
//             crucial role in patient compliance and therapeutic outcomes, especially in
//             high-risk or polypharmacy scenarios.
//           </p>

//           <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
//             Beyond safety, unit dose packaging enhances operational efficiency. It reduces the
//             burden on medical staff by simplifying dispensing processes and enabling better
//             inventory management. Additionally, it supports traceability and real-time supply
//             chain monitoring.
//           </p>

//           <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
//             As pharmaceutical companies continue to innovate with smart packaging technologies,
//             including RFID tagging and QR-coded packs, the market is set to witness further
//             transformation, reinforcing both product integrity and end-user convenience.
//           </p>
//         </div>

//         {/* Right Section */}
//         <div className="w-full lg:w-[30%] flex flex-col space-y-8">
//           {/* Related News */}
//           <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-md">
//             <h3 className="text-xl font-bold text-blue-700 mb-4 text-center lg:text-left">
//               Related News
//             </h3>
//             <ul className="space-y-3 text-gray-700 text-base">
//               <li className="hover:text-blue-600 cursor-pointer transition">
//                 Pharmaceutical Unit Dose Packaging Market Set for 14.8% CAGR Growth by 2033
//               </li>
//               <li className="hover:text-blue-600 cursor-pointer transition">
//                 Smart Packaging: Changing the Game in Medication Safety
//               </li>
//               <li className="hover:text-blue-600 cursor-pointer transition">
//                 Securing Medicine: Next-Level Anti-Counterfeit Packaging in 2025
//               </li>
//               <li className="hover:text-blue-600 cursor-pointer transition">
//                 Advancements in Temperature-Controlled Pharma Packaging
//               </li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div className="bg-white p-5 sm:p-6 rounded-2xl shadow-md space-y-4">
//             <h3 className="text-xl font-bold text-blue-700 mb-4 text-center lg:text-left">
//               Contact Us
//             </h3>
//             <div className="flex items-center gap-3">
//               <FaPhoneAlt className="text-blue-600 text-lg" />
//               <p className="text-gray-800 text-base">+91 9825037971</p>
//             </div>
//             <div className="flex items-center gap-3">
//               <FaEnvelope className="text-blue-600 text-lg" />
//               <p className="text-gray-800 text-base">info@brothersindia.com</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//     {/* fooder */}
//     <footer className="bg-white text-gray-800 font-sans">
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

// export default Image_Detail;



import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Image_Detail = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true });
  }, []);

  return (
    <>
      <div className="w-full min-h-screen bg-white px-4 sm:px-6 lg:px-10 py-8">
        {/* 🔹 Top Blue Header */}
        <div
          className="w-full h-[30vh] sm:h-[35vh] md:h-[40vh] bg-linear-to-r from-blue-600 via-blue-500 to-blue-400 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg mb-10"
          data-aos="fade-down"
        >
          <h1 className="text-black text-2xl sm:text-4xl md:text-5xl font-extrabold mb-2 tracking-wide">
            Pharmaceutical News & Insights
          </h1>
          <h3 className="text-blue-100 text-sm sm:text-lg md:text-xl font-semibold">
            Home / Pharmaceutical Market Insights
          </h3>
        </div>

        {/* 🔹 Main Section */}
        <section
          className="flex flex-col lg:flex-row items-start justify-between gap-10 bg-[#edf7ff] p-5 sm:p-8 rounded-2xl shadow-md"
          data-aos="zoom-in-up"
        >
          {/* Left Section */}
          <div
            className="w-full lg:w-[70%] bg-white rounded-2xl shadow p-5 sm:p-8"
            data-aos="fade-right"
          >
            {/* 🔸 Image + Title in Row */}
            <div
              className="flex flex-col md:flex-row items-center md:items-start gap-6 mb-6"
              data-aos="flip-left"
            >
              <img
                src="https://www.brothersindia.com/images/banner/resolution.jpg"
                alt="Pharmaceutical Packaging"
                className="rounded-2xl w-full md:w-[45%] lg:w-[40%] object-cover"
              />
              <div className="w-full md:w-[55%] lg:w-[60%]">
                <h2 className="text-2xl sm:text-3xl font-bold text-blue-700 mb-3 leading-snug">
                  Pharmaceutical Unit Dose Packaging Market Set for 14.8% CAGR
                  Growth by 2033
                </h2>
                <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                  The pharmaceutical unit dose packaging market is poised for
                  remarkable expansion, projected to grow at a robust CAGR of
                  14.8% through 2033. This surge is driven by the increasing
                  emphasis on patient safety, dosage accuracy, and reduced
                  medication errors across healthcare systems worldwide.
                </p>
              </div>
            </div>

            {/* 🔸 Rest of the Text */}
            <div data-aos="fade-up">
              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                Unit dose packaging, which involves individually packaged doses,
                is gaining rapid traction for its ability to streamline
                medication administration in hospitals, clinics, and long-term
                care facilities.
              </p>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                It ensures that each patient receives the correct dosage at the
                right time, significantly minimizing the risk of over- or
                under-dosing. This accuracy plays a crucial role in patient
                compliance and therapeutic outcomes, especially in high-risk or
                polypharmacy scenarios.
              </p>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed mb-4">
                Beyond safety, unit dose packaging enhances operational
                efficiency. It reduces the burden on medical staff by
                simplifying dispensing processes and enabling better inventory
                management. Additionally, it supports traceability and real-time
                supply chain monitoring.
              </p>

              <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
                As pharmaceutical companies continue to innovate with smart
                packaging technologies, including RFID tagging and QR-coded
                packs, the market is set to witness further transformation,
                reinforcing both product integrity and end-user convenience.
              </p>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-[30%] flex flex-col space-y-8">
            {/* Related News */}
            <div
              className="bg-white p-5 sm:p-6 rounded-2xl shadow-md"
              data-aos="fade-left"
            >
              <h3 className="text-xl font-bold text-blue-700 mb-4 text-center lg:text-left">
                Related News
              </h3>
              <ul className="space-y-3 text-gray-700 text-base">
                <li className="hover:text-blue-600 cursor-pointer transition">
                  Pharmaceutical Unit Dose Packaging Market Set for 14.8% CAGR
                  Growth by 2033
                </li>
                <li className="hover:text-blue-600 cursor-pointer transition">
                  Smart Packaging: Changing the Game in Medication Safety
                </li>
                <li className="hover:text-blue-600 cursor-pointer transition">
                  Securing Medicine: Next-Level Anti-Counterfeit Packaging in
                  2025
                </li>
                <li className="hover:text-blue-600 cursor-pointer transition">
                  Advancements in Temperature-Controlled Pharma Packaging
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div
              className="bg-white p-5 sm:p-6 rounded-2xl shadow-md space-y-4"
              data-aos="fade-up"
            >
              <h3 className="text-xl font-bold text-blue-700 mb-4 text-center lg:text-left">
                Contact Us
              </h3>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-blue-600 text-lg" />
                <p className="text-gray-800 text-base">+91 9825037971</p>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-blue-600 text-lg" />
                <p className="text-gray-800 text-base">info@brothersindia.com</p>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* 🔹 Footer Section */}
     
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

export default Image_Detail;
