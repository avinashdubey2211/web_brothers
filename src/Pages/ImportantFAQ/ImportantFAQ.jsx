

import React from "react";

const ImportantFAQ = () => {
  const faqs = [
    {
      title: "How accurate and precise is the machine?",
      desc: "Look for machines with advanced sensors and precision controls for accurate labeling.",
    },
    {
      title: "What are the maintenance requirements?",
      desc: "Check for routine maintenance needs and availability of customer support.",
    },
    {
      title: "What is the production volume?",
      desc: "This determines whether you need a manual, semi-automatic, or fully automatic machine.",
    },
    {
      title: "How to choose best machine for labelling, filling and capping?",
      desc: "Understanding the shape, size, and material of your products helps in selecting the right machine.",
    },
    {
      title: "Vision & Leadership",
      desc: "It was the vision of our CEO Mr. Jayantilal R. Mevada and the dynamism of the team of his sons M/s. Mahesh Mevada and Nirav Mevada which paved the path of Brothers Pharmamach's global reach.",
    },
  ];

  return (
    <section className="bg-gray-50 py-14 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-10 md:gap-16 items-start">
        {/* LEFT SECTION */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition">
            Important FAQ
          </button>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-snug">
            Those who make it possible
          </h2>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            We at Brothers Pharmamach believe, it's the "men behind the machines"
            who have caused all the acceleration.
          </p>

          <p className="text-gray-700 text-sm sm:text-base md:text-lg leading-relaxed">
            Backed up by a dynamic leadership, efficient management and an
            exceptionally dedicated technology-savvy team, the company has been
            growing at an enviable rate and is continuously expanding its
            product portfolio.
          </p>
        </div>

        {/* RIGHT SECTION (Scrollable Cards) */}
        <div className="flex-1 max-h-[400px] md:max-h-[450px] overflow-y-auto space-y-4 scrollbar-hide w-full">
          {faqs.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 shadow-md hover:shadow-lg transition duration-300 border border-gray-200"
            >
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-blue-700 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImportantFAQ;

