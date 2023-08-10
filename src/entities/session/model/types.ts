import { type User } from "entities/user/@x"; // cross-import

export type UserDto = {
  email: string;
  id: string;
  name: string;
  password: string;
  token: string;
  Symbol(): string;
  Symbol(): string;
};

export interface UserResponse {
  user: User;
  token: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}
