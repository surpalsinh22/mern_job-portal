# MERN Job Portal

This is a full stack job portal web application built using MERN stack (MongoDB, Express, React, Node.js). It allows users to search jobs, apply for jobs, and manage applications. Admin can create and manage job posts.

---

# Project Overview

This project is designed to simulate a real job portal system where:
- Users can register and login
- Users can view and apply for jobs
- Users can save jobs
- Admin can manage jobs and applications

---

# Features

User Features:
- Register and login
- View all jobs
- Search and filter jobs
- Apply for jobs
- Save jobs
- View applied jobs

Admin Features:
- Create new job posts
- Update existing jobs
- Delete jobs
- View job applications

---

# Tech Stack

Frontend:
- React JS
- Axios
- React Router

Backend:
- Node JS
- Express JS
- MongoDB
- JWT Authentication
- Bcrypt

---

# Project Structure

MERN_JOB_PORTAL/
backend/
src/
config/
controllers/
middleware/
models/
routes/
utils/
app.js
server.js

frontend/
job_portal_front/
src/
api/
assets/
components/
context/
pages/
App.jsx
main.jsx

---

# Installation Guide

Step 1: Clone the project
git clone your-repo-link

Step 2: Backend setup
cd backend
npm install

Create .env file:
PORT=5000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret

Run backend:
npm start

Step 3: Frontend setup
cd frontend/job_portal_front
npm install
npm run dev

---

# API Endpoints

Auth:
POST /api/auth/register
POST /api/auth/login

Jobs:
GET /api/jobs
POST /api/jobs
PUT /api/jobs/:id
DELETE /api/jobs/:id

Applications:
POST /api/application/apply
GET /api/application/user

---

# Future Improvements

- Resume upload system
- Email notifications
- Admin dashboard analytics
- Real time job alerts
- Better UI design

---

# Author

Name: Surpalsinh Ramlavat
Location: Ahmedabad, India
Skills: React, Node.js, Express, MongoDB

---

# Note

This project is built for learning and portfolio purposes. It demonstrates full stack development skills using MERN stack.