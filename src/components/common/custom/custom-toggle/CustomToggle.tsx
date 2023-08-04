import { motion } from "framer-motion";
import { ToggleButton, ToggleButtonChangeEvent } from "primereact/togglebutton";
import { FC } from "react";

interface CustomToggleProps {
  isOpen: boolean;
  handleOpen: (e: ToggleButtonChangeEvent) => void;
}

const CustomToggle: FC<CustomToggleProps> = ({ isOpen, handleOpen }) => {
  return (
    <motion.div whileTap={{ scale: 0.95 }}>
      <ToggleButton
        checked={isOpen}
        onChange={handleOpen}
        onIcon="pi pi-times"
        offIcon="pi pi-align-justify"
        onLabel=""
      ></ToggleButton>
    </motion.div>
  );
};

export default CustomToggle;
