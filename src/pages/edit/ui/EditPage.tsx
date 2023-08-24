// import { useGetAllAccountsQuery } from "entities/account";
import { Button } from "primereact/button";
import { motion } from "framer-motion";
import { FC, useState } from "react";

import styles from "./EditPage.module.css";

interface EditProps {}

export const EditPage: FC<EditProps> = () => {
  // const { data } = useGetAllAccountsQuery();
  const [visible, setVisible] = useState(false);

  const handleClick = () => {
    console.log("what");
    setVisible(!visible);
  };

  return (
    <motion.div
      className={styles.edit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {visible ? <>Visible</> : <>Not visible</>}
      <Button onClick={handleClick}>Execute</Button>
    </motion.div>
  );
};
