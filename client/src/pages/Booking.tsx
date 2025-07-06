// src/pages/Booking.tsx
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
  {
    id: "1",
    doctorName: "Smith",
    startTime: "2025-06-25T09:00:00.000Z",
    endTime: "2025-06-25T09:30:00.000Z",
    details: "Routine check-up with Dr. Smith.",
  },
  {
    id: "2",
    doctorName: "Johnson",
    startTime: "2025-06-26T14:00:00.000Z",
    endTime: "2025-06-26T14:45:00.000Z",
    details: "Follow-up on blood test results.",
  },
  {
    id: "3",
    doctorName: "Williams",
    startTime: "2025-06-27T11:00:00.000Z",
    endTime: "2025-06-27T11:20:00.000Z",
    details: "Consultation for knee pain.",
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
    description: "Tension headache diagnosis.",
  },
  {
    id: "d3",
    patientName: "Cara Davis",
    time: "2025-06-27T11:10:00.000Z",
    description: "Mild wrist sprain.",
  },
];

const Booking: React.FC = () => {
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
  }, []);

  const now = new Date();
  const bookingDates = bookings.map((b) => new Date(b.startTime));
  const diagnosisDates = diagnoses.map((d) => new Date(d.time));
  const todaysBookings = bookings.filter(
    (b) => new Date(b.startTime).toDateString() === selectedDate.toDateString()
  );
  const todaysDiagnoses = diagnoses.filter(
    (d) => new Date(d.time).toDateString() === selectedDate.toDateString()
  );
  const upcomingAppointments = bookings
    .filter((b) => new Date(b.startTime) > now)
    .sort(
      (a, b) =>
        new Date(a.startTime).getTime() - new Date(b.startTime).getTime()
    );

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 p-6 pt-32">
      {/* Main container: column on mobile, row on lg+ */}
      <div className="flex-1 flex justify-center">
        <div className="w-full max-w-[1100px] flex …">
          <div className="flex flex-col lg:flex-row flex-1 gap-8">
            {/* Calendar pane */}
            <div
              className="
            bg-white p-4 rounded-lg shadow
            w-full                                  /* full width on small */
            md:min-w-[300px] md:max-w-[800px]       /* constrain width on md+ */
            min-h-[300px] md:min-h-[400px] md:max-h-[800px]
            flex-1
          "
            >
              <Calendar
                mode="single"
                selected={selectedDate}
                onSelect={(date) =>
                  date &&
                  (setSelectedDate(date),
                  setSelectedBooking(null),
                  setSelectedDiagnosis(null))
                }
                modifiers={{ booking: bookingDates, diagnosis: diagnosisDates }}
                modifiersClassNames={{
                  booking: "bg-blue-300 text-white rounded-full",
                  diagnosis: "bg-green-300 text-white rounded-full",
                }}
                className="w-full h-full"
              />
            </div>

            {/* Sidebar: full width on mobile, 1/3 on lg+ */}
            <div className="w-full lg:w-1/3 flex flex-col space-y-6">
              {/* Upcoming Appointments */}
              <div className="bg-white p-4 rounded-lg shadow">
                <h2 className="text-xl font-semibold mb-3">
                  Upcoming Appointments
                </h2>
                {upcomingAppointments.length > 0 ? (
                  <ul className="divide-y">
                    {upcomingAppointments.map((b) => (
                      <li key={b.id} className="py-2">
                        <div className="flex justify-between">
                          <span>Dr. {b.doctorName}</span>
                          <span className="text-gray-600 text-sm">
                            {new Date(b.startTime).toLocaleDateString()}{" "}
                            {new Date(b.startTime).toLocaleTimeString([], {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-gray-500">
                    You have no upcoming appointments.
                  </p>
                )}
              </div>

              {/* Events */}
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
                          onClick={() => (
                            setSelectedBooking(b), setSelectedDiagnosis(null)
                          )}
                          className={`py-2 cursor-pointer hover:bg-blue-50 ${
                            selectedBooking?.id === b.id ? "bg-blue-100" : ""
                          }`}
                        >
                          <div className="flex justify-between">
                            <span>Dr. {b.doctorName}</span>
                            <span className="text-gray-600 text-sm">
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
                          onClick={() => (
                            setSelectedDiagnosis(d), setSelectedBooking(null)
                          )}
                          className={`py-2 cursor-pointer hover:bg-green-50 ${
                            selectedDiagnosis?.id === d.id ? "bg-green-100" : ""
                          }`}
                        >
                          <div className="flex justify-between">
                            <span>{d.patientName}</span>
                            <span className="text-gray-600 text-sm">
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

              {/* Details panel */}
              {(selectedBooking || selectedDiagnosis) && (
                <div className="bg-white p-4 rounded-lg shadow">
                  {selectedBooking && (
                    <>
                      <h3 className="text-xl font-semibold mb-3">
                        Appointment Details
                      </h3>
                      <p className="text-gray-700">
                        <strong>Doctor:</strong> {selectedBooking.doctorName}
                      </p>
                      <p className="text-gray-700">
                        <strong>Time:</strong>{" "}
                        {new Date(selectedBooking.startTime).toLocaleString()} –{" "}
                        {new Date(selectedBooking.endTime).toLocaleString()}
                      </p>
                      <p className="mt-2 text-gray-600">
                        {selectedBooking.details}
                      </p>
                    </>
                  )}
                  {selectedDiagnosis && (
                    <>
                      <h3 className="text-xl font-semibold mb-3">
                        Diagnosis Details
                      </h3>
                      <p className="text-gray-700">
                        <strong>Patient:</strong>{" "}
                        {selectedDiagnosis.patientName}
                      </p>
                      <p className="text-gray-700">
                        <strong>Time:</strong>{" "}
                        {new Date(selectedDiagnosis.time).toLocaleString()}
                      </p>
                      <p className="mt-2 text-gray-600">
                        {selectedDiagnosis.description}
                      </p>
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
