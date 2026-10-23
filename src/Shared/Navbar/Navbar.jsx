// import React, { useState, useEffect, useRef } from "react";
// import {
//   FaEnvelope,
//   FaPhoneAlt,
//   FaGlobe,
//   FaBars,
//   FaTimes,
//   FaChevronDown,
// } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Navbar = () => {
//   const navigate = useNavigate();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [langOpen, setLangOpen] = useState(false);
//   const [aboutOpen, setAboutOpen] = useState(false);
//   const langRef = useRef(null);

//   const languages = [
//     { flag: "🇮🇳", name: "Hindi" },
//     { flag: "🇺🇸", name: "English" },
//     { flag: "🇫🇷", name: "French" },
//     { flag: "🇩🇪", name: "German" },
//     { flag: "🇪🇸", name: "Spanish" },
//     { flag: "🇮🇹", name: "Italian" },
//     { flag: "🇯🇵", name: "Japanese" },
//     { flag: "🇨🇳", name: "Chinese" },
//     { flag: "🇰🇷", name: "Korean" },
//     { flag: "🇷🇺", name: "Russian" },
//     { flag: "🇧🇷", name: "Portuguese" },
//     { flag: "🇸🇦", name: "Arabic" },
//     { flag: "🇹🇷", name: "Turkish" },
//     { flag: "🇳🇱", name: "Dutch" },
//     { flag: "🇮🇩", name: "Indonesian" },
//   ];

//   useEffect(() => {
//     const handleClickOutside = (e) => {
//       if (langRef.current && !langRef.current.contains(e.target)) setLangOpen(false);
//       if (!e.target.closest(".about-dropdown")) setAboutOpen(false);
//     };
//     document.addEventListener("mousedown", handleClickOutside);
//     return () => document.removeEventListener("mousedown", handleClickOutside);
//   }, []);

//   const navItems = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Products", path: "/products" },
//     { name: "News & Events", path: "/news_events" },
//     { name: "Application", path: "/application" },
//     { name: "Our Client", path: "/client" },
//     { name: "Contact Us", path: "/contact_us" },
//   ];

//   const aboutSubmenu = [
//     { name: "Management Team", path: "/management-team" },
//     { name: "Our Milestone", path: "/milestone" },
//     { name: "Manufacturing Facility", path: "/manufacturing-facility" },
//   ];

//   return (
//    <nav className="fixed  w-full top-0 z-999 bg-white">

//     <div className="w-full font-sans text-[15px] text-gray-800  bg-white shadow-md">
//       {/* 🔹 Top Bar */}
//       <div className="border-b w-full h-full border-gray-200 px-4 sm:px-6 md:px-8 py-3 text-sm">

//         <div className="flex md:hidden justify-between items-center w-full">
//           <div className="flex items-center gap-2">
//             <FaPhoneAlt className="text-black" />
//             <a href="tel:+917317018945" className="hover:text-gray-700 text-xs sm:text-sm">
//               +91 7317018945
//             </a>
//           </div>

//           <div ref={langRef} className="relative">
//             <button
//               onClick={() => setLangOpen(!langOpen)}
//               className="flex items-center gap-1 text-blue-500 text-xs sm:text-sm hover:text-blue-600 transition-colors duration-200"
//             >
//               <FaGlobe className="text-blue-500" />
//               <span>Language</span>
//             </button>

//             {langOpen && (
//               <div className="absolute right-0 mt-2 w-36 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-56 overflow-y-auto">
//                 <ul className="p-1 text-xs sm:text-sm">
//                   {languages.map((lang, idx) => (
//                     <li
//                       key={idx}
//                       className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer hover:bg-blue-100"
//                       onClick={() => setLangOpen(false)}
//                     >
//                       <span>{lang.flag}</span>
//                       <span>{lang.name}</span>
//                     </li>
//                   ))}
//                 </ul>
//               </div>
//             )}
//           </div>
//         </div>

//         {/* ✅ Desktop Layout */}
//         <div className="hidden md:flex justify-between items-center flex-wrap">
//           <div className="flex items-center gap-4 flex-wrap">
//             <div className="flex items-center gap-2">
//               <FaEnvelope className="text-black" />
//               <a href="mailto:info@brothersindia.com" className="hover:text-gray-700">
//                 info@brothersindia.com
//               </a>
//             </div>
//             <div className="flex items-center gap-2">
//               <FaPhoneAlt className="text-black" />
//               <a href="tel:+917317018945" className="hover:text-gray-700">
//                 +91 7317018945
//               </a>
//             </div>
//           </div>

