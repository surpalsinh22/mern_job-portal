import { useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const BASE_URL = "http://localhost:5000/api/applications";

export default function ApplyJob() {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

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

  //  VALIDATION 
  const validate = () => {
    if (!form.fullName.trim()) return "Full name required";
    if (!form.email.includes("@")) return "Valid email required";
    if (!form.phone || form.phone.length < 10) return "Valid phone required";
    if (!form.experience) return "Experience required";
    if (!form.resume.includes("http")) return "Valid resume link required";
    return null;
  };

  const submit = async (e) => {
    e.preventDefault();

    const err = validate();
    if (err) {
      setError(err);
      return;
    }

    const res = await fetch(`${BASE_URL}/apply`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify({
        ...form,
        jobId: id
      })
    });

    const data = await res.json();

    if (res.ok) {
      navigate("/success");
    } else {
      setError(data.msg || "Something went wrong");
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
            className="w-full border p-3 rounded-lg 
                       focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full border p-3 rounded-lg 
                       focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            name="phone"
            onChange={handleChange}
            placeholder="Phone"
            className="w-full border p-3 rounded-lg 
                       focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            name="experience"
            onChange={handleChange}
            placeholder="Experience (years)"
            className="w-full border p-3 rounded-lg 
                       focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <input
            name="resume"
            onChange={handleChange}
            placeholder="Resume Link"
            className="w-full border p-3 rounded-lg 
                       focus:ring-2 focus:ring-blue-400 outline-none"
          />

          <button
            className="w-full bg-blue-600 hover:bg-blue-700 
                       text-white py-3 rounded-lg font-semibold 
                       transition active:scale-[0.98]"
          >
            Submit Application
          </button>

        </form>
      </div>
    </div>
  );
}