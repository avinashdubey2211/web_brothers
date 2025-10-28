// import React from "react";

// const newsData = [
//   {
//     img: "https://www.brothersindia.com/images/banner/resolution.jpg",
//     title: "Pharmaceutical Unit Dose Packaging Market Set for 14.8% CAGR Growth by 2033",
//     desc: "The pharmaceutical unit dose packaging market is expected to grow at a 14.8% CAGR, fuelled by rising drug safety concerns and the push for secure, traceable packaging systems.",
//     link: "#",
//   },
//   {
//     img: "https://www.brothersindia.com/images/banner/Efficiency.jpg",
//     title: "Smart Packaging: Changing the Game in Medication Safety",
//     desc: "Smart packaging uses QR codes, NFC tags, and TTIs for accurate info and safe storage. Smart caps keep patients on track with medications.",
//     link: "#",
//   },
//   {
//     img: "https://www.brothersindia.com/images/banner/Maximizing.jpg",
//     title: "Securing Medicine: Next-Level Anti-Counterfeit Packaging in 2025",
//     desc: "In 2025, blockchain secures supply chains, while holographic seals and 3D printing add unique identifiers. Tamper-evident caps ensure quick detection, protecting patient safety.",
//     link: "#",
//   },
//   {
//     img: "https://www.brothersindia.com/images/banner/labelling.jpg",
//     title: "Advancements in Temperature-Controlled Pharma Packaging",
//     desc: "Phase Change Materials maintain stable temperatures, smart sensors monitor conditions, and insulated packaging secures vaccines and critical drugs.",
//     link: "#",
//   },
// ];

// const LatestNews = () => {
//   return (
//     <section className="w-full bg-gray-50 py-14 px-4 sm:px-8 lg:px-16">
//       {/* Title */}
//       <h2 className="text-3xl sm:text-4xl font-bold text-center mb-10 text-gray-900">
//         Latest <span className="text-blue-700">News</span>
//       </h2>

//       {/* Grid Layout */}
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
//         {newsData.map((item, index) => (
//           <div
//             key={index}
//             className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
//           >
//             {/* Image */}
//             <img
//               src={item.img}
//               alt={item.title}
//               className="w-full h-56 object-cover"
//             />

//             {/* Content */}
//             <div className="p-5 space-y-3">
//               <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
//                 {item.title}
//               </h3>
//               <p className="text-gray-600 text-sm leading-relaxed">
//                 {item.desc}
//               </p>
//               <a
//                 href={item.link}
//                 className="inline-block text-blue-700 font-semibold hover:underline"
//               >
//                 Read More →
//               </a>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default LatestNews;



import React from "react";

const newsData = [
  {
    img: "https://www.brothersindia.com/images/banner/resolution.jpg",
    title:
      "Pharmaceutical Unit Dose Packaging Market Set for 14.8% CAGR Growth by 2033",
    desc: "The pharmaceutical unit dose packaging market is expected to grow at a 14.8% CAGR, fuelled by rising drug safety concerns and the push for secure, traceable packaging systems.",
    link: "#",
  },
  {
    img: "https://www.brothersindia.com/images/banner/Efficiency.jpg",
    title: "Smart Packaging: Changing the Game in Medication Safety",
    desc: "Smart packaging uses QR codes, NFC tags, and TTIs for accurate info and safe storage. Smart caps keep patients on track with medications.",
    link: "#",
  },
  {
    img: "https://www.brothersindia.com/images/banner/Maximizing.jpg",
    title: "Securing Medicine: Next-Level Anti-Counterfeit Packaging in 2025",
    desc: "In 2025, blockchain secures supply chains, while holographic seals and 3D printing add unique identifiers. Tamper-evident caps ensure quick detection, protecting patient safety.",
    link: "#",
  },
  {
    img: "https://www.brothersindia.com/images/banner/labelling.jpg",
    title: "Advancements in Temperature-Controlled Pharma Packaging",
    desc: "Phase Change Materials maintain stable temperatures, smart sensors monitor conditions, and insulated packaging secures vaccines and critical drugs.",
    link: "#",
  },
];

const LatestNews = () => {
  return (
    <section className="w-full bg-gray-50 py-14 px-4 sm:px-8 lg:px-16">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
        Latest <span className="text-blue-700">News</span>
      </h2>

      {/* Responsive Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {newsData.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col"
          >
            {/* Image with Zoom on Hover */}
            <div className="overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-56 sm:h-64 md:h-60 lg:h-64 object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Card Content */}
            <div className="p-5 flex flex-col grow justify-between space-y-4">
              <div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm sm:text-base leading-relaxed mt-2">
                  {item.desc}
                </p>
              </div>

              <div>
                <a
                  href={item.link}
                  className="text-blue-700 font-semibold hover:text-blue-800 transition-colors duration-300"
                >
                  Read More →
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LatestNews;
