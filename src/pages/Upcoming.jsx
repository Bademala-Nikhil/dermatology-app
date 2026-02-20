import { FaCheck, FaTimes } from "react-icons/fa";

export default function Upcoming() {
  const appointments = [
    {
      name: "Dr. Olivia Turner, M.D.",
      spec: "Dermato-Endocrinology",
      date: "Sunday, 12 June",
      time: "9:30 AM - 10:00 AM",
      img: "https://i.pravatar.cc/100?img=32",
    },
    {
      name: "Dr. Alexander Bennett, Ph.D.",
      spec: "Dermato-Genetics",
      date: "Friday, 20 June",
      time: "2:30 PM - 3:00 PM",
      img: "https://i.pravatar.cc/100?img=45",
    },
  ];

  return (
    <div className="space-y-4">
      {appointments.map((doc, i) => (
        <div key={i} className="bg-[#DDE6FF] rounded-3xl p-4">
          <div className="flex gap-3 items-center">
            <img src={doc.img} className="w-16 h-16 rounded-full" />

            <div className="flex-1">
              <h3 className="text-blue-600 font-semibold text-sm">
                {doc.name}
              </h3>
              <p className="text-xs text-gray-600">
                {doc.spec}
              </p>

              <div className="flex gap-2 mt-2 text-[10px]">
                <span className="bg-white px-3 py-1 rounded-full">
                  {doc.date}
                </span>
                <span className="bg-white px-3 py-1 rounded-full">
                  {doc.time}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 mt-4">
            <button className="flex-1 bg-[#2962FF] text-white py-2 rounded-full text-sm">
              Details
            </button>

            <div className="bg-white p-2 rounded-full">
              <FaCheck className="text-green-500 text-xs" />
            </div>

            <div className="bg-white p-2 rounded-full">
              <FaTimes className="text-red-500 text-xs" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
