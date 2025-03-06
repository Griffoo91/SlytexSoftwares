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

app.get('/', (req, res) => {
  res.status(200).json({
    status: 'success',
    message: 'Slytex Software Solutions API is running',
    timestamp: new Date().toISOString()
  });
});

// API Routes
app.use("/api/auth", authRoutes); // This ensures the /api/auth/register route works

// Start Server
const PORT = process.env.PORT || 5000;
export default app;
