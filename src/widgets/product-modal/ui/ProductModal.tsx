import { FC, useState } from "react";
import { CustomButton } from "shared/ui/custom-button";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { ProductForm } from "features/product-form";

interface CardModalProps {}

export const ProductModal: FC<CardModalProps> = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {/* <CustomButton onClick={() => setIsVisible(!isVisible)} /> */}
      <Button outlined onClick={() => setIsVisible(!isVisible)}>
        Add New
      </Button>
      <Dialog
        draggable={false}
        visible={isVisible}
        onHide={() => setIsVisible(!isVisible)}
        header={"Add new product"}
      >
        <ProductForm />
      </Dialog>
    </>
  );
};
