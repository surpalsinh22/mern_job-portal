import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getJobById } from "../api/job";
import { AuthContext } from "../context/AuthContext";
import { saveJobApi } from "../api/savedJob";

import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaClock,
  FaUserTie,
} from "react-icons/fa";

export default function JobDetails() {
  // id route se le rahe hai
  const { id } = useParams();
  const navigate = useNavigate();

  // job ka data store karne ke liye
  const [job, setJob] = useState(null);

  // user login check
  const { user } = useContext(AuthContext);

  // apply button click
  const handleApply = () => {
    if (!user) {
      navigate("/login");
    } else {
      navigate(`/apply/${job._id}`);
    }
  };

  // save job
  const handleSave = async () => {
    if (!user) {
      navigate("/login");
      return;
    }

    const res = await saveJobApi(job._id);
    alert(res.msg);
  };

  // job fetch karna
  useEffect(() => {
    const fetchJob = async () => {
      const data = await getJobById(id);
      setJob(data);
    };
    fetchJob();
  }, [id]);

  // loading state
  if (!job) {
    return <div className="p-10 text-center text-gray-500">Loading...</div>;
  }

  const fd = job.fullDescription || {};

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg overflow-hidden">

        {/* HEADER */}
        <div className="p-6 flex flex-col md:flex-row gap-6 border-b">

          {/* company logo */}
          <div className="w-24 h-24 border rounded-xl overflow-hidden flex items-center justify-center bg-white">
            <img
              src={job.image}
              className="w-full h-full object-contain p-2"
              alt="logo"
            />
          </div>

          {/* job info */}
          <div className="flex-1">

            <h1 className="text-2xl font-bold">{job.title}</h1>

            <p className="text-gray-600 flex items-center gap-2 mt-1">
              <FaUserTie /> {job.company} • {job.role}
            </p>

            <p className="text-gray-500 mt-2">{job.shortDesc}</p>

            {/* tags */}
            <div className="flex gap-2 mt-3">
              <span className="px-3 py-1 text-xs bg-green-100 text-green-700 rounded-full">
                {job.type}
              </span>

              <span className="px-3 py-1 text-xs bg-blue-100 text-blue-700 rounded-full">
                {job.category}
              </span>
            </div>

          </div>
        </div>

        {/* TOP INFO BOXES */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 bg-gray-50">

          <Info
            icon={<FaMapMarkerAlt />}
            label="Location"
            value={job.location}
          />

          <Info
            icon={<FaMoneyBillWave />}
            label="Salary"
            value={job.salary}
          />

          <Info
            icon={<FaMoneyBillWave />}
            label="Salary Range"
            value={job.salaryRange || "Not disclosed"}
          />

          <Info
            icon={<FaClock />}
            label="Posted"
            value={job.posted || "Recently posted"}
          />

        </div>

        {/* MAIN CONTENT */}
        <div className="p-6 space-y-8">

          {/* about */}
          <Section title="About Company">
            <p>{fd.about}</p>
          </Section>

          {/* company website link */}
          {job.companyWebsite && (
            <Section title="Company Website">
              <a
                href={job.companyWebsite}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline font-medium"
              >
                Visit Website →
              </a>
            </Section>
          )}

          {/* extra company info */}
          {fd.companyInfo && (
            <Section title="Company Overview">
              <p>{fd.companyInfo}</p>
            </Section>
          )}

          {/* skills */}
          <Section title="Skills">
            <div className="flex flex-wrap gap-2">
              {job.skills?.map((s, i) => (
                <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  {s}
                </span>
              ))}
            </div>
          </Section>

          {/* responsibilities */}
          <Section title="Responsibilities">
            <ul className="space-y-1">
              {fd.responsibilities?.map((r, i) => (
                <li key={i}>• {r}</li>
              ))}
            </ul>
          </Section>

          {/* requirements */}
          <Section title="Requirements">
            <ul className="space-y-1">
              {fd.requirements?.map((r, i) => (
                <li key={i}>• {r}</li>
              ))}
            </ul>
          </Section>

          {/* perks */}
          <Section title="Perks">
            <div className="flex flex-wrap gap-2">
              {fd.perks?.map((p, i) => (
                <span key={i} className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm">
                  {p}
                </span>
              ))}
            </div>
          </Section>

          {/* benefits */}
          {job.benefits?.length > 0 && (
            <Section title="Benefits">
              <div className="flex flex-wrap gap-2">
                {job.benefits.map((b, i) => (
                  <span key={i} className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm">
                    {b}
                  </span>
                ))}
              </div>
            </Section>
          )}

        </div>

        {/* BUTTONS */}
        <div className="p-6 flex gap-4 border-t">

          <button
            onClick={handleApply}
            className="flex-1 bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700"
          >
            Apply Now
          </button>

          <button
            onClick={handleSave}
            className="flex-1 border py-3 rounded-xl hover:bg-gray-100"
          >
            Save Job
          </button>

        </div>

      </div>
    </div>
  );
}

/* info box component */
function Info({ icon, label, value }) {
  return (
    <div className="bg-white p-3 rounded-xl border flex gap-3 items-center">
      <div className="text-blue-500">{icon}</div>
      <div>
        <p className="text-xs text-gray-500">{label}</p>
        <p className="font-medium">{value}</p>
      </div>
    </div>
  );
}

/* section component */
function Section({ title, children }) {
  return (
    <div>
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      {children}
    </div>
  );
}