import { FC } from "react";
import { motion } from "framer-motion";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Dashboard</h2>
    </motion.div>
  );
};

export default Dashboard;
