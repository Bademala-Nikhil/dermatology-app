import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaHome, FaHeart, FaUser, FaCalendarAlt } from "react-icons/fa";
export default function CancelAppointment() {
  const [selected, setSelected] = useState("Weather Conditions");
 const navigate = useNavigate();
  const reasons = [
    "Rescheduling",
    "Weather Conditions",
    "Unexpected Work",
    "Others",
  ];

  return (
    <div className="h-screen bg-[#EEF3FF] p-5 flex flex-col">
      <h2 className="text-center text-blue-600 font-semibold text-lg">
        Cancel Appointment
      </h2>

      <p className="text-xs text-gray-500 mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <div className="mt-6 space-y-4">
        {reasons.map((reason, i) => (
          <div
            key={i}
            onClick={() => setSelected(reason)}
            className={`flex items-center gap-3 p-3 rounded-full cursor-pointer ${
              selected === reason
                ? "bg-[#2962FF] bg-opacity-20"
                : ""
            }`}
          >
            <div
              className={`w-4 h-4 rounded-full border-2 ${
                selected === reason
                  ? "border-blue-600 bg-blue-600"
                  : "border-gray-400"
              }`}
            />
            <span className="text-sm">{reason}</span>
          </div>
        ))}
      </div>

      <textarea
        placeholder="Enter Your Reason Here..."
        className="mt-6 bg-[#DDE6FF] rounded-2xl p-4 h-32 outline-none text-sm"
      />

      <button onClick={() => navigate("/review")} className="mt-auto bg-[#2962FF] text-white py-3 rounded-full">
        Cancel Appointment
      </button>
      <br /><br />
       <div className="bg-[#2962FF] text-white py-4 flex justify-around rounded-t-3xl">
              <FaHome size={20} onClick={() => navigate("/")} />
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
