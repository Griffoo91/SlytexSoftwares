import User from '../models/Users.js';
import bcrypt from 'bcryptjs';
import jwt from'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config();

// Register User
export const registerUser = async (req, res) => {
  const { name, email, phoneNumber, password } = req.body;
  try {
    if(!email || !name || !phoneNumber || !password ){
      return res.status(400).json({message: "All fields are required"});
    }
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({ name, email, phoneNumber, password: hashedPassword });

    res.status(201).json({ message: 'User registered successfully', user });
  } catch (error) {
    console.error("Register Error:", error.message); // Debugging log
    res.status(500).json({ message: `Server error: ${error.message}` }); // Show error details
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if(!email || !password){
      return res.status(400).json({messagge: "Email and password are required"});
    }
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ message: 'User not found' });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: '1d' });

    res.json({ message: 'Login successful', user, token });
  } catch (error) {
    console.error("Login Error:", error.message); // Debugging log
    res.status(500).json({ message: `Server error: ${error.message}` }); // Show error details
  }
};

export default {registerUser,loginUser};