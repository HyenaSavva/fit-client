import { baseApi } from "shared/api";
import type {
  SignupRequest,
  SignupResponse,
  SigninResponse,
  SigninRequest,
} from "../model/types";
// import { setCredentials } from "..";

export const sessionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signin: build.mutation<SigninResponse, SigninRequest>({
      query: (credentials) => ({
        url: "auth/signin",
        method: "POST",
        body: credentials,
      }),
    }),
    signup: build.mutation<SignupResponse, SignupRequest>({
      query: (credentials) => ({
        url: "auth/signup",
        method: "POST",
        credentials: "include",
        body: credentials,
      }),
    }),
    refresh: build.mutation<object, string>({
      query: (credentials) => ({
        url: "auth/refresh",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useSignupMutation, useSigninMutation, useRefreshMutation } =
  sessionApi;
