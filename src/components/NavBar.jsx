import {Menu, X} from "lucide-react";
import {useState} from "react";
import logo from "../assets/slyTexSoftwareSolutions3.png";
import {navItems} from "../constants";
import { Link } from "react-router-dom";

const NavBar = () => {
    const [MobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const toggleNavbar = () => {
        setMobileDrawerOpen(!MobileDrawerOpen);
    }
  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
        <div className="container px-4 mx-auto relative text-sm">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0">
                    <img className="h-10 w-10 mr-2" src={logo} alt="logo" />
                    <span className="text-xl tracking-tight">Slytex Softwares</span>
                </div>
                <ul className="hidden lg:flex ml-14 space-x-12">
                    {navItems.map((item, index) => 
                        <li key={index}>
                            <Link to={item.href}>{item.label}</Link>
                        </li>
                    )}
                </ul>
                <div className="hidden lg:flex justify-center space-x-12 items-center">
                    <Link to="/signin" className="py-2 px-3 border rounded-md">
                        Sign In
                    </Link>
                    <Link to="/register" className="bg-gradient-to-r from-blue-500 to-blue-800 py-2 px-3 rounded-md">
                        Sign Up
                    </Link>
                </div>
                <div className="lg:hidden md:flex flex-col justify-end">
                    <button onClick={toggleNavbar}>
                        {MobileDrawerOpen ? <X/> : <Menu/>}
                    </button>
                </div>
            </div>
            {MobileDrawerOpen && (
                <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
                    <ul>
                        {navItems.map((item, index) => (
                            <li key={index} className="py-4">
                                <Link to={item.href}>{item.label}</Link>
                            </li>
                            ))
                        }
                    </ul>
                    <div className="flex space-x-6">
                        <a href="#" className="py-2 px-3 border rounded-md">
                            Sign In
                        </a>
                        <a href="#" className="py-2 px-3 border rounded-md bg-gradient-r from-blue-400 to-blue-800">
                            Sign Up
                        </a>
                    </div>
                </div>)}
        </div>
    </nav>
  )
};

export default NavBar