import { FieldErrors, UseFormRegister } from "react-hook-form";
import { Inputs } from "entities/card";

export interface BaseFieldProps {
  validation: {
    register: UseFormRegister<Inputs>;
    errors: FieldErrors<Inputs>;
  };
  id: "cardNumber" | "cardHolder" | "cvvCode" | "expire";
  label: string;
}
