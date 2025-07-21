// Booking.tsx
import { useState, useEffect } from "react";
import { CalendarDays } from "lucide-react";
import { Calendar } from "../components/ui/calendar";
import UpcomingPanel from "../components/booking/UpcomingPanel";
import DetailsPanel from "../components/booking/DetailsPanel";

interface BookingRecord {
  id: string;
  doctorName: string;
  startTime: string;
  endTime: string;
  details: string;
}

interface DiagnosisRecord {
  id: string;
  patientName: string;
  time: string;
  description: string;
}

// Mock booking and diagnosis data
const mockBookings: BookingRecord[] = [
  {
    id: "1",
    doctorName: "Smith",
    startTime: "2025-06-25T09:00:00.000Z",
    endTime: "2025-06-25T09:30:00.000Z",
    details: "Routine check-up.",
  },
  {
    id: "2",
    doctorName: "Johnson",
    startTime: "2025-06-26T14:00:00.000Z",
    endTime: "2025-06-26T14:45:00.000Z",
    details: "Blood test follow-up.",
  },
  {
    id: "3",
    doctorName: "Williams",
    startTime: "2025-06-27T11:00:00.000Z",
    endTime: "2025-06-27T11:20:00.000Z",
    details: "Knee pain consultation.",
  },
  {
    id: "4",
    doctorName: "Davis",
    startTime: "2025-07-05T10:00:00.000Z",
    endTime: "2025-07-05T10:30:00.000Z",
    details: "Vaccination appointment.",
  },
  {
    id: "7",
    doctorName: "Morris",
    startTime: "2025-07-10T08:30:00.000Z",
    endTime: "2025-07-10T09:00:00.000Z",
    details: "Dental cleaning.",
  },
  {
    id: "8",
    doctorName: "Lopez",
    startTime: "2025-07-22T13:00:00.000Z",
    endTime: "2025-07-22T13:45:00.000Z",
    details: "Eye exam.",
  },
  {
    id: "5",
    doctorName: "Miller",
    startTime: "2025-08-15T15:00:00.000Z",
    endTime: "2025-08-15T15:45:00.000Z",
    details: "Orthopedic follow-up.",
  },
  {
    id: "6",
    doctorName: "Garcia",
    startTime: "2025-08-20T09:30:00.000Z",
    endTime: "2025-08-20T10:00:00.000Z",
    details: "Dermatology consult.",
  },
  {
    id: "9",
    doctorName: "Wilson",
    startTime: "2025-08-02T16:00:00.000Z",
    endTime: "2025-08-02T16:30:00.000Z",
    details: "Nutrition counseling.",
  },
];

const mockDiagnoses: DiagnosisRecord[] = [
  {
    id: "d1",
    patientName: "Alice Baker",
    time: "2025-06-25T10:15:00.000Z",
    description: "Seasonal allergy symptoms.",
  },
  {
    id: "d2",
    patientName: "Bob Carter",
    time: "2025-06-26T14:30:00.000Z",
    description: "Tension headache.",
  },
  {
    id: "d3",
    patientName: "Cara Davis",
    time: "2025-06-27T11:10:00.000Z",
    description: "Mild wrist sprain.",
  },
  {
    id: "d4",
    patientName: "Eve Foster",
    time: "2025-07-06T11:20:00.000Z",
    description: "Routine eye exam.",
  },
  {
    id: "d6",
    patientName: "Helen Green",
    time: "2025-07-10T09:00:00.000Z",
    description: "Lower back pain.",
  },
  {
    id: "d5",
    patientName: "George Hall",
    time: "2025-08-20T09:30:00.000Z",
    description: "Skin rash follow-up.",
  },
  {
    id: "d7",
    patientName: "Ian Jones",
    time: "2025-08-05T13:45:00.000Z",
    description: "Flu symptoms.",
  },
];

