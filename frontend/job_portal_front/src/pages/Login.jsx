import { useState, useContext } from "react";
import { loginUser } from "../api/auth";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaEnvelope, FaLock } from "react-icons/fa";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const { loadUser } = useContext(AuthContext);

  // const handleSubmit = async (e) => {
  // e.preventDefault();

  // const res = await loginUser(form);

//   if (res.msg === "Login successful") {
//     alert(res.msg);

//     setTimeout(async () => {
//       await loadUser();   
//       navigate("/");
//     }, 100);

//   } else {
//     alert(res.msg);
//   }
// };
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await loginUser(form);

    if (res.success) {
      alert(res.msg);

      await loadUser();
      navigate("/");
    } else {
      alert(res.msg);
    }
  } catch (err) {
    alert("Server error");
  }
};

  return (
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-blue-100 to-blue-300">

      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-2xl shadow-xl w-96"
      >

       <h2 className="text-4xl font-extrabold text-center mb-6 
               text-gray-900 tracking-tight
               transition-all duration-300 hover:scale-105">
  <span className="bg-gradient-to-r from-emerald-500 to-blue-600 
                   bg-clip-text text-transparent">
    Login
  </span>
</h2>

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
          Login
        </button>

        <p className="text-sm mt-4 text-center text-gray-600">
          No account?{" "}
          <Link to="/signup" className="text-blue-600 font-semibold">
            Signup
          </Link>
        </p>

      </form>
    </div>
  );
}