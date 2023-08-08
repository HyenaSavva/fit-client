import { FC } from "react";
import styles from "./Calendar.module.css";
import Schedule from "components/common/schedule/Schedule";

interface CalendarProps {}

const Calendar: FC<CalendarProps> = () => {
  return (
    <div className={styles.calendar}>
      <Schedule />
    </div>
  );
};

export default Calendar;
