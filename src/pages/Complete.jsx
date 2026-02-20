import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function Complete() {
  const navigate = useNavigate();

  const doctors = [
    {
      name: "Dr. Olivia Turner, M.D.",
      spec: "Dermato-Endocrinology",
      rating: 5,
      reviews: 60,
      img: "https://i.pravatar.cc/100?img=12",
    },
    {
      name: "Dr. Alexander Bennett, Ph.D.",
      spec: "Dermato-Genetics",
      rating: 4,
      reviews: 40,
      img: "https://i.pravatar.cc/100?img=13",
    },
    {
      name: "Dr. Sophia Martinez, Ph.D.",
      spec: "Cosmetic Bioengineering",
      rating: 5,
      reviews: 150,
      img: "https://i.pravatar.cc/100?img=14",
    },
  ];

  return (
    <div className="space-y-4">
      {doctors.map((doc, i) => (
        <div key={i} className="bg-[#DDE6FF] rounded-2xl p-4 flex gap-3 items-center">

          <img
            src={doc.img}
            className="w-16 h-16 rounded-full"
            alt=""
          />

          <div className="flex-1">
            <h3 className="text-blue-600 font-semibold text-sm">
              {doc.name}
            </h3>

            <p className="text-xs text-gray-600">{doc.spec}</p>

            <div className="flex items-center gap-2 text-xs mt-1">
              <FaStar className="text-yellow-400" />
              <span>{doc.rating}</span>
              <span className="text-gray-500">{doc.reviews}</span>
            </div>

            <div className="flex gap-3 mt-3">
              <button className="bg-white px-4 py-1 rounded-full text-xs">
                Re-Book
              </button>

              <button
                onClick={() => navigate("/review")}
                className="bg-[#2962FF] text-white px-4 py-1 rounded-full text-xs"
              >
                Add Review
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
