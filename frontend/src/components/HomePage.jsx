import React, { useEffect } from "react";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import Workflow from "./Workflow";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import { useLocation } from "react-router-dom";

function HomePage() {
  const location = useLocation();
  
  // If URL has a hash, scroll to that element after render
  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <div className="max-w-7xl mx-auto px-6">
      <HeroSection />
      <div id="services"><ServiceSection /></div>
      <div id="workflow"><Workflow /></div>
      <div id="pricing"><Pricing /></div>
      <div id="testimonials"><Testimonials /></div>
      <Footer />
    </div>
  );
}

export default HomePage;