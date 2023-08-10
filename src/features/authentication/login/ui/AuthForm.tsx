import { useAuthFormValidation } from "../lib/useAuthFormValidation";
import { useNavigate, useLocation } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "shared/model";
import { Button } from "primereact/button";
import { FC, memo, useState } from "react";
import {
  useLoginMutation,
  setCredentials,
  LoginRequest,
} from "entities/session";

import styles from "./AuthForm.module.css";

export const AuthForm: FC = memo(() => {
  const { register, handleSubmit, errors } = useAuthFormValidation();
  const [userNotFound, setUserNotFound] = useState<boolean>(false);
  const [generateUser, { error: loginError }] = useLoginMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit: SubmitHandler<LoginRequest> = async (data) => {
    const loginRequest: LoginRequest = {
      email: data.email,
      password: data.password,
    };
    try {
      const { user, token } = await generateUser(loginRequest).unwrap();
      if (user) {
        dispatch(setCredentials({ user, token }));
        navigate(location.state?.from?.pathname);
      }
    } catch (err) {
      setUserNotFound(true);
    }
  };

  return (
    <div className={styles.formBlock}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <div className={styles.option}>
          <InputText {...register("email")} placeholder="Email" />
          <label>{errors["email"]?.message}</label>
        </div>
        <div className={styles.option}>
          <InputText
            {...register("password")}
            type="password"
            placeholder="Password"
          />
          <label>{errors["password"]?.message}</label>
        </div>
        <Button type="submit">Submit</Button>
        {userNotFound && (
          <>
            Error: <pre>{JSON.stringify(loginError, null, 2)}</pre>
          </>
        )}
      </form>
    </div>
  );
});
