import { FC } from "react";
import { useAppDispatch, useAppSelector } from "shared/model";
import { selectUserData, setIsNew } from "entities/user";
import { IntroCard } from "features/intro-card";
import { Schedule } from "widgets/schedule";
import { motion } from "framer-motion";

interface DashboardProps {}

export const Dashboard: FC<DashboardProps> = () => {
  const { isNew } = useAppSelector(selectUserData);
  const dispatch = useAppDispatch();

  const changeUserExpirience = () => {
    dispatch(setIsNew());
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Dashboard</h2>
      <br />
      {isNew ? <IntroCard handler={changeUserExpirience} /> : <Schedule />}
    </motion.div>
  );
};
