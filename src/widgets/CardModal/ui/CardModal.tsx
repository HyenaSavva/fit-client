import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { CardForm } from "features/card";
import { FC, useState } from "react";

interface CardModalProps {}

export const CardModal: FC<CardModalProps> = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <Button outlined onClick={() => setIsVisible(!isVisible)}>
        Add New
      </Button>
      <Dialog
        closeOnEscape={false}
        draggable={false}
        visible={isVisible}
        onHide={() => setIsVisible(!isVisible)}
        header={"Add new Card"}
      >
        <CardForm />
      </Dialog>
    </>
  );
};
