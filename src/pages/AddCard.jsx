import { useNavigate } from "react-router-dom";

export default function AddCard() {
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-white px-5 pt-6 flex flex-col">
      <button onClick={() => navigate(-1)} className="text-blue-600 text-xl">
        ←
      </button>

      <h2 className="text-center text-blue-600 font-semibold text-lg">
        Add Card
      </h2>

      <div className="bg-[#2962FF] text-white rounded-3xl p-5 mt-6">
        <p className="text-lg tracking-widest">0000 0000 0000</p>
        <div className="flex justify-between mt-4 text-sm">
          <div>
            <p>Card Holder Name</p>
            <p className="font-semibold">John Doe</p>
          </div>
          <div>
            <p>Expiry Date</p>
            <p className="font-semibold">04/28</p>
          </div>
        </div>
      </div>

      <div className="mt-6 space-y-4">
        <input
          placeholder="Card Holder Name"
          className="w-full bg-[#EEF3FF] p-4 rounded-full outline-none"
        />
        <input
          placeholder="Card Number"
          className="w-full bg-[#EEF3FF] p-4 rounded-full outline-none"
        />

        <div className="flex gap-3">
          <input
            placeholder="Expiry Date"
            className="flex-1 bg-[#EEF3FF] p-4 rounded-full outline-none"
          />
          <input
            placeholder="CVV"
            className="flex-1 bg-[#EEF3FF] p-4 rounded-full outline-none"
          />
        </div>
      </div>

      <button
        onClick={() => navigate("/payment-checkout")}
        className="mt-auto bg-[#2962FF] text-white py-3 rounded-full"
      >
        Save Card
      </button>
    </div>
  );
}
