import {
  FaBell,
  FaCog,
  FaHeart,
  FaStar,
  FaHome,
  FaUser,
  FaCalendarAlt,
} from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
export default function Dashboard() {
    const navigate = useNavigate();
  return (
    <div className="h-screen bg-[#EEF3FF] flex flex-col">

      {/* HEADER */}
      <div className="bg-white px-4 pt-6 pb-4 rounded-b-3xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img
              src="https://i.pravatar.cc/100?img=12"
              className="w-12 h-12 rounded-full"
            />
            <div>
              <p className="text-sm text-blue-600">Hi, WelcomeBack</p>
              <h2 className="font-semibold">John Doe</h2>
            </div>
          </div>

          <div className="flex gap-3 text-blue-600">
            <FaBell size={18} onClick={() => navigate("/notifications")} className="cursor-pointer" />
            <FaCog size={18} />
          </div>
        </div>

        {/* MENU */}
        <div className="flex gap-6 mt-5 text-sm">
         <span
  onClick={() => navigate("/doctors")}
  className="flex items-center gap-1 text-blue-600 cursor-pointer"
>
  Doctors
</span>
          <span className="flex items-center gap-1 text-gray-400">
            <FaHeart /> Favorite
          </span>
        </div>

        {/* SEARCH */}
        <div className="mt-4 relative">
          <input
            placeholder="Search"
            className="w-full bg-[#EEF3FF] rounded-full py-3 px-5 outline-none"
          />
          <FiSearch className="absolute right-5 top-3.5 text-blue-600" />
        </div>
      </div>

      {/* DATE SELECTOR */}
      <div className="flex gap-3 px-4 mt-4 overflow-x-auto">
        {[
          ["9", "MON"],
          ["10", "TUE"],
          ["11", "WED"],
          ["12", "THU"],
          ["13", "FRI"],
          ["14", "SAT"],
        ].map((d, i) => (
          <div
            key={i}
            className={`min-w-[60px] py-3 rounded-2xl text-center ${
              d[1] === "WED"
                ? "bg-[#2962FF] text-white"
                : "bg-white"
            }`}
          >
            <h3 className="text-lg font-semibold">{d[0]}</h3>
            <p className="text-xs">{d[1]}</p>
          </div>
        ))}
      </div>

      {/* APPOINTMENT */}
      <div className="px-4 mt-4">
        <p className="text-center text-blue-600 text-sm">
          11 Wednesday - Today
        </p>

        <div className="bg-[#DDE6FF] rounded-2xl p-4 mt-3">
          <p className="text-xs text-gray-500">10 AM</p>
          <h3 className="font-semibold text-blue-600">
            Dr. Olivia Turner, M.D.
          </h3>
          <p className="text-xs text-gray-600">
            Treatment and prevention of skin and photodermatitis.
          </p>
        </div>
      </div>

      {/* DOCTOR LIST */}
      <div className="flex-1 px-4 mt-4 space-y-3 overflow-y-auto">
        {[
          {
            name: "Dr. Olivia Turner, M.D.",
            spec: "Dermato-Endocrinology",
            rating: "4.9",
            reviews: "60",
          },
          {
            name: "Dr. Alexander Bennett, Ph.D.",
            spec: "Dermato-Genetics",
            rating: "4.5",
            reviews: "40",
          },
          {
            name: "Dr. Sophia Martinez, Ph.D.",
            spec: "Cosmetic Bioengineering",
            rating: "5.0",
            reviews: "150",
          },
        ].map((doc, i) => (
          <div
            key={i}
            className="bg-white rounded-2xl p-4 flex gap-3 items-center"
          >
            <img
              src={`https://i.pravatar.cc/100?img=${i + 20}`}
              className="w-14 h-14 rounded-full"
            />

            <div className="flex-1">
              <h3 className="font-semibold text-blue-600">
                {doc.name}
              </h3>
              <p className="text-xs text-gray-500">{doc.spec}</p>

              <div className="flex items-center gap-3 text-xs mt-1">
                <span className="flex items-center gap-1">
                  <FaStar className="text-yellow-400" />
                  {doc.rating}
                </span>
                <span>{doc.reviews}</span>
              </div>
            </div>

            <MdFavoriteBorder className="text-blue-600" />
          </div>
        ))}
      </div>

<div className="bg-[#2962FF] text-white py-4 flex justify-around rounded-t-3xl">
  <FaHome size={20} onClick={() => navigate("/dashboard")} />
  <FaHeart size={20} />
  <FaUser size={20} onClick={() => navigate("/my-profile")} />
<FaCalendarAlt 
  size={20} 
  onClick={() => navigate("/appointments")} 
/>


</div>
    </div>
  );
}