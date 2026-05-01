import { useEffect, useState } from "react";
import { getMyApplications } from "../api/application";
import { useNavigate } from "react-router-dom";

export default function AppliedJobs() {
  const [apps, setApps] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const data = await getMyApplications();
      setApps(data || []);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="p-6 text-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-6">My Applied Jobs</h1>

      {apps.length === 0 ? (
        <p className="text-gray-500">No applications yet</p>
      ) : (
        <div className="grid gap-4">

          {apps.map((app) => {
            const job = app.jobId; // populated job

            return (
              <div
                key={app._id}
                className="bg-white p-4 rounded-xl shadow flex items-center justify-between hover:shadow-lg transition"
              >

                {/* LEFT SIDE (CLICKABLE) */}
                <div
                  className="flex items-center gap-4 cursor-pointer"
                  onClick={() => navigate(`/job/${job?._id}`)}
                >

                  {/* LOGO */}
                  <img
                    src={job?.image || "https://via.placeholder.com/60"}
                    className="w-14 h-14 rounded-lg object-contain border"
                  />

                  <div>
                    <h2 className="font-bold text-lg">
                      {job?.title || "Job Title"}
                    </h2>

                    <p className="text-gray-600 text-sm">
                      {job?.company}
                    </p>

                    <p className="text-xs text-gray-400">
                      Applied by: {app.fullName}
                    </p>
                  </div>
                </div>

                {/* STATUS */}
                <span
                  className={`px-3 py-1 rounded-full text-sm font-medium ${
                    app.status === "accepted"
                      ? "bg-green-100 text-green-700"
                      : app.status === "rejected"
                      ? "bg-red-100 text-red-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {app.status}
                </span>

              </div>
            );
          })}

        </div>
      )}
    </div>
  );
}