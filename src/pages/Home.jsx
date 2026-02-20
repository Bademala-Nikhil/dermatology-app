import { useNavigate } from "react-router-dom";
import logosecond from "../assets/logosecond.png";
export default function Home() {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-screen bg-white flex flex-col items-center justify-between py-16 px-6">
      
      {/* Logo + Title */}
      <div className="flex flex-col items-center">
        <img
          src={logosecond}
          alt="Skin Firts Logo"
          className="w-32 mb-6"
        />

        <h1 className="text-3xl font-light text-blue-600 tracking-wide">
          Skin Firts
        </h1>

        <p className="text-blue-600 text-sm mt-1">
          Dermatology Center
        </p>
      </div>

      {/* Description */}
      <p className="text-center text-gray-500 text-sm px-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>

      {/* Buttons */}
      <div className="w-full flex flex-col gap-4">
        <button
          onClick={() => navigate("/login")}
          className="w-full bg-blue-600 text-white py-3 rounded-full text-lg font-medium"
        >
          Log In
        </button>

        <button
          onClick={() => navigate("/signup")}
          className="w-full bg-blue-100 text-blue-600 py-3 rounded-full text-lg font-medium"
        >
          Sign Up
        </button>
      </div>
    </div>
  );
}