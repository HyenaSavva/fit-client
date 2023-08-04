import { motion } from "framer-motion";
import { Avatar } from "primereact/avatar";
import { FC } from "react";

import styles from "./CustomAvatar.module.css";

interface CustomAvatarProps {
  handleNavigate: (path: string) => void;
}

const CustomAvatar: FC<CustomAvatarProps> = ({ handleNavigate }) => {
  return (
    <motion.div className={styles.avatarBlock} whileHover={{ scale: 1.2 }}>
      <Avatar
        className={styles.avatar}
        image="https://sun9-67.userapi.com/impg/Yfvs1uWNky--yyQZgldwUyPPT6808HOeK7Nw9A/HwXHzMaTUiA.jpg?size=899x1200&quality=96&sign=7b0d707c26f3919fd4a7726fc4718492&type=album"
        shape="circle"
        size="xlarge"
        onClick={() => handleNavigate("/")}
      />
    </motion.div>
  );
};

export default CustomAvatar;
