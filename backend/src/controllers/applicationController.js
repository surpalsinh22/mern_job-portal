// const Application = require("../models/Application");
// const sendEmail = require("../utils/sendEmail");

// // APPLY JOB (USER)
// exports.applyJob = async (req, res) => {
//   try {
//     const userId = req.user.id;

//     const { jobId, fullName, email, phone, experience, resume } = req.body;

//     if (!jobId || !fullName || !email) {
//       return res.status(400).json({ msg: "Missing required fields" });
//     }

//     // check already applied
//     const exists = await Application.findOne({ userId, jobId });

//     if (exists) {
//       return res.status(400).json({ msg: "Already applied" });
//     }

//     // create application
//     const application = await Application.create({
//       userId,
//       jobId,
//       fullName,
//       email,
//       phone,
//       experience,
//       resume,
//       status: "pending"
//     });

//     // 🔥 SEND EMAIL (apply)
//     await sendEmail(
//       email,
//       "Job Application Submitted",
//       `Hello ${fullName},

// You have successfully applied for this job.

// Status: Pending

// We will notify you once your application is reviewed.

// - Team`
//     );

//     res.status(201).json({
//       msg: "Applied successfully",
//       application
//     });

//   } catch (err) {
//     console.log("Apply Error:", err.message);
//     res.status(500).json({ msg: err.message });
//   }
// };


// // GET USER APPLICATIONS
// exports.getUserApplications = async (req, res) => {
//   try {
//     const apps = await Application.find({ userId: req.user.id })
//       .populate("jobId")
//       .sort({ createdAt: -1 });

//     res.status(200).json(apps);
//   } catch (err) {
//     console.log("Get User Apps Error:", err.message);
//     res.status(500).json({ msg: err.message });
//   }
// };


// // ADMIN - GET ALL APPLICATIONS
// exports.getAllApplications = async (req, res) => {
//   try {
//     const apps = await Application.find()
//       .populate("jobId")
//       .sort({ createdAt: -1 });

//     res.status(200).json(apps);
//   } catch (err) {
//     console.log("Get All Apps Error:", err.message);
//     res.status(500).json({ msg: err.message });
//   }
// };


// // UPDATE STATUS (ADMIN)
// exports.updateStatus = async (req, res) => {
//   try {
//     const { status } = req.body;

//     if (!["pending", "accepted", "rejected"].includes(status)) {
//       return res.status(400).json({ msg: "Invalid status" });
//     }

//     const app = await Application.findByIdAndUpdate(
//       req.params.id,
//       { status },
//       { new: true }
//     );

//     if (!app) {
//       return res.status(404).json({ msg: "Application not found" });
//     }

//     // 🔥 SEND EMAIL (status update)
//     await sendEmail(
//       app.email,
//       "Application Status Update",
//       `Hello ${app.fullName},

// Your application status has been updated.

// New Status: ${status.toUpperCase()}

// - Team`
//     );

//     res.json({
//       msg: "Status updated",
//       application: app
//     });

//   } catch (err) {
//     console.log("Update Status Error:", err.message);
//     res.status(500).json({ msg: err.message });
//   }
// };
const Application = require("../models/Application");
const sendEmail = require("../utils/sendEmail");

/* =========================
   APPLY JOB (USER)
========================= */
exports.applyJob = async (req, res) => {
  try {

    console.log("USER:", req.user);
console.log("BODY:", req.body);

    const userId = req.user.id;
    const { jobId, fullName, email, phone, experience, resume } = req.body;

    // validation
    if (!jobId || !fullName || !email) {
      return res.status(400).json({ msg: "Missing required fields" });
    }

    // already applied check
    const exists = await Application.findOne({ userId, jobId });

    if (exists) {
      return res.status(400).json({ msg: "Already applied" });
    }

    // save application
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

    console.log("✅ APPLICATION SAVED:", application._id);

    /* =========================
       EMAIL (NON-CRASH SAFE)
    ========================= */
    try {
      await sendEmail(
        email,
        "Job Application Submitted",
        `Hi ${fullName},

Your application has been submitted successfully.

Status: Pending

We will notify you after review.

- Team`
      );

      console.log("📧 EMAIL SENT SUCCESSFULLY");
    } catch (emailErr) {
      // IMPORTANT: email fail should NOT break API
      console.log("⚠️ EMAIL FAILED:", emailErr.message);
    }

    return res.status(201).json({
      msg: "Applied successfully",
      application
    });

  } catch (err) {
    console.log("❌ APPLY ERROR:", err.message);
    return res.status(500).json({ msg: "Server error" });
  }
};


/* =========================
   GET USER APPLICATIONS
========================= */
exports.getUserApplications = async (req, res) => {
  try {
    const apps = await Application.find({ userId: req.user.id })
      .populate("jobId")
      .sort({ createdAt: -1 });

    return res.status(200).json(apps);

  } catch (err) {
    console.log("❌ GET USER APPS ERROR:", err.message);
    return res.status(500).json({ msg: "Server error" });
  }
};


/* =========================
   ADMIN - GET ALL
========================= */
exports.getAllApplications = async (req, res) => {
  try {
    const apps = await Application.find()
      .populate("jobId")
      .sort({ createdAt: -1 });

    return res.status(200).json(apps);

  } catch (err) {
    console.log("❌ GET ALL APPS ERROR:", err.message);
    return res.status(500).json({ msg: "Server error" });
  }
};


/* =========================
   UPDATE STATUS (ADMIN)
========================= */
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

    // email on status update
    try {
      await sendEmail(
        app.email,
        "Application Status Update",
        `Hi ${app.fullName},

Your application status is now: ${status.toUpperCase()}

- Team`
      );
    } catch (err) {
      console.log("EMAIL UPDATE FAILED:", err.message);
    }

    return res.json({
      msg: "Status updated",
      application: app
    });

  } catch (err) {
    console.log("❌ UPDATE STATUS ERROR:", err.message);
    return res.status(500).json({ msg: "Server error" });
  }
};