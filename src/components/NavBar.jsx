import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/slyTexSoftwareSolutions3.png";
import { navItems } from "../constants";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const toggleNavbar = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 bg-white/10 backdrop-blur-md border-b border-gray-700/50 shadow-lg">
      <div className="container mx-auto px-6 flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center">
          <img className="h-10 w-auto mr-3" src={logo} alt="Slytex Logo" />
          <span className="text-xl font-semibold text-white">Slytex Softwares</span>
        </div>

        {/* Desktop Navigation */}
        <ul className="hidden lg:flex space-x-8 text-white">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={item.href} className="hover:text-blue-400 transition duration-300">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Auth Buttons (Desktop) */}
        <div className="hidden lg:flex space-x-4">
          <Link to="/signin" className="py-2 px-4 border border-white rounded-lg text-white hover:bg-white hover:text-black transition">
            Sign In
          </Link>
          <Link to="/register" className="py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:opacity-90 transition">
            Sign Up
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden text-white" onClick={toggleNavbar}>
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md flex flex-col items-center justify-center transform ${mobileOpen ? "translate-x-0" : "translate-x-full"} transition-transform duration-300 lg:hidden z-50`}>
        <button className="absolute top-5 right-6 text-white" onClick={toggleNavbar}>
          <X size={32} />
        </button>
        
        <ul className="space-y-6 text-center text-white text-lg">
          {navItems.map((item, index) => (
            <li key={index}>
              <Link to={item.href} onClick={toggleNavbar} className="hover:text-blue-400 transition">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex space-x-4">
          <Link to="/signin" className="py-2 px-4 border border-white rounded-lg text-white hover:bg-white hover:text-black transition">
            Sign In
          </Link>
          <Link to="/register" className="py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:opacity-90 transition">
            Sign Up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
