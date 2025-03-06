import express from "express";
import cors from "cors";
import connectDB from "../config/db.js";
import authRoutes from "../routes/authRoutes.js";

const app = express();

// Middleware
app.use(express.json()); // Allows JSON request bodies
app.use(cors({
  origin: 'https://slytexsoftwares.vercel.app',
  methods: ['POST', 'GET', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization','X-Requested-With'],
  credentials: true
}));

app.options('*', cors()); 

// Connect to MongoDB
connectDB();

// API Routes
app.use("/api/auth", authRoutes); // This ensures the /api/auth/register route works

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
