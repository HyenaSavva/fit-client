import { AuthForm } from "features/authentication/login";
import { FC } from "react";

import styles from "./AuthPage.module.css";

export const AuthPage: FC = () => {
  return (
    <div className={styles.page}>
      <AuthForm />
    </div>
  );
};
