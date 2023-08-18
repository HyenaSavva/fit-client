import { Schedule } from "features/schedule";
import { FC } from "react";

import styles from "./Calendar.module.css";

interface CalendarProps {}

export const Calendar: FC<CalendarProps> = () => {
  return (
    <div className={styles.calendar}>
      <Schedule />
    </div>
  );
};
