import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();

// Basic middleware
app.use(express.json());

// CORS configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || "https://slytexsoftwares.vercel.app",
  methods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  credentials: true
}));

// Connect to MongoDB
try {
  connectDB();
} catch (error) {
  console.error("MongoDB Connection Error:", error);
}

// Health check route
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'API is running',
    timestamp: new Date().toISOString()
  });
});

// Routes
app.use("/auth", authRoutes);

// Comprehensive error handling middleware
app.use((err, req, res, next) => {
  console.error('Unhandled Error:', err);
  
  // Log full error details in development
  const errorResponse = {
    status: 'error',
    message: 'Internal Server Error',
    ...(process.env.NODE_ENV === 'development' && { 
      errorDetails: {
        message: err.message,
        stack: err.stack
      }
    })
  };

  res.status(500).json(errorResponse);
});

// Catch-all for unhandled routes
app.use((req, res) => {
  res.status(404).json({
    status: 'error',
    message: 'Route not found'
  });
});

export default app;