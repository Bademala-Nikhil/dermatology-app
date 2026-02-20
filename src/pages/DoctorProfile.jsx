import { useNavigate } from "react-router-dom";
import { FaStar, FaHeart } from "react-icons/fa";
import {   FaUser,FaHome, FaCalendarAlt} from "react-icons/fa";
export default function DoctorProfile() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[#EEF3FF] px-4 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => navigate(-1)} className="text-blue-600 text-xl">←</button>
        <span className="text-blue-600 font-semibold">Schedule</span>
        <FaHeart className="text-blue-600" />
      </div>

      {/* Doctor Card */}
      <div className="bg-[#DDE6FF] rounded-3xl p-4 text-center">
        <img
          src="https://i.pravatar.cc/150?img=20"
          className="w-24 h-24 rounded-full mx-auto"
        />
        <h3 className="text-blue-600 font-semibold mt-2">
          Dr. Olivia Turner, M.D.
        </h3>
        <p className="text-xs text-gray-600">Dermato-Endocrinology</p>

        <div className="flex justify-center gap-3 mt-2 text-xs">
          <span className="flex items-center gap-1">
            <FaStar className="text-yellow-400" /> 4.5
          </span>
          <span>30 Reviews</span>
        </div>
      </div>

      {/* Profile */}
      <div className="mt-4">
        <h4 className="text-blue-600 font-semibold mb-1">Profile</h4>
        <p className="text-xs text-gray-500">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Calendar Preview */}
      <div className="bg-white rounded-2xl p-4 mt-4 text-center">
        <p className="text-blue-600 font-semibold mb-2">MONTH</p>
        <div className="grid grid-cols-7 gap-2 text-xs text-blue-600">
          {["MON","TUE","WED","THU","FRI","SAT","SUN"].map(d=>(
            <span key={d}>{d}</span>
          ))}
          {Array.from({ length: 31 }, (_, i) => (
            <span
              key={i}
              className={`p-1 rounded-full ${
                i + 1 === 24 ? "bg-blue-600 text-white" : ""
              }`}
            >
              {i + 1}
            </span>
          ))}
        </div>
      </div>

      {/* Continue */}
      <button
        onClick={() => navigate("/appointment/select")}
        className="mt-6 w-full bg-blue-600 text-white py-3 rounded-full"
      >
        Continue
      </button>
      <br />
      <br />
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