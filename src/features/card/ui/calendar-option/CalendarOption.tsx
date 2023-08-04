import { Calendar, CalendarProps } from "primereact/calendar";
import { BaseFieldProps } from "../../lib/BaseFieldProps";
import { FC } from "react";

interface CalendarOptionProps extends BaseFieldProps {
  calendarProps?: CalendarProps;
}

export const CalendarOption: FC<CalendarOptionProps> = ({
  validation,
  calendarProps,
  id,
  label,
}) => {
  const { register, errors } = validation;
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <Calendar
        {...register(id, { required: true, valueAsDate: true })}
        {...calendarProps}
        view="month"
        id={id}
      />
      {errors.expire && <span>{errors.expire.message}</span>}
    </>
  );
};
