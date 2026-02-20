import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaStar, FaHeart,  FaFemale, FaMale,FaUser,FaHome, FaCalendarAlt} from "react-icons/fa";

export default function Favorite() {
  const [tab, setTab] = useState("doctors");
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[#EEF3FF] px-4 pt-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => navigate(-1)} className="text-blue-600 text-xl">←</button>
        <h1 className="text-blue-600 font-semibold">Favorite</h1>
        <div />
      </div>
<div className="flex items-center gap-2 mb-4 text-sm">
        <span>Sort By</span>
        <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs">
          A–Z
        </span>
        <CircleIcon><FaStar onClick={() => navigate("/rating")}  /></CircleIcon>
        <CircleIcon><FaHeart onClick={() => navigate("/favorite")}  /></CircleIcon>
        <CircleIcon><FaFemale onClick={() => navigate("/doctors/female")}  /></CircleIcon>
        <CircleIcon><FaMale  onClick={() => navigate("/doctors/male")} /></CircleIcon>
      </div>
      {/* Tabs */}
      <div className="flex bg-[#DDE6FF] rounded-full p-1 mb-4">
        <button
          onClick={() => setTab("doctors")}
          className={`flex-1 py-2 rounded-full ${
            tab === "doctors" ? "bg-blue-600 text-white" : "text-blue-600"
          }`}
        >
          Doctors
        </button>
        <button
          onClick={() => setTab("services")}
          className={`flex-1 py-2 rounded-full ${
            tab === "services" ? "bg-blue-600 text-white" : "text-blue-600"
          }`}
        >
          Services
        </button>
      </div>

      {/* Content */}
      {tab === "doctors" ? <FavoriteDoctors /> : <FavoriteServices />}
    </div>
  );
}

/* ❤️ Favorite Doctors */
function FavoriteDoctors() {
  const navigate = useNavigate();
  return (
    <div className="space-y-4">
      {["Olivia Turner", "Alexander Bennett", "Sophia Martinez"].map((n, i) => (
        <div key={i} className="bg-[#DDE6FF] rounded-2xl p-4 flex gap-4">
          <img src={`https://i.pravatar.cc/100?img=${i + 20}`} className="w-14 h-14 rounded-full" />
          <div className="flex-1">
            <p className="text-xs text-blue-600">Professional Doctor</p>
            <h3 className="text-blue-600 font-semibold">Dr. {n}</h3>
            <button
  onClick={() => navigate(`/appointment/:doctor`)}
  className="mt-2 w-full bg-blue-600 text-white py-1 rounded-full text-sm"
>
  Make Appointment
</button>
          </div>
          <FaHeart className="text-blue-600 mt-2" />
        </div>
      ))}
      <div className="bg-[#2962FF] text-white py-4 flex justify-around rounded-t-3xl">
        <FaHome size={20} onClick={() => navigate("/dashboard")} />
  <FaHeart size={20} />
  <FaUser size={20} onClick={() => navigate("/my-profile")} />
<FaCalendarAlt 
  size={20} 
  onClick={() => navigate("/appointment")} 
/>
      </div>
    </div>
  );
}

/* ❤️ Favorite Services – image match */
function FavoriteServices() {
  const services = [
    "Dermato-Endocrinology",
    "Cosmetic Bioengineering",
    "Dermato-Genetics",
    "Solar Dermatology",
  ];

  return (
    <div className="space-y-4">
      {services.map((s, i) => (
        <div
          key={i}
          className="bg-blue-600 text-white rounded-2xl px-4 py-3 flex items-center justify-between"
        >
          <span className="flex items-center gap-2">
            <FaHeart /> {s}
          </span>
          <span>⌄</span>
        </div>
      ))}
      <div className="bg-[#2962FF] text-white py-4 flex justify-around rounded-t-3xl">
      <FaHome size={20} onClick={() => navigate("/dashboard")} />
  <FaHeart size={20} />
  <FaUser size={20} onClick={() => navigate("/my-profile")} />
<FaCalendarAlt 
  size={20} 
  onClick={() => navigate("/appointment")} 
/>
      </div>
    </div>
  );
}

const CircleIcon = ({ children }) => (
  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600">
    {children}
  </div>
);
