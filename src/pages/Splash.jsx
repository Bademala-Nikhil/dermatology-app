import { useNavigate } from "react-router-dom";
import logofirst from "../assets/logofirst.png";
export default function Splash() {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate("/home")}
      className="h-screen w-screen bg-blue-600 flex flex-col items-center justify-center cursor-pointer"
    >
      <img
        src={logofirst}
        alt="Skin Firts Logo"
        className="w-28 mb-6"
      />

      <h1 className="text-white text-3xl font-light tracking-wide">
        Skin Firts
      </h1>

      <p className="text-white text-sm mt-2 tracking-widest">
        Dermatology Center
      </p>
    </div>
  );
}