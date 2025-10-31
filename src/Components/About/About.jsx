
import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";


const About = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const infoSections = [
    { title: "Company Profile", icon: "🏢", text: "Brothers Pharmamach is a leading manufacturer of pharmaceutical and packaging machinery with decades of excellence." },
    { title: "Products & Solutions", icon: "⚙️", text: "We have been strengthening our position as a pioneer in packaging machine manufacturing with innovative solutions." },
    { title: "Across The Globe", icon: "🌍", text: "With a strong global presence, we serve clients across continents with trust and technological excellence." },
    { title: "Strong Experience", icon: "💪", text: "Over 50 years of experience in the packaging industry ensures consistent quality and customer satisfaction." },
  ];

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

  return (
    <>
    <div className="w-full min-h-screen bg-white px-4 sm:px-6 lg:px-10 py-8">
      {/* 🔹 Top Blue Header */}
      <div className="w-full h-[30vh] sm:h-[35vh] md:h-[40vh] bg-linear-to-r from-blue-600 via-blue-500 to-blue-400 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg mb-10">
        <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold mb-2 tracking-wide">
          About
        </h1>
        <h3 className="text-blue-100 text-sm sm:text-lg md:text-xl font-semibold">
          Home / About
        </h3>
      </div>

      {/* 🔹 About Content */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-10 md:gap-16 px-2 sm:px-4 md:px-8">
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center space-y-4 sm:space-y-6 text-center md:text-left">
          <button className="bg-blue-600 text-white font-semibold px-6 py-2 rounded-full w-fit mx-auto md:mx-0 shadow-md hover:bg-blue-700 transition duration-300">
            About Us
          </button>

          <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
            Brothers Pharmamach
          </h2>

          <p className="text-gray-700 text-sm sm:text-base md:text-xs leading-relaxed">
            Brothers Pharmamach, the largest Manufacturers & Exporter of
            Pharmaceutical and Labelling Machinery in India, is a result of a
            merger between some of the leading brands such as{" "}
            <b>BHAVANI</b> & <b>AMBICA Labelling</b>.
          </p>

          <p className="text-gray-700 text-sm sm:text-base md:text-xs leading-relaxed">
            Originally incorporated as <b>Bhavani Pattern Works</b> in 1965, the
            group has grown manifold in terms of size, production capacity, and
            global reach.
          </p>

          <p className="text-gray-700 text-sm sm:text-base md:text-xs leading-relaxed">
            Over the years, our technology has matured, focus has sharpened, and
            commitment to quality solutions has been re-affirmed. What has not
            changed, however, is our vision to pursue engineering excellence.
          </p>
        </div>

        {/* Right Section - Video */}
        <div className="w-full md:w-1/2 flex justify-center">
          <video
            className="w-full sm:w-[90%] md:w-[85%] rounded-2xl shadow-xl object-cover"
            controls
            muted
            autoPlay
            loop
          >
            <source
              src="https://www.brothersindia.com/images/brother-new-vid.mp4"
              type="video/mp4"
            />
          </video>
        </div>
      </div>

      {/* 🔹 Info Section with Clickable Icons */}
      <section className="w-full bg-[#edf7ff] py-14 mt-12">
        <div className="max-w-6xl mx-auto flex flex-wrap justify-center items-center gap-6 text-center">
          {infoSections.map((item, index) => (
            <div
              key={index}
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="flex flex-col items-center cursor-pointer transition-transform transform hover:scale-105"
            >
              <div className="text-4xl sm:text-5xl mb-2">{item.icon}</div>
              <h3 className="text-gray-800 text-base sm:text-lg font-semibold">
                {item.title}
              </h3>
              {activeIndex === index && (
                <p className="mt-3 text-gray-600 text-sm sm:text-base w-64 sm:w-72 md:w-80">
                  {item.text}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 🔹 Features Section */}
      <section className="py-14 bg-[#f9fafb]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <div
                key={index}
                className="flex flex-col items-center sm:items-start text-center sm:text-left"
              >
                <div className="relative mb-4 flex justify-center sm:justify-start">
                  <div className="absolute -inset-2 bg-blue-100 rounded-full opacity-70 blur-sm"></div>
                  <img
                    src={feature.img}
                    alt={feature.title}
                    className="relative w-14 h-14 sm:w-16 sm:h-16"
                  />
                </div>

                <h3 className="font-semibold text-gray-900 text-base sm:text-lg md:text-xl mb-2 leading-snug">
                  {feature.title}
                </h3>

                <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 🔹 Full-Screen Google Map */}
      <section className="w-full h-[60vh] sm:h-[70vh] md:h-[55vh] mt-10">
        <iframe
          title="Brothers Pharmamach Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.5189434202474!2d72.85176927497767!3d19.002820554027004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c970aa8ab971%3A0x94521bb2e34d9a6b!2sBrothers%20Pharmamach%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1696945478910!5m2!1sen!2sin"
          className="w-full h-full rounded-2xl shadow-lg border-0"
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </section>
    </div>

        {/* fooder */}
         <footer className="bg-white text-gray-800 font-sans">
              {/* 🔹 Top Contact Section */}
              <div className="w-full flex flex-col md:flex-row justify-between items-center gap-6 border-b border-gray-200 px-6 sm:px-10 py-8 max-w-7xl mx-auto text-center md:text-left">
                {/* Logo */}
                <div className="flex flex-col items-center md:items-start">
                  <img
                    src="https://www.brothersindia.com/images/logo/logo.png"
                    alt="Brothers Logo"
                    className="w-[180px] sm:w-[200px] object-contain mb-2"
                  />
                </div>
        
                {/* Call Us */}
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4">
                  <div className="bg-blue-100 p-3 sm:p-4 rounded-full text-blue-600 text-xl sm:text-2xl">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-blue-600 uppercase">
                      Call Us
                    </h4>
                    <p className="text-base sm:text-lg font-semibold">
                      +91 7317018945
                    </p>
                  </div>
                </div>
        
                {/* Email */}
                <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-3 sm:gap-4">
                  <div className="bg-blue-100 p-3 sm:p-4 rounded-full text-blue-600 text-xl sm:text-2xl">
                    <FaEnvelope />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-blue-600 uppercase">
                      Send E-mail
                    </h4>
                    <p className="text-base sm:text-lg font-semibold">
                      info@brothersindia.com
                    </p>
                  </div>
                </div>
              </div>
        
              {/* 🔹 Footer Links Section */}
              <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 px-6 sm:px-10 py-10">
                {/* Company Info */}
                <div>
                  <h3 className="text-lg font-bold mb-3">
                    Brothers Pharmamach (India) Pvt.Ltd.
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed text-sm sm:text-base">
                    Brothers Pharmamach, the largest Manufacturer & Supplier of
                    Pharmaceutical and Packaging Machinery in India.
                  </p>
                  <p className="text-2xl sm:text-2xl font-bold">
                    <span className="text-black  font-bold ">50+</span>{" "}
                    <span className="text-gray-700 italic text-base sm:text-lg">
                      Years of Experience
                    </span>
                  </p>
                  <div className="flex gap-4 mt-4 text-gray-600 justify-center sm:justify-start">
                    <FaFacebookF className="hover:text-blue-600 cursor-pointer text-lg sm:text-xl" />
                    <FaTwitter className="hover:text-blue-600 cursor-pointer text-lg sm:text-xl" />
                    <FaLinkedinIn className="hover:text-blue-600 cursor-pointer text-lg sm:text-xl" />
                    <FaYoutube className="hover:text-blue-600 cursor-pointer text-lg sm:text-xl" />
                  </div>
                </div>
        
                {/* Quick Links */}
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-bold mb-3">Quick Links</h3>
                  <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                    {["Home", "About Us", "Products", "News & Event", "Application", "Contact Us"].map((item) => (
                      <li key={item}>
                        <a href="#" className="hover:text-blue-600 transition">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
        
                {/* Other Links */}
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-bold mb-3">Other Links</h3>
                  <ul className="space-y-2 text-gray-600 text-sm sm:text-base">
                    {[
                      "Our Management Team",
                      "Our Milestones",
                      "Manufacturing Facility",
                      "Global Presence",
                      "Our Clients",
                      "Sitemap",
                      "Blogs",
                    ].map((item) => (
                      <li key={item}>
                        <a href="#" className="hover:text-blue-600 transition">
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
        
                {/* Contact Info */}
                <div className="text-center sm:text-left">
                  <h3 className="text-lg font-bold mb-3">Contact Us</h3>
                  <p className="font-semibold mb-2">
                    Brothers Pharmamach (India) Pvt.Ltd.
                  </p>
                  <ul className="space-y-3 text-gray-600 text-sm sm:text-base">
                    <li className="flex justify-center sm:justify-start items-start gap-3">
                      <FaMapMarkerAlt className="text-blue-600 mt-1 shrink-0" />
                      Plot No.2, Phase II, GIDC Vatva, Ahmedabad 382 445 Gujarat, INDIA.
                    </li>
                    <li className="flex justify-center sm:justify-start items-center gap-3">
                      <FaPhoneAlt className="text-blue-600" /> +91-7940213220
                    </li>
                    <li className="flex justify-center sm:justify-start items-center gap-3">
                      <FaPhoneAlt className="text-blue-600" /> +91 9825037971
                    </li>
                    <li className="flex justify-center sm:justify-start items-center gap-3">
                      <FaPhoneAlt className="text-blue-600" /> +91-7925835885
                    </li>
                    <li className="flex justify-center sm:justify-start items-center gap-3">
                      <FaEnvelope className="text-blue-600" /> info@brothersindia.com
                    </li>
                  </ul>
                </div>
              </div>
        
              {/* 🔹 Bottom Copyright */}
              <div className="border-t border-gray-200 py-4 text-center text-gray-600 text-sm px-4">
                <p>Copyright © 2025 Brothers</p>
                <div className="flex justify-center gap-4 mt-2 flex-wrap">
                  <a href="#" className="hover:text-blue-600 transition">
                    Privacy Policy
                  </a>
                  <a href="#" className="hover:text-blue-600 transition">
                    Return & Refund Policy
                  </a>
                  <a href="#" className="hover:text-blue-600 transition">
                    Shipping Policy
                  </a>
                </div>
              </div>
            </footer>
    </>
  );
};

export default About;

