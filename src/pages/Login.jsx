import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";

export default function Login() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  return (
    <div className="h-screen px-6 pt-10 bg-white">

      {/* Back */}
      <button onClick={() => navigate(-1)} className="text-blue-600 text-xl">
        ←
      </button>

      <h1 className="text-center text-blue-600 text-lg font-medium">
        Log In
      </h1>

      {/* Welcome */}
      <h2 className="text-2xl font-semibold mt-8">Welcome</h2>
      <p className="text-gray-500 text-sm mt-1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>

      {/* Email */}
      <div className="mt-6">
        <label className="text-sm font-medium">
          Email or Mobile Number
        </label>
        <input
          placeholder="example@example.com"
          className="w-full mt-2 p-3 rounded-xl bg-[#EEF3FF] outline-none"
        />
      </div>

      {/* Password */}
      <div className="mt-4">
        <label className="text-sm font-medium">Password</label>
        <div className="relative mt-2">
          <input
            type={show ? "text" : "password"}
            className="w-full p-3 rounded-xl bg-[#EEF3FF] outline-none"
          />
          <button
            onClick={() => setShow(!show)}
            className="absolute right-4 top-4 text-gray-500"
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <p className="text-right text-blue-600 text-xs mt-2">
          Forget Password
        </p>
      </div>

      {/* Login Button */}
      <button
        onClick={() => navigate("/dashboard")}
        className="w-full bg-[#2962FF] text-white py-3 rounded-full mt-8 text-lg"
      >
        Log In
      </button>

      {/* Divider */}
      <p className="text-center text-gray-400 text-sm my-6">
        or sign up with
      </p>

      {/* Social Icons */}
      <div className="flex justify-center gap-4">
        <div className="w-12 h-12 rounded-full bg-[#EEF3FF] flex items-center justify-center">
          <FcGoogle size={22} />
        </div>

        <div className="w-12 h-12 rounded-full bg-[#EEF3FF] flex items-center justify-center text-blue-600">
          <FaFacebookF size={18} />
        </div>

        <div className="w-12 h-12 rounded-full bg-[#EEF3FF] flex items-center justify-center text-blue-600">
          <MdFingerprint size={22} />
        </div>
      </div>

      {/* Signup */}
      <p className="text-center text-sm mt-6">
        Don’t have an account?
        <span
          onClick={() => navigate("/signup")}
          className="text-blue-600 cursor-pointer"
        >
          {" "}Sign Up
        </span>
      </p>
    </div>
  );
}