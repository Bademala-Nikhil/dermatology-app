import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { FaHome, FaHeart, FaUser, FaCalendarAlt } from "react-icons/fa";
export default function Review() {
  const [rating, setRating] = useState(4);

  return (
    <div className="h-screen bg-[#EEF3FF] p-5 flex flex-col items-center">
      <h2 className="text-blue-600 font-semibold text-lg">
        Review
      </h2>

      <p className="text-xs text-gray-500 mt-3 text-center">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>

      <img
        src="https://i.pravatar.cc/150?img=25"
        className="w-28 h-28 rounded-full mt-6"
      />

      <h3 className="text-blue-600 font-semibold mt-4">
        Dr. Olivia Turner, M.D.
      </h3>

      <p className="text-xs text-gray-500">
        Dermato-Endocrinology
      </p>

      <div className="flex gap-2 mt-3">
        {[1, 2, 3, 4, 5].map((star) => (
          <FaStar
            key={star}
            onClick={() => setRating(star)}
            className={`cursor-pointer ${
              star <= rating
                ? "text-blue-600"
                : "text-gray-300"
            }`}
          />
        ))}
      </div>

      <textarea
        placeholder="Enter Your Comment Here..."
        className="mt-6 bg-[#DDE6FF] rounded-2xl p-4 w-full h-32 outline-none text-sm"
      />

      <button className="mt-auto bg-[#2962FF] text-white py-3 w-full rounded-full">
        Add Review
      </button>
       <br /><br />
             <div className="bg-[#2962FF] w-350 text-white py-4 flex justify-around rounded-t-3xl">
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