//           <div className="flex items-center gap-4">
//             <div ref={langRef} className="relative">
//               <button
//                 onClick={() => setLangOpen(!langOpen)}
//                 className="flex items-center gap-1 text-blue-500 hover:text-blue-600"
//               >
//                 <FaGlobe className="text-blue-500" />
//                 <span>Language</span>
//               </button>

//               {langOpen && (
//                 <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-56 overflow-y-auto">
//                   <ul className="p-1">
//                     {languages.map((lang, idx) => (
//                       <li
//                         key={idx}
//                         className="flex items-center gap-2 px-2 py-1 rounded cursor-pointer hover:bg-blue-100"
//                         onClick={() => setLangOpen(false)}
//                       >
//                         <span className="text-lg">{lang.flag}</span>
//                         <span>{lang.name}</span>
//                       </li>
//                     ))}
//                   </ul>
//                 </div>
//               )}
//             </div>

//             <a onClick={() => navigate("/globalpresence")} className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer">
//               Global Presence
//             </a>
//             <a onClick={() => navigate("/client")} className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer">
//               Client
//             </a>
//             <a onClick={() => navigate("/sitemap")} className="text-sm text-gray-500 hover:text-gray-700 cursor-pointer">
//               Sitemap
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* 🔹 Main Navbar */}
//       <div className="flex justify-between items-center px-4 sm:px-6 md:px-8 lg:px-12 py-3 relative">
//         {/* Logo */}
//         <div className="flex items-center gap-3">
//           <img
//             src="https://www.brothersindia.com/images/logo/logo.png"
//             alt="Brothers Logo"
//             onClick={() => navigate("/")}
//             className="w-[110px] sm:w-40 md:w-40 object-contain cursor-pointer"
//           />
//         </div>

//         {/* Hamburger (visible for mobile + tablet) */}
//         <button
//           className="text-2xl md:text-3xl lg:hidden text-gray-800 focus:outline-none"
//           onClick={() => setMenuOpen(!menuOpen)}
//         >
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </button>

//         {/* Desktop Menu */}
//         <ul className="hidden lg:flex items-center gap-6 xl:gap-10 font-medium">
//           {navItems.map((item) =>
//             item.name === "About Us" ? (
//               <li
//                 key={item.name}
//                 className="relative about-dropdown"
//                 onMouseEnter={() => setAboutOpen(true)}
//                 onMouseLeave={() => setAboutOpen(false)}
//               >
//                 <button
//                   onClick={() => navigate(item.path)}
//                   className="flex items-center gap-1 hover:text-black text-gray-800"
//                 >
//                   {item.name} <FaChevronDown className="text-sm mt-0.5" />
//                 </button>

//                 {aboutOpen && (
//                   <ul className="absolute top-full left-1/2 -translate-x-1/2 bg-white border rounded-lg shadow-md mt-2 w-56 z-50 text-center">
//                     {aboutSubmenu.map((sub) => (
//                       <li key={sub.name}>
//                         <button
//                           onClick={() => navigate(sub.path)}
//                           className="block w-full text-left px-4 py-2  hover:bg-gray-100 text-gray-700"
//                         >
//                           {sub.name}
//                         </button>
//                       </li>
//                     ))}
//                   </ul>
//                 )}
//               </li>
//             ) : (
//               <li key={item.name}>
//                 <button
//                   onClick={() => navigate(item.path)}
//                   className="hover:text-black text-gray-800"
//                 >
//                   {item.name}
//                 </button>
//               </li>
//             )
//           )}
//         </ul>

//         {/* Enquiry */}
//         <button
//           onClick={() => navigate("/enquiry")}
//           className="hidden lg:block bg-black text-white px-5 py-2 rounded-full hover:bg-gray-900 transition"
//         >
//           Enquiry →
//         </button>

//         {/* 🔹 Mobile + Tablet Drawer */}
//         {menuOpen && (
//           <div className="absolute top-0 left-0 w-full bg-white shadow-md border-t border-gray-200 lg:hidden z-40 animate-slideDown">
//             <ul className="flex flex-col items-center py-6 space-y-4 text-sm sm:text-base font-medium text-center">
//               {navItems.map((item) =>
//                 item.name === "About Us" ? (
//                   <li key={item.name} className="about-dropdown w-full">
//                     <button
//                       onClick={() => setAboutOpen(!aboutOpen)}
//                       className="flex justify-center items-center gap-2 w-full text-xs sm:text-sm"
//                     >
//                       {item.name} <FaChevronDown className="text-sm" />
//                     </button>

