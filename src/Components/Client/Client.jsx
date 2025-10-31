import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaYoutube,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";


const Client = () => {
   const logos = [
    "https://www.brothersindia.com/images/client/Affy%20pharma.png",
    "https://www.brothersindia.com/images/client/agri_gold.jpg",
    "https://www.brothersindia.com/images/client/ahlcon.png",
    "https://www.brothersindia.com/images/client/airpack.jpg",
    "https://www.brothersindia.com/images/client/akums.jpg",
    "https://www.brothersindia.com/images/client/al.png",
    "https://www.brothersindia.com/images/client/alembic_1.png",
    "https://www.brothersindia.com/images/client/alembic_new.jpg",
    "https://www.brothersindia.com/images/client/amba.jpg",
    "https://www.brothersindia.com/images/client/ambey.png",
    "https://www.brothersindia.com/images/client/ambrosia.jpg",
    "https://www.brothersindia.com/images/client/american.png",
    "https://www.brothersindia.com/images/client/amruntanjan.png",
    "https://www.brothersindia.com/images/client/anchor_mark.png",
    "https://www.brothersindia.com/images/client/anji_pharma.png",
    "https://www.brothersindia.com/images/client/anod.jpg",
    "https://www.brothersindia.com/images/client/aristo.png",
    "https://www.brothersindia.com/images/client/armour.png",
    "https://www.brothersindia.com/images/client/anod.jpg",
    " https://www.brothersindia.com/images/client/aristo.png  ",
    " https://www.brothersindia.com/images/client/armour.png  ",
    "  https://www.brothersindia.com/images/client/aroma.png ",
     "  https://www.brothersindia.com/images/client/arrun_colourchem.jpg ",
    " https://www.brothersindia.com/images/client/aurobindu.png  ",
    " https://www.brothersindia.com/images/client/cadila.png  ",
    " https://www.brothersindia.com/images/client/dabur.png  ",
    "  https://www.brothersindia.com/images/client/gronule_indst.jpg ", 
    " https://www.brothersindia.com/images/client/hindustan.png  ",
    " https://www.brothersindia.com/images/client/reliance.jpg  ", 
    "  https://www.brothersindia.com/images/client/reliance_life.jpg ",
    "  https://www.brothersindia.com/images/client/thumps.png ", 
    "  https://www.brothersindia.com/images/client/torrent.png ",
    " https://www.brothersindia.com/images/client/vadilal.png  ", 
    " https://www.brothersindia.com/images/client/zydus_cadila.png  ",
    " https://www.brothersindia.com/images/client/ADEL-LABO.png  ", 
    " https://www.brothersindia.com/images/client/AGRONULE-INDST.png  ",
    " https://www.brothersindia.com/images/client/AJANTA.png  ", 
    "  https://www.brothersindia.com/images/client/ALKEM.png ",
    "  https://www.brothersindia.com/images/client/ALLIED-SALES.png ",

    " https://www.brothersindia.com/images/client/AMAZON-DRUGS.png",
    "https://www.brothersindia.com/images/client/ANDRE-LABORATRIES.png ",
    "https://www.brothersindia.com/images/client/AQUILA-LABS.png ",
    " https://www.brothersindia.com/images/client/ARBRO-PHARMA.png",
    "https://www.brothersindia.com/images/client/ASTRA-ZANACA.png ",
    "https://www.brothersindia.com/images/client/AURBINDO-PHARMA.png ",
    " https://www.brothersindia.com/images/client/Aurolab.jpg",
    "https://www.brothersindia.com/images/client/BAIDHNATH.png ",
    "https://www.brothersindia.com/images/client/BAIDNATH.png ",
    " https://www.brothersindia.com/images/client/BAIDNATH-AYURVED.png",
    "https://www.brothersindia.com/images/client/balsam-pharma.png ",
    " https://www.brothersindia.com/images/client/BASF.png",
    " https://www.brothersindia.com/images/client/BAYER-DIAGNO.png",
    "https://www.brothersindia.com/images/client/BB.png ",
    "https://www.brothersindia.com/images/client/BECTORS-FOOD.png ",
    "https://www.brothersindia.com/images/client/BELCO-PHARMA.png ",
    "https://www.brothersindia.com/images/client/BHUTAN-AGRO.jpg ",
    " https://www.brothersindia.com/images/client/BIOCHEM.png",
    " https://www.brothersindia.com/images/client/BIODIEL.png",
    "https://www.brothersindia.com/images/client/biological.png ",
    " https://www.brothersindia.com/images/client/Biopharm.jpg",
    "https://www.brothersindia.com/images/client/bisleri.png ",
    " https://www.brothersindia.com/images/client/BRIGHT.jpg",
    "https://www.brothersindia.com/images/client/BOLST.png",
    "https://www.brothersindia.com/images/client/BRITISH.png",
    "https://www.brothersindia.com/images/client/BSL.png"




  ];


  return (
    <>
    <div className="w-full min-h-screen bg-white px-4 sm:px-6 md:px-10 py-8">
      {/* Top Blue Section */}
      <div className="w-full h-[30vh] sm:h-[35vh] md:h-[40vh] bg-blue-500 rounded-2xl flex flex-col items-center justify-center text-center shadow-md">
        <h1 className="text-black text-3xl sm:text-4xl md:text-5xl font-extrabold mb-2 tracking-wide">
          Our Clients
        </h1>
        <h3 className="text-white text-sm sm:text-base md:text-lg font-semibold">
          Home / Clients
        </h3>
      </div>

      {/* Logos Grid */}
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5 sm:gap-6 md:gap-8">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center border border-gray-200 rounded-xl shadow-sm bg-white p-3 sm:p-4 hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            <img
              src={logo.trim()}
              alt={`Client ${index + 1}`}
              className="w-20 sm:w-24 md:w-28 lg:w-32 max-h-20 object-contain"
              loading="lazy"
            />
          </div>
        ))}
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

export default Client;

