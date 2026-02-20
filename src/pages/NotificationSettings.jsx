import { useNavigate } from "react-router-dom";

export default function NotificationSettings() {
  const navigate = useNavigate();

  const items = [
    "General Notification",
    "Sound",
    "Sound Call",
    "Vibrate",
    "Special Offers",
    "Payments",
    "Promo And Discount",
    "Cashback",
  ];

  return (
    <div className="h-screen bg-white px-5 pt-6">
      <button onClick={() => navigate(-1)} className="text-blue-600 text-xl">←</button>

      <h2 className="text-center text-blue-600 font-semibold mt-2">
        Notification Setting
      </h2>

      <div className="mt-6 space-y-5">
        {items.map((item, i) => (
          <div key={i} className="flex justify-between items-center">
            <span>{item}</span>
            <input type="checkbox" defaultChecked className="toggle" />
          </div>
        ))}
      </div>
    </div>
  );
}