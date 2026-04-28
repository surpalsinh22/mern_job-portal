// import { useEffect, useState } from "react";
// import { getJobs } from "../api/job";
// import JobCard from "../components/JobCard";
// import { FaBriefcase, FaBuilding, FaBolt } from "react-icons/fa";
// import { FaBookmark, FaShieldAlt } from "react-icons/fa";

// export default function Home() {
//   const [jobs, setJobs] = useState([]);
//   const [search, setSearch] = useState("");
//   const [tempSearch, setTempSearch] = useState("");
//   const [filter, setFilter] = useState("All");

//   const [currentPage, setCurrentPage] = useState(1);
//   const jobsPerPage = 10;

//   useEffect(() => {
//     fetchJobs();
//   }, []);

//   const fetchJobs = async () => {
//     const data = await getJobs();
//     setJobs(data);
//   };

//   useEffect(() => {
//     setCurrentPage(1);
//   }, [search, filter]);

//   const filteredJobs = jobs.filter((job) => {
//     const text = `
//       ${job.title}
//       ${job.company}
//       ${job.location}
//       ${job.category}
//       ${job.role}
//     `.toLowerCase();

//     const matchSearch =
//       search.trim() === "" || text.includes(search.toLowerCase());

//     const matchFilter =
//       filter === "All" || text.includes(filter.toLowerCase());

//     return matchSearch && matchFilter;
//   });

//   const indexOfLastJob = currentPage * jobsPerPage;
//   const indexOfFirstJob = indexOfLastJob - jobsPerPage;
//   const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

//   const categories = [
//     "Frontend",
//     "Backend",
//     "Full Stack",
//     "Design",
//     "Sales",
//     "Marketing",
//     "Human Resources",
//     "Accounting",
//     "Data Science",
//     "Data Analytics",
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100">

//       {/* HERO */}
//       <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 text-gray-900 py-28 px-6">

//         <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100 blur-[120px] rounded-full"></div>
//         <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-emerald-100 blur-[140px] rounded-full"></div>

//         <div className="relative max-w-5xl mx-auto text-center">

//           {/* Badge */}
//           <div className="relative inline-flex items-center mb-7 px-6 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-700 shadow-md overflow-hidden">

//             <span className="absolute inset-0 bg-gradient-to-r from-blue-100 via-emerald-100 to-blue-100 opacity-60 blur-md animate-pulse"></span>
//             <span className="absolute -left-10 top-0 h-full w-10 bg-white/60 rotate-12 animate-[shine_2.5s_infinite]"></span>

//             <span className="relative font-medium tracking-wide">
//               Trusted Job Platform for Developers & Freshers
//             </span>

//           </div>

//           {/* Heading */}
//           <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
//             Build Your{" "}
//             <span className="text-blue-600">Career Faster</span>
//             <br />
//             With Real Opportunities
//           </h1>

//           <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
//             Discover verified jobs from top companies, apply instantly, and track your applications in one clean dashboard.
//           </p>

//           {/* stats */}
//           <div className="flex justify-center flex-wrap gap-12 mt-12 text-gray-700">

//             <div className="flex items-center gap-3 hover:scale-105 transition">
//               <FaBriefcase className="text-blue-500 text-xl" />
//               <div>
//                 <p className="font-bold text-gray-900">10,000+</p>
//                 <p className="text-sm text-gray-500">Active Jobs</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3 hover:scale-105 transition">
//               <FaBuilding className="text-emerald-500 text-xl" />
//               <div>
//                 <p className="font-bold text-gray-900">500+</p>
//                 <p className="text-sm text-gray-500">Companies</p>
//               </div>
//             </div>

//             <div className="flex items-center gap-3 hover:scale-105 transition">
//               <FaBolt className="text-yellow-500 text-xl" />
//               <div>
//                 <p className="font-bold text-gray-900">Fast</p>
//                 <p className="text-sm text-gray-500">Hiring Process</p>
//               </div>
//             </div>

//           </div>

//           {/* Feature highlight */}
//           <div className="mt-14 grid md:grid-cols-3 gap-6 text-left">

//             <div className="group p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
//               <div className="flex items-center gap-3 mb-3">
//                 <FaBolt className="text-blue-500 text-lg" />
//                 <h3 className="font-semibold text-gray-900">One Click Apply</h3>
//               </div>
//               <p className="text-sm text-gray-600">
//                 Apply instantly without filling long boring forms every time.
//               </p>
//             </div>

//             <div className="group p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
//               <div className="flex items-center gap-3 mb-3">
//                 <FaBookmark className="text-emerald-500 text-lg" />
//                 <h3 className="font-semibold text-gray-900">Save & Track</h3>
//               </div>
//               <p className="text-sm text-gray-600">
//                 Save jobs and track your application status in real time.
//               </p>
//             </div>

