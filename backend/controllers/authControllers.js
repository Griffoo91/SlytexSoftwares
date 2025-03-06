import User from '../models/Users.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

// Ensure JWT_SECRET is available
const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
  console.error("JWT_SECRET is missing in .env file");
  process.exit(1);
}

// Register User
export const registerUser = async (req, res) => {
  const { name, email, phoneNumber, password } = req.body;
  try {
    if (!name || !email || !phoneNumber || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({ name, email, phoneNumber, password: hashedPassword });

    res.status(201).json({ message: "User registered successfully", user: { id: user._id, name, email, phoneNumber } });
  } catch (error) {
    console.error("Register Error:", process.env.NODE_ENV === "development" ? error.stack : error.message);
    res.status(500).json({ message: "Server error, please try again later" });
  }
};

// Login User
export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, JWT_SECRET, { expiresIn: "1d" });

    res.json({ message: "Login successful", user: { id: user._id, name: user.name, email: user.email, phoneNumber: user.phoneNumber }, token });
  } catch (error) {
    console.error("Login Error:", process.env.NODE_ENV === "development" ? error.stack : error.message);
    res.status(500).json({ message: "Server error, please try again later" });
  }
};
