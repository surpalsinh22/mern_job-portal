// src/app.js
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const savedJobRoutes = require("./routes/savedJobRoutes");




const app = express();

//  middleware order matters
app.use(express.json());

app.use(cookieParser());

app.use(cors({
  origin: "https://your-vercel-app.vercel.app",
  credentials: true
}));
// routes
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/saved", savedJobRoutes);

module.exports = app;