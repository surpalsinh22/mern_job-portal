const BASE_URL = "http://localhost:5000/api/saved";

// SAVE JOB
export const saveJobApi = async (jobId) => {
  const res = await fetch(`${BASE_URL}/save`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify({ jobId }),
  });

  return res.json();
};

// GET SAVED JOBS
export const getSavedJobs = async () => {
  const res = await fetch(`${BASE_URL}`, {
    method: "GET",
    credentials: "include",
  });

  return res.json();
};

// DELETE SAVED JOB
export const deleteSavedJob = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  return res.json();
};