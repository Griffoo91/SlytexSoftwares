import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/slyTexSoftwareSolutions3.png";
import { navItems } from "../constants";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  
  const toggleNavbar = () => {
    setMobileOpen(!mobileOpen);
    document.body.style.overflow = mobileOpen ? "hidden" : "auto";
  };

  return (
    <nav className="fixed top-0 z-50 py-3 bg-white/10 backdrop-blur-md border-b border-gray-700/50 shadow-lg w-full">
      <div className={`fixed inset-0 transition-all duration-300 ${mobileOpen ? "bg-black/90" : "bg-transparent"}`} onClick={toggleNavbar} aria-hidden="true" />
      
      <div className="container mx-auto px-4 sm:px-6 flex justify-between items-center relative z-50">
        
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
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
          onClick={toggleNavbar}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Side Navigation Menu */}
        <div className={`
          fixed top-0 bottom-0 right-0 w-80 max-w-[80vw]
          bg-gray-900 text-white border-l border-white/10 shadow-xl
          flex flex-col
          ${mobileOpen ? "translate-x-0" : "translate-x-full"}
          transition-all duration-300 ease-in-out
          lg:hidden z-50
        `}>
          <div className="flex flex-col h-full min-h-[60vh]">
            {/* Mobile Menu Header */}
            <div className="flex justify-between items-center p-4 border-b border-white/10">
              <span className="text-lg font-semibold">Menu</span>
              <button 
                className="text-white p-1.5 hover:bg-white/10 rounded-full focus:outline-none"
                onClick={toggleNavbar}
                aria-label="Close navigation menu"
              >
                <X size={20} />
              </button>
            </div>

            {/* Mobile Menu Items */}
            <div className="flex-grow overflow-y-auto py-4 px-4">
              <ul className="space-y-3">
                {navItems.map((item, index) => (
                  <li key={index}>
                    <Link 
                      to={item.href} 
                      onClick={toggleNavbar}
                      className="block px-4 py-3 text-white bg-gray-800 hover:bg-blue-600 rounded-lg transition-colors duration-300 text-sm font-medium"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Mobile Auth Buttons */}
            <div className="p-4 space-y-2 border-t border-white/10 bg-gray-800">
              <Link 
                to="/signin" 
                onClick={toggleNavbar}
                className="block py-3 text-center rounded-lg border border-white/20 text-white bg-gray-700 hover:bg-blue-600 transition-colors duration-300 text-sm font-medium"
              >
                Sign In
              </Link>
              <Link 
                to="/register" 
                onClick={toggleNavbar}
                className="block py-3 text-center rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-300 text-sm font-medium shadow-lg"
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
