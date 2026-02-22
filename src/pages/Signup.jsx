import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";

export default function Signup() {
  const navigate = useNavigate();

  const [show, setShow] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    mobile: "",
    dob: "",
  });

  const [errors, setErrors] = useState({});

  // Validation
  const validate = () => {
    let newErrors = {};

    // Email validation
    if (!form.email.endsWith("@gmail.com")) {
      newErrors.email = "Invalid email (must be @gmail.com)";
    }

    // Password validation
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(form.password)) {
      newErrors.password =
        "Password must be 6+ chars, include uppercase & number";
    }

    return newErrors;
  };

  const handleSubmit = () => {
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      navigate("/login");
    }
  };

  return (
    <div className="h-screen px-6 pt-10 bg-white">

      {/* Back */}
      <button onClick={() => navigate(-1)} className="text-blue-600 text-xl">
        ←
      </button>

      <h1 className="text-center text-blue-600 text-lg font-medium">
        New Account
      </h1>

      <div className="mt-8 space-y-4">

        {/* Name */}
        <input
          placeholder="Full name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          className="w-full p-3 rounded-xl bg-[#EEF3FF]"
        />

        {/* Password */}
        <div>
          <div className="relative">
            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={(e) =>
                setForm({ ...form, password: e.target.value })
              }
              className={`w-full p-3 rounded-xl bg-[#EEF3FF] ${
                errors.password ? "border border-red-500" : ""
              }`}
            />
            <button
              onClick={() => setShow(!show)}
              className="absolute right-4 top-4"
            >
              {show ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">
              {errors.password}
            </p>
          )}
        </div>

        {/* Email */}
        <div>
          <input
            placeholder="Email"
            value={form.email}
            onChange={(e) =>
              setForm({ ...form, email: e.target.value })
            }
            className={`w-full p-3 rounded-xl bg-[#EEF3FF] ${
              errors.email ? "border border-red-500" : ""
            }`}
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">
              {errors.email}
            </p>
          )}
        </div>

        {/* Mobile */}
        <input
          placeholder="Mobile Number"
          value={form.mobile}
          onChange={(e) =>
            setForm({ ...form, mobile: e.target.value })
          }
          className="w-full p-3 rounded-xl bg-[#EEF3FF]"
        />

        {/* DOB */}
        <input
          placeholder="DD / MM / YYYY"
          value={form.dob}
          onChange={(e) =>
            setForm({ ...form, dob: e.target.value })
          }
          className="w-full p-3 rounded-xl bg-[#EEF3FF]"
        />
      </div>

      {/* Button */}
      <button
        onClick={handleSubmit}
        className="w-full bg-[#2962FF] text-white py-3 rounded-full mt-6"
      >
        Sign Up
      </button>

      {/* Divider */}
      <p className="text-center text-gray-400 text-sm my-6">
        or sign up with
      </p>

      {/* Social */}
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

      {/* Login */}
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