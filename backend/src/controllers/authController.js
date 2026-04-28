// src/controllers/authController.js
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");

// helper: cookie options
const cookieOptions = {
  httpOnly: true,
  secure: true,
  sameSite: "none"
};

// SIGNUP
exports.signup = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role
    });

    const token = generateToken(user);

    res.cookie("token", token, cookieOptions);

    res.status(201).json({
      msg: "User created successfully",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// LOGIN
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(400).json({ msg: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({ msg: "Invalid credentials" });
    }

    const token = generateToken(user);

    res.cookie("token", token, cookieOptions);

    res.json({
      msg: "Login successful", 
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// LOGOUT
exports.logout = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    sameSite: "lax",
    secure: false
  });

  res.json({ msg: "Logged out successfully" });
};
// GET CURRENT USER
exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");

    res.json({
      msg: "User fetched successfully",
      user
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};