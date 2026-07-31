const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const savedJobRoutes = require("./routes/savedJobRoutes");

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use(cors({
  origin: [
    "https://mern-job-portal-xi.vercel.app",
    "https://mern-job-portal-git-main-surpalsinhramlavat-gmailcoms-projects.vercel.app",
    "https://mern-job-portal-2xek48rns-surpalsinhramlavat-gmailcoms-projects.vercel.app"
  ],
  credentials: true
}));

app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/saved", savedJobRoutes);

module.exports = app;