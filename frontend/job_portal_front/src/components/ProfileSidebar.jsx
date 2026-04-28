import { FaUserCircle, FaSignOutAlt } from "react-icons/fa";

export default function ProfileSidebar({ user, onClose, onLogout }) {
  return (
    <div className="absolute right-5 top-16 z-50">

      {/* CARD */}
      <div
        className="w-56 rounded-2xl p-5
        bg-white/80 backdrop-blur-xl
        shadow-[0_10px_30px_rgba(0,0,0,0.15)]
        border border-gray-200"
      >

        {/* CLOSE */}
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-black text-sm transition"
          >
            ✕
          </button>
        </div>

        {/* AVATAR */}
        <div className="flex flex-col items-center mt-2">

          <div className="p-2 rounded-full bg-gradient-to-tr from-emerald-400 to-blue-500">
            <FaUserCircle className="text-5xl text-white" />
          </div>

          {/* NAME */}
          <h3 className="mt-3 font-semibold text-gray-900 text-sm">
            {user?.name || "User Name"}
          </h3>

          {/* EMAIL */}
          <p className="text-xs text-gray-500 mt-1 text-center break-all">
            {user?.email || "user@email.com"}
          </p>

        </div>

        {/* DIVIDER */}
        <div className="my-4 border-t border-gray-200"></div>

        {/* LOGOUT */}
        <button
          onClick={onLogout}
          className="w-full flex items-center justify-center gap-2
          bg-gradient-to-r from-red-500 to-red-600
          text-white py-2 rounded-xl text-sm
          hover:scale-[1.02] transition-transform"
        >
          <FaSignOutAlt />
          Logout
        </button>

      </div>

    </div>
  );
}