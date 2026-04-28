const BASE_URL = "http://localhost:5000/api/jobs";

export const getJobs = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

// GET SINGLE JOB (IMPORTANT FOR DETAILS PAGE)
export const getJobById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
};