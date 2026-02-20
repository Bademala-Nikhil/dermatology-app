import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";

export default function Signup() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  return (
    <div className="h-screen px-6 pt-10 bg-white">

      <button onClick={() => navigate(-1)} className="text-blue-600 text-xl">
        ←
      </button>

      <h1 className="text-center text-blue-600 text-lg font-medium">
        New Account
      </h1>

      <div className="mt-8 space-y-4">
        <input placeholder="Full name"
          className="w-full p-3 rounded-xl bg-[#EEF3FF]" />

        <div className="relative">
          <input
            type={show ? "text" : "password"}
            placeholder="Password"
            className="w-full p-3 rounded-xl bg-[#EEF3FF]"
          />
          <button
            onClick={() => setShow(!show)}
            className="absolute right-4 top-4"
          >
            {show ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <input placeholder="Email"
          className="w-full p-3 rounded-xl bg-[#EEF3FF]" />

        <input placeholder="Mobile Number"
          className="w-full p-3 rounded-xl bg-[#EEF3FF]" />

        <input placeholder="DD / MM / YYYY"
          className="w-full p-3 rounded-xl bg-[#EEF3FF]" />
      </div>

      <button onClick={() => navigate("/login")}
         
         className="w-full bg-[#2962FF] text-white py-3 rounded-full mt-6">
        Sign Up
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

      <p className="text-center text-sm mt-6">
        already have an account?
        <span
          onClick={() => navigate("/login")}
          className="text-blue-600 cursor-pointer"
        >
          {" "}Log in
        </span>
      </p>
    </div>
  );
}