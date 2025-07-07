// Booking.tsx
import { useState, useEffect } from "react";
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

const mockBookings: BookingRecord[] = [
  // June
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
  // July
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
  // August
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
  // June
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
  // July
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
  // August
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
  }, []);

  const now = new Date();

  const bookingDates = bookings.map((b) => new Date(b.startTime));
  const diagnosisDates = diagnoses.map((d) => new Date(d.time));
  const bookingSet = new Set(bookingDates.map((d) => d.toDateString()));
  const diagnosisSet = new Set(diagnosisDates.map((d) => d.toDateString()));

  const bothDates = bookingDates.filter((d) =>
    diagnosisSet.has(d.toDateString())
  );
  const bookingOnlyDates = bookingDates.filter(
    (d) => !diagnosisSet.has(d.toDateString())
  );
  const diagnosisOnlyDates = diagnosisDates.filter(
    (d) => !bookingSet.has(d.toDateString())
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
    <div className="min-h-screen flex flex-col bg-gray-50 p-6 pt-32">
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-[1100px] flex flex-col lg:flex-row gap-8">
          {/* Calendar */}
          <div className="bg-white p-4 rounded-lg shadow flex-1 min-h-[300px] md:min-h-[400px]">
            <Calendar
              mode="single"
              selected={selectedDate}
              onSelect={handleDateSelect}
              modifiers={{
                bookingOnly: bookingOnlyDates,
                diagnosisOnly: diagnosisOnlyDates,
                both: bothDates,
              }}
              modifiersClassNames={{
                bookingOnly: "bg-[#1C2D5A] text-white rounded-full",
                diagnosisOnly: "bg-[#FF6B6B] text-white rounded-full",
                both: "indicator-both",
              }}
              className="w-full h-full"
            />
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3 flex flex-col space-y-6">
            <UpcomingPanel upcoming={upcoming} onCancel={handleCancel} />
            <DetailsPanel
              booking={selectedBooking}
              diagnosis={selectedDiagnosis}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