//             <div className="group p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
//               <div className="flex items-center gap-3 mb-3">
//                 <FaShieldAlt className="text-purple-500 text-lg" />
//                 <h3 className="font-semibold text-gray-900">Secure System</h3>
//               </div>
//               <p className="text-sm text-gray-600">
//                 JWT-based secure login with protected routes and data safety.
//               </p>
//             </div>

//           </div>

//         </div>
//       </div>

//       {/* SEARCH */}
//       <div className="max-w-5xl mx-auto px-4 mt-8">
//         <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-5 flex flex-col md:flex-row gap-3">

//           <input
//             type="text"
//             placeholder="Search jobs, skills, company..."
//             value={tempSearch}
//             onChange={(e) => setTempSearch(e.target.value)}
//             className="flex-1 px-4 py-3 border border-gray-200 rounded-xl bg-gray-50"
//           />

//           <button
//             onClick={() => setSearch(tempSearch)}
//             className="px-6 py-3 bg-gray-800 text-white rounded-xl"
//           >
//             Search
//           </button>

//         </div>
//       </div>

//       {/* CATEGORY */}
//       <div className="max-w-6xl mx-auto px-4 mt-8 flex flex-wrap gap-3 justify-center">
//         {categories.map((cat, i) => (
//           <button
//             key={i}
//             onClick={() => setFilter(cat)}
//             className="px-4 py-2 rounded-full bg-white border"
//           >
//             {cat}
//           </button>
//         ))}
//       </div>

//       {/* JOBS */}
//       <div className="max-w-6xl mx-auto px-4 py-6 grid gap-5">
//         {currentJobs.map((job) => (
//           <JobCard key={job._id || job.id} job={job} />
//         ))}
//       </div>

//     </div>
//   );
// }
import { useEffect, useState } from "react";
import { getJobs } from "../api/job";
import JobCard from "../components/JobCard";
import { FaBriefcase, FaBuilding, FaBolt } from "react-icons/fa";
import { FaBookmark, FaShieldAlt } from "react-icons/fa";

export default function Home() {
  const [jobs, setJobs] = useState([]);
  const [search, setSearch] = useState("");
  const [tempSearch, setTempSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  useEffect(() => {
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    const data = await getJobs();
    setJobs(data);
  };

  useEffect(() => {
    setCurrentPage(1);
  }, [search, filter]);

  const filteredJobs = jobs.filter((job) => {
    const text = `
      ${job.title}
      ${job.company}
      ${job.location}
      ${job.category}
      ${job.role}
    `.toLowerCase();

    const matchSearch =
      search.trim() === "" || text.includes(search.toLowerCase());

    const matchFilter =
      filter === "All" || text.includes(filter.toLowerCase());

    return matchSearch && matchFilter;
  });

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const categories = [
    "Frontend",
    "Backend",
    "Full Stack",
    "Design",
    "Sales",
    "Marketing",
    "Human Resources",
    "Accounting",
    "Data Science",
    "Data Analytics",
  ];

  return (
    <div className="min-h-screen bg-gray-100">

      {/* SEARCH */}
      <div className="max-w-5xl mx-auto px-4 mt-8">
        <div className="bg-white border border-gray-200 shadow-md rounded-2xl p-5 flex flex-col md:flex-row gap-3">

          <input
            type="text"
            placeholder="Search jobs, skills, company..."
            value={tempSearch}
            onChange={(e) => setTempSearch(e.target.value)}
            className="flex-1 px-4 py-3 border border-gray-200 rounded-xl bg-gray-50"
          />

          <button
            onClick={() => setSearch(tempSearch)}
            className="px-6 py-3 bg-gray-800 text-white rounded-xl"
          >
            Search
          </button>

        </div>
      </div>

      {/* CATEGORY */}
      <div className="max-w-6xl mx-auto px-4 mt-8 flex flex-wrap gap-3 justify-center">
        {categories.map((cat, i) => (
          <button
            key={i}
            onClick={() => setFilter(cat)}
            className="px-4 py-2 rounded-full bg-white border"
          >
            {cat}
          </button>
        ))}
      </div>

      {/* JOBS */}
      <div className="max-w-6xl mx-auto px-4 py-6 grid gap-5">
        {currentJobs.map((job) => (
          <JobCard key={job._id || job.id} job={job} />
        ))}
      </div>

      {/* PAGINATION (ONLY ADDITION) */}
      <div className="flex justify-center items-center gap-3 pb-10">

        <button
          onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          className="px-4 py-2 border rounded-lg bg-white disabled:opacity-40"
        >
          Prev
        </button>

        <span className="px-4 py-2 font-medium">
          Page {currentPage} / {totalPages || 1}
        </span>

        <button
          onClick={() =>
            setCurrentPage((p) =>
              currentPage === totalPages ? p : p + 1
            )
          }
          disabled={currentPage === totalPages}
          className="px-4 py-2 border rounded-lg bg-white disabled:opacity-40"
        >
          Next
        </button>

      </div>

    </div>
  );
}