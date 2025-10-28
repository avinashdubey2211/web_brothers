// import React, { useState } from "react";
// import { FaChevronDown, FaChevronUp } from "react-icons/fa";

// const WhyChooseUs = () => {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggle = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   const data = [
//     {
//       title: "Company Profile",
//       desc: "Brothers Pharmamach is a trusted name in packaging machine manufacturing, offering advanced technology and precision-engineered solutions tailored to meet diverse industry needs.",
//     },
//     {
//       title: "Products & Solutions",
//       desc: "We provide a wide range of innovative machinery — from labeling and filling systems to automated packaging solutions — ensuring reliability and excellence in every product.",
//     },
//     {
//       title: "Across The Globe",
//       desc: "With a strong global footprint, our machines operate in over 45 countries, serving industries like pharmaceuticals, food, beverages, and cosmetics with unmatched quality and support.",
//     },
//     {
//       title: "Strong Experience",
//       desc: "With over 50 years of industry experience, Brothers Pharmamach continues to lead through innovation, customer satisfaction, and a deep understanding of market needs.",
//     },
//   ];

//   return (
//     <section className="bg-white py-16 px-4 sm:px-8 lg:px-16">
//       <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-center">
//         {/* LEFT SECTION */}
//         <div className="flex-1 text-center md:text-left space-y-6">
//           <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
//             Let’s Work Together
//           </button>

//           <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
//             Why Choose Us?
//           </h2>

//           <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
//             With every new machine produced, every new solution provided, every
//             new innovation initiated, Brothers Pharmamach has been strengthening
//             its position as the pioneer in the packaging machine manufacturing
//             industry in India.
//           </p>

//           <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-900 transition">
//             Contact Us
//           </button>
//         </div>

//         {/* RIGHT SECTION */}
//         <div className="flex-1 w-full">
//           <div className="space-y-4">
//             {data.map((item, index) => (
//               <div
//                 key={index}
//                 className="border border-gray-300 rounded-2xl p-5 hover:shadow-md transition bg-white"
//               >
//                 <button
//                   onClick={() => toggle(index)}
//                   className="flex justify-between items-center w-full text-left"
//                 >
//                   <span className="font-semibold text-gray-900 text-lg">
//                     {item.title}
//                   </span>
//                   {openIndex === index ? (
//                     <FaChevronUp className="text-blue-600" />
//                   ) : (
//                     <FaChevronDown className="text-blue-600" />
//                   )}
//                 </button>

//                 {openIndex === index && (
//                   <p className="mt-3 text-gray-700 text-sm sm:text-base leading-relaxed">
//                     {item.desc}
//                   </p>
//                 )}
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;

import React, { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const WhyChooseUs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const data = [
    {
      title: "Company Profile",
      desc: "Brothers Pharmamach is a trusted name in packaging machine manufacturing, offering advanced technology and precision-engineered solutions tailored to meet diverse industry needs.",
    },
    {
      title: "Products & Solutions",
      desc: "We provide a wide range of innovative machinery — from labeling and filling systems to automated packaging solutions — ensuring reliability and excellence in every product.",
    },
    {
      title: "Across The Globe",
      desc: "With a strong global footprint, our machines operate in over 45 countries, serving industries like pharmaceuticals, food, beverages, and cosmetics with unmatched quality and support.",
    },
    {
      title: "Strong Experience",
      desc: "With over 50 years of industry experience, Brothers Pharmamach continues to lead through innovation, customer satisfaction, and a deep understanding of market needs.",
    },
  ];

  return (
    <section className="bg-white py-14 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center gap-12 lg:gap-20">
        {/* LEFT SECTION */}
        <div className="flex-1 text-center md:text-left space-y-6">
          {/* Top Button */}
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
            Let’s Work Together
          </button>

          {/* Title */}
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
            Why Choose Us?
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-base sm:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
            With every new machine produced, every new solution provided, every
            new innovation initiated, Brothers Pharmamach has been strengthening
            its position as the pioneer in the packaging machine manufacturing
            industry in India.
          </p>

          {/* Contact Button */}
          <button className="bg-black text-white px-8 py-3 rounded-full font-medium hover:bg-gray-900 transition duration-300">
            Contact Us
          </button>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex-1 w-full">
          <div className="space-y-4">
            {data.map((item, index) => (
              <div
                key={index}
                className="border border-gray-300 rounded-2xl p-5 sm:p-6 hover:shadow-lg transition bg-white"
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex justify-between items-center w-full text-left"
                >
                  <span className="font-semibold text-gray-900 text-lg sm:text-xl">
                    {item.title}
                  </span>
                  {openIndex === index ? (
                    <FaChevronUp className="text-blue-600" />
                  ) : (
                    <FaChevronDown className="text-blue-600" />
                  )}
                </button>

                {openIndex === index && (
                  <p className="mt-3 text-gray-700 text-sm sm:text-base leading-relaxed">
                    {item.desc}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
