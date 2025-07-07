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

export default function DetailsPanel({
  booking,
  diagnosis,
}: DetailsPanelProps) {
  if (!booking && !diagnosis) return null;

  return (
    <div className="bg-white p-4 rounded-lg shadow">
      {booking && (
        <>
          <h3 className="text-xl font-semibold mb-3">Appointment Details</h3>
          <p>
            <strong>Doctor:</strong> {booking.doctorName}
          </p>
          <p>
            <strong>Time:</strong>{" "}
            {new Date(booking.startTime).toLocaleString()} –{" "}
            {new Date(booking.endTime).toLocaleString()}
          </p>
          <p className="mt-2">{booking.details}</p>
        </>
      )}
      {diagnosis && (
        <>
          <h3 className="text-xl font-semibold mb-3">Diagnosis Details</h3>
          <p>
            <strong>Patient:</strong> {diagnosis.patientName}
          </p>
          <p>
            <strong>Time:</strong> {new Date(diagnosis.time).toLocaleString()}
          </p>
          <p className="mt-2">{diagnosis.description}</p>
        </>
      )}
    </div>
  );
}
