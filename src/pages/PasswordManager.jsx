import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import { useState } from "react";

export default function PasswordManager() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    current: "",
    newPass: "",
    confirm: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!passwordRegex.test(form.newPass)) {
      newErrors.newPass =
        "Password must be 6+ chars, include uppercase & number";
    }

    if (form.newPass !== form.confirm) {
      newErrors.confirm = "Passwords do not match";
    }

    return newErrors;
  };

  const handleChange = () => {
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      alert("Password changed successfully");
    }
  };

  return (
    <div className="h-screen bg-white px-5 pt-6">
      <button onClick={() => navigate(-1)} className="text-blue-600 text-xl">
        ←
      </button>

      <h2 className="text-center text-blue-600 font-semibold mb-6">
        Password Manager
      </h2>

      {[
        { key: "current", label: "Current Password" },
        { key: "newPass", label: "New Password" },
        { key: "confirm", label: "Confirm New Password" },
      ].map((field, i) => (
        <div key={i} className="mb-5">
          <label className="text-sm font-medium">{field.label}</label>

          <div className="relative mt-1">
            <input
              type="password"
              value={form[field.key]}
              onChange={(e) =>
                setForm({ ...form, [field.key]: e.target.value })
              }
              className={`w-full bg-[#EEF3FF] rounded-xl py-3 px-4 pr-10 ${
                errors[field.key] ? "border border-red-500" : ""
              }`}
            />
            <FaEye className="absolute right-4 top-4 text-gray-400" />
          </div>

          {errors[field.key] && (
            <p className="text-red-500 text-sm mt-1">
              {errors[field.key]}
            </p>
          )}
        </div>
      ))}

      <button
        onClick={handleChange}
        className="w-full bg-[#2962FF] text-white py-3 rounded-full mt-6"
      >
        Change Password
      </button>
    </div>
  );
}