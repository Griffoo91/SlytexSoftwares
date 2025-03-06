import express from "express";
import cors from "cors";
import connectDB from "../config/db.js";
import authRoutes from "../routes/authRoutes.js";

const app = express();

// Middleware
app.use(express.json()); // Allows JSON request bodies
app.use(cors(
  {
    origin: ["http://localhost:5173", "https://slytexsoftwares.vercel.app"],// Allow only your frontend
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true
  }
));

// Connect to MongoDB
connectDB();

// API Routes
app.use("/api/auth/register", authRoutes); // This ensures the /api/auth/register route works

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
