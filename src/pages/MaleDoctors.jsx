import { useNavigate } from "react-router-dom";
import { FaStar, FaHeart, FaFemale, FaMale,FaCalendarAlt, FaInfoCircle,FaHome, FaUser, } from "react-icons/fa";

const doctors = [
  {
    id: 3,
    name: "Dr. Alexander Bennett, Ph.D.",
    spec: "Dermato-Genetics",
    img: "https://i.pravatar.cc/150?img=12",
  },
  {
    id: 4,
    name: "Dr. Michael Davidson, M.D.",
    spec: "Solar Dermatology",
    img: "https://i.pravatar.cc/150?img=13",
  },
];

export default function MaleDoctors() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[#EEF3FF] px-4 pt-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <button onClick={() => navigate(-1)} className="text-blue-600 text-xl">
          ←
        </button>
        <h1 className="text-blue-600 font-semibold">Male</h1>
        <div className="flex gap-2">
          <CircleIcon>🔍</CircleIcon>
          <CircleIcon>⚙️</CircleIcon>
        </div>
      </div>

      {/* Sort */}
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

      {/* Doctor Cards */}
      <div className="space-y-4">
        {doctors.map((doc) => (
          <div
            key={doc.id}
            className="bg-[#DDE6FF] rounded-2xl p-4 flex gap-4"
          >
            <img
              src={doc.img}
              className="w-16 h-16 rounded-full"
            />

            <div className="flex-1">
              <h3 className="text-blue-600 font-semibold">{doc.name}</h3>
              <p className="text-sm text-gray-600">{doc.spec}</p>

              <div className="flex items-center gap-2 mt-2">
                <button
                  onClick={() => navigate(`/doctor/${doc.id}`)}
                  className="px-4 py-1 bg-blue-600 text-white rounded-full text-sm"
                >
                  Info
                </button>

                <MiniIcon><FaCalendarAlt /></MiniIcon>
                <MiniIcon><FaInfoCircle /></MiniIcon>
                <MiniIcon><FaHeart /></MiniIcon>
              </div>
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

/* helpers */
const CircleIcon = ({ children }) => (
  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600">
    {children}
  </div>
);

const MiniIcon = ({ children }) => (
  <div className="w-7 h-7 bg-white rounded-full flex items-center justify-center text-blue-600 text-xs">
    {children}
  </div>
);