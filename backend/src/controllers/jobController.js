const Job = require("../models/Job");

// CREATE JOB (ADMIN)
exports.createJob = async (req, res) => {
  try {
    const job = await Job.create(req.body);
    res.status(201).json({
      msg: "Job created successfully",
      job
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// GET ALL JOBS (PUBLIC)
exports.getJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ createdAt: -1 });
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// GET SINGLE JOB
exports.getJob = async (req, res) => {
  try {
    const job = await Job.findById(req.params.id);
    res.json(job);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// UPDATE JOB (ADMIN)
exports.updateJob = async (req, res) => {
  try {
    const job = await Job.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.json({
      msg: "Job updated successfully",
      job
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// DELETE JOB (ADMIN)
exports.deleteJob = async (req, res) => {
  try {
    await Job.findByIdAndDelete(req.params.id);

    res.json({ msg: "Job deleted successfully" });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};