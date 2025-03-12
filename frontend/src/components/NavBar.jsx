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
  className="lg:hidden text-white p-2 hover:bg-white/10 rounded-lg transition-colors focus:outline-none"
  onClick={toggleNavbar}
  aria-label="Toggle navigation menu"
  aria-expanded={mobileOpen}
>
  {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation Backdrop - only appears when menu is open */}
        {mobileOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm lg:hidden z-40"
          onClick={toggleNavbar}
          aria-hidden="true"
        />
      )}

          {/* Mobile Side Navigation Menu */}
        <div className={`
  fixed top-0 bottom-0 right-0 w-80 max-w-[80vw]
  bg-gradient-to-b from-gray-900 to-black
  border-l border-white/10
  flex flex-col
  ${mobileOpen ? "translate-x-0 shadow-2xl" : "translate-x-full"}
  transition-all duration-300 ease-in-out
  lg:hidden z-50 h-full overflow-hidden
`}>
  <div className="flex flex-col h-full">
    {/* Mobile Menu Header */}
    <div className="flex justify-between items-center p-4 border-b border-white/10">
      <Link to="/" className="flex items-center space-x-2" onClick={toggleNavbar}>
        <img className="h-8 w-auto" src={logo} alt="Slytex Logo" />
        <span className="text-lg font-semibold text-white truncate">Slytex</span>
      </Link>
      <button 
        className="text-white p-1.5 hover:bg-white/10 rounded-full focus:outline-none"
        onClick={toggleNavbar}
        aria-label="Close navigation menu"
      >
        <X size={20} />
      </button>
    </div>

    {/* Mobile Menu Items */}
    <nav className="flex-grow overflow-y-auto py-4 px-2">
      <ul className="space-y-1">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link 
              to={item.href} 
              onClick={toggleNavbar}
              className="flex items-center px-4 py-2.5 text-white hover:bg-white/10 rounded-lg transition-colors duration-200 text-sm font-medium"
            >
              {item.icon && <span className="mr-3">{item.icon}</span>}
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>

    {/* Mobile Auth Buttons */}
    <div className="p-4 space-y-2 border-t border-white/10 mt-auto">
      <Link 
        to="/signin" 
        onClick={toggleNavbar}
        className="flex justify-center items-center py-2 text-center rounded-lg border border-white/20 text-white hover:bg-white/5 transition-colors duration-200 text-sm font-medium"
      >
        Sign In
      </Link>
      <Link 
        to="/register" 
        onClick={toggleNavbar}
        className="flex justify-center items-center py-2 text-center rounded-lg bg-blue-600 text-white hover:bg-blue-700 transition-all duration-200 text-sm font-medium shadow-lg"
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