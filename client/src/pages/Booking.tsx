import React, { useState, useEffect } from "react";
import { Calendar } from "../components/ui/calendar";

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

  // prepare date lists
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

  // when a day is clicked
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

  // cancel future booking
  function handleCancel(id: string) {
    setBookings((bs) => bs.filter((b) => b.id !== id));
    if (selectedBooking?.id === id) setSelectedBooking(null);
  }

  const todaysBookings = bookings.filter(
    (b) => new Date(b.startTime).toDateString() === selectedDate.toDateString()
  );
  const todaysDiagnoses = diagnoses.filter(
    (d) => new Date(d.time).toDateString() === selectedDate.toDateString()
  );
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
          <div
            className="
              bg-white p-4 rounded-lg shadow
              w-full
              md:min-w-[300px] md:max-w-[800px]
              min-h-[300px] md:min-h-[400px] md:max-h-[800px]
              flex-1
            "
          >
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
            {/* Upcoming */}
            <div className="bg-white p-4 rounded-lg shadow">
              <h2 className="text-xl font-semibold mb-3">Upcoming</h2>
              {upcoming.length > 0 ? (
                <ul className="divide-y">
                  {upcoming.map((b) => (
                    <li
                      key={b.id}
                      className="py-2 flex justify-between items-center"
                    >
                      <div>
                        <span className="font-medium">Dr. {b.doctorName}</span>{" "}
                        <span className="text-gray-600 text-sm">
                          {new Date(b.startTime).toLocaleDateString()}{" "}
                          {new Date(b.startTime).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </span>
                      </div>
                      <button
                        onClick={() => handleCancel(b.id)}
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

            {/* Events on Selected Date */}
            <div className="bg-white p-4 rounded-lg shadow sticky top-24">
              <h2 className="text-xl font-semibold mb-3">
                Events on {selectedDate.toLocaleDateString()}
              </h2>

              <section className="mb-4">
                <h3 className="font-medium mb-2">Appointments</h3>
                {todaysBookings.length > 0 ? (
                  <ul className="divide-y">
                    {todaysBookings.map((b) => (
                      <li
                        key={b.id}
                        onClick={() => setSelectedDiagnosis(null)}
                        className={`
                          py-2 cursor-pointer
                          ${
                            selectedBooking?.id === b.id
                              ? "bg-[#1C2D5A] text-white"
                              : "hover:bg-[#32426F] hover:text-white"
                          }
                        `}
                      >
                        <div className="flex justify-between">
                          <span>Dr. {b.doctorName}</span>
                          <span className="text-sm">
                            {new Date(b.startTime).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}{" "}
                            –{" "}
                            {new Date(b.endTime).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No appointments.</p>
                )}
              </section>

              <section>
                <h3 className="font-medium mb-2">Diagnoses</h3>
                {todaysDiagnoses.length > 0 ? (
                  <ul className="divide-y">
                    {todaysDiagnoses.map((d) => (
                      <li
                        key={d.id}
                        onClick={() => setSelectedBooking(null)}
                        className={`
                          py-2 cursor-pointer
                          ${
                            selectedDiagnosis?.id === d.id
                              ? "bg-[#FF6B6B] text-white"
                              : "hover:bg-[#FFA8A8] hover:text-white"
                          }
                        `}
                      >
                        <div className="flex justify-between">
                          <span>{d.patientName}</span>
                          <span className="text-sm">
                            {new Date(d.time).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">No diagnoses.</p>
                )}
              </section>
            </div>

            {/* Details Panel */}
            {(selectedBooking || selectedDiagnosis) && (
              <div className="bg-white p-4 rounded-lg shadow">
                {selectedBooking && (
                  <>
                    <h3 className="text-xl font-semibold mb-3">
                      Appointment Details
                    </h3>
                    <p>
                      <strong>Doctor:</strong> {selectedBooking.doctorName}
                    </p>
                    <p>
                      <strong>Time:</strong>{" "}
                      {new Date(selectedBooking.startTime).toLocaleString()} –{" "}
                      {new Date(selectedBooking.endTime).toLocaleString()}
                    </p>
                    <p className="mt-2">{selectedBooking.details}</p>
                  </>
                )}
                {selectedDiagnosis && (
                  <>
                    <h3 className="text-xl font-semibold mb-3">
                      Diagnosis Details
                    </h3>
                    <p>
                      <strong>Patient:</strong> {selectedDiagnosis.patientName}
                    </p>
                    <p>
                      <strong>Time:</strong>{" "}
                      {new Date(selectedDiagnosis.time).toLocaleString()}
                    </p>
                    <p className="mt-2">{selectedDiagnosis.description}</p>
                  </>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
