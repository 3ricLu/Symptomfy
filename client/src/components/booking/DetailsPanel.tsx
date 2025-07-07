import {
  Stethoscope,
  User,
  Calendar as CalendarIcon,
  Clock,
  FileText,
} from "lucide-react";

interface BookingRecord {
  doctorName: string;
  startTime: string;
  endTime: string;
  details: string;
}
interface DiagnosisRecord {
  patientName: string;
  time: string;
  description: string;
}

interface DetailsPanelProps {
  booking: BookingRecord | null;
  diagnosis: DiagnosisRecord | null;
}

const formatDateTime = (isoString: string) => {
  const date = new Date(isoString);
  return (
    date.toLocaleDateString(undefined, {
      month: "long",
      day: "numeric",
      year: "numeric",
    }) +
    " at " +
    date.toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit",
    })
  );
};

export default function DetailsPanel({
  booking,
  diagnosis,
}: DetailsPanelProps) {
  const now = new Date();
  const isPastDiagnosis = diagnosis && new Date(diagnosis.time) <= now;

  if (!booking && !isPastDiagnosis) {
    return (
      <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
        <div className="flex items-center text-gray-500">
          <FileText className="w-6 h-6 mr-2" />
          <span>No records for this date.</span>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200 space-y-6">
      {booking && (
        <div>
          <div className="flex items-center mb-4">
            <Stethoscope className="w-6 h-6 text-blue-600 mr-2" />
            <h3 className="text-2xl font-semibold text-gray-800">
              Appointment Details
            </h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <User className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-medium text-gray-700">
                Dr. {booking.doctorName}
              </span>
            </div>
            <div className="flex items-center">
              <CalendarIcon className="w-5 h-5 text-gray-600 mr-2" />
              <span className="text-gray-700">
                {formatDateTime(booking.startTime)}
              </span>
              <span className="mx-2 text-gray-400">–</span>
              <span className="text-gray-700">
                {formatDateTime(booking.endTime)}
              </span>
            </div>
            <div className="flex items-start">
              <Clock className="w-5 h-5 text-gray-600 mr-2" />
              <p className="text-gray-700">{booking.details}</p>
            </div>
          </div>
        </div>
      )}

      {isPastDiagnosis && diagnosis && (
        <div>
          <div className="flex items-center mb-4">
            <FileText className="w-6 h-6 text-red-600 mr-2" />
            <h3 className="text-2xl font-semibold text-gray-800">
              Self-Diagnosis Details
            </h3>
          </div>
          <div className="space-y-2">
            <div className="flex items-center">
              <User className="w-5 h-5 text-gray-600 mr-2" />
              <span className="font-medium text-gray-700">
                {diagnosis.patientName}
              </span>
            </div>
            <div className="flex items-center">
              <CalendarIcon className="w-5 h-5 text-gray-600 mr-2" />
              <span className="text-gray-700">
                {formatDateTime(diagnosis.time)}
              </span>
            </div>
            <div className="flex items-start">
              <FileText className="w-5 h-5 text-gray-600 mr-2" />
              <p className="text-gray-700">{diagnosis.description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
