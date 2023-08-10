import { useFormValidation } from "shared/lib";
import { Inputs } from "entities/card";
import * as z from "zod";

const cardFormSchema = z.object({
  cardNumber: z.string().min(16, { message: "Card number is required" }),
  cardHolder: z.string().min(1, { message: "Card holder name is required" }),
  cvvCode: z.string().min(3, { message: "CVV code must be 3 digits" }).max(3),
  expire: z.date(),
});

export const useCardFormValidation = () => {
  const { register, handleSubmit, errors } =
    useFormValidation<Inputs>(cardFormSchema);

  return { register, handleSubmit, errors };
};
