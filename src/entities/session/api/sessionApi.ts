import { baseApi } from "shared/api";
import type {
  SignupRequest,
  SignupResponse,
  SigninResponse,
  SigninRequest,
} from "../model/types";
import { setCredentials } from "..";

export const sessionApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    signin: build.mutation<SigninResponse, SigninRequest>({
      query: (credentials) => ({
        url: "auth/signin",
        method: "POST",
        credentials: "include",
        body: credentials,
      }),
      onQueryStarted: async (request, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled;
        const accessToken = data.token;
        console.log(accessToken);

        dispatch(
          setCredentials({
            token: accessToken,
            isAuthorized: true,
          })
        );
      },
    }),
    signup: build.mutation<SignupResponse, SignupRequest>({
      query: (credentials) => ({
        url: "auth/signup",
        method: "POST",
        credentials: "include",
        body: credentials,
      }),
      onQueryStarted: async (request, { dispatch, queryFulfilled }) => {
        const { data } = await queryFulfilled;
        const accessToken = data.token;
        console.log(accessToken);

        dispatch(
          setCredentials({
            token: accessToken,
            isAuthorized: true,
          })
        );
      },
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
