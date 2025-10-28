// import React from "react";

// const ImageSection = () => {
//   return (
//     <section className="w-full bg-white py-6 sm:py-10 lg:py-10 px-4 sm:px-8 lg:px-10">
//       <div className="max-w-7xl mx-auto">
//         {/* Responsive Image Container */}
//         <div className="w-full overflow-hidden rounded-2xl shadow-lg">
//           <img
//             src="https://www.brothersindia.com/images/home.jpg"
//             alt="Brothers India Home"
//             className="w-full h-auto object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ImageSection;


import React from "react";

const ImageSection = () => {
  return (
    <section className="w-full bg-white py-6 sm:py-10 lg:py-12 px-3 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Responsive Image Container */}
        <div className="w-full overflow-hidden rounded-2xl shadow-lg">
          <img
            src="https://www.brothersindia.com/images/home.jpg"
            alt="Brothers India Home"
            className="w-full h-[220px] sm:h-[300px] md:h-[300px] lg:h-[400px] object-cover object-center transition-transform duration-700 hover:scale-105"
          />
        </div>
      </div>
    </section>
  );
};

export default ImageSection;
