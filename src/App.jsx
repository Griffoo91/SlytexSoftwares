import HeroSection from "./components/HeroSection";
import NavBar from "./components/NavBar" ;
import ServiceSection from "./components/ServiceSection";
import Workflow from "./components/Workflow";
import Pricing from "./components/Pricing";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import SignIn from "./components/signin";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function HomePage(){
  return (
    <div className="max-w-7xl mx-auto px-6">
      <HeroSection/>
      <div id="services"><ServiceSection/></div>
      <div id="workflow"><Workflow/></div>
      <div id="pricing"><Pricing/></div>
      <div id="testimonials"><Testimonials/></div>
      <Footer/>
    </div>
  )
}

function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/signin" element={<SignIn/>} />
      </Routes>
    </Router>
  );
}

export default App;