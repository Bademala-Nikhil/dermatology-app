
import { useNavigate } from "react-router-dom";
import { FaStar, FaHeart, FaFemale, FaMale ,FaHome, FaUser,FaCalendarAlt} from "react-icons/fa";

const doctors = [
  { id: 1, name: "Dr. Alexander Bennett", spec: "Dermato-Genetics", img: "https://i.pravatar.cc/150?img=11" },
  { id: 2, name: "Dr. Michael Davidson", spec: "Solar Dermatology", img: "https://i.pravatar.cc/150?img=12" },
  {
    id: 3,
    name: "Dr. Olivia Turner, M.D.",
    spec: "Dermato-Endocrinology",
    img: "https://i.pravatar.cc/150?img=13",
  },
  {
    id: 4,
    name: "Dr. Sophia Martinez, Ph.D.",
    spec: "Cosmetic Bioengineering",
    img: "https://i.pravatar.cc/150?img=14",
  },
];

export default function Doctors() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[#EEF3FF] px-4 pt-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => navigate(-1)} className="text-blue-600 text-xl">←</button>
        <h1 className="text-blue-600 font-semibold">Doctors</h1>
        <div />
      </div>

      {/* TOP ICON FILTERS */}
      <div className="flex items-center gap-3 mb-4">
         <div className="flex items-center gap-2 mb-4 text-sm">
                <span>Sort By</span>
                <span className="px-3 py-1 bg-blue-600 text-white rounded-full text-xs">
                  A–Z
                </span>
                <CircleIcon><FaStar onClick={() => navigate("/rating")}/></CircleIcon>
                <CircleIcon><FaHeart onClick={() => navigate("/favorite")}/></CircleIcon>
                <CircleIcon><FaFemale onClick={() => navigate("/doctors/female")}/></CircleIcon>
                <CircleIcon><FaMale onClick={() => navigate("/doctors/male")}/></CircleIcon>
              </div>
               </div>

      {/* Doctor Cards */}
      <div className="space-y-4">
        {doctors.map((doc) => (
          <div
            key={doc.id}
            onClick={() => navigate(`/doctor/${doc.id}`)}
            className="bg-[#DDE6FF] rounded-2xl p-4 flex items-center gap-4 cursor-pointer"
          >
            <img src={doc.img} className="w-16 h-16 rounded-full" />
            <div>
              <h3 className="text-blue-600 font-semibold">{doc.name}</h3>
              <p className="text-sm text-gray-600">{doc.spec}</p>
            </div>
          </div>
        ))}
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

/* Reusable Circle Icon */
function CircleIcon({ children }) {
  return (
    <span className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-blue-600">
      {children}
    </span>
  );
}
