// const express = require("express");
// const router = express.Router();

// const {
//   applyJob,
//   getUserApplications,
//   getAllApplications,
//   updateStatus
// } = require("../controllers/applicationController");

// const { protect, adminOnly } = require("../middleware/authMiddleware");

// // USER
// router.post("/apply", protect, applyJob);
// router.get("/me", protect, getUserApplications);

// // ADMIN
// router.get("/admin/all", protect, adminOnly, getAllApplications);
// router.put("/status/:id", protect, adminOnly, updateStatus);

// module.exports = router;
const express = require("express");
const router = express.Router();

const {
  applyJob,
  getUserApplications,
  getAllApplications,
  updateStatus
} = require("../controllers/applicationController");

const { protect, adminOnly } = require("../middleware/authMiddleware");

/* =========================
   USER ROUTES
========================= */

// Apply job (must be logged in)
router.post("/apply", protect, applyJob);

// Get logged-in user applications
router.get("/me", protect, getUserApplications);


/* =========================
   ADMIN ROUTES
========================= */

// Get all applications (admin only)
router.get("/admin/all", protect, adminOnly, getAllApplications);

// Update application status (admin only)
router.put("/status/:id", protect, adminOnly, updateStatus);

module.exports = router;