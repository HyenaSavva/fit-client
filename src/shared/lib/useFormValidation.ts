import { FieldValues, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

type FormProps<T> = z.Schema<T>; // validation schema

export const useFormValidation = <T extends FieldValues>(
  formSchema: FormProps<T>
) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<T>({
    resolver: zodResolver(formSchema),
  });

  return { register, handleSubmit, errors };
};
