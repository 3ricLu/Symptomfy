import { CalendarDays, User, XCircle } from "lucide-react";

interface BookingRecord {
  id: string;
  doctorName: string;
  startTime: string;
}

interface UpcomingPanelProps {
  upcoming: BookingRecord[];
  onCancel: (id: string) => void;
}

const formatMonthDate = (isoString: string) => {
  const date = new Date(isoString);
  return (
    date.toLocaleDateString(undefined, {
      month: "long",
      day: "numeric",
    }) +
    ", " +
    date.toLocaleTimeString(undefined, {
      hour: "numeric",
      minute: "2-digit",
    })
  );
};

export default function UpcomingPanel({
  upcoming,
  onCancel,
}: UpcomingPanelProps) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-md border border-gray-200">
      <div className="flex items-center mb-4">
        <CalendarDays className="w-6 h-6 text-green-600 mr-2" />
        <h2 className="text-2xl font-semibold text-gray-800">
          Upcoming Appointments
        </h2>
      </div>
      {upcoming.length > 0 ? (
        <ul className="space-y-4">
          {upcoming.map((b) => (
            <li
              key={b.id}
              className="flex justify-between items-center border-t pt-4"
            >
              <div className="flex items-center space-x-3">
                <User className="w-5 h-5 text-gray-600" />
                <div>
                  <p className="font-medium text-gray-700">
                    Dr. {b.doctorName}
                  </p>
                  <p className="text-gray-600 text-sm">
                    {formatMonthDate(b.startTime)}
                  </p>
                </div>
              </div>
              <button
                onClick={() => onCancel(b.id)}
                className="text-red-500 hover:text-red-700"
              >
                <XCircle className="w-6 h-6" />
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <div className="flex items-center text-gray-500">
          <XCircle className="w-6 h-6 mr-2" />
          <span>No upcoming appointments.</span>
        </div>
      )}
    </div>
  );
}
