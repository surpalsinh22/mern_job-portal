const BASE_URL = "http://localhost:5000/api/applications";

// APPLY JOB
export const applyJobApi = async (data) => {
  const res = await fetch(`${BASE_URL}/apply`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  });

  return res.json();
};

// GET MY APPLICATIONS
export const getMyApplications = async () => {
  const res = await fetch(`${BASE_URL}/me`, {
    method: "GET",
    credentials: "include",
  });

  return res.json();
};