interface BookingRecord {
  id: string;
  doctorName: string;
  startTime: string;
}

interface UpcomingPanelProps {
  upcoming: BookingRecord[];
  onCancel: (id: string) => void;
}

export default function UpcomingPanel({
  upcoming,
  onCancel,
}: UpcomingPanelProps) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-3">Upcoming</h2>
      {upcoming.length > 0 ? (
        <ul className="divide-y">
          {upcoming.map((b) => (
            <li key={b.id} className="py-2 flex justify-between items-center">
              <div>
                <span className="font-medium">Dr. {b.doctorName}</span>{" "}
                <span className="text-gray-600 text-sm ml-2">
                  {new Date(b.startTime).toLocaleDateString()}{" "}
                  {new Date(b.startTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </div>
              <button
                onClick={() => onCancel(b.id)}
                className="text-red-500 text-sm hover:underline"
              >
                Cancel
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No upcoming appointments.</p>
      )}
    </div>
  );
}
