// module.exports = mongoose.model("Job", jobSchema);
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema(
{
  title: { type: String, required: true },
  company: { type: String, required: true },

  location: { type: String, required: true },
  address: String,

  // SIMPLE SALARY SYSTEM
  salary: String,
  salaryRange: String,
  posted: String,

  experience: String,
  openings: Number,

  type: String,
  category: String,
  role: String,

  skills: [String],

  shortDesc: String,

  fullDescription: {
    about: String,
    companyInfo: String,
    responsibilities: [String],
    requirements: [String],
    perks: [String]
  },

  benefits: [String],

  companyWebsite: String,
  contactEmail: String,

  image: {
    type: String,
    default: ""
  }

},
{ timestamps: true }
);

module.exports = mongoose.model("Job", jobSchema);