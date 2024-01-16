import { useGetUsersQuery } from "entities/product";
import { Accordion } from "primereact/accordion";
import { motion } from "framer-motion";
import { FC } from "react";

import styles from "./EditPage.module.css";

export const EditPage: FC = () => {
  const { data } = useGetUsersQuery();
  console.log(data);

  return (
    <motion.div
      className={styles.edit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Accordion className={styles.accordion}>
        {/* {data ? (
          // data.map((account) => <Account account={account} />)
          data.map((item) => <p>{item.}</p>)
        ) : (
          <>Not visible</>
        )} */}
      </Accordion>
    </motion.div>
  );
};
