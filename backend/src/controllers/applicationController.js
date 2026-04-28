const Application = require("../models/Application");

// APPLY JOB (USER)
exports.applyJob = async (req, res) => {
  try {
    const userId = req.user.id;

    const { jobId, fullName, email, phone, experience, resume } = req.body;

    if (!jobId || !fullName || !email) {
      return res.status(400).json({ msg: "Missing required fields" });
    }

    const exists = await Application.findOne({ userId, jobId });

    if (exists) {
      return res.status(400).json({ msg: "Already applied" });
    }

    const application = await Application.create({
      userId,
      jobId,
      fullName,
      email,
      phone,
      experience,
      resume,
      status: "pending"
    });

    res.status(201).json({ msg: "Applied successfully", application });

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// GET USER APPLICATIONS
exports.getUserApplications = async (req, res) => {
  try {
    const apps = await Application.find({ userId: req.user.id })
      .populate("jobId")
      .sort({ createdAt: -1 });

    res.status(200).json(apps);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// ADMIN - GET ALL
exports.getAllApplications = async (req, res) => {
  try {
    const apps = await Application.find()
      .populate("jobId")
      .sort({ createdAt: -1 });

    res.status(200).json(apps);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
// UPDATE STATUS (ADMIN)
exports.updateStatus = async (req, res) => {
  try {
    const { status } = req.body;

    if (!["pending", "accepted", "rejected"].includes(status)) {
      return res.status(400).json({ msg: "Invalid status" });
    }

    const app = await Application.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!app) {
      return res.status(404).json({ msg: "Application not found" });
    }

    res.json({ msg: "Updated", application: app });

  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};