// const express = require("express");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");

// const app = express(); 

// // middleware
// app.use(express.json());
// app.use(cookieParser());

// app.use(cors({
//   origin: ["http://localhost:5173", "http://localhost:5174"],
//   credentials: true
// }));

// // routes
// const authRoutes = require("./routes/authRoutes");
// const jobRoutes = require("./routes/jobRoutes");
// const applicationRoutes = require("./routes/applicationRoutes");
// const savedJobRoutes = require("./routes/savedJobRoutes");

// app.use("/api/auth", authRoutes);
// app.use("/api/jobs", jobRoutes);
// app.use("/api/applications", applicationRoutes);
// app.use("/api/saved", savedJobRoutes);

// module.exports = app;
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/authRoutes");
const jobRoutes = require("./routes/jobRoutes");
const applicationRoutes = require("./routes/applicationRoutes");
const savedJobRoutes = require("./routes/savedJobRoutes");

const app = express();

// ✅ ORDER IMPORTANT
app.use(express.json());
app.use(cookieParser());

// // ✅ CORS FIX (FINAL)
// app.use(cors({
//   origin: [
//     "http://localhost:5176",
//     "http://localhost:5173",
//     "https://mern-job-portal-xi.vercel.app"
//   ],
//   credentials: true
// }));
app.use(cors({
  origin: true,
  credentials: true
}));

// routes
app.use("/api/auth", authRoutes);
app.use("/api/jobs", jobRoutes);
app.use("/api/applications", applicationRoutes);
app.use("/api/saved", savedJobRoutes);

module.exports = app;