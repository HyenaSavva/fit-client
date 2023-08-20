import { useAuthFormValidation } from "../lib/useAuthFormValidation";
import { useNavigate, useLocation } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "shared/model";
import { Button } from "primereact/button";
import { FC, memo } from "react";
import {
  useLoginMutation,
  setCredentials,
  LoginRequest,
} from "entities/session";

import styles from "./AuthForm.module.css";

export const AuthForm: FC = memo(() => {
  const { register, handleSubmit, errors } = useAuthFormValidation();
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
      const response = await generateUser(loginRequest).unwrap();
      const { user, token } = response;
      console.log(response);
      if (user) {
        dispatch(setCredentials({ user, token }));
        navigate(location.state?.from?.pathname);
      }
    } catch (err) {
      console.log(err); // todo - <Toast />
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
        {loginError && (
          <>
            Error: <pre>{JSON.stringify(loginError, null, 2)}</pre>
          </>
        )}
      </form>
    </div>
  );
});
