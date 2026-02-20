import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";

export default function PasswordManager() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-white px-5 pt-6">
      <button onClick={() => navigate(-1)} className="text-blue-600 text-xl">←</button>
      <h2 className="text-center text-blue-600 font-semibold mb-6">
        Password Manager
      </h2>

      {["Current Password", "New Password", "Confirm New Password"].map(
        (label, i) => (
          <div key={i} className="mb-5">
            <label className="text-sm font-medium">{label}</label>
            <div className="relative mt-1">
              <input
                type="password"
                className="w-full bg-[#EEF3FF] rounded-xl py-3 px-4 pr-10"
              />
              <FaEye className="absolute right-4 top-4 text-gray-400" />
            </div>
            {i === 0 && (
              <p className="text-right text-xs text-blue-600 mt-1">
                Forgot Password?
              </p>
            )}
          </div>
        )
      )}

      <button className="w-full bg-[#2962FF] text-white py-3 rounded-full mt-6">
        Change Password
      </button>
    </div>
  );
}