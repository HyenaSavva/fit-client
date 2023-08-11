import { motion } from "framer-motion";
import { Avatar as PrimeAvatar } from "primereact/avatar";
import { FC } from "react";

import styles from "./Avatar.module.css";

interface AvatarProps {
  handleNavigate: (path: string) => void;
}

export const Avatar: FC<AvatarProps> = ({ handleNavigate }) => {
  return (
    <motion.div className={styles.avatarBlock} whileHover={{ scale: 1.08 }}>
      <PrimeAvatar
        className={styles.avatar}
        image="https://sun9-67.userapi.com/impg/Yfvs1uWNky--yyQZgldwUyPPT6808HOeK7Nw9A/HwXHzMaTUiA.jpg?size=899x1200&quality=96&sign=7b0d707c26f3919fd4a7726fc4718492&type=album"
        shape="circle"
        size="xlarge"
        onClick={() => handleNavigate("/profile")}
      />
    </motion.div>
  );
};
