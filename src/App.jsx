
import React, { useEffect } from "react";
// import { FaWhatsapp } from "react-icons/fa";
import Homes from './Page/Homes/Index'
import './App.css'
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Navbar from './Shared/Navbar/Navbar'
import GlobalPresence from "./Components/GlobalPresence/GlobalPresence";
import Client from "./Components/Client/Client";
import Sitemap from "./Components/Sitemap /Sitemap";
import Products from "./Components/Products/Products";
import News_Events from "./Components/News-Events/News_Events";
import Application from "./Components/Application/Application";
import Contact_Us from "./Components/Contact_Us/Contact_Us";
import Enquiry from "./Components/Enquiry/Enquiry";
import About from "./Components/About/About";
import Card_Detail from "./Components/Card_Detail/Card_Detail";
import Image_Detail from "./Components/Image_Detail/Image_Detail";
// import Login from "./Components/Login/Login";



function ScrollToTop() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <>
      <ScrollToTop />

      <Navbar />
      <Routes>
        <Route path="/" element={<Homes/>} />
        <Route path="/globalpresence" element={<GlobalPresence/>}/>
        <Route path="/client" element={<Client/>}/>
        <Route path="/sitemap" element={<Sitemap/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path="/news_events" element={<News_Events/>}/>
        <Route path="/application" element={<Application/>}/>
        <Route path="/contact_us" element={<Contact_Us/>}/>
        <Route path="/enquiry" element={<Enquiry/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/card_detail" element={<Card_Detail/>}/>
         <Route path="/image_detail" element={<Image_Detail/>}/>


        









       



      </Routes>

      {/* WhatsApp  Button */}
      {/* <a
        href="https://wa.me/917317018945"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 z-50 left-10 bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition duration-300"
      >
        <FaWhatsapp size={30} />
      </a> */}
    </>
  );
}

export default App;