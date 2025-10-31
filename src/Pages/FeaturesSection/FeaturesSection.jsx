

import React from "react";

const features = [
  {
    img: "https://www.brothersindia.com/images/icon/2.png",
    title: "Innovating Packaging Machinery for 50+ Years.",
    desc: "With over 50 years of expertise, Brothers Pharmamach delivers reliable and efficient machinery for diverse industries.",
  },
  {
    img: "https://www.brothersindia.com/images/icon/3.png",
    title: "Trusted by Global Leaders.",
    desc: "Brothers Pharmamach delivers innovative packaging solutions to top companies, ensuring unmatched performance and quality.",
  },
  {
    img: "https://www.brothersindia.com/images/icon/5.png",
    title: "Excellence in Every Milestone.",
    desc: "Brothers Pharmamach sets new standards with innovative breakthroughs in packaging and pharmaceutical machinery.",
  },
  {
    img: "https://www.brothersindia.com/images/icon/4.png",
    title: "Leading with Innovation.",
    desc: "Specializing in advanced packaging and pharmaceutical machinery for FMCG, food & beverages, and healthcare industries.",
  },
  {
    img: "https://www.brothersindia.com/images/icon/1.png",
    title: "Get Expert Packaging Solutions.",
    desc: "Contact Brothers Pharmamach for reliable and efficient machinery solutions, tailored to meet your business needs.",
  },
];

const FeaturesSection = () => {
  return (
    <section className="py-14 bg-[#f9fafb]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex flex-col items-center sm:items-start text-center sm:text-left"
            >
              {/* Icon with soft blue background */}
              <div className="relative mb-4 flex justify-center sm:justify-start">
                <div className="absolute -inset-2 bg-blue-100 rounded-full opacity-70 blur-sm"></div>
                <img
                  src={feature.img}
                  alt={feature.title}
                  className="relative w-14 h-14 sm:w-16 sm:h-16"
                />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-gray-900 text-base sm:text-lg md:text-xl mb-2 leading-snug">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Divider line */}
        <div className="mt-16 border-b border-gray-200 w-[90%] mx-auto"></div>
      </div>
    </section>
  );
};

export default FeaturesSection;
