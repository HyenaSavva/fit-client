import { SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "shared/model";
import { createProduct } from "entities/product";
import { ProductProps, type Inputs } from "../model/types";
import { useCreateProductMutation } from "./productApi";

export const useCreateProductHandler = () => {
  const [generateProduct] = useCreateProductMutation();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const newProduct: ProductProps = {
      productName: data.productName,
      proteins: Number(data.proteins),
      carbohydrates: Number(data.carbohydrates),
      calories: Number(data.calories),
      fats: Number(data.fats),
      gramms: Number(data.gramms),
    };

    try {
      const result = await generateProduct(newProduct).unwrap();
      if (result) dispatch(createProduct(result));
    } catch (error) {
      console.log(error);
    }
  };

  return { onSubmit };
};
