import { useParams, useNavigate } from "react-router-dom";

export default function DoctorsFiltered() {
  const { filter } = useParams();
  const navigate = useNavigate();

  return (
    <div className="h-screen bg-[#EEF3FF] px-4 pt-6">
      <button onClick={() => navigate(-1)} className="text-blue-600 text-xl">
        ←
      </button>

      <h1 className="text-blue-600 font-semibold mt-4 capitalize">
        {filter.replace("-", " ")} Doctors
      </h1>

      <div className="mt-6 bg-white p-6 rounded-2xl text-center text-gray-600">
        Showing <b>{filter}</b> doctors only
      </div>
    </div>
  );
}