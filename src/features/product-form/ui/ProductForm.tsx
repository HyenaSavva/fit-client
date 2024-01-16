import { FC } from "react";
import { useProductFormValidation } from "entities/product";
// import { CreateCardHandler } from "entities/card";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

import styles from "./ProductForm.module.css";

export const ProductForm: FC = ({}) => {
  const { register, handleSubmit, errors } = useProductFormValidation();
  // const { onSubmit } = CreateCardHandler();

  return (
    <div className={styles.formBlock}>
      <form
        onSubmit={handleSubmit(() => console.log("done"))}
        className={styles.form}
      >
        <ul className={styles.list}>
          <li>
            <label>Product Name</label>
            <InputText id="productName" {...register("productName")} />
            <p>{errors["productName"]?.message}</p>
          </li>
          <li>
            <InputText id="productName" {...register("productName")} />
            <p>{errors["productName"]?.message}</p>
          </li>
          <li>
            <InputText id="productName" {...register("productName")} />
            <p>{errors["productName"]?.message}</p>
          </li>
          <Button type="submit">Submit</Button>
        </ul>
      </form>
    </div>
  );
};
