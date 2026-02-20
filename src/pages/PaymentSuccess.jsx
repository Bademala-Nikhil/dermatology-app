export default function PaymentSuccess() {
  return (
    <div className="h-screen bg-[#2962FF] text-white flex flex-col items-center justify-center px-6 text-center">
      <div className="w-32 h-32 border-4 border-white rounded-full flex items-center justify-center text-5xl">
        ✓
      </div>

      <h2 className="text-2xl font-semibold mt-6">
        Congratulation
      </h2>

      <p className="mt-2 text-sm">
        Payment is Successfully
      </p>

      <div className="border border-white rounded-2xl p-5 mt-6 text-sm">
        You have successfully booked an appointment with  
        <br />
        <strong>Dr. Olivia Turner, M.D.</strong>
      </div>
    </div>
  );
}
