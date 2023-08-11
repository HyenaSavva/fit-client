import { motion } from "framer-motion";
import { Button } from "primereact/button";
import { FC, useState } from "react";

interface ButtonMenuProps {
  handleNavigate?: (path: string) => void;
  icon: string;
  url?: string;
  iconToSwitch?: string;
}

export const ButtonMenu: FC<ButtonMenuProps> = ({
  icon,
  iconToSwitch,
  url,
  handleNavigate,
}) => {
  const [isSwitched, setIsSwitched] = useState(false);
  return (
    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
      <Button
        text
        severity="secondary"
        icon={iconToSwitch && isSwitched ? iconToSwitch : icon}
        onClick={() => {
          setIsSwitched(!isSwitched);
          url && handleNavigate && handleNavigate(url);
        }}
        pt={{ icon: { style: { fontSize: "1.2rem" } } }}
      />
    </motion.div>
  );
};
