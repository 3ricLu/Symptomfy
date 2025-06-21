import React, { useState, useEffect } from "react";
import { Calendar, dateFnsLocalizer } from "react-big-calendar";
import type { Event as RbcEvent } from "react-big-calendar";
import { format } from "date-fns/format";
import { parse } from "date-fns/parse";
import { startOfWeek } from "date-fns/startOfWeek";
import { getDay } from "date-fns/getDay";
import { enUS } from "date-fns/locale";
import "react-big-calendar/lib/css/react-big-calendar.css";

// date-fns localizer setup
const locales = { "en-US": enUS };
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface BookingRecord {
  id: string;
  doctorName: string;
  startTime: string; // ISO string
  endTime: string; // ISO string
}

// Mock data
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
  const [events, setEvents] = useState<RbcEvent[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate fetching from backend
    const loadEvents = async () => {
      const evts: RbcEvent[] = mockBookings.map((b) => ({
        id: b.id,
        title: `Dr. ${b.doctorName}`,
        start: new Date(b.startTime),
        end: new Date(b.endTime),
      }));
      setEvents(evts);
      setLoading(false);
    };

    loadEvents();
  }, []);

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
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 650 }}
        views={["month", "week", "day"]}
        defaultView="month"
        popup
      />
    </div>
  );
};

export default Booking;
