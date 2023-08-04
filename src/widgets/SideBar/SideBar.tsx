import CustomMenu from "components/common/custom/custom-menu/CustomMenu";
import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { menuItems } from "examples/constants/constants";
import { FC } from "react";

import styles from "./SideBar.module.css";
interface SideBarProps {}

export const SideBar: FC<SideBarProps> = () => {
  const navigate = useNavigate();
  const handleNavigate = (path: string) => navigate(path);

  return (
    <div className={styles.sidebar}>
      <AnimatePresence mode="wait">
        <motion.div
          className={styles.sideOptions}
          initial={{ width: 0, scale: 0.6, opacity: 0 }}
          animate={{ width: "100%", scale: 1, opacity: 1 }}
          exit={{ width: 0, scale: 0.6, opacity: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            staggerChildren: 20,
          }}
        >
          <CustomMenu handleNavigate={handleNavigate} options={menuItems} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
