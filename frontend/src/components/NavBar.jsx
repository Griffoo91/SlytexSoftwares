import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/slyTexSoftwareSolutions3.png";
import { navItems } from "../constants";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const toggleNavbar = () => {
    setMobileOpen(!mobileOpen);
    document.body.style.overflow = mobileOpen ? "auto" : "hidden";
  };

  return (
    <nav className="fixed top-0 z-50 py-3 bg-white/10 backdrop-blur-md border-b border-gray-700/50 shadow-lg w-full">
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-3">
          <img className="h-10 w-auto" src={logo} alt="Slytex Logo" />
          <span className="text-xl font-semibold text-white hidden sm:block">Slytex Softwares</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-8">
          <ul className="flex space-x-8 text-white">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link 
                  to={item.href} 
                  className="hover:text-blue-400 transition-colors duration-200 text-sm font-medium"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Auth Buttons (Desktop) */}
          <div className="flex space-x-4 ml-6">
            <Link 
              to="/signin" 
              className="py-2 px-4 border border-white rounded-lg text-white hover:bg-white hover:text-black transition-colors duration-200 text-sm font-medium"
            >
              Sign In
            </Link>
            <Link 
              to="/register" 
              className="py-2 px-4 rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-sm font-medium shadow-lg hover:shadow-blue-500/30"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
          onClick={toggleNavbar}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Mobile Navigation Menu */}
        <div className={`
          fixed inset-0 bg-black/90 backdrop-blur-xl
          flex flex-col
          ${mobileOpen ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
          transition-all duration-300 ease-out
          lg:hidden z-50 h-screen overflow-y-auto
        `}>
          <div className="container mx-auto px-4 sm:px-6">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center pt-6 pb-4 border-b border-white/10">
              <Link to="/" className="flex items-center space-x-3" onClick={toggleNavbar}>
                <img className="h-10 w-auto" src={logo} alt="Slytex Logo" />
                <span className="text-xl font-semibold text-white">Slytex Softwares</span>
              </Link>
              <button 
                className="text-white p-2 hover:bg-white/10 rounded-lg"
                onClick={toggleNavbar}
              >
                <X size={28} />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <ul className="py-8 space-y-4">
              {navItems.map((item, index) => (
                <li key={index}>
                  <Link 
                    to={item.href} 
                    onClick={toggleNavbar}
                    className="block py-3 px-4 text-white hover:bg-white/10 rounded-lg transition-colors duration-200 text-lg font-medium"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Auth Buttons */}
            <div className="border-t border-white/10 pt-8 pb-12 space-y-4">
              <Link 
                to="/signin" 
                onClick={toggleNavbar}
                className="block py-3 px-4 text-center border-2 border-white rounded-lg text-white hover:bg-white hover:text-black transition-colors duration-200 text-lg font-medium"
              >
                Sign In
              </Link>
              <Link 
                to="/register" 
                onClick={toggleNavbar}
                className="block py-3 px-4 text-center rounded-lg bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:from-blue-600 hover:to-blue-700 transition-all duration-200 text-lg font-medium shadow-lg hover:shadow-blue-500/30"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;