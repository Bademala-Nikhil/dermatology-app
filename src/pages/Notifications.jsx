import { useNavigate } from "react-router-dom";
import { FaCalendarAlt, FaNotesMedical,FaUser,FaHome,FaHeart } from "react-icons/fa";

export default function Notifications() {
  const navigate = useNavigate();

  const data = [
    { title: "Scheduled Appointment", time: "2 M", doctor: "Olivia Turner" },
    { title: "Scheduled Change", time: "2 H", doctor: "Olivia Turner", active: true },
    { title: "Medical Notes", time: "3 H", doctor: "Olivia Turner" },
  ];

  return (
    <div className="h-screen bg-[#EEF3FF] flex flex-col">
      {/* HEADER */}
      <div className="bg-white px-5 pt-6 pb-4 rounded-b-3xl">
        <div className="flex justify-between items-center">
          <button onClick={() => navigate(-1)} className="text-blue-600 text-xl">←</button>
          <h2 className="text-blue-600 font-semibold">Notification</h2>
          <span className="text-xs bg-[#EEF3FF] px-3 py-1 rounded-full text-blue-600">
            News
          </span>
        </div>

        <div className="flex justify-between mt-4 text-sm">
          <span className="bg-[#2962FF] text-white px-4 py-1 rounded-full">
            Today
          </span>
          <span className="text-blue-600 cursor-pointer">Mark all</span>
        </div>
      </div>

      {/* LIST */}
      <div className="flex-1 px-4 mt-4 space-y-3 overflow-y-auto">
        {data.map((item, i) => (
          <div
            key={i}
            onClick={() => navigate(`/chat/${item.doctor}`)}
            className={`p-4 rounded-2xl flex gap-3 cursor-pointer ${
              item.active ? "bg-[#DDE6FF]" : "bg-white"
            }`}
          >
            <div className="bg-[#2962FF] p-3 rounded-full text-white">
              {item.title === "Medical Notes" ? (
                <FaNotesMedical />
              ) : (
                <FaCalendarAlt />
              )}
            </div>

            <div className="flex-1">
              <h3 className="font-semibold">{item.title}</h3>
              <p className="text-xs text-gray-500">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
            </div>

            <span className="text-xs text-gray-400">{item.time}</span>
          </div>
        ))}
      </div>

      {/* BOTTOM NAV */}
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