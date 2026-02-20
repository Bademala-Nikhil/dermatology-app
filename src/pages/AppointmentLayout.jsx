import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { FaHome, FaHeart, FaUser, FaCalendarAlt } from "react-icons/fa";

export default function AppointmentLayout() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[#EEF3FF] flex flex-col">

      {/* Header */}
      <div className="bg-white px-4 pt-6 pb-4 rounded-b-3xl">
        <h2 className="text-center text-blue-600 font-semibold text-lg">
          All Appointment
        </h2>

        {/* Tabs */}
        <div className="flex justify-center gap-3 mt-4 text-sm">
          <NavLink
            to="complete"
            className={({ isActive }) =>
              `px-4 py-1 rounded-full ${
                isActive ? "bg-[#2962FF] text-white" : "bg-gray-200"
              }`
            }
          >
            Complete
          </NavLink>

          <NavLink
            to="upcoming"
            className={({ isActive }) =>
              `px-4 py-1 rounded-full ${
                isActive ? "bg-[#2962FF] text-white" : "bg-gray-200"
              }`
            }
          >
            Upcoming
          </NavLink>

          <NavLink
            to="cancelled"
            className={({ isActive }) =>
              `px-4 py-1 rounded-full ${
                isActive ? "bg-[#2962FF] text-white" : "bg-gray-200"
              }`
            }
          >
            Cancelled
          </NavLink>
        </div>
      </div>

      {/* Dynamic Content */}
      <div className="flex-1 px-4 mt-4 overflow-y-auto">
        <Outlet />
      </div>

      {/* Bottom Nav */}
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
