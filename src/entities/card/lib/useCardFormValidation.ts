import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Inputs } from "entities/card";
import * as z from "zod";

const cardFormSchema = z.object({
  cardNumber: z.string().min(16, { message: "Card number is required" }),
  cardHolder: z.string().min(1, { message: "Card holder name is required" }),
  cvvCode: z.string().min(3, { message: "CVV code must be 3 digits" }).max(3),
  expire: z.date(),
});

export const useCardFormValidation = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>({
    resolver: zodResolver(cardFormSchema),
  });

  return { register, handleSubmit, errors };
};
