import React from 'react'
import Navbar from '../../Shared/Navbar/Navbar'
import Home from '../../Pages/Home/Home'
import FeaturesSection from '../../Pages/FeaturesSection/FeaturesSection'
import CapabilitiesSection from '../../Pages/CapabilitiesSection /CapabilitiesSection'
import StatsSection from '../../Pages/StatsSection/StatsSection'
import ProductsSection from '../../Pages/ProductsSection/ProductsSection'
import WhyChooseUs from '../../Pages/WhyChooseUs/WhyChooseUs'
import ImageSection from '../../Pages/ImageSection/ImageSection'
import ImportantFAQ from '../../Pages/ImportantFAQ/ImportantFAQ'
import VideoSection from '../../Pages/VideoSection/VideoSection'
import EnquirySection from '../../Pages/EnquirySection /EnquirySection '
import LatestNews from '../../Pages/LatestNews/LatestNews'
import LatestBlogs from '../../Pages/LatestBlogs/LatestBlogs'
import Footer from '../../Shared/Fooder/Footer'

const Index = () => {
  return (
    <>
        {/* <Navbar/> */}
        <Home/>
        <FeaturesSection/>
        <CapabilitiesSection/>
        <StatsSection/>
        <ProductsSection/>
        <WhyChooseUs/>
        <ImageSection/>
        <ImportantFAQ/>
        <VideoSection/>
        <EnquirySection/>
        <LatestNews/>
        <LatestBlogs/>
        <Footer/>
    </>
  )
}

export default Index