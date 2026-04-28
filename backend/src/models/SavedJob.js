const mongoose = require("mongoose");

const savedJobSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true
    },

    jobId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true
    }
  },
  { timestamps: true }
);

// prevent duplicate save (VERY IMPORTANT)
savedJobSchema.index({ userId: 1, jobId: 1 }, { unique: true });

module.exports = mongoose.model("SavedJob", savedJobSchema);