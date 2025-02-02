import React from "react";
import { Link } from "react-router-dom";
import SlytexBg from "../assets/slytexbg2.jpg";

const SignIn = () => {
  return (
    <div
      className="relative flex items-center justify-center h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${SlytexBg})` }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
      
      <div className="relative bg-white bg-opacity-20 backdrop-blur-md p-8 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center text-white mb-4">Login</h2>
        <form>
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
            <label className="block text-white text-sm mb-1">Password</label>
            <div className="flex items-center bg-white bg-opacity-20 p-2 rounded-md">
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-transparent text-white outline-none placeholder-gray-300"
              />
            </div>
          </div>
          <button className="w-full bg-black text-white py-2 rounded-md hover:bg-gray-800 transition">
            Login
          </button>
        </form>
        <p className="text-center text-white text-sm mt-4">
          Don’t have an account? <Link to="/register" className="underline">Register</Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
