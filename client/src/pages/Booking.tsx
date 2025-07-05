// src/pages/Booking.tsx
import React, { useState, useEffect } from "react";
import { Calendar } from "../components/ui/calendar";

interface BookingRecord {
  id: string;
  doctorName: string;
  startTime: string; // ISO string
  endTime: string; // ISO string
}

const mockBookings: BookingRecord[] = [
  {
    id: "1",
    doctorName: "Smith",
    startTime: "2025-06-25T09:00:00.000Z",
    endTime: "2025-06-25T09:30:00.000Z",
  },
  {
    id: "2",
    doctorName: "Johnson",
    startTime: "2025-06-26T14:00:00.000Z",
    endTime: "2025-06-26T14:45:00.000Z",
  },
  {
    id: "3",
    doctorName: "Williams",
    startTime: "2025-06-27T11:00:00.000Z",
    endTime: "2025-06-27T11:20:00.000Z",
  },
];

const Booking: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [bookings, setBookings] = useState<BookingRecord[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetch or load your bookings
    setBookings(mockBookings);
    setLoading(false);
  }, []);

  // Dates to highlight
  const highlighted = bookings.map((b) => new Date(b.startTime));

  // Filter bookings for the selected day
  const todays = bookings.filter(
    (b) => new Date(b.startTime).toDateString() === selectedDate.toDateString()
  );

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-gray-600">Loading appointments...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 bg-white">
      <h1 className="text-2xl font-semibold text-[#1C2D5A] mb-4 pt-16">
        My Appointments
      </h1>

      <Calendar
        mode="single"
        selected={selectedDate}
        onSelect={(date) => date && setSelectedDate(date)}
        modifiers={{ highlighted }}
        modifiersClassNames={{ highlighted: "bg-blue-200 rounded-full" }}
        className="w-full max-w-md mx-auto"
      />

      <div className="mt-6 max-w-md mx-auto">
        <h2 className="text-lg font-medium">
          Appointments on {selectedDate.toLocaleDateString()}
        </h2>
        {todays.length > 0 ? (
          <ul className="mt-2 space-y-2">
            {todays.map((b) => (
              <li
                key={b.id}
                className="p-3 border rounded shadow-sm flex justify-between"
              >
                <span>Dr. {b.doctorName}</span>
                <span>
                  {new Date(b.startTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                  –{" "}
                  {new Date(b.endTime).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="mt-2 text-gray-500">No appointments.</p>
        )}
      </div>
    </div>
  );
};

export default Booking;
