import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";

// pages
import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import JobDetails from "./pages/JobDetails";
import ApplyJob  from "./pages/ApplyJob";
import AppliedJobs from "./pages/AppliedJobs";
import Success from "./pages/Success"
import SavedJobs from "./pages/SavedJobs";
import Footer from "./components/Footer";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">

        {/* NAVBAR*/}
        <Navbar />
        <Toaster />

        {/* ROUTES */}
        <Routes>

          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Auth */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          {/* Job Details (IMPORTANT) */}
          <Route path="/job/:id" element={<JobDetails />} />

          <Route path="/apply/:id" element={<ApplyJob />} />

          <Route path="/applied-jobs" element={<AppliedJobs />} />

          <Route path="/success" element={<Success />} />

          <Route path="/saved-jobs" element={<SavedJobs />} />

        </Routes>
        <Footer/>

      </div>
    </BrowserRouter>
  );
}