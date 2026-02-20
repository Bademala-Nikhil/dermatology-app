import { useNavigate } from "react-router-dom";

export default function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-white px-5 pt-6 overflow-y-auto">
      <button onClick={() => navigate(-1)} className="text-blue-600 text-xl">←</button>

      <h2 className="text-center text-blue-600 font-semibold mb-4">
        Privacy Policy
      </h2>

      <p className="text-xs text-gray-400 mb-4">
        Last Update: 14/08/2024
      </p>

      <p className="text-sm text-gray-600 mb-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit...
      </p>

      <h3 className="text-blue-600 font-semibold mb-2">
        Terms & Conditions
      </h3>

      {[1, 2, 3, 4].map((i) => (
        <p key={i} className="text-sm text-gray-600 mb-3">
          {i}.Ut lacinia justo sit amet lorem sodales accumsan. Proin malesuada eleifend fermentum. Donec condimentum, nunc at rhoncus faucibus, ex nisi laoreet ipsum, eu pharetra eros est vitae orci. Morbi quis rhoncus mi. Nullam lacinia ornare accumsan. Duis laoreet, ex eget rutrum pharetra, lectus nisl posuere risus, vel facilisis nisi tellus ac turpis. 
        </p>
      ))}
    </div>
  );
}