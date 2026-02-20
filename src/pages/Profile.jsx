import { useNavigate } from "react-router-dom";

export default function Profile() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-white px-5 pt-6">
      <button onClick={() => navigate(-1)} className="text-blue-600 text-xl">←</button>

      <div className="flex flex-col items-center mt-5">
        <img src="https://i.pravatar.cc/150?img=12" className="w-24 h-24 rounded-full" />
      </div>

      <div className="mt-6 space-y-4">
        {[
          ["Full Name", "John Doe"],
          ["Phone Number", "+123 567 89000"],
          ["Email", "johndoe@example.com"],
          ["Date Of Birth", "DD / MM / YYYY"],
        ].map(([label, value], i) => (
          <div key={i}>
            <p className="text-sm text-gray-500">{label}</p>
            <input
              value={value}
              readOnly
              className="w-full bg-[#EEF3FF] rounded-xl px-4 py-3 mt-1"
            />
          </div>
        ))}
      </div>

      <button className="w-full mt-6 bg-[#2962FF] text-white py-3 rounded-full">
        Update Profile
      </button>
    </div>
  );
}