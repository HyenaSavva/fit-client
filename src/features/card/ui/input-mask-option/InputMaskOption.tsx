import { InputMask, InputMaskProps } from "primereact/inputmask";
import { BaseFieldProps } from "../../lib/BaseFieldProps";
import { FC } from "react";

interface InputMaskOptionProps extends BaseFieldProps {
  inputMaskProps: InputMaskProps;
}

export const InputMaskOption: FC<InputMaskOptionProps> = ({
  validation,
  inputMaskProps,
  id,
  label,
}) => {
  const { register, errors } = validation;
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <InputMask
        {...register(id, { required: true })}
        {...inputMaskProps}
        id={id}
      />
      {errors[id] && <span>{errors[id]?.message}</span>}
    </>
  );
};
