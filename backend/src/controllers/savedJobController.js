const SavedJob = require("../models/SavedJob");

// SAVE JOB

exports.saveJob = async (req, res) => {
  try {
    const userId = req.user.id;
    const { jobId } = req.body;

    if (!jobId) {
      return res.status(400).json({ msg: "JobId required" });
    }

    const exists = await SavedJob.findOne({ userId, jobId });

    if (exists) {
      return res.status(400).json({ msg: "Already saved this job" });
    }

    const saved = await SavedJob.create({
      userId,
      jobId,
    });

    res.status(201).json({
      msg: "Job saved successfully",
      saved,
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// GET SAVED JOBS
exports.getSavedJobs = async (req, res) => {
  try {
    const jobs = await SavedJob.find({ userId: req.user.id })
      .populate("jobId")
      .sort({ createdAt: -1 });

    res.status(200).json(jobs);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// DELETE SAVED JOB
exports.deleteSavedJob = async (req, res) => {
  try {
    const saved = await SavedJob.findById(req.params.id);

    if (!saved) {
      return res.status(404).json({ msg: "Not found" });
    }

    await SavedJob.findByIdAndDelete(req.params.id);

    res.json({ msg: "Removed from saved jobs" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};