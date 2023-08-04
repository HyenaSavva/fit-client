import { Calendar } from "primereact/calendar";
import { FC, useState } from "react";

interface ScheduleProps {}

const Schedule: FC<ScheduleProps> = () => {
  const [date, setDate] = useState(null);
  return <Calendar value={date} onChange={(e) => setDate(e.value)} touchUI />;
};

export default Schedule;
