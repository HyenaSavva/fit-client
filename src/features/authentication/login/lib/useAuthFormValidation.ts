import { SigninRequest } from "entities/session";
import { useFormValidation } from "shared/lib";
import * as z from "zod";

const authFormSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email({
    message: "Must be a valid email",
  }),
  password: z
    .string()
    .min(6, { message: "Password must be atleast 6 characters" }),
});

export const useAuthFormValidation = () => {
  const { register, handleSubmit, errors } =
    useFormValidation<SigninRequest>(authFormSchema);

  return { register, handleSubmit, errors };
};
