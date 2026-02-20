import { useNavigate } from "react-router-dom";

export default function PaymentMethod() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-white px-5 pt-6">
      <button onClick={() => navigate(-1)} className="text-blue-600 text-xl">
        ←
      </button>

      <h2 className="text-center text-blue-600 font-semibold text-lg mt-2">
        Payment Method
      </h2>

      <div className="mt-8">
        <h3 className="font-medium">Credit & Debit Card</h3>

        <div
          onClick={() => navigate("/add-card")}
          className="flex justify-between items-center bg-[#EEF3FF] p-4 rounded-full mt-3 cursor-pointer"
        >
          <span className="text-blue-600">Add New Card</span>
          <div className="w-4 h-4 rounded-full border-2 border-blue-600"></div>
        </div>
      </div>

      <div className="mt-8">
        <h3 className="font-medium">More Payment Option</h3>

        {["Apple Play", "Paypal", "Google Play"].map((item, i) => (
          <div
            key={i}
            className="flex justify-between items-center bg-[#EEF3FF] p-4 rounded-full mt-3"
          >
            <span className="text-blue-600">{item}</span>
            <div className="w-4 h-4 rounded-full border-2 border-blue-600"></div>
          </div>
        ))}
      </div>
    </div>
  );
}
