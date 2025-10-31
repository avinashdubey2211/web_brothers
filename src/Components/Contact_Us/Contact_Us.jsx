
import React from "react";
import {
  FaBuilding,
  FaEnvelope,
  FaPhoneAlt,
  FaGlobe,
  FaTools,
  FaShoppingCart,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaMapMarkerAlt,
} from "react-icons/fa";


const Contact_Us = () => {
  const contactInfo = [
    {
      icon: <FaBuilding />,
      title: "Registered Office & Factory",
      details: [
        "Plot No.2, Phase II, GIDC Vatva, Ahmedabad 382 445 Gujarat, INDIA.",
        "Fax: +91-79-40213220 / +91-79-25835885",
      ],
    },
    {
      icon: <FaEnvelope />,
      title: "E-mail",
      details: ["info@brothersindia.com"],
    },
    {
      icon: <FaPhoneAlt />,
      title: "Domestic Inquiry",
      details: ["+91-9825037971", "+91-9925008189", "+91-9825006052"],
    },
    {
      icon: <FaGlobe />,
      title: "Export Inquiry",
      details: ["+91-9825300706", "+91-9825006052", "+91-79-40213226"],
    },
    {
      icon: <FaTools />,
      title: "Sales & Spares Inquiry",
      details: ["Sales: +91-79-40213224", "Spares: +91-79-40213225"],
    },
    {
      icon: <FaShoppingCart />,
      title: "Service & Purchase Inquiry",
      details: ["Service: +91-79-40213215", "Purchase: +91-79-40213213"],
    },
  ];

  return (
    <>
      <div className="w-full min-h-screen bg-white px-4 sm:px-6 lg:px-12 py-8">
        {/* 🔹 Top Section */}
        <div className="w-full h-[30vh] sm:h-[35vh] md:h-[40vh] bg-linear-to-r from-blue-600 via-blue-500 to-blue-400 rounded-2xl flex flex-col items-center justify-center text-center shadow-lg px-3">
          <h1 className="text-white text-2xl sm:text-4xl md:text-5xl font-extrabold mb-2 tracking-wide">
            Contact Us
          </h1>
          <h3 className="text-blue-100 text-sm sm:text-lg md:text-xl font-semibold">
            Home / Contact Us
          </h3>
        </div>

        {/* 🔹 Contact Section */}
        <div className="w-full flex flex-col md:flex-row items-center justify-between gap-10 py-12">
          {/* LEFT SECTION */}
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center text-center space-y-6">
            <button className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-full shadow-md hover:bg-blue-700 transition duration-300">
              Contact Us
            </button>

            <p className="text-gray-700 text-lg font-medium px-4 sm:px-0">
              Reach out to us using the options below:
            </p>

            {/* Image (Hover Swap) */}
            <div className="relative w-full sm:w-[80%] md:w-[85%] lg:w-[75%] overflow-hidden rounded-2xl shadow-lg group">
              <img
                src="https://www.brothersindia.com/images/banner/con01.jpg"
                alt="Contact Default"
                className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-2xl transition-all duration-500 group-hover:opacity-0"
              />
              <img
                src="https://www.brothersindia.com/images/banner/con02.jpg"
                alt="Contact Hover"
                className="w-full h-56 sm:h-64 md:h-72 object-cover rounded-2xl absolute top-0 left-0 transition-all duration-500 opacity-0 group-hover:opacity-100"
              />
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-4 px-2 sm:px-4">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-700">
              Brothers Pharmamach
            </h2>
            <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
              Brothers Pharmamach is India's top leading manufacturer, supplier, and exporter of
              pharmaceutical and labeling machinery, known for its high-quality, precision-engineered
              solutions catering to global industry standards. With a strong commitment to innovation
              and efficiency, the company provides cutting-edge equipment for pharmaceutical packaging
              and labeling needs.
            </p>
          </div>
        </div>

        {/* 🔹 Contact Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
          {contactInfo.map((item, index) => (
            <div
              key={index}
              className="bg-white text-black rounded-2xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-blue-100 p-4 rounded-full mb-4 flex items-center justify-center">
                <div className="text-blue-600 text-3xl">{item.icon}</div>
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-3 text-blue-700">
                {item.title}
              </h3>
              {item.details.map((line, i) => (
                <p key={i} className="text-sm sm:text-base leading-relaxed">
                  {line}
                </p>
              ))}
            </div>
          ))}
        </div>

        {/* 🔹 Map Section */}
        <div className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] mt-10 rounded-2xl overflow-hidden shadow-xl">
          <iframe
            title="Brothers Pharmamach Location"
            src="https://www.google.com/maps?q=Brothers+Pharmamach,+GIDC+Vatva,+Ahmedabad,+India&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>

        {/* ✅ Contact Form Section */}
        <div className="mt-12 w-full bg-blue-50 rounded-2xl p-6 sm:p-10 shadow-md">
          <h2 className="text-center text-3xl sm:text-4xl font-bold text-blue-700 mb-8">
            Get in Touch
          </h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 text-gray-800">
            {/* Name */}
            <div className="flex flex-col">
              <label className="font-semibold mb-2">Your Name:</label>
              <input
                type="text"
                placeholder="Enter your full name"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Email */}
            <div className="flex flex-col">
              <label className="font-semibold mb-2">Your Email:</label>
              <input
                type="email"
                placeholder="Enter your email"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col">
              <label className="font-semibold mb-2">Phone / Mobile Number:</label>
              <input
                type="text"
                placeholder="Enter your phone number"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Location */}
            <div className="flex flex-col">
              <label className="font-semibold mb-2">City / Country:</label>
              <input
                type="text"
                placeholder="Enter your city or country"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div className="flex flex-col md:col-span-2">
              <label className="font-semibold mb-2">Message:</label>
              <textarea
                placeholder="Write your message..."
                rows="4"
                className="border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Validation Code */}
            <div className="flex flex-col md:col-span-2 sm:flex-row sm:items-center sm:justify-between gap-4">
              <div className="flex flex-col sm:flex-row sm:items-center gap-3">
                <span className="font-semibold">Validation Code:</span>
                <span className="text-blue-700 font-bold text-lg">891476</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 w-full sm:w-auto">
                <label className="font-semibold sm:hidden">Enter Validation Code:</label>
                <input
                  type="text"
                  placeholder="Enter validation code"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="md:col-span-2 flex justify-center mt-6">
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-10 py-3 rounded-full shadow-md transition duration-300"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
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

export default Contact_Us;

