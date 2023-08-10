import { useLoginMutation } from "entities/session";
import { motion } from "framer-motion";
import { FC } from "react";

interface DashboardProps {}

export const Dashboard: FC<DashboardProps> = () => {
  const [_, { data, isSuccess, error }] = useLoginMutation();
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Dashboard</h2>
      {isSuccess ? (
        <>
          Data:
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </>
      ) : error ? (
        <>
          Error: <pre>{JSON.stringify(error, null, 2)}</pre>
        </>
      ) : null}
    </motion.div>
  );
};
