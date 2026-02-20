import { useNavigate } from "react-router-dom";

export default function Cancelled() {
  const navigate = useNavigate();

  const doctors = [
    {
      name: "Dr. Olivia Turner, M.D.",
      spec: "Dermato-Endocrinology",
      img: "https://i.pravatar.cc/100?img=25",
    },
    {
      name: "Dr. Sophia Martinez, Ph.D.",
      spec: "Cosmetic Bioengineering",
      img: "https://i.pravatar.cc/100?img=26",
    },
  ];

  return (
    <div className="space-y-4">
      {doctors.map((doc, i) => (
        <div
          key={i}
          onClick={() => navigate("/cancel-appointment")}
          className="bg-[#DDE6FF] rounded-2xl p-4 flex gap-3 items-center cursor-pointer"
        >
          <img
            src={doc.img}
            className="w-16 h-16 rounded-full"
            alt=""
          />

          <div className="flex-1">
            <h3 className="text-blue-600 font-semibold text-sm">
              {doc.name}
            </h3>
            <p className="text-xs text-gray-600">
              {doc.spec}
            </p>

            <button
              onClick={(e) => {
                e.stopPropagation(); // prevent card click
                navigate("/review");
              }}
              className="mt-3 bg-[#2962FF] text-white px-5 py-1 rounded-full text-xs"
            >
              Add Review
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
