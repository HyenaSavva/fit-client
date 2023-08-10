import { UserDto, UserResponse } from "../model/types";

export const mapUser = (User: UserDto): UserResponse => {
  return {
    user: {
      email: User.email,
      password: User.password,
      id: User.id,
      name: User.name,
    },
    token: User.token,
  };
};
