import { useState, useContext } from "react";
import { signupUser } from "../api/auth";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

export default function Signup() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: ""
  });

  const navigate = useNavigate();
  const { loadUser } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await signupUser(form);

    if (res.success) {
      alert(res.msg);
      await loadUser();
      navigate("/");
    } else {
      alert(res.msg);
    }
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-purple-100 to-blue-200">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-96"
      >

       <h2 className="text-4xl font-extrabold text-center mb-6 
               text-gray-900 tracking-tight
               transition-all duration-300 hover:scale-105">
  <span className="bg-gradient-to-r from-emerald-500 to-blue-600 
                   bg-clip-text text-transparent">
    Signup
  </span>
</h2>

        {/* NAME */}
        <div className="relative mb-4">
          <FaUser className="absolute top-3 left-3 text-gray-400" />
          <input
            placeholder="Name"
            className="w-full pl-10 p-2 border rounded-lg focus:outline-blue-500"
            onChange={(e) =>
              setForm({ ...form, name: e.target.value })
            }
          />
        </div>

        {/* EMAIL */}
        <div className="relative mb-4">
          <FaEnvelope className="absolute top-3 left-3 text-gray-400" />
          <input
            placeholder="Email"
            className="w-full pl-10 p-2 border rounded-lg focus:outline-blue-500"
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
          />
        </div>

        {/* PASSWORD */}
        <div className="relative mb-4">
          <FaLock className="absolute top-3 left-3 text-gray-400" />
          <input
            type="password"
            placeholder="Password"
            className="w-full pl-10 p-2 border rounded-lg focus:outline-blue-500"
            onChange={(e) =>
              setForm({ ...form, password: e.target.value })
            }
          />
        </div>

        <button className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-2 rounded-lg font-semibold">
          Signup
        </button>

        <p className="text-sm mt-4 text-center text-gray-600">
          Already have account?{" "}
          <Link to="/login" className="text-blue-600 font-semibold">
            Login
          </Link>
        </p>

      </form>
    </div>
  );
}