import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const MONGO_URI = process.env.MONGO_URI || "mongodb+srv://omboggorised91:admin1234@cluster0.yd0sm.mongodb.net/SlyTexSoftwares?retryWrites=true&w=majority&appName=Cluster0&connectTimeoutMS=10000&socketTimeoutMS=45000"
;

if (!MONGO_URI) {
  console.error("❌ MONGO_URI is not defined in environment variables");
  process.exit(1);
}

const connectDB = async () => {
  try {
    // More comprehensive connection options
    const conn = await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 10000, // Increased timeout
      socketTimeoutMS: 45000, // Socket timeout
      family: 4 // Use IPv4, some networks have IPv6 issues
    });
    
    // Add event listeners for connection monitoring
    mongoose.connection.on('connected', () => {
      console.log('✅ Mongoose connected to MongoDB');
    });

    mongoose.connection.on('error', (err) => {
      console.error('❌ Mongoose connection error:', err);
    });

    mongoose.connection.on('disconnected', () => {
      console.warn('⚠️ Mongoose disconnected from MongoDB');
    });

    return conn;
  } catch (error) {
    console.error(`❌ MongoDB Connection Error: ${error.message}`);
    console.error('Detailed Error:', error);
    
    // Provide more specific error information
    if (error.name === 'MongoNetworkError') {
      console.error('Network-related MongoDB connection issue');
    } else if (error.name === 'MongoError') {
      console.error('MongoDB server-related error');
    }

    // Re-throw to allow caller to handle
    throw error;
  }
};

export default connectDB;