// Utility to normalize date to midnight
function normalizeDate(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

export default function Booking() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [bookings, setBookings] = useState<BookingRecord[]>([]);
  const [diagnoses, setDiagnoses] = useState<DiagnosisRecord[]>([]);
  const [selectedBooking, setSelectedBooking] = useState<BookingRecord | null>(
    null
  );
  const [selectedDiagnosis, setSelectedDiagnosis] =
    useState<DiagnosisRecord | null>(null);

  useEffect(() => {
    setBookings(mockBookings);
    setDiagnoses(mockDiagnoses);
    handleDateSelect(new Date());
  }, [handleDateSelect]);

  const now = new Date();
  const bookingDates = bookings.map((b) =>
    normalizeDate(new Date(b.startTime))
  );
  const diagnosisDates = diagnoses.map((d) => normalizeDate(new Date(d.time)));
  const bookingSet = new Set(bookingDates.map((d) => d.getTime()));
  const diagnosisSet = new Set(diagnosisDates.map((d) => d.getTime()));
  const bothDates = bookingDates.filter((d) => diagnosisSet.has(d.getTime()));
  const bookingOnly = bookingDates.filter(
    (d) => !diagnosisSet.has(d.getTime())
  );
  const diagnosisOnly = diagnosisDates.filter(
    (d) => !bookingSet.has(d.getTime())
  );

  function handleDateSelect(date?: Date) {
    if (!date) return;
    setSelectedDate(date);
    const dayB = bookings.filter(
      (b) => new Date(b.startTime).toDateString() === date.toDateString()
    );
    const dayD = diagnoses.filter(
      (d) => new Date(d.time).toDateString() === date.toDateString()
    );
    setSelectedBooking(dayB[0] ?? null);
    setSelectedDiagnosis(dayD[0] ?? null);
  }

  function handleCancel(id: string) {
    setBookings((bs) => bs.filter((b) => b.id !== id));
    if (selectedBooking?.id === id) setSelectedBooking(null);
  }

  const upcoming = bookings
    .filter((b) => new Date(b.startTime) > now)
    .sort(
      (a, b) =>
        new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
    );

  return (
    <div className="min-h-screen bg-gray-50 p-8 pt-32">
      <style>{`
      .calendar-dot-blue .rdp-day_selected,
      .calendar-dot-blue .rdp-day {
        position: relative;
      }
      .calendar-dot-blue .rdp-day_selected::after,
      .calendar-dot-blue .rdp-day::after {
        content: '';
        display: block;
        margin: 0 auto;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #2563eb;
        margin-top: 2px;
      }
      .calendar-dot-red .rdp-day_selected,
      .calendar-dot-red .rdp-day {
        position: relative;
      }
      .calendar-dot-red .rdp-day_selected::after,
      .calendar-dot-red .rdp-day::after {
        content: '';
        display: block;
        margin: 0 auto;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #dc2626;
        margin-top: 2px;
      }
      .calendar-dot-purple .rdp-day_selected,
      .calendar-dot-purple .rdp-day {
        position: relative;
      }
      .calendar-dot-purple .rdp-day_selected::after,
      .calendar-dot-purple .rdp-day::after {
        content: '';
        display: block;
        margin: 0 auto;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: linear-gradient(90deg, #2563eb 50%, #dc2626 50%);
        margin-top: 2px;
      }
    `}</style>
      <div className="max-w-[1100px] mx-auto grid lg:grid-cols-3 gap-8">
        {/* Calendar Card */}
        <div className="lg:col-span-2 bg-white p-6 rounded-2xl shadow-md border border-gray-200">
          <div className="flex items-center mb-4">
            <CalendarDays className="w-6 h-6 text-indigo-600 mr-2" />
            <h2 className="text-2xl font-semibold text-gray-800">Schedule</h2>
          </div>
          <div className="min-h-[300px] md:min-h-[500px]">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              modifiers={{
                bookingOnly,
                diagnosisOnly,
                both: bothDates,
              }}
              modifiersClassNames={{
                bookingOnly: "calendar-dot-blue",
                diagnosisOnly: "calendar-dot-red",
                both: "calendar-dot-purple",
              }}
              className="w-full h-full"
            />
          </div>
        </div>

        {/* Sidebar Cards */}
        <div className="space-y-6">
          <UpcomingPanel upcoming={upcoming} onCancel={handleCancel} />
          <DetailsPanel
            booking={selectedBooking}
            diagnosis={selectedDiagnosis}
          />
        </div>
      </div>
    </div>
  );
}
