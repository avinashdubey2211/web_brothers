// import React from "react";
// import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

// const EnquirySection = () => {
//   return (
//     <section className="w-full bg-gray-50 py-14 px-4 sm:px-8 lg:px-16">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
//         {/* LEFT SECTION */}
//         <div className="space-y-6 text-center md:text-left">
//           <h3 className="text-2xl sm:text-3xl font-bold text-blue-700">
//             Enquiry Form
//           </h3>
//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
//             Get In Touch
//           </h2>

//           <p className="text-gray-700 text-base sm:text-lg leading-relaxed">
//             Brothers Pharmamach, the largest Manufacturer & Supplier of
//             Pharmaceutical and Packaging Machinery in India.
//           </p>

//           <div className="pt-2 space-y-5">
//             <div>
//               <h4 className="text-xl font-semibold text-gray-800">
//                 Quick Reply
//               </h4>
//               <p className="text-gray-600">
//                 Usually in 24 hours in working days.
//               </p>
//             </div>

//             {/* CALL SECTION */}
//            <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-8">
      
//       {/* CALL SECTION */}
//       <div className="flex items-center gap-4">
//         <div className="bg-blue-600 p-4 rounded-full text-white text-2xl">
//           <FaPhoneAlt />
//         </div>
//         <div>
//           <h5 className="font-semibold text-gray-900">Call Us</h5>
//           <p className="text-gray-700 font-medium">+91 9825037971</p>
//           <p className="text-gray-600">
//             Brothers Pharmamach (India) Pvt. Ltd.
//           </p>
//         </div>
//       </div>

//       {/* EMAIL SECTION */}
//       <div className="flex items-center gap-4">
//         <div className="bg-blue-600 p-4 rounded-full text-white text-2xl">
//           <FaEnvelope />
//         </div>
//         <div>
//           <h5 className="font-semibold text-gray-900">Send E-mail</h5>
//           <p className="text-gray-700 font-medium">info@brothersindia.com</p>
//         </div>
//       </div>

//     </div>
//           </div>
//         </div>

//         {/* RIGHT SECTION — MAP */}
//         <div className="w-full h-[300px] sm:h-[350px] md:h-[400px] rounded-2xl overflow-hidden shadow-md">
//           <iframe
//             title="Brothers Pharmamach Location"
//             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.802010573936!2d72.50230217493882!3d22.96034877922421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b8fcbff4e13%3A0x33f04b3eb63d13d1!2sBrothers%20Pharmamach%20(India)%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1697970169239!5m2!1sen!2sin"
//             className="w-full h-full border-0"
//             allowFullScreen=""
//             loading="lazy"
//           ></iframe>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EnquirySection;
import React from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const EnquirySection = () => {
  return (
    <section className="w-full bg-gray-50 py-14 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SECTION */}
        <div className="space-y-6 text-center md:text-left">
          {/* Heading */}
          <h3 className="text-2xl sm:text-3xl font-bold text-blue-700">
            Enquiry Form
          </h3>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Get In Touch
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            Brothers Pharmamach, the largest Manufacturer & Supplier of
            Pharmaceutical and Packaging Machinery in India.
          </p>

          {/* Quick Reply */}
          <div className="pt-2 space-y-5">
            <div>
              <h4 className="text-xl font-semibold text-gray-800">
                Quick Reply
              </h4>
              <p className="text-gray-600">
                Usually in 24 hours in working days.
              </p>
            </div>

            {/* CONTACT ROW */}
            <div className="flex flex-col sm:flex-row sm:justify-center lg:justify-start items-center gap-10 flex-wrap">
              {/* CALL SECTION */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 p-4 md:p-5 rounded-full text-white text-2xl md:text-3xl flex items-center justify-center">
                  <FaPhoneAlt />
                </div>
                <div className="text-center sm:text-left">
                  <h5 className="font-semibold text-gray-900">Call Us</h5>
                  <p className="text-gray-700 font-medium">+91 9825037971</p>
                  <p className="text-gray-600 text-sm sm:text-base">
                    Brothers Pharmamach (India) Pvt. Ltd.
                  </p>
                </div>
              </div>

              {/* EMAIL SECTION */}
              <div className="flex items-center gap-4">
                <div className="bg-blue-600 p-4 md:p-5 rounded-full text-white text-2xl md:text-3xl flex items-center justify-center">
                  <FaEnvelope />
                </div>
                <div className="text-center sm:text-left">
                  <h5 className="font-semibold text-gray-900">Send E-mail</h5>
                  <p className="text-gray-700 font-medium">
                    info@brothersindia.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION — MAP */}
        <div className="w-full h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px] rounded-2xl overflow-hidden shadow-md">
          <iframe
            title="Brothers Pharmamach Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3673.802010573936!2d72.50230217493882!3d22.96034877922421!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b8fcbff4e13%3A0x33f04b3eb63d13d1!2sBrothers%20Pharmamach%20(India)%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1697970169239!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default EnquirySection;
