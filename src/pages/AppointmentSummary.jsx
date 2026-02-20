import { useNavigate } from "react-router-dom";
import { FaCheck, FaTimes } from "react-icons/fa";
import { FaHeart,  FaUser,FaHome, FaCalendarAlt} from "react-icons/fa";
export default function AppointmentSummary() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[#EEF3FF] px-4 pt-6">
      <button onClick={() => navigate(-1)} className="text-blue-600 text-xl">←</button>

      <h2 className="text-blue-600 font-semibold text-center mt-2">
        Your Appointment
      </h2>

      <div className="bg-[#DDE6FF] rounded-3xl p-4 mt-4 flex gap-3">
        <img src="https://i.pravatar.cc/100?img=20" className="w-16 h-16 rounded-full" />
        <div>
          <h3 className="text-blue-600 font-semibold">
            Dr. Olivia Turner, M.D.
          </h3>
          <p className="text-xs text-gray-600">Dermato-Endocrinology</p>
          <p className="text-xs mt-1">⭐ 5 | 60</p>
        </div>
      </div>

      <div className="bg-blue-600 text-white rounded-full px-4 py-2 mt-4 inline-block">
        Month 24, Year – WED, 10:00 AM
      </div>

      <div className="mt-6 text-sm">
        <p><b>Booking For:</b> Another Person</p>
        <p><b>Full Name:</b> Jane Doe</p>
        <p><b>Age:</b> 30</p>
        <p><b>Gender:</b> Female</p>

        <p className="mt-3"><b>Problem</b></p>
        <p className="text-gray-500 text-xs">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className="flex gap-4 mt-6">
        <button className="flex-1 bg-blue-600 text-white py-3 rounded-full flex justify-center">
          <FaCheck />
        </button>
        <button className="flex-1 bg-gray-300 py-3 rounded-full flex justify-center">
          <FaTimes />
        </button>
      </div>
      <br />
            <br />
             <div className="bg-[#2962FF] text-white py-4 flex justify-around rounded-t-3xl">
              <FaHome size={20} />
              <FaHeart size={20} />
              <FaUser size={20} />
              <FaCalendarAlt size={20} />
            </div>
    </div>
  );
}