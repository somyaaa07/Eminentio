import React from 'react'
import { BrowserRouter as Router , Route ,Routes } from 'react-router-dom'
import HeroSection from './pages/home/Herosection'
import TaxNavbar from './common/Navbar'
import WelcomeSection from './pages/home/WelcomrSection'
import SpecializedServices from './pages/home/SpecializedService'
import OurServices from './pages/home/OurService'
import AboutSection from './pages/home/AboutSection'
import WhyChooseUs from './pages/home/WhyChooseUs'
import BlogSection from './pages/home/BlogSection'
import Footer from './common/Footer'
import Testimonials from './pages/home/TestimonalSection'
import ContactPage from './pages/contact/Contact'
import Regulatory from './pages/Regularty/Regularity'
import AboutPage from './pages/about/About'
export default function App() {
  return (
   <Router>
    <TaxNavbar/>
    <Routes>
      <Route path="/" element={
        <div>
          <HeroSection/>
          <WelcomeSection/>
        
          <OurServices/>
            <SpecializedServices/>
          <AboutSection/>
          <WhyChooseUs/>
          <BlogSection/>
          <Testimonials/>

        </div>
      }/>

      <Route path="/contact" element={
<ContactPage/>
      }/>

    <Route path="/regulatory/:regulatoryId" element={<Regulatory />} />

    <Route path="/about" element={
<AboutPage/>
    }/>
    
    </Routes>
    <Footer/>
   </Router>
  )
}
