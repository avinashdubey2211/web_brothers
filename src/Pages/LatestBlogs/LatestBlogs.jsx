

import React from "react";
import { useNavigate } from "react-router-dom"; 


const newsData = [
  {
    img: "https://www.brothersindia.com/images/banner/resolution.jpg",
    title:"Streamlining Success: How Automatic Liquid Filling Lines",
    desc: "In today’s fast-paced manufacturing world, efficiency, precision, and.",
    link: "#",
        path:"/image_detail",

  },
  {
    img: "https://www.brothersindia.com/images/banner/Efficiency.jpg",
    title: "Why Investing in a Liquid Filling Machine Can Transform Your",
    desc: "In today’s fast-paced manufacturing environment, precision, speed, and",
    link: "#",
        path:"/image_detail",

  },
  {
    img: "https://www.brothersindia.com/images/banner/Maximizing.jpg",
  title: "Benefits of Using Automatic Capsule Filling Machines in",
    desc: "In today’s fast-paced pharmaceutical and nutraceutical industries, efficiency",
    link: "#",
        path:"/image_detail",

  },
  {
    img: "https://www.brothersindia.com/images/banner/labelling.jpg",
   title: "Rotary Labelling Machine for Bottles, Vials & Containers: A",
    desc: "In high-speed packaging environments, precision, consistency, and efficiency are",
        path:"/image_detail",

  },
];

const  LatestBlogs = () => {
 const navigate = useNavigate(); 
  
  return (
    <section className="w-full bg-gray-50 py-14 px-4 sm:px-8 lg:px-16">
      {/* Title */}
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-12 text-gray-900">
        Latest <span className="text-blue-700">Blogs</span>
      </h2>

      {/* Responsive Grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
        {newsData.map((item, index) => (
          <div
            key={index}
             onClick={() => item.path && navigate(item.path)} 

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

export default  LatestBlogs;
