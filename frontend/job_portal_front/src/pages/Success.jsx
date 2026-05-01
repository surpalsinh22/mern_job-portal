import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000); // 3 seconds

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white shadow-xl rounded-2xl p-8 text-center max-w-md">

        <div className="text-green-500 text-6xl mb-4">✔</div>

        <h1 className="text-2xl font-bold text-gray-800">
          Application Submitted Successfully
        </h1>

        <p className="text-gray-500 mt-2">
          Redirecting to home
        </p>

      </div>
    </div>
  );
}