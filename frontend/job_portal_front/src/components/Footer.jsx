import { FaBriefcase, FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-10">

      <div className="max-w-6xl mx-auto px-6 py-10 grid md:grid-cols-4 gap-8">

        {/* BRAND */}
        <div>
          <div className="flex items-center gap-2 mb-3">
            <FaBriefcase className="text-emerald-400 text-xl" />
            <h2 className="text-xl font-bold text-white">
              Job<span className="text-emerald-400">Portal</span>
            </h2>
          </div>

          <p className="text-sm text-gray-400">
            Find your dream job, apply instantly, and track your applications —
            all in one place.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-white font-semibold mb-3">Quick Links</h3>

          <ul className="space-y-2 text-sm">
            <li className="hover:text-emerald-400 cursor-pointer">Home</li>
            <li className="hover:text-emerald-400 cursor-pointer">Jobs</li>
            <li className="hover:text-emerald-400 cursor-pointer">Saved Jobs</li>
            <li className="hover:text-emerald-400 cursor-pointer">Applied Jobs</li>
          </ul>
        </div>

        {/* FEATURES */}
        <div>
          <h3 className="text-white font-semibold mb-3">Features</h3>

          <ul className="space-y-2 text-sm">
            <li>✔ Easy Apply</li>
            <li>✔ Save Jobs</li>
            <li>✔ Track Applications</li>
            <li>✔ Secure Login</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>

          <div className="flex flex-col gap-2 text-sm">
            <p className="flex items-center gap-2">
              <FaEnvelope /> support@jobportal.com
            </p>

            <div className="flex gap-4 mt-2 text-lg">
              <FaGithub className="cursor-pointer hover:text-white" />
              <FaLinkedin className="cursor-pointer hover:text-white" />
            </div>
          </div>
        </div>

      </div>


    </footer>
  );
}