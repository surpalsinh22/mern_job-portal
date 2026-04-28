const express = require("express");
const router = express.Router();

const {
  createJob,
  getJobs,
  getJob,
  updateJob,
  deleteJob
} = require("../controllers/jobController");

const { protect, adminOnly } = require("../middleware/authMiddleware");

// PUBLIC ROUTES
router.get("/", getJobs);
router.get("/:id", getJob);

// ADMIN ROUTES
router.post("/", protect, adminOnly, createJob);
router.put("/:id", protect, adminOnly, updateJob);
router.delete("/:id", protect, adminOnly, deleteJob);

module.exports = router;