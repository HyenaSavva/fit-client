import { InputMask } from "primereact/inputmask";
import { InputTextProps } from "primereact/inputtext";
import { FC, ForwardRefExoticComponent } from "react";

interface FormOptionProps {
  Input: InputMask | ForwardRefExoticComponent<InputTextProps>;
}

const FormOption: FC<FormOptionProps> = ({ Input }) => {
  //@ts-ignore
  return <Input />;
};

export default FormOption;
