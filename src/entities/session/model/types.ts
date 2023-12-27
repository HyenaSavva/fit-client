export type UserDto = {
  email: string;
  id: string;
  name: string;
  password: string;
  token: string;
  Symbol(): string;
  Symbol(): string;
};

export interface SignupRequest {
  email: string;
  password: string;
}
export interface SignupResponse {
  token: string;
}

export interface SigninRequest {
  email: string;
  password: string;
}

export interface SigninResponse {
  token: string;
}
