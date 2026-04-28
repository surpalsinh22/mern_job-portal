const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    userId: String,

    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job"
    },

    fullName: String,
    email: String,
    phone: String,
    experience: String,
    resume: String,

    status: {
      type: String,
      default: "pending"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);