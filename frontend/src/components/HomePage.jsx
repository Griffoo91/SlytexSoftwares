import HeroSection from "./HeroSection";
import ServiceSection from "./ServiceSection";
import Workflow from "./Workflow";
import Pricing from "./Pricing";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import Blog from "./Blog";


function HomePage() {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <HeroSection />
      <div id="services"><ServiceSection /></div>
      <div id="workflow"><Workflow /></div>
      <div id="pricing"><Pricing /></div>
      <div id="testimonials"><Testimonials /></div>
      <div id="blog"><Blog /></div>
      <Footer />
    </div>
  );
}

export default HomePage;
