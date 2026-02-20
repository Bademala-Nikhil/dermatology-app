import { useNavigate } from "react-router-dom";
import {
  FaHeadphones,
  FaGlobe,
  FaWhatsapp,
  FaFacebook,
  FaInstagram,
} from "react-icons/fa";

export default function ContactUs() {
  const navigate = useNavigate();

  const items = [
    { icon: <FaHeadphones />, label: "Customer Service" },
    { icon: <FaGlobe />, label: "Website" },
    { icon: <FaWhatsapp />, label: "Whatsapp" },
    { icon: <FaFacebook />, label: "Facebook" },
    { icon: <FaInstagram />, label: "Instagram" },
  ];

  return (
    <div className="h-screen bg-white">
      <div className="bg-[#2962FF] px-5 pt-6 pb-6 rounded-b-3xl text-white">
        <button onClick={() => navigate(-1)} className="text-xl">←</button>
        <h2 className="text-center font-semibold mt-2">Help Center</h2>
        <p className="text-center text-sm opacity-80">
          How Can We Help You?
        </p>
      </div>

      <div className="px-5 mt-6 space-y-5">
        {items.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-between"
          >
            <div className="flex items-center gap-3 text-blue-600">
              {item.icon}
              <span className="text-black">{item.label}</span>
            </div>
            <span>⌄</span>
          </div>
        ))}
      </div>
    </div>
  );
}