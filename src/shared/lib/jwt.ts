import { SignJWT, jwtVerify } from "jose";
import { config } from ".";

interface AccessTokenPayload {
  userId: string;
  email: string;
}

const secret = new TextEncoder().encode(config.JWT_SECRET);

export const signAccessToken = async (payload: AccessTokenPayload) => {
  return await new SignJWT({ payload })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("2h")
    .sign(secret);
};

export const verifyAccessToken = async (token: string) => {
  const { payload } = await jwtVerify(token, secret);
  return payload as { userId: Id; email: Email };
};
