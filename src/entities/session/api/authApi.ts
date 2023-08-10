import { mapUser } from "../lib/mapUser";
import { baseApi } from "shared/api";
import {
  type UserResponse,
  type LoginRequest,
  type UserDto,
} from "../model/types";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<UserResponse, LoginRequest>({
      query: (credentials) => ({
        url: "login",
        method: "POST",
        body: credentials,
      }),
      transformResponse: (response: UserDto) => {
        const { user, token } = mapUser(response);
        return { user, token };
      },
    }),
    logout: build.mutation<void, void>({
      query: () => ({
        url: "logout",
        method: "GET",
      }),
    }),
    protected: build.query<UserResponse, void>({
      query: () => ({
        url: "profile",
        method: "GET",
      }),
    }),
  }),
});

export const { useLoginMutation, useLogoutMutation, useProtectedQuery } =
  authApi;
