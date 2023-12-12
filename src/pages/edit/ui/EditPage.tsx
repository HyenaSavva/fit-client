import { Account, useGetAllAccountsQuery } from "entities/account";
import { Accordion } from "primereact/accordion";
import { motion } from "framer-motion";
import { FC } from "react";

import styles from "./EditPage.module.css";

export const EditPage: FC = () => {
  const { data } = useGetAllAccountsQuery();

  return (
    <motion.div
      className={styles.edit}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      <Accordion className={styles.accordion}>
        {data ? (
          data.map((account) => <Account account={account} />)
        ) : (
          <>Not visible</>
        )}
      </Accordion>
    </motion.div>
  );
};
