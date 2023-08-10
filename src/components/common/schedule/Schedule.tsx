import { Calendar } from "primereact/calendar";
import { FC } from "react";

interface ScheduleProps {}

const Schedule: FC<ScheduleProps> = () => {
  return <Calendar touchUI />;
};

export default Schedule;
