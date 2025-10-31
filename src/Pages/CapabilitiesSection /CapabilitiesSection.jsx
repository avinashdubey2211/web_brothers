
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const CapabilitiesSection = () => {
      const navigate = useNavigate();
  
  const icons = [
    {
      src: "https://www.brothersindia.com/images/about-icon/label.png",
      hasBg: true,
    },
    { src: "https://www.brothersindia.com/images/about-icon/washing.png" },
    { src: "https://www.brothersindia.com/images/about-icon/filling-machine.png" },
    { src: "https://www.brothersindia.com/images/about-icon/capping.png" },
    { src: "https://www.brothersindia.com/images/about-icon/tracking.png" },
  ];

  return (
    <section className="bg-white py-12 px-4 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Section */}
        <div className="flex-1 space-y-6 text-center md:text-center lg:text-left">
          {/* Button */}
          <button className="bg-blue-600 text-white font-medium px-6 py-2 rounded-full hover:bg-blue-700 transition">
            Capabilities
          </button>

          {/* Icons Row */}
          <div className="flex justify-center lg:justify-start gap-4 sm:gap-5 flex-wrap">
            {icons.map((icon, index) => (
              <div
                key={index}
                className={`w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center rounded-full ${
                  icon.hasBg ? "bg-blue-100" : "border-2 border-blue-500"
                }`}
              >
                <img
                  src={icon.src}
                  alt={`icon-${index}`}
                  className="w-10 h-10 sm:w-14 sm:h-14 object-contain"
                />
              </div>
            ))}
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Labelling Machines
          </h2>

          {/* Description */}
          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            Wide ranges of Wet Glue Labelling Machines and Sticker Labelling
            Machines for different applications — including Food, Beverages,
            Pharmaceutical, Chemicals, Herbals, and FMCG industries.
          </p>

          {/* Button */}
          <button
            onClick={() => navigate("/about")}
            className="flex items-center justify-center lg:justify-start gap-2 bg-black text-white px-6 py-3 rounded-full hover:bg-gray-900 transition duration-300 mx-auto lg:mx-0">
            Read More <FaArrowRight className="text-white text-sm" />
          </button>
        </div>

        {/* Right Section */}
        <div className="flex-1 w-full flex justify-center">
          <img
            src="https://www.brothersindia.com/images/home-page/2.jpg"
            alt="Capabilities"
            className="rounded-2xl w-full max-w-md md:max-w-lg lg:max-w-none h-auto object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;

