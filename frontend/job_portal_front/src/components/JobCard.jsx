import { useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBriefcase,
  FaClock,
} from "react-icons/fa";

export default function JobCard({ job }) {
  const nav = useNavigate();

  return (
    <div className="
      relative w-full
      bg-white/80 backdrop-blur-xl
      border border-gray-200
      rounded-2xl
      shadow-sm
      hover:shadow-2xl
      transition-all duration-300
      hover:-translate-y-2
      overflow-hidden
      group
    ">

      {/* top glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500">
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-emerald-200 blur-3xl rounded-full"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-blue-200 blur-3xl rounded-full"></div>
      </div>

      <div className="relative p-6 flex flex-col gap-4">

        {/* TOP */}
        <div className="flex gap-5 items-start">

          {/* LOGO */}
          <div className="
            w-20 h-20 flex-shrink-0
            rounded-2xl border border-gray-200
            bg-white shadow-sm
            flex items-center justify-center
            overflow-hidden
            group-hover:scale-105 transition
          ">
            <img
              src={job.image}
              alt="company"
              className="w-full h-full object-contain p-2"
            />
          </div>

          {/* INFO */}
          <div className="flex-1">

            <h2 className="
              text-xl font-bold text-gray-900
              group-hover:text-emerald-700
              transition
            ">
              {job.title}
            </h2>

            <p className="text-sm text-gray-600 mt-1">
              {job.company} • {job.role || "Software Role"}
            </p>

            <p className="text-sm text-gray-500 mt-2 leading-relaxed">
              {job.shortDesc ||
                "Join a high-growth team building scalable modern products with real impact."}
            </p>

          </div>

          {/* TYPE BADGE */}
          <span className="
            px-3 py-1 text-xs font-semibold
            bg-gradient-to-r from-emerald-100 to-blue-100
            text-emerald-700
            rounded-full h-fit
            border border-emerald-200
          ">
            {job.type || "Full Time"}
          </span>

        </div>

        {/* DETAILS GRID */}
        <div className="
          grid grid-cols-2 md:grid-cols-4 gap-3
          text-sm text-gray-700
        ">

          <div className="flex items-center gap-2">
            <FaMapMarkerAlt className="text-emerald-500 text-sm" />
            <span>{job.location || "Remote"}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaMoneyBillWave className="text-emerald-500 text-sm" />
            <span className="font-semibold text-emerald-700">
              {job.salary || "Not Disclosed"}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <FaBriefcase className="text-emerald-500 text-sm" />
            <span>{job.type}</span>
          </div>

          <div className="flex items-center gap-2">
            <FaClock className="text-emerald-500 text-sm" />
            <span>{job.experience || "Fresher Friendly"}</span>
          </div>

        </div>

        {/* SKILLS */}
        <div className="flex flex-wrap gap-2">
          {(job.skills || []).slice(0, 5).map((skill, i) => (
            <span
              key={i}
              className="
                text-xs px-3 py-1
                rounded-full
                bg-gray-100
                text-gray-700
                border border-gray-200
                hover:bg-emerald-50
                hover:border-emerald-200
                transition
              "
            >
              {skill}
            </span>
          ))}
        </div>

        {/* FOOTER */}
        <div className="flex items-center justify-between pt-2">

          <p className="text-xs text-gray-400">
            ⚡ Quick Apply Available
          </p>

          <button
            onClick={() => nav(`/job/${job._id || job.id}`)}
            className="
              relative overflow-hidden
              bg-gradient-to-r from-emerald-600 to-emerald-500
              hover:from-emerald-700 hover:to-emerald-600
              text-white px-5 py-2
              rounded-xl text-sm
              shadow-md
              transition-all duration-300
              active:scale-95
              group
            "
          >
            <span className="relative z-10">View Details →</span>

            {/* button shine */}
            <span className="
              absolute inset-0
              bg-white/20
              translate-x-[-100%]
              group-hover:translate-x-[100%]
              transition duration-700
            "></span>

          </button>

        </div>

      </div>
    </div>
  );
}