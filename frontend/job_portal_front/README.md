# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.


<!-- import { useNavigate } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaMoneyBillWave,
  FaBriefcase,
  FaBuilding,
} from "react-icons/fa";

export default function JobCard({ job }) {
  const nav = useNavigate();

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5 hover:shadow-md transition">

      {/* top  */}
      <div className="flex justify-between items-start">

        <div>
          <h2 className="text-lg font-semibold text-gray-900">
            {job.title}
          </h2>

          <div className="flex items-center gap-2 text-sm text-gray-600 mt-1">
            <FaBuilding className="text-gray-400" />
            <span>{job.company}</span>
          </div>
        </div>

        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
          {job.type}
        </span>

      </div>

      {/* information */}
      <div className="mt-3 flex flex-wrap gap-4 text-sm text-gray-600">

        <div className="flex items-center gap-1">
          <FaMapMarkerAlt className="text-gray-400" />
          {job.location}
        </div>

        <div className="flex items-center gap-1">
          <FaMoneyBillWave className="text-green-600" />
          <span className="text-green-700 font-medium">
            {job.salary}
          </span>
        </div>

        <div className="flex items-center gap-1">
          <FaBriefcase className="text-gray-400" />
          {job.experience || "1-3 yrs"}
        </div>

      </div>

      {/* skills*/}
      <div className="mt-3 flex flex-wrap gap-2">
  {(job.skills || []).slice(0, 5).map((skill, i) => (
    <span
      key={i}
      className="text-xs font-medium px-3 py-1 rounded-full 
                 bg-gradient-to-r from-blue-50 to-blue-100 
                 text-blue-700 border border-blue-200
                 shadow-sm hover:shadow transition"
    >
      {skill}
    </span>
  ))}
</div>

      {/* last*/}
      <div className="mt-4 flex justify-between items-center">

        <span className="text-xs text-gray-400">
          {job.posted || "Recently posted"}
        </span>

        <button
          onClick={() => nav(`/job/${job.id}`)}
          className="text-sm bg-blue-600 text-white px-4 py-1.5 rounded hover:bg-blue-700 transition"
        >
          View details
        </button>

      </div>

    </div>
  );
} -->