import { useFormValidation } from "shared/lib";
import { Inputs } from "entities/product";
import * as z from "zod";

const productFormSchema = z.object({
  productName: z.string().min(2, { message: "Product Name is required" }),
  expire: z.date(),
});

export const useProductFormValidation = () => {
  const { register, handleSubmit, errors } =
    useFormValidation<Inputs>(productFormSchema);

  return { register, handleSubmit, errors };
};
