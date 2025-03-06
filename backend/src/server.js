import express from'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {connectDB} from './config/db.js';
import authRoutes from'./routes/authRoutes.js';

// Load environment variables
dotenv.config();


const app = express();

// Middleware
app.use(express.json()); // Body parser
app.use(cors(
  { 
    origin: ['https://slytexsoftwares.vercel.app'],
    methods: ["POST", "GET"],
    credentials: true
    }
  )
  ); // Enable CORS

// Routes
app.use('/api/auth', authRoutes);

// Default Route (for testing API)
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Global Error Handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
});

// Start Server
const PORT=process.env.PORT || 5000;
connectDB()
app.listen(
  PORT, () => {
    console.log(`Server running on port ${PORT}`);
  
  }
);
