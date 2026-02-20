import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";

export default function HelpCenter() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-white">
      {/* TOP */}
      <div className="bg-[#2962FF] px-5 pt-6 pb-6 rounded-b-3xl text-white">
        <button onClick={() => navigate(-1)} className="text-xl">←</button>
        <h2 className="text-center font-semibold mt-2">Help Center</h2>
        <p className="text-center text-sm opacity-80">
          How Can We Help You?
        </p>

        <div className="relative mt-4">
          <input
            placeholder="Search..."
            className="w-full rounded-full py-3 px-10 text-black"
          />
          <FiSearch className="absolute left-4 top-3.5 text-gray-400" />
        </div>

        <div className="flex gap-3 mt-4">
          <button className="flex-1 bg-white text-blue-600 py-2 rounded-full">
            FAQ
          </button>
          <button
            onClick={() => navigate("/contact")}
            className="flex-1 bg-blue-500 py-2 rounded-full"
          >
            Contact Us
          </button>
        </div>
      </div>

      {/* FAQ */}
      <div className="px-5 mt-5 space-y-3">
        {Array(6)
          .fill("Lorem ipsum dolor sit amet?")
          .map((q, i) => (
            <div
              key={i}
              className="bg-[#EEF3FF] rounded-xl px-4 py-3 flex justify-between"
            >
              <span className="text-sm">{q}</span>
              <span>⌄</span>
            </div>
          ))}
      </div>
    </div>
  );
}