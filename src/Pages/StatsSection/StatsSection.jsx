import React from "react";

const StatsSection = () => {
  const stats = [
    { number: "50+", label: "Years of Experience" },
    { number: "3000+", label: "Successful Installation" },
    { number: "45+", label: "Country Exporting" },
    { number: "100%", label: "Satisfied Customers" },
  ];

  return (
    <section className="bg-blue-50 py-16 px-6 sm:px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((item, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center bg-white rounded-2xl shadow-md py-8 px-4 hover:shadow-xl transition"
          >
            <h2 className="text-6xl sm:text-6xl font-extrabold text-black mb-2">
              {item.number}
            </h2>
            <p className="text-lg sm:text-xl font-medium text-gray-700">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StatsSection;
