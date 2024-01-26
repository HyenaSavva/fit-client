import { FC } from "react";
import { motion } from "framer-motion";
import { useAppDispatch, useAppSelector } from "shared/model";
import { Button } from "shared/ui";
import { selectUserData, setIsNew } from "entities/user";
import { ProductProps, selectProducts, setProducts } from "entities/product";
import { selectSelector } from "entities/select";
import { IntroCard } from "features/intro-card";
import { ProductForm } from "features/product-form";
import { ProductTable } from "widgets/product-table";

import styles from "./Dashboard.module.css";

interface DashboardProps {}

export const Dashboard: FC<DashboardProps> = () => {
  const dispatch = useAppDispatch();
  const { isNew } = useAppSelector(selectUserData);
  const selectedProduct = useAppSelector(selectSelector);
  const dispatchedProducts = useAppSelector(selectProducts);

  const deleteSelectedProduct = () => {
    let products: ProductProps[] = [];

    console.log(selectedProduct);

    if (selectedProduct) {
      products = dispatchedProducts.filter((val) => {
        console.log(val?.id != selectedProduct?.id);

        return val?.id != selectedProduct?.id;
      });
      console.log(products);
    }

    dispatch(setProducts(products));
  };

  const changeUserExpirience = () => dispatch(setIsNew());

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={styles.dashboardWrapper}
    >
      <section className={styles.dashboardHeader}>
        <h2>Dashboard</h2>
        <div className={styles.options}>
          <Button
            modalSlot={<ProductForm />}
            header="Add new product"
            label="Delete"
            severity="danger"
            action={deleteSelectedProduct}
          />
          <Button
            modalSlot={<ProductForm />}
            header="Add new product"
            label="Add new"
            outlined
          />
        </div>
      </section>
      <br />

      {isNew ? <IntroCard handler={changeUserExpirience} /> : <ProductTable />}
    </motion.div>
  );
};
