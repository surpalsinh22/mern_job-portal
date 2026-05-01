import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import { API_BASE_URL } from "../api/config";

const BASE_URL = `${API_BASE_URL}/api/applications`;

export default function ApplyJob() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [form, setForm] = useState({
    fullName: user?.name || "",
    email: user?.email || "",
    phone: "",
    experience: "",
    resume: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setError("");
  };

  // VALIDATION
  const validate = () => {
    if (!id) return "Job ID missing";
    if (!form.fullName.trim()) return "Full name required";
    if (!form.email || !form.email.includes("@")) return "Valid email required";
    if (!form.phone || form.phone.length < 10) return "Valid phone required";
    if (!form.experience) return "Experience required";
    if (!form.resume || !form.resume.includes("http")) return "Valid resume link required";
    return null;
  };

  const submit = async (e) => {
    e.preventDefault();

    console.log("JOB ID:", id);
    console.log("FORM DATA:", form);

    const err = validate();
    if (err) {
      setError(err);
      toast.error(err);
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(`${BASE_URL}/apply`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({
          jobId: id,
          fullName: form.fullName,
          email: form.email,
          phone: form.phone,
          experience: form.experience,
          resume: form.resume
        })
      });

      const data = await res.json();

      if (!res.ok) {
        toast.error(data.msg || "Application failed");
        return;
      }

      toast.success("Application submitted ✅");
      navigate("/success");

    } catch (error) {
      console.log("SUBMIT ERROR:", error);
      toast.error("Server error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center 
                    bg-gradient-to-br from-gray-100 to-gray-200 px-4">

      <div className="w-full max-w-lg bg-white shadow-2xl rounded-2xl p-6 border">

        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          Apply for Job
        </h2>

        {/* ERROR BOX */}
        {error && (
          <div className="mb-4 text-sm text-red-600 bg-red-50 p-2 rounded-lg">
            {error}
          </div>
        )}

        <form onSubmit={submit} className="space-y-4">

          <input
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Phone"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            name="experience"
            value={form.experience}
            onChange={handleChange}
            placeholder="Experience (years)"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            name="resume"
            value={form.resume}
            onChange={handleChange}
            placeholder="Resume Link"
            className="w-full border p-3 rounded-lg focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <button
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-700 
                       text-white py-3 rounded-lg font-semibold 
                       transition active:scale-[0.98]"
          >
            {loading ? "Submitting..." : "Submit Application"}
          </button>

        </form>
      </div>
    </div>
  );
}