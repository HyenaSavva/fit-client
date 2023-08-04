import { FC, useEffect } from "react";
import { useAppDispatch } from "shared/model";
// import { fetchUsers } from "store/reducers/ActionCreators";
// import CustomMenu from "components/common/custom-menu/CustomMenu";
import Navigation from "components/common/navigation/Navigation";
import { motion } from "framer-motion";

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
  const dispatch = useAppDispatch();
  // const { users } = useAppSelector((state) => state.userReducer);

  useEffect(() => {
    // fetchUsers(dispatch);
  }, []);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <h2>Dashboard</h2>

      {/* {JSON.stringify(users, null, 2)} */}
    </motion.div>
  );
};

export default Dashboard;
