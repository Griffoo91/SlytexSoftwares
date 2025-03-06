import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Form validation
    if (!formData.name || !formData.email || !formData.phoneNumber || !formData.password) {
      setError("All fields are required");
      setLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      setLoading(false);
      return;
    }

    try {
      // Prepare data for API - exclude confirmPassword
      const registrationData = {
        name: formData.name,
        email: formData.email,
        phoneNumber: formData.phoneNumber,
        password: formData.password
      };

      // Replace with your actual backend URL
      const response = await fetch("https://slytex-softwares-api.vercel.app/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(registrationData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Registration failed");
      }

      // Show success and redirect to signin
      alert("Registration successful! Please sign in.");
      navigate("/signin");
    } catch (err) {
      setError(err.message);
      console.error("Registration error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="relative flex bg-fixed items-center justify-center h-screen bg-cover bg-center"
    >
      {/* Dark Overlay for Better Visibility */}
      <div className="absolute inset-0 bg-opacity-50 backdrop-blur-lg"></div>

      {/* Glassmorphic Card */}
      <div className="relative z-10 bg-white bg-opacity-10 backdrop-blur-xl border border-white/20 
                      p-8 sm:p-10 rounded-2xl shadow-2xl w-full max-w-sm sm:w-96">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Sign Up</h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-500 bg-opacity-30 border border-red-500 rounded-lg text-white text-sm">
            {error}
          </div>
        )}
        
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-white text-sm mb-1">Full Name</label>
            <div className="flex items-center bg-white bg-opacity-20 p-2 rounded-md">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name"
                className="w-full bg-transparent text-white outline-none placeholder-gray-300"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-1">Email</label>
            <div className="flex items-center bg-white bg-opacity-20 p-2 rounded-md">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email"
                className="w-full bg-transparent text-white outline-none placeholder-gray-300"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-1">Phone Number</label>
            <div className="flex items-center bg-white bg-opacity-20 p-2 rounded-md">
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                placeholder="Phone Number"
                className="w-full bg-transparent text-white outline-none placeholder-gray-300"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-1">Password</label>
            <div className="flex items-center bg-white bg-opacity-20 p-2 rounded-md">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
                className="w-full bg-transparent text-white outline-none placeholder-gray-300"
                required
              />
            </div>
          </div>
          <div className="mb-4">
            <label className="block text-white text-sm mb-1">Confirm Password</label>
            <div className="flex items-center bg-white bg-opacity-20 p-2 rounded-md">
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Confirm Password"
                className="w-full bg-transparent text-white outline-none placeholder-gray-300"
                required
              />
            </div>
          </div>
          <button 
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-900 text-white 
                      rounded-lg font-semibold text-lg shadow-lg hover:opacity-90 transition
                      disabled:opacity-50"
          >
            {loading ? "Registering..." : "Register"}
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