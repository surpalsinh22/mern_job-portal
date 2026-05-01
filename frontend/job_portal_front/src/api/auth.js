// // import { API_BASE_URL } from "./config";

// // const BASE_URL = `${API_BASE_URL}/api/auth`;

// // // SIGNUP
// // export const signupUser = async (data) => {
// //   const res = await fetch(`${BASE_URL}/signup`, {
// //     method: "POST",
// //     headers: { "Content-Type": "application/json" },
// //     credentials: "include",
// //     body: JSON.stringify(data),
// //   });

// //   return res.json();
// // };

// // // LOGIN
// // export const loginUser = async (data) => {
// //   const res = await fetch(`${BASE_URL}/login`, {
// //     method: "POST",
// //     headers: { "Content-Type": "application/json" },
// //     credentials: "include",
// //     body: JSON.stringify(data),
// //   });

// //   return res.json();
// // };

// // // LOGOUT
// // export const logoutUser = async () => {
// //   const res = await fetch(`${BASE_URL}/logout`, {
// //     method: "POST",
// //     credentials: "include",
// //   });

// //   return res.json();
// // };

// // // GET CURRENT USER
// // export const getMe = async () => {
// //   const res = await fetch(`${BASE_URL}/me`, {
// //     credentials: "include",
// //   });

// //   return res.json();
// // };

// import { API_BASE_URL } from "./config";

// const BASE_URL = `${API_BASE_URL}/api/auth`;

// // SIGNUP
// export const signupUser = async (data) => {
//   const res = await fetch(`${BASE_URL}/signup`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     credentials: "include",
//     body: JSON.stringify(data),
//   });

//   return res.json();
// };

// // LOGIN
// export const loginUser = async (data) => {
//   const res = await fetch(`${BASE_URL}/login`, {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     credentials: "include",
//     body: JSON.stringify(data),
//   });

//   return res.json();
// };

// // LOGOUT
// export const logoutUser = async () => {
//   const res = await fetch(`${BASE_URL}/logout`, {
//     method: "POST",
//     credentials: "include",
//   });

//   return res.json();
// };

// // GET CURRENT USER
// export const getMe = async () => {
//   const res = await fetch(`${BASE_URL}/me`, {
//     credentials: "include",
//   });

//   return res.json();
// };
const BASE_URL = `${API_BASE_URL}/api/auth`;

// SIGNUP
export const signupUser = async (data) => {
  const res = await fetch(`${BASE_URL}/signup`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  });

  return res.json();
};

// LOGIN
export const loginUser = async (data) => {
  const res = await fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    body: JSON.stringify(data),
  });

  return res.json();
};

// ME
export const getMe = async () => {
  const res = await fetch(`${BASE_URL}/me`, {
    credentials: "include",
  });

  return res.json();
};