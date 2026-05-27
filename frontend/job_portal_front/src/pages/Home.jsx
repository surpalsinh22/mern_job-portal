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
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  useEffect(() => {
    const cached = localStorage.getItem("jobs");
    if (cached) {
      setJobs(JSON.parse(cached));
      setLoading(false);
    }
    fetchJobs();
  }, []);

  const fetchJobs = async () => {
    try {
      setLoading(true);
      const data = await getJobs();
      setJobs(data);
      localStorage.setItem("jobs", JSON.stringify(data));
    } catch (err) {
      console.log("Error fetching jobs:", err);
    } finally {
      setLoading(false);
    }
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
    const matchSearch = search.trim() === "" || text.includes(search.toLowerCase());
    const matchFilter = filter === "All" || text.includes(filter.toLowerCase());
    return matchSearch && matchFilter;
  });

  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);
  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const categories = [
    "All", "Frontend", "Backend", "Full Stack", "Design",
    "Sales", "Marketing", "Human Resources", "Accounting",
    "Data Science", "Data Analytics",
  ];

  if (loading && jobs.length === 0) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="w-10 h-10 border-4 border-black border-t-transparent rounded-full animate-spin mx-auto mb-4" />
          <p className="text-gray-500 text-sm tracking-wide">Loading jobs...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* HERO */}
      <div className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 text-gray-900 py-28 px-6">
        <div className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-100 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-150px] right-[-100px] w-[500px] h-[500px] bg-emerald-100 blur-[140px] rounded-full" />

        <div className="relative max-w-5xl mx-auto text-center">
          <div className="relative inline-flex items-center mb-7 px-6 py-2 rounded-full bg-white border border-gray-200 text-sm text-gray-700 shadow-md overflow-hidden">
            <span className="absolute inset-0 bg-gradient-to-r from-blue-100 via-emerald-100 to-blue-100 opacity-60 blur-md animate-pulse" />
            <span className="relative font-medium tracking-wide">Trusted Job Platform for Developers &amp; Freshers</span>
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight tracking-tight">
            Build Your <span className="text-blue-600">Career Faster</span>
            <br />With Real Opportunities
          </h1>

          <p className="text-gray-600 mt-6 text-lg max-w-2xl mx-auto leading-relaxed">
            Discover verified jobs from top companies, apply instantly, and track your applications in one clean dashboard.
          </p>

          <div className="flex justify-center flex-wrap gap-12 mt-12 text-gray-700">
            <div className="flex items-center gap-3 hover:scale-105 transition">
              <FaBriefcase className="text-blue-500 text-xl" />
              <div><p className="font-bold text-gray-900">1000+</p><p className="text-sm text-gray-500">Active Jobs</p></div>
            </div>
            <div className="flex items-center gap-3 hover:scale-105 transition">
              <FaBuilding className="text-emerald-500 text-xl" />
              <div><p className="font-bold text-gray-900">100+</p><p className="text-sm text-gray-500">Companies</p></div>
            </div>
            <div className="flex items-center gap-3 hover:scale-105 transition">
              <FaBolt className="text-yellow-500 text-xl" />
              <div><p className="font-bold text-gray-900">Fast</p><p className="text-sm text-gray-500">Hiring Process</p></div>
            </div>
          </div>

          <div className="mt-14 grid md:grid-cols-3 gap-6 text-left">
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <FaBolt className="text-blue-500 text-lg" />
                <h3 className="font-semibold text-gray-900">One Click Apply</h3>
              </div>
              <p className="text-sm text-gray-600">Apply instantly without filling long boring forms every time.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <FaBookmark className="text-emerald-500 text-lg" />
                <h3 className="font-semibold text-gray-900">Save &amp; Track</h3>
              </div>
              <p className="text-sm text-gray-600">Save jobs and track your application status in real time.</p>
            </div>
            <div className="p-6 rounded-2xl bg-white border border-gray-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
              <div className="flex items-center gap-3 mb-3">
                <FaShieldAlt className="text-purple-500 text-lg" />
                <h3 className="font-semibold text-gray-900">Secure System</h3>
              </div>
              <p className="text-sm text-gray-600">JWT-based secure login with protected routes and data safety.</p>
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH BAR */}
      <div className="max-w-3xl mx-auto px-4 mt-10">
        <div className="bg-white border border-gray-200 shadow-lg rounded-2xl p-2 flex flex-col sm:flex-row gap-2">
          <div className="relative flex-1">
            <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="11" cy="11" r="8" /><path d="m21 21-4.35-4.35" />
            </svg>
            <input
              value={tempSearch}
              onChange={(e) => setTempSearch(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && setSearch(tempSearch)}
              className="w-full pl-11 pr-4 py-3.5 rounded-xl text-sm outline-none focus:ring-2 focus:ring-black/10 bg-gray-50 placeholder-gray-400 text-gray-800"
              placeholder="Search by role, company, or location..."
            />
          </div>
          <button
            onClick={() => setSearch(tempSearch)}
            className="sm:w-auto w-full px-7 py-3.5 bg-black text-white text-sm font-semibold rounded-xl hover:bg-gray-800 active:scale-95 transition-all duration-200"
          >
            Search
          </button>
        </div>
      </div>

      {/* CATEGORY FILTERS */}
      <div className="max-w-5xl mx-auto px-4 mt-6">
        <div className="flex flex-wrap justify-center gap-2">
          {categories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold tracking-wide border transition-all duration-200
                ${filter === cat
                  ? "bg-black text-white border-black shadow-sm"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-400 hover:text-gray-900"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* JOBS COUNT */}
      <div className="max-w-5xl mx-auto px-4 mt-8 mb-2">
        <p className="text-sm text-gray-500">
          Showing <span className="font-semibold text-gray-800">{filteredJobs.length}</span> jobs
          {search && <span> for "<span className="text-black font-medium">{search}</span>"</span>}
          {filter !== "All" && <span> in <span className="text-black font-medium">{filter}</span></span>}
        </p>
      </div>

      {/* JOBS LIST */}
      <div className="max-w-5xl mx-auto px-4 pb-6 grid gap-4">
        {currentJobs.length > 0 ? (
          currentJobs.map((job) => (
            <JobCard key={job._id || job.id} job={job} />
          ))
        ) : (
          <div className="text-center py-20">
            <p className="text-4xl mb-3">🔍</p>
            <p className="text-gray-700 font-semibold text-lg">No jobs found</p>
            <p className="text-gray-400 text-sm mt-1">Try a different keyword or category</p>
          </div>
        )}
      </div>

      {/* PAGINATION */}
      {totalPages > 1 && (
        <div className="flex justify-center gap-2 pb-12 flex-wrap px-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 rounded-xl border text-sm font-medium bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            ← Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={`w-10 h-10 rounded-xl border text-sm font-semibold transition-all duration-200
                ${currentPage === i + 1
                  ? "bg-black text-white border-black"
                  : "bg-white text-gray-600 border-gray-200 hover:border-gray-400"
                }`}
            >
              {i + 1}
            </button>
          ))}

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 rounded-xl border text-sm font-medium bg-white text-gray-600 hover:bg-gray-100 disabled:opacity-30 disabled:cursor-not-allowed transition"
          >
            Next →
          </button>
        </div>
      )}

    </div>
  );
}
