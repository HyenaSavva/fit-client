import { AnimatePresence, motion } from "framer-motion";
import { Menu } from "features/custom-menu/ui/Menu";
import { menuItems } from "../lib/menuItems";
import { FC } from "react";

import styles from "./SideBar.module.css";

interface SideBarProps {}

export const SideBar: FC<SideBarProps> = () => {
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
          <Menu options={menuItems} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
