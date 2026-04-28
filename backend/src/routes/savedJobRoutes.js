const express = require("express");
const router = express.Router();

const {
  saveJob,
  getSavedJobs,
  deleteSavedJob,
} = require("../controllers/savedJobController");

const { protect } = require("../middleware/authMiddleware");

// SAVE JOB

router.post("/save", protect, saveJob);

// GET SAVED JOBS

router.get("/", protect, getSavedJobs);

// DELETE SAVED JOB
router.delete("/:id", protect, deleteSavedJob);

module.exports = router;