import React from "react";
import { Link } from "react-router-dom";
import SlytexBg from "../assets/bg2.jpg";

const SignIn = () => {
  return (
    <div
      className="relative bg-fixed flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${SlytexBg})` }}
    >
      {/*Dark Overlay for Visibility */}
      <div className="absolute inset-0 bg-opacity-50 backdrop-blur-lg"></div>

      {/* Glassmorphic Card */}
      <div className="relative z-10 bg-white bg-opacity-10 backdrop-blur-xl border border-white/20 
                      p-8 sm:p-10 rounded-2xl shadow-2xl w-full max-w-sm sm:w-96">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Sign In</h2>

        <form>
          {/* Email Input */}
          <div className="mb-5">
            <label className="block text-white text-sm mb-2">Email</label>
            <div className="flex items-center bg-white bg-opacity-20 p-3 rounded-lg border border-white/30">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent text-white outline-none placeholder-gray-300"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-5">
            <label className="block text-white text-sm mb-2">Password</label>
            <div className="flex items-center bg-white bg-opacity-20 p-3 rounded-lg border border-white/30">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full bg-transparent text-white outline-none placeholder-gray-300"
              />
            </div>
          </div>

          {/* Login Button */}
          <button className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-900 text-white 
                             rounded-lg font-semibold text-lg shadow-lg hover:opacity-90 transition">
            Login
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-neutral-200 text-sm mt-6">
          Don’t have an account?{" "}
          <Link to="/register" className="text-blue-400 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
