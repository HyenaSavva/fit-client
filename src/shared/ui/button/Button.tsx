import { FC, MouseEventHandler, ReactElement, useState } from "react";
import { motion } from "framer-motion";
import {
  ButtonProps as PrimeButtonProps,
  Button as PrimeButton,
} from "primereact/button";
import { Dialog } from "primereact/dialog";

type ButtonProps = {
  modalSlot?: ReactElement;
  action?: MouseEventHandler;
  label?: string;
  header?: string;
} & PrimeButtonProps;

export const Button: FC<ButtonProps> = ({
  action,
  modalSlot,
  label,
  header,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const handleClick = action ? action : () => setIsVisible((prev) => !prev);

  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <>
        <PrimeButton {...props} onClick={handleClick}>
          {label || "button"}
        </PrimeButton>
        {!action && (
          <Dialog
            visible={isVisible}
            onHide={() => setIsVisible((prev) => !prev)}
            header={header}
          >
            <> {modalSlot && modalSlot} </>
          </Dialog>
        )}
      </>
    </motion.div>
  );
};
