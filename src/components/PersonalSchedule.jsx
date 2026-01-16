import { generateTimeSlots } from '../utils/timeSlots';

const PersonalSchedule = ({ appointments = [], teacher }) => {
  const timeSlots = generateTimeSlots();

  const getAppointmentForSlot = (slotTime) =>
    appointments.find((appt) => new Date(appt.start).getTime() === slotTime.getTime());

  return (
    <div className="max-w-xl p-4 font-sans">
      <h2 className="text-xl font-semibold mb-4">{teacher}</h2>

      <div className="border border-gray-200 rounded-lg overflow-hidden">
        {timeSlots.map((slot) => {
          const appointment = getAppointmentForSlot(slot.start);

          return (
            <div key={slot.start} className="flex min-h-16 border-b last:border-b-0">
              {/* Time Column */}
              <div className="w-24 bg-gray-50 border-r px-3 py-2 text-sm font-medium text-gray-600">
                {slot.label}
              </div>

              {/* Content Column */}
              <div className="flex-1 px-3 py-2 flex items-center">
                {appointment ? (
                  <div className="bg-indigo-600 text-white text-sm px-3 py-1.5 rounded-md shadow">
                    {appointment.title}
                  </div>
                ) : (
                  <button className="text-sm text-gray-400 border border-dashed border-gray-300 px-3 py-1.5 rounded-md hover:text-indigo-600 hover:border-indigo-400 transition">
                    + Add appointment
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PersonalSchedule;
