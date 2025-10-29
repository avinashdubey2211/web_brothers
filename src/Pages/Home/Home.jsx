
// import React from "react";
// import { useNavigate } from "react-router-dom";

// import { FaArrowRight } from "react-icons/fa";

// const Home = () => {
//     const navigate = useNavigate();
  
//   return (
//     <div className="relative w-full h-[90vh] md:h-screen overflow-hidden">
//       {/* Background Video */}
//       <video
//         className="absolute top-0 left-0 w-full h-full object-cover"
//         src="https://www.brothersindia.com/images/latest_video.mp4"
//         autoPlay
//         loop
//         muted
//       ></video>

//       {/* Overlay for dark effect */}
//       <div className="absolute inset-0 bg-black/40"></div>

//       {/* Left Card */}
//       <div className="relative z-10 flex items-center justify-start h-full px-4 sm:px-8 md:px-12">
//         <div className="bg-white/80 backdrop-blur-sm p-5 sm:p-8 md:p-10 rounded-2xl max-w-sm sm:max-w-md md:max-w-xl shadow-lg">
//           <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
//             Brothers Pharmamach
//           </h1>

//           <p className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-6">
//             A leading manufacturer and exporter, specializing in state-of-the-art
//             machinery for automatic high-speed bottle and vial washing, liquid and
//             powder filling, capping, and labeling.
//           </p>

//           {/* Request Button */}
//           <button 
//                       onClick={() => navigate("/contact_us")}

//            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition duration-300">
//             Request a Quote <FaArrowRight className="text-white text-sm" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="relative w-full h-[90vh] md:h-screen overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        src="https://www.brothersindia.com/images/latest_video.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Left Card */}
      <div
        className="relative z-10 flex items-center justify-start h-full px-4 sm:px-8 md:px-12"
        data-aos="zoom-in"
      >
        <div
          className="bg-white/80 backdrop-blur-sm p-5 sm:p-8 md:p-10 rounded-2xl max-w-sm sm:max-w-md md:max-w-xl shadow-lg"
          data-aos="zoom-in-up"
        >
          <h1
            className="text-2xl sm:text-3xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4"
            data-aos="fade-right"
          >
            Brothers Pharmamach
          </h1>

          <p
            className="text-base sm:text-lg md:text-xl text-gray-800 leading-relaxed mb-6"
            data-aos="fade-up"
          >
            A leading manufacturer and exporter, specializing in state-of-the-art
            machinery for automatic high-speed bottle and vial washing, liquid and
            powder filling, capping, and labeling.
          </p>

          <button
            onClick={() => navigate("/contact_us")}
            className="flex items-center gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition duration-300"
            data-aos="zoom-in"
          >
            Request a Quote <FaArrowRight className="text-white text-sm" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
