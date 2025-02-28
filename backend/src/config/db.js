import dotenv from "./dotenv";
import mongoose, { mongo } from 'mongoose';

dotenv.config();

export const connectDB = async () => {
  try {
    mongoose.Promise = global.Promise;
    const conn = await mongoose.connect(process.env.MONGO_URI,
       {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true},
      );
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.error(`Error: ${error.message}`);
    //process.exit(1);
  }
};


//export default connectDB;
