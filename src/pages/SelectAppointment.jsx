import { useNavigate } from "react-router-dom";
import {FaHeart,   FaUser,FaHome, FaCalendarAlt} from "react-icons/fa";
export default function SelectAppointment() {
  const navigate = useNavigate();

  const times = [
    "9:00 AM","9:30 AM","10:00 AM","10:30 AM",
    "11:00 AM","11:30 AM","12:00 PM",
    "2:00 PM","2:30 PM","3:00 PM","3:30 PM","4:00 PM"
  ];

  return (
    <div className="h-screen bg-[#EEF3FF] px-4 pt-6">
      <button onClick={() => navigate(-1)} className="text-blue-600 text-xl">←</button>

      <h2 className="text-blue-600 font-semibold mt-4 mb-2">
        Dr. Olivia Turner, M.D.
      </h2>

      <p className="text-blue-600 text-sm mb-3">Available Time</p>

      <div className="grid grid-cols-3 gap-3">
        {times.map(t => (
          <button
            key={t}
            className={`py-2 rounded-full text-xs ${
              t === "10:00 AM"
                ? "bg-blue-600 text-white"
                : "bg-white text-blue-600"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Patient Details */}
      <div className="mt-5">
        <h4 className="text-blue-600 font-semibold mb-2">Patient Details</h4>

        <input className="w-full p-3 rounded-xl mb-3" value="Jane Doe" />
        <input className="w-full p-3 rounded-xl mb-3" value="30" />

        <textarea
          className="w-full p-3 rounded-xl h-24"
          placeholder="Describe your problem"
        />
      </div>

      <button
        onClick={() => navigate("/appointment/confirm")}
        className="mt-5 w-full bg-blue-600 text-white py-3 rounded-full"
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