import { Calendar } from "primereact/calendar";
import { FC } from "react";

interface ScheduleProps {}

export const Schedule: FC<ScheduleProps> = () => {
  return <Calendar touchUI />;
};
