import { FC, useState } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { CustomButton } from "shared/ui/custom-button";
import { ProductModal } from "widgets/product-modal";

interface Product {
  id: string;
  code: string;
  name: string;
  description: string;
  image: string;
  price: number;
  category: string;
  quantity: number;
  inventoryStatus: string;
  rating: number;
}

export const Schedule: FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  return (
    <div className="card">
      <DataTable value={products} tableStyle={{ minWidth: "50rem" }}>
        <Column field="code" header="Code"></Column>
        <Column field="name" header="Name"></Column>
        <Column field="category" header="Category"></Column>
        <Column field="quantity" header="Quantity"></Column>
      </DataTable>

      
      <ProductModal />
    </div>
  );
};