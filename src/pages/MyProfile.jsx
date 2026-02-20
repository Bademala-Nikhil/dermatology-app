import {
  FaUser,
  FaHeart,
  FaWallet,
  FaLock,
  FaCog,
  FaQuestion,
  FaSignOutAlt,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function MyProfile() {
  const navigate = useNavigate();
  const [showLogout, setShowLogout] = useState(false);

  const menu = [
    { label: "Profile", icon: <FaUser />, path: "/profile" },
    { label: "Favorite", icon: <FaHeart />, path: "/favorite" },
    { label: "Payment Method", icon: <FaWallet />, path: "/payment" },
    { label: "Privacy Policy", icon: <FaLock />, path: "/privacy-policy" },
    { label: "Settings", icon: <FaCog />, path: "/settings" },
    { label: "Help", icon: <FaQuestion />, path: "/help" },
    { label: "Logout", icon: <FaSignOutAlt />, action: "logout" },
  ];

  return (
    <>
      <div className="h-screen bg-white px-5 pt-6">
        {/* BACK */}
        <button
          onClick={() => navigate(-1)}
          className="text-blue-600 text-xl"
        >
          ←
        </button>

        {/* PROFILE */}
        <div className="flex flex-col items-center mt-6">
          <img
            src="https://i.pravatar.cc/150?img=12"
            className="w-24 h-24 rounded-full"
          />
          <h2 className="mt-3 font-semibold">John Doe</h2>
        </div>

        {/* MENU */}
        <div className="mt-6 space-y-5">
          {menu.map((item, i) => (
            <div
              key={i}
              onClick={() => {
                if (item.path) navigate(item.path);
                if (item.action === "logout") setShowLogout(true);
              }}
              className="flex items-center justify-between cursor-pointer"
            >
              <div className="flex items-center gap-3 text-blue-600">
                {item.icon}
                <span className="text-black">{item.label}</span>
              </div>
              <span className="text-gray-400">›</span>
            </div>
          ))}
        </div>
      </div>

      {/* LOGOUT MODAL */}
      {showLogout && (
        <div className="fixed inset-0 bg-black/30 flex items-end">
          <div className="bg-white w-full rounded-t-3xl p-5">
            <h3 className="text-center font-semibold mb-2">Logout</h3>
            <p className="text-center text-sm text-gray-500 mb-4">
              are you sure you want to log out?
            </p>

            <div className="flex gap-3">
              <button
                onClick={() => setShowLogout(false)}
                className="flex-1 bg-[#EEF3FF] py-3 rounded-full"
              >
                Cancel
              </button>
              <button
                onClick={() => navigate("/")}
                className="flex-1 bg-[#2962FF] text-white py-3 rounded-full"
              >
                Yes, Logout
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}