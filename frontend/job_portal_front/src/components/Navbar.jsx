import {
  FaUserCircle,
  FaBriefcase,
  FaBookmark,
  FaClipboardList
} from "react-icons/fa";

import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { logoutUser } from "../api/auth";
import ProfileSidebar from "./ProfileSidebar";

export default function Navbar() {
  const { user, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const logout = async () => {
    await logoutUser();
    setUser(null);
    setOpen(false);
    navigate("/login");
  };

  return (
    <>
      <div className="w-full flex items-center justify-between px-6 py-3
                      bg-gray-900 text-white shadow-md sticky top-0 z-40">

        {/* BRAND */}
        <div
          onClick={() => navigate("/")}
          className="flex items-center gap-2 cursor-pointer"
        >
          <FaBriefcase className="text-emerald-400 text-xl" />
          <h1 className="text-lg font-bold">
            Job<span className="text-emerald-400">Portal</span>
          </h1>
        </div>

        {/* RIGHT SIDE */}
        <div className="flex items-center gap-6 text-sm">

          <button
            onClick={() => navigate("/saved-jobs")}
            className="flex items-center gap-2 hover:text-emerald-400 transition"
          >
            <FaBookmark />
            Saved
          </button>

          <button
            onClick={() => navigate("/applied-jobs")}
            className="flex items-center gap-2 hover:text-emerald-400 transition"
          >
            <FaClipboardList />
            Applied
          </button>

          <FaUserCircle
            onClick={() =>
              user ? setOpen(true) : navigate("/login")
            }
            className="text-2xl cursor-pointer hover:text-emerald-400 transition"
          />

        </div>
      </div>

      {/* SIDEBAR */}
{open && user && (
  <ProfileSidebar
    user={user}
    onClose={() => setOpen(false)}
    onLogout={logout}
  />
)}
    </>
  );
}