import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar" ;
import ServiceSection from "./components/ServiceSection";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <NavBar />
      <div className="max-w-7xl mx-auto px-6">
          <HeroSection />
          <ServiceSection />
          <Workflow />
          <Pricing />
          <Testimonials />
          <Footer />
      </div>
    </>
  );
}

export default App;