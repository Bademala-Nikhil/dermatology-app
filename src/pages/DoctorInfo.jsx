import { useParams, useNavigate } from "react-router-dom";
import { FaStar, FaCalendarAlt,FaHome,FaUser } from "react-icons/fa";
import {
  FaHeart,
  FaFemale,
  FaMale,
} from "react-icons/fa";
export default function DoctorInfo() {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[#EEF3FF] px-4 pt-6 overflow-y-auto">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => navigate(-1)} className="text-blue-600 text-xl">
            ←
        </button>
        <h1 className="text-blue-600 font-semibold">Doctor Info</h1>
        <div className="w-6" />
      </div>
 {/* TOP ICON FILTERS */}
      <div className="flex items-center gap-3 mb-4">
        <span className="text-sm">Sort By</span>

        <button
          onClick={() => navigate("/doctors/top-rated")}
          className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs"
        >
          A–Z
        </button>

        <IconBtn icon={<FaStar />} onClick={() => navigate("/rating")} />
        <IconBtn icon={<FaHeart />} onClick={() => navigate("/favorite")} />
        <IconBtn icon={<FaFemale />} onClick={() => navigate("/doctors/female")} />
        <IconBtn icon={<FaMale />} onClick={() => navigate("/doctors/male")} />
      </div>
      {/* Doctor Card */}
      <div className="bg-[#DDE6FF] rounded-3xl p-6 text-center">
        <img
          src="https://i.pravatar.cc/200?img=11"
          className="w-28 h-28 rounded-full mx-auto"
        />

        <h2 className="text-blue-600 font-semibold mt-4">
          Dr. Alexander Bennett, Ph.D.
        </h2>

        <p className="text-sm text-gray-600">
          Dermato-Genetics
        </p>

        <div className="flex justify-center gap-4 mt-3 text-sm">
          <span className="flex items-center gap-1">
            <FaStar className="text-yellow-400" /> 5
          </span>
          <span>40 Reviews</span>
          <span className="flex items-center gap-1">
            <FaCalendarAlt /> Mon–Sat
          </span>
        </div>

        <button className="mt-4 bg-blue-600 text-white px-6 py-2 rounded-full">
          Schedule
        </button>
      </div>

      {/* Info Sections */}
      <div className="mt-6 space-y-4">
        <div>
          <h3 className="text-blue-600 font-semibold">Profile</h3>
          <p className="text-sm text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div>
          <h3 className="text-blue-600 font-semibold">Career Path</h3>
          <p className="text-sm text-gray-600">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        <div>
          <h3 className="text-blue-600 font-semibold">Highlights</h3>
          <p className="text-sm text-gray-600">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
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

/* Reusable Icon Button */
function IconBtn({ icon, onClick }) {
  return (
    <button
      onClick={onClick}
      className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-600"
    >
      {icon}
    </button>
  );
}
