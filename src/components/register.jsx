import React from "react";
import { Link } from "react-router-dom";
import SlytexBg from "../assets/bg2.jpg";

const SignUp = () => {
  return (
    <div
      className="relative flex bg-fixed items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${SlytexBg})` }}
    >
      {/* Dark Overlay for Better Visibility */}
      <div className="absolute inset-0 bg-opacity-50 backdrop-blur-lg"></div>

      {/* Glassmorphic Card */}
      <div className="relative z-10 bg-white bg-opacity-10 backdrop-blur-xl border border-white/20 
                      p-8 sm:p-10 rounded-2xl shadow-2xl w-full max-w-sm sm:w-96">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-white text-sm mb-1">Full Name</label>
            <div className="flex items-center bg-white bg-opacity-20 p-2 rounded-md">
              <input
                type="text"
                placeholder="Full Name"
                className="w-full bg-transparent text-white outline-none placeholder-gray-300"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-1">Email</label>
            <div className="flex items-center bg-white bg-opacity-20 p-2 rounded-md">
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent text-white outline-none placeholder-gray-300"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-1">Phone Number</label>
            <div className="flex items-center bg-white bg-opacity-20 p-2 rounded-md">
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full bg-transparent text-white outline-none placeholder-gray-300"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-1">Password</label>
            <div className="flex items-center bg-white bg-opacity-20 p-2 rounded-md">
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent text-white outline-none placeholder-gray-300"
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-1">Confirm Password</label>
            <div className="flex items-center bg-white bg-opacity-20 p-2 rounded-md">
              <input
                type="password"
                placeholder="Confirm Password"
                className="w-full bg-transparent text-white outline-none placeholder-gray-300"
              />
            </div>
          </div>
          <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-900 text-white 
                             rounded-lg font-semibold text-lg shadow-lg hover:opacity-90 transition">
            Register
          </button>
        </form>
        <p className="text-center text-white text-sm mt-4">
          Already have an account? <Link to="/signin" className="underline">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
