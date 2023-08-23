import { useGetAllAccountsQuery } from "entities/account";
import { Button } from "primereact/button";
import { motion } from "framer-motion";
import { FC } from "react";

import styles from "./EditPage.module.css";

interface EditProps {}

export const EditPage: FC<EditProps> = () => {
  const { data } = useGetAllAccountsQuery();

  const handleClick = () => {
    console.log(data);
  };

  return (
    <motion.div
      className={styles.edit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Button onClick={handleClick}>Execute</Button>
    </motion.div>
  );
};
