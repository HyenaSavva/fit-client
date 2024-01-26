import { FC, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "shared/model";
import { select, selectSelector } from "entities/select";
import {
  ProductProps,
  selectProducts,
  setProducts,
  useGetAllProductsQuery,
} from "entities/product";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

import styles from "./ProductTable.module.css";

export const ProductTable: FC = () => {
  const { data } = useGetAllProductsQuery();
  const dispatchedProducts = useAppSelector(selectProducts);
  const [selectedProduct, setSelectedProduct] = useState<ProductProps | null>(
    null
  );
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (data) dispatch(setProducts(data));
    console.log(data);
    console.log(dispatchedProducts);
  }, [dispatchedProducts]);

  return (
    <div className={styles.productTable}>
      <DataTable
        value={dispatchedProducts}
        tableStyle={{ minWidth: "50rem" }}
        paginator
        rows={15}
        rowsPerPageOptions={[15, 25, 50]}
        className={styles.table}
        onSelectionChange={(e) => {
          //@ts-ignore
          setSelectedProduct(e.value);
          dispatch(select(e.value));
        }}
        //@ts-ignore
        selection={selectedProduct}
      >
        <Column selectionMode="single" exportable={false}></Column>
        <Column field="id" header="Id"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="proteins" header="Proteins" sortable></Column>
        <Column field="fats" header="Fats" sortable></Column>
        <Column field="calories" header="Calories" sortable></Column>
        <Column field="carbohydrates" header="Carbohydrates" sortable></Column>
        <Column field="gramms" header="Gramms" sortable></Column>
      </DataTable>
    </div>
  );
};
