import { useNavigate, useParams } from "react-router-dom";
import { FaPhone, FaVideo, FaPaperPlane, FaPaperclip } from "react-icons/fa";

export default function Chat() {
  const navigate = useNavigate();
  const { doctorName } = useParams();

  return (
    <div className="h-screen bg-[#EEF3FF] flex flex-col">
      {/* HEADER */}
      <div className="bg-[#2962FF] text-white px-4 py-4 flex items-center justify-between">
        <button onClick={() => navigate(-1)}>←</button>
        <h3 className="font-semibold">Dr. {doctorName}</h3>
        <div className="flex gap-3">
          <FaPhone />
          <FaVideo />
        </div>
      </div>

      {/* CHAT BODY */}
      <div className="flex-1 px-4 py-3 space-y-3 overflow-y-auto">
        <Bubble left text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." time="09:00" />
        <Bubble right text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." time="09:43" />
        <Bubble left text="Lorem ipsum dolor sit amet." time="09:55" />
      </div>

      {/* INPUT */}
      <div className="bg-[#DDE6FF] px-4 py-3 flex items-center gap-3">
        <FaPaperclip className="text-blue-600" />
        <input
          placeholder="Write Here..."
          className="flex-1 rounded-full px-4 py-2 outline-none"
        />
        <button className="bg-[#2962FF] text-white p-3 rounded-full">
          <FaPaperPlane />
        </button>
      </div>

      {/* BOTTOM NAV */}
      <div className="bg-[#2962FF] text-white py-4 flex justify-around rounded-t-3xl">
        <span>🏠</span>
        <span>💬</span>
        <span>👤</span>
        <span>📅</span>
      </div>
    </div>
  );
}

function Bubble({ text, time, left, right }) {
  return (
    <div className={`flex ${right ? "justify-end" : "justify-start"}`}>
      <div
        className={`max-w-[70%] px-4 py-2 rounded-2xl text-sm ${
          right
            ? "bg-[#2962FF] text-white"
            : "bg-white text-gray-700"
        }`}
      >
        {text}
        <p className="text-[10px] text-right mt-1 opacity-70">
          {time}
        </p>
      </div>
    </div>
  );
}