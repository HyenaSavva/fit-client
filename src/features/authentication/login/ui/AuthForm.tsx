import { useAuthFormValidation } from "../lib/useAuthFormValidation";
import { useNavigate, useLocation } from "react-router-dom";
import { InputText } from "primereact/inputtext";
import { SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "shared/model";
import { Button } from "primereact/button";
import { FC, memo } from "react";
import {
  useSigninMutation,
  setCredentials,
  SigninRequest,
} from "entities/session";

import styles from "./AuthForm.module.css";

export const AuthForm: FC = memo(() => {
  const { register, handleSubmit, errors } = useAuthFormValidation();
  const [generateUser, { error: loginError }] = useSigninMutation();
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const onSubmit: SubmitHandler<SigninRequest> = async (data) => {
    const loginRequest: SigninRequest = {
      email: data.email,
      password: data.password,
    };

    try {
      const token = await generateUser(loginRequest).unwrap();

      if (token) {
        dispatch(setCredentials(token));
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
          <InputText {...register("email")} placeholder="Email" id="email" />
          <label htmlFor="email">{errors["email"]?.message}</label>
        </div>
        <div className={styles.option}>
          <InputText
            {...register("password")}
            type="password"
            placeholder="Password"
            id="password"
            autoComplete="user@example.com"
          />
          <label htmlFor="password">{errors["password"]?.message}</label>
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
