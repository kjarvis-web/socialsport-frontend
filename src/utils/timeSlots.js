export function generateTimeSlots(startHour = 14, endHour = 22) {
  const slots = [];
  const start = new Date();
  start.setHours(startHour, 0, 0, 0);

  const end = new Date();
  end.setHours(endHour, 0, 0, 0);

  while (start < end) {
    const slotStart = new Date(start);
    const fivePM = slotStart.getHours() == 17 && slotStart.getMinutes() === 0;
    const intervalMinutes = fivePM ? 60 : 45;
    start.setMinutes(start.getMinutes() + intervalMinutes);

    slots.push({
      start: slotStart,
      label: slotStart.toLocaleTimeString([], {
        hour: '2-digit',
        minute: '2-digit',
      }),
    });
  }

  return slots;
}
