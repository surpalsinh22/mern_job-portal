import { API_BASE_URL } from "./config";

const BASE_URL = `${API_BASE_URL}/api/jobs`;

// GET ALL JOBS
export const getJobs = async () => {
  const res = await fetch(BASE_URL);
  return res.json();
};

// GET SINGLE JOB
export const getJobById = async (id) => {
  const res = await fetch(`${BASE_URL}/${id}`);
  return res.json();
};