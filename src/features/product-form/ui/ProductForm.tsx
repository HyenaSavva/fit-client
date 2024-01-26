import { FC } from "react";
import {
  useProductFormValidation,
  useCreateProductHandler,
} from "entities/product";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import styles from "./ProductForm.module.css";

export const ProductForm: FC = () => {
  const { register, handleSubmit, errors } = useProductFormValidation();
  const { onSubmit } = useCreateProductHandler();

  return (
    <div className={styles.formBlock}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <ul className={styles.list}>
          <div>
            <li>
              <label htmlFor="productName">Product Name</label>
              <InputText
                id="productName"
                {...register("productName")}
                keyfilter="alpha"
                maxLength={18}
              />
              <label htmlFor="productName">
                {errors["productName"]?.message}
              </label>
            </li>
            <li>
              <label htmlFor="calories">Calories</label>
              <InputText
                id="calories"
                {...register("calories")}
                maxLength={6}
              />
              <label htmlFor="calories">{errors["calories"]?.message}</label>
            </li>
            <li>
              <label htmlFor="gramms">Gramms</label>
              <InputText id="gramms" {...register("gramms")} maxLength={6} />
              <label htmlFor="gramms">{errors["gramms"]?.message}</label>
            </li>
          </div>
          <div className={styles.secondOptions}>
            <li>
              <label htmlFor="fats">Fats</label>
              <InputText id="fats" {...register("fats")} maxLength={6} />
              <label htmlFor="gramms">{errors["gramms"]?.message}</label>
            </li>
            <li>
              <label htmlFor="proteins">Proteins</label>
              <InputText
                id="proteins"
                {...register("proteins")}
                keyfilter="pnum"
                maxLength={6}
              />
              <label htmlFor="proteins">{errors["proteins"]?.message}</label>
            </li>
            <li>
              <label htmlFor="carbohydrates">Carbohydrates</label>
              <InputText
                id="carbohydrates"
                {...register("carbohydrates")}
                keyfilter="pnum"
                maxLength={6}
              />
              <label htmlFor="carbohydrates">
                {errors["carbohydrates"]?.message}
              </label>
            </li>
          </div>
        </ul>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
