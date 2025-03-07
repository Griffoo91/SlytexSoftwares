import express from "express";
import cors from "cors";
import connectDB from "../config/db.js";
import authRoutes from "../routes/authRoutes.js";

const app = express();

// Basic middleware
app.use(express.json()); // Allows JSON request bodies

// Enhanced CORS configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://slytexsoftwares.vercel.app");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  
  // Handle preflight requests explicitly
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  
  next();
});

// Then apply the standard cors middleware as a backup
app.use(cors({
  origin: "https://slytexsoftwares.vercel.app",
  methods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
  credentials: true
}));

// Connect to MongoDB
connectDB();

// Health check route
app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Slytex Software Solutions API is running',
    timestamp: new Date().toISOString()
  });
});

// Test route - add this to verify the API is working
app.get('/test', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'API test endpoint is working',
    timestamp: new Date().toISOString()
  });
});

// API Routes - Make sure these are mounted correctly
app.use("/auth", authRoutes); // Changed from "/api/auth" to just "/auth"

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    status: 'error',
    message: 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err.message : undefined
  });
});

// Start Server for local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

export default app;