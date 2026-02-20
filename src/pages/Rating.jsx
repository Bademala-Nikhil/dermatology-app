import { useNavigate } from "react-router-dom";
import { FaStar, FaHeart, FaFemale, FaMale,FaHome,FaUser,FaCalendarAlt } from "react-icons/fa";

const doctors = [
  { id: 1, name: "Dr. Olivia Turner, M.D.", spec: "Dermato-Endocrinology", rating: 5 },
  { id: 2, name: "Dr. Alexander Bennett, Ph.D.", spec: "Dermato-Genetics", rating: 5 },
  { id: 3, name: "Dr. Sophia Martinez, Ph.D.", spec: "Cosmetic Bioengineering", rating: 4.9 },
  { id: 4, name: "Dr. Michael Davidson, M.D.", spec: "Solar Dermatology", rating: 4.8 },
];

export default function Rating() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[#EEF3FF] px-4 pt-6">

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <button onClick={() => navigate(-1)} className="text-blue-600 text-xl">←</button>
        <h1 className="text-blue-600 font-semibold">Rating</h1>
        <div />
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

      {/* Cards */}
      <div className="space-y-4">
        {doctors.map((d) => (
          <div key={d.id} className="bg-[#DDE6FF] rounded-2xl p-4 flex gap-4">
            <img src={`https://i.pravatar.cc/100?img=${d.id + 10}`} className="w-14 h-14 rounded-full" />

            <div className="flex-1">
              <p className="text-xs text-blue-600">Professional Doctor</p>
              <h3 className="text-blue-600 font-semibold">{d.name}</h3>
              <p className="text-xs text-gray-600">{d.spec}</p>

              <button
                onClick={() => navigate(`/doctor/${d.id}`)}
                className="mt-2 px-4 py-1 bg-blue-600 text-white rounded-full text-sm"
              >
                Info
              </button>
            </div>

            <div className="flex items-center gap-1 text-sm text-blue-600">
              <FaStar /> {d.rating}
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

const CircleIcon = ({ children }) => (
  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600">
    {children}
  </div>
);