//                     {aboutOpen && (
//                       <ul className="mt-2 space-y-1 text-xs sm:text-sm md:text:sm  text-center">
//                         {aboutSubmenu.map((sub) => (
//                           <li key={sub.name}>
//                             <button
//                               onClick={() => {
//                                 navigate(sub.path);
//                                 setMenuOpen(false);
//                                 setAboutOpen(false);
//                               }}
//                               className="block w-full text-gray-700 hover:text-blue-700"
//                             >
//                               {sub.name}
//                             </button>
//                           </li>
//                         ))}
//                       </ul>
//                     )}
//                   </li>
//                 ) : (
//                   <li key={item.name}>
//                     <button
//                       onClick={() => {
//                         navigate(item.path);
//                         setMenuOpen(false);
//                       }}
//                       className="hover:text-blue-700 w-full text-xs sm:text-sm"
//                     >
//                       {item.name}
//                     </button>
//                   </li>
//                 )
//               )}
//               <li>
//                 <button
//                   onClick={() => {
//                     navigate("/enquiry");
//                     setMenuOpen(false);
//                   }}
//                   className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-900 transition text-xs sm:text-sm"
//                 >
//                   Enquiry →
//                 </button>
//               </li>
//             </ul>
//           </div>
//         )}
//       </div>
//     </div>
//     </nav>

//   );
// };

// export default Navbar;

import React, { useEffect, useRef, useState } from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaGlobe,
  FaBars,
  FaTimes,
  FaChevronDown,
  FaArrowRight,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { useLocation, useNavigate } from "react-router-dom";

const languages = [
  { flag: "🇮🇳", name: "Hindi" },
  { flag: "🇺🇸", name: "English" },
  { flag: "🇫🇷", name: "French" },
  { flag: "🇩🇪", name: "German" },
  { flag: "🇪🇸", name: "Spanish" },
  { flag: "🇮🇹", name: "Italian" },
  { flag: "🇯🇵", name: "Japanese" },
  { flag: "🇨🇳", name: "Chinese" },
  { flag: "🇰🇷", name: "Korean" },
  { flag: "🇷🇺", name: "Russian" },
  { flag: "🇧🇷", name: "Portuguese" },
  { flag: "🇸🇦", name: "Arabic" },
  { flag: "🇹🇷", name: "Turkish" },
  { flag: "🇳🇱", name: "Dutch" },
  { flag: "🇮🇩", name: "Indonesian" },
];

const navItems = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "News & Events", path: "/news_events" },
  { name: "Application", path: "/application" },
  { name: "Our Client", path: "/client" },
  { name: "Contact Us", path: "/contact_us" },
];

const aboutSubmenu = [
  { name: "Management Team", path: "/management-team" },
  { name: "Our Milestone", path: "/milestone" },
  { name: "Manufacturing Facility", path: "/manufacturing-facility" },
];

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");

  const langRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (langRef.current && !langRef.current.contains(event.target)) {
        setLangOpen(false);
      }

      if (aboutRef.current && !aboutRef.current.contains(event.target)) {
        setAboutOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        setLangOpen(false);
        setAboutOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setAboutOpen(false);
    setLangOpen(false);
  }, [location.pathname]);

  const goTo = (path) => {
    navigate(path);
    setMenuOpen(false);
    setAboutOpen(false);
    setLangOpen(false);
  };

  const isActive = (path) => {
    if (path === "/") return location.pathname === "/";
    return (
      location.pathname === path || location.pathname.startsWith(`${path}/`)
    );
  };

  const linkClass = (path) =>
    `relative whitespace-nowrap py-2 transition-colors duration-200 ${
      isActive(path)
        ? "text-blue-700 font-semibold"
        : "text-gray-700 hover:text-blue-700"
    }`;

  const renderLanguageMenu = () => (
    <div className="absolute right-0 top-full z-50 mt-3 w-48 overflow-hidden rounded-xl border border-gray-100 bg-white py-2 shadow-xl animate-fadeIn">
      <p className="px-4 pb-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
        Select Language
      </p>

      <div className="max-h-60 overflow-y-auto">
        {languages.map((lang) => (
          <button
            key={lang.name}
            type="button"
            onClick={() => {
              setSelectedLanguage(lang.name);
              setLangOpen(false);
            }}
            className={`flex w-full items-center gap-3 px-4 py-2.5 text-left text-sm transition-colors hover:bg-blue-50 ${
              selectedLanguage === lang.name
                ? "bg-blue-50 font-semibold text-blue-700"
                : "text-gray-700"
            }`}
          >
            <span className="text-lg">{lang.flag}</span>
            <span>{lang.name}</span>
            {selectedLanguage === lang.name && (
              <span className="ml-auto text-blue-600">✓</span>
            )}
          </button>
        ))}
      </div>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 w-full bg-white">
      {/* Top contact bar */}
      <div className="border-b border-gray-100 bg-gray-50">
        <div className="mx-auto flex max-w-[1440px] flex-wrap items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-10">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <a
              href="mailto:info@brothersindia.com"
              className="flex items-center gap-2 text-xs text-gray-600 transition hover:text-blue-700 sm:text-sm"
            >
              <FaEnvelope className="text-blue-700" />
              info@brothersindia.com
            </a>

            <a
              href="tel:+917317018945"
              className="flex items-center gap-2 text-xs text-gray-600 transition hover:text-blue-700 sm:text-sm"
            >
              <FaPhoneAlt className="text-blue-700" />
              +91 7317018945
            </a>
          </div>

          <div className="hidden items-center gap-5 md:flex">
            <div ref={langRef} className="relative">
              <button
                type="button"
                aria-expanded={langOpen}
                onClick={() => setLangOpen((prev) => !prev)}
                className="flex items-center gap-2 text-sm text-gray-600 transition hover:text-blue-700"
              >
                <FaGlobe className="text-blue-700" />
                {selectedLanguage}
                <FaChevronDown
                  className={`text-[10px] transition-transform ${
                    langOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {langOpen && renderLanguageMenu()}
            </div>

            <button
              type="button"
              onClick={() => goTo("/globalpresence")}
              className="flex items-center gap-2 text-sm text-gray-600 transition hover:text-blue-700"
            >
              <FaMapMarkerAlt className="text-blue-700" />
              Global Presence
            </button>

            <button
              type="button"
              onClick={() => goTo("/sitemap")}
              className="text-sm text-gray-600 transition hover:text-blue-700"
            >
              Sitemap
            </button>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="border-b border-gray-100 bg-white shadow-sm">
        <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-10 lg:py-4">
          {/* Logo */}
          <button
            type="button"
            onClick={() => goTo("/")}
            aria-label="Brothers India Home"
            className="shrink-0"
          >
            <img
              src="https://www.brothersindia.com/images/logo/logo.png"
              alt="Brothers India"
              className="h-auto w-28 object-contain sm:w-36 lg:w-40"
            />
          </button>

          {/* Desktop menu */}
          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-5 xl:gap-7 lg:flex"
          >
            {navItems.map((item) =>
              item.name === "About Us" ? (
                <div key={item.name} ref={aboutRef} className="relative">
                  <button
                    type="button"
                    aria-expanded={aboutOpen}
                    onClick={() => setAboutOpen((prev) => !prev)}
                    className={`${linkClass(item.path)} flex items-center gap-2`}
                  >
                    {item.name}
                    <FaChevronDown
                      className={`text-[10px] transition-transform duration-200 ${
                        aboutOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {aboutOpen && (
                    <div className="absolute left-1/2 top-full z-50 mt-4 w-64 -translate-x-1/2 overflow-hidden rounded-xl border border-gray-100 bg-white py-2 shadow-xl animate-fadeIn">
                      <div className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-gray-400">
                        Discover Brothers India
                      </div>

                      {aboutSubmenu.map((sub) => (
                        <button
                          key={sub.path}
                          type="button"
                          onClick={() => goTo(sub.path)}
                          className="flex w-full items-center justify-between px-4 py-3 text-left text-sm text-gray-700 transition hover:bg-blue-50 hover:text-blue-700"
                        >
                          {sub.name}
                          <FaArrowRight className="text-xs opacity-50" />
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <button
                  key={item.path}
                  type="button"
                  onClick={() => goTo(item.path)}
                  className={linkClass(item.path)}
                >
                  {item.name}
                  {isActive(item.path) && (
                    <span className="absolute inset-x-0 -bottom-1 h-0.5 rounded-full bg-blue-700" />
                  )}
                </button>
              ),
            )}
          </nav>

          {/* Enquiry CTA */}
          <button
            type="button"
            onClick={() => goTo("/enquiry")}
            className="hidden shrink-0 items-center gap-2 rounded-full bg-blue-700 px-5 py-3 text-sm font-semibold text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-lg lg:flex"
          >
            Enquiry
            <FaArrowRight className="text-xs" />
          </button>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-200 text-xl text-gray-800 transition hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 lg:hidden"
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile / tablet menu */}
        <div
          className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-in-out lg:hidden ${
            menuOpen
              ? "grid-rows-[1fr] opacity-100"
              : "pointer-events-none grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0 overflow-hidden">
            <nav
              aria-label="Mobile navigation"
              className="max-h-[75vh] overflow-y-auto border-t border-gray-100 bg-white px-4 py-4 sm:px-6"
            >
              <div className="flex flex-col">
                {navItems.map((item) =>
                  item.name === "About Us" ? (
                    <div key={item.path} className="border-b border-gray-100">
                      <button
                        type="button"
                        aria-expanded={aboutOpen}
                        onClick={() => setAboutOpen((prev) => !prev)}
                        className={`flex w-full items-center justify-between py-3.5 text-left font-medium ${
                          isActive(item.path)
                            ? "text-blue-700"
                            : "text-gray-700"
                        }`}
                      >
                        {item.name}
                        <FaChevronDown
                          className={`text-xs transition-transform ${
                            aboutOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      <div
                        className={`grid overflow-hidden transition-[grid-template-rows] duration-200 ${
                          aboutOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                        }`}
                      >
                        <div className="min-h-0 overflow-hidden">
                          <div className="mb-3 ml-3 border-l-2 border-blue-100 pl-4">
                            {aboutSubmenu.map((sub) => (
                              <button
                                key={sub.path}
                                type="button"
                                onClick={() => goTo(sub.path)}
                                className={`block w-full py-2.5 text-left text-sm transition hover:text-blue-700 ${
                                  isActive(sub.path)
                                    ? "font-semibold text-blue-700"
                                    : "text-gray-600"
                                }`}
                              >
                                {sub.name}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <button
                      key={item.path}
                      type="button"
                      onClick={() => goTo(item.path)}
                      className={`border-b border-gray-100 py-3.5 text-left font-medium transition hover:text-blue-700 ${
                        isActive(item.path) ? "text-blue-700" : "text-gray-700"
                      }`}
                    >
                      {item.name}
                    </button>
                  ),
                )}

                {/* Mobile language selector */}
                <div
                  ref={langRef}
                  className="relative border-b border-gray-100 py-3"
                >
                  <button
                    type="button"
                    aria-expanded={langOpen}
                    onClick={() => setLangOpen((prev) => !prev)}
                    className="flex w-full items-center justify-between text-sm font-medium text-gray-700"
                  >
                    <span className="flex items-center gap-3">
                      <FaGlobe className="text-blue-700" />
                      Language: {selectedLanguage}
                    </span>
                    <FaChevronDown
                      className={`text-xs transition-transform ${
                        langOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {langOpen && renderLanguageMenu()}
                </div>

                <button
                  type="button"
                  onClick={() => goTo("/globalpresence")}
                  className="border-b border-gray-100 py-3.5 text-left font-medium text-gray-700 transition hover:text-blue-700"
                >
                  Global Presence
                </button>

                <button
                  type="button"
                  onClick={() => goTo("/sitemap")}
                  className="py-3.5 text-left font-medium text-gray-700 transition hover:text-blue-700"
                >
                  Sitemap
                </button>

                <button
                  type="button"
                  onClick={() => goTo("/enquiry")}
                  className="mt-4 flex w-full items-center justify-center gap-3 rounded-xl bg-blue-700 px-5 py-3.5 font-semibold text-white transition hover:bg-blue-800"
                >
                  Send an Enquiry
                  <FaArrowRight className="text-sm" />
                </button>

                <div className="mt-5 flex flex-wrap gap-x-5 gap-y-3 text-xs text-gray-500">
                  <a
                    href="mailto:info@brothersindia.com"
                    className="flex items-center gap-2 hover:text-blue-700"
                  >
                    <FaEnvelope />
                    Email Us
                  </a>

                  <a
                    href="tel:+917317018945"
                    className="flex items-center gap-2 hover:text-blue-700"
                  >
                    <FaPhoneAlt />
                    Call Us
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
