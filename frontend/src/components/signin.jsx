import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const SignIn = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
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
    if (!formData.email || !formData.password) {
      setError("Email and password are required");
      setLoading(false);
      return;
    }

    try {
      // Replace with your actual backend URL
      const response = await fetch("https://slytexsoftwares.vercel.app/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Login failed");
      }

      // Store the token in localStorage
      localStorage.setItem("token", data.token);
      localStorage.setItem("user", JSON.stringify(data.user));

      // Redirect to home page after successful login
      navigate("/");
    } catch (err) {
      setError(err.message);
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-fixed flex items-center justify-center h-screen bg-cover bg-center">
      {/*Dark Overlay for Visibility */}
      <div className="absolute inset-0 bg-opacity-50 backdrop-blur-lg"></div>

      {/* Glassmorphic Card */}
      <div className="relative z-10 bg-white bg-opacity-10 backdrop-blur-xl border border-white/20 
                      p-8 sm:p-10 rounded-2xl shadow-2xl w-full max-w-sm sm:w-96">
        <h2 className="text-3xl font-bold text-center text-white mb-6">Sign In</h2>

        {error && (
          <div className="mb-4 p-3 bg-red-500 bg-opacity-30 border border-red-500 rounded-lg text-white text-sm">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-5">
            <label className="block text-white text-sm mb-2">Email</label>
            <div className="flex items-center bg-white bg-opacity-20 p-3 rounded-lg border border-white/30">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full bg-transparent text-white outline-none placeholder-gray-300"
                required
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="mb-5">
            <label className="block text-white text-sm mb-2">Password</label>
            <div className="flex items-center bg-white bg-opacity-20 p-3 rounded-lg border border-white/30">
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                className="w-full bg-transparent text-white outline-none placeholder-gray-300"
                required
              />
            </div>
          </div>

          {/* Login Button */}
          <button 
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-900 text-white 
                      rounded-lg font-semibold text-lg shadow-lg hover:opacity-90 transition
                      disabled:opacity-50"
          >
            {loading ? "Signing in..." : "Login"}
          </button>
        </form>

        {/* Register Link */}
        <p className="text-center text-neutral-200 text-sm mt-6">
          Don't have an account?{" "}
          <Link to="/register" className="text-blue-400 font-semibold hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;