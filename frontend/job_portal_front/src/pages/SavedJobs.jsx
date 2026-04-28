import { useEffect, useState } from "react";
import { getSavedJobs, deleteSavedJob } from "../api/savedJob";
import { useNavigate } from "react-router-dom";

export default function SavedJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getSavedJobs();
      setJobs(data || []);
      setLoading(false);
    };

    fetchData();
  }, []);

  const removeJob = async (id) => {
    await deleteSavedJob(id);
    setJobs(jobs.filter((j) => j._id !== id));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading saved jobs...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 p-6">

      {/* HEADER */}
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        ⭐ Saved Jobs
      </h1>

      {/* EMPTY STATE */}
      {jobs.length === 0 ? (
        <div className="text-center mt-20 text-gray-500">
          <p className="text-xl">No saved jobs yet</p>
          <p className="text-sm mt-2">Save jobs to see them here</p>
        </div>
      ) : (
        <div className="grid gap-5">

          {jobs.map((item) => {
            const job = item.jobId;

            return (
              <div
                key={item._id}
                className="bg-white p-5 rounded-2xl shadow-md hover:shadow-xl transition flex items-center justify-between"
              >

                {/* LEFT SIDE */}
                <div
                  onClick={() => navigate(`/job/${job._id}`)}
                  className="flex items-center gap-4 cursor-pointer flex-1"
                >

                  {/* LOGO */}
                  <img
                    src={job?.image || "https://via.placeholder.com/60"}
                    className="w-14 h-14 rounded-lg object-contain border"
                  />

                  {/* DETAILS */}
                  <div>
                    <h2 className="font-bold text-lg text-gray-800">
                      {job?.title}
                    </h2>

                    <p className="text-gray-600 text-sm">
                      {job?.company}
                    </p>

                    <p className="text-xs text-gray-400 mt-1">
                      Click to view full details
                    </p>
                  </div>

                </div>

                {/* RIGHT SIDE */}
                <div className="flex flex-col items-end gap-2">

                  <span className="text-xs px-3 py-1 bg-green-100 text-green-700 rounded-full">
                    Saved
                  </span>

                  <button
                    onClick={() => removeJob(item._id)}
                    className="text-sm text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>

                </div>

              </div>
            );
          })}

        </div>
      )}
    </div>
  );
}