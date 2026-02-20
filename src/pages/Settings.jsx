import { useNavigate } from "react-router-dom";
import { FaBell, FaKey, FaTrash } from "react-icons/fa";

export default function Settings() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-white px-5 pt-6">
      <button onClick={() => navigate(-1)} className="text-blue-600 text-xl">←</button>

      <h2 className="text-center text-blue-600 font-semibold mt-2">Settings</h2>

      <div className="mt-8 space-y-6">
        <Item icon={<FaBell />} text="Notification Setting" onClick={() => navigate("/notification-settings")} />
        <Item icon={<FaKey />} text="Password Manager" onClick={() => navigate("/password-manager")} />
        <Item icon={<FaTrash />} text="Delete Account" />
      </div>
    </div>
  );
}

const Item = ({ icon, text, onClick }) => (
  <div onClick={onClick} className="flex justify-between items-center cursor-pointer">
    <div className="flex items-center gap-3 text-blue-600">
      {icon}
      <span className="text-black">{text}</span>
    </div>
    <span className="text-gray-400">›</span>
  </div>
);