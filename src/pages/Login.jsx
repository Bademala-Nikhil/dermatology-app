import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa";
import { MdFingerprint } from "react-icons/md";

export default function Login() {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    if (!email.endsWith("@gmail.com")) {
      newErrors.email = "Invalid email (must be @gmail.com)";
    }

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;
    if (!passwordRegex.test(password)) {
      newErrors.password =
        "Password must be 6+ chars, include uppercase & number";
    }

    return newErrors;
  };

  const handleLogin = () => {
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      navigate("/dashboard");
    }
  };

  return (
    <div className="h-screen px-6 pt-10 bg-white">

      <button onClick={() => navigate(-1)} className="text-blue-600 text-xl">
        ←
      </button>

      <h1 className="text-center text-blue-600 text-lg font-medium">
        Log In
      </h1>

      <h2 className="text-2xl font-semibold mt-8">Welcome</h2>

      {/* Email */}
      <div className="mt-6">
        <label className="text-sm font-medium">
          Email or Mobile Number
        </label>
        <input
          placeholder="example@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`w-full mt-2 p-3 rounded-xl bg-[#EEF3FF] ${
            errors.email ? "border border-red-500" : ""
          }`}
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">
            {errors.email}
          </p>
        )}
      </div>

      {/* Password */}
      <div className="mt-4">
        <label className="text-sm font-medium">Password</label>
        <div className="relative mt-2">
          <input
            type={show ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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

      {/* Button */}
      <button
        onClick={handleLogin}
        className="w-full bg-[#2962FF] text-white py-3 rounded-full mt-8"
      >
        Log In
      </button>
    </div>
  );
}