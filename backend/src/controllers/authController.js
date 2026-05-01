// src/controllers/authController.js
const bcrypt = require("bcryptjs");
const User = require("../models/User");
const generateToken = require("../utils/generateToken");

const cookieOptions = {
  httpOnly: true,
  secure: true,        // REQUIRED for Render (HTTPS)
  sameSite: "none",    // REQUIRED for Vercel + Render
  path: "/"
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
  success: true,
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

    return res.json({
      success: true,
      msg: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    });

  } catch (err) {
    return res.status(500).json({ msg: err.message });
  }
};
// LOGOUT
exports.logout = (req, res) => {
res.clearCookie("token", {
  httpOnly: true,
  secure: true,
  sameSite: "none",
  path: "/"
});

res.json({ msg: "Logged out successfully" });
};

exports.getMe = async (req, res) => {
  try {
    console.log("REQ.USER:", req.user); 

    const user = await User.findById(req.user.id).select("-password");

    console.log("FOUND USER:", user); 

    res.json({
      msg: "User fetched successfully",
      user
    });
  } catch (err) {
    console.log("ERROR:", err.message); // 👈 add
    res.status(500).json({ msg: err.message });
  }
};

