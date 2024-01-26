import { useFormValidation } from "shared/lib";
import { Inputs } from "entities/product";
import * as z from "zod";

const productFormSchema = z.object({
  productName: z
    .string()
    .min(1, { message: "Product name is required" })
    .max(20, { message: "Product name is too large" }),
  proteins: z.string().max(9999, { message: "Too much proteins" }),
  carbohydrates: z.string().max(9999, { message: "Too much carbohydrates" }),
  calories: z.string().max(9999, { message: "Too much calories" }),
  fats: z.string().max(9999, { message: "Too much fats" }),
  gramms: z.string().max(9999, { message: "Too big number" }),
});

export const useProductFormValidation = () => {
  const { register, handleSubmit, errors } =
    useFormValidation<Inputs>(productFormSchema);

  return { register, handleSubmit, errors };
};
