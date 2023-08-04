import { InputText, InputTextProps } from "primereact/inputtext";
import { BaseFieldProps } from "../../lib/BaseFieldProps";
import { FC } from "react";

interface InputTextOptionProps extends BaseFieldProps {
  inputTextProps?: InputTextProps;
}

export const InputTextOption: FC<InputTextOptionProps> = ({
  validation,
  inputTextProps,
  id,
  label,
}) => {
  const { register, errors } = validation;
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <InputText
        {...register(id, { required: true })}
        {...inputTextProps}
        id={id}
      />
      {errors[id] && <span>{errors[id]?.message}</span>}
    </>
  );
};
