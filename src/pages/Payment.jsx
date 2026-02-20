import { useNavigate } from "react-router-dom";

export default function Payment() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[#2962FF] text-white flex flex-col">
      <button onClick={() => navigate(-1)} className="text-xl p-5">
        ←
      </button>

      <h2 className="text-center text-xl font-semibold">Payment</h2>

      <div className="text-center mt-6 text-3xl font-bold">
        $ 100.00
      </div>

      <div className="bg-white text-black rounded-t-3xl mt-6 p-5 flex-1">
        <p className="font-semibold text-blue-600">
          Dr. Olivia Turner, M.D.
        </p>

        <div className="mt-4 space-y-2 text-sm">
          <div className="flex justify-between">
            <span>Date / Hour</span>
            <span>Month 24, Year / 10:00 AM</span>
          </div>

          <div className="flex justify-between">
            <span>Duration</span>
            <span>30 Minutes</span>
          </div>

          <div className="flex justify-between">
            <span>Total</span>
            <span>$100</span>
          </div>
        </div>

        <button
          onClick={() => navigate("/payment-success")}
          className="mt-8 bg-[#2962FF] text-white py-3 rounded-full w-full"
        >
          Pay Now
        </button>
      </div>
    </div>
  );
}
