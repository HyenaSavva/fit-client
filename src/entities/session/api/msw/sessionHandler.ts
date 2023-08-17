import { config, signAccessToken, verifyAccessToken } from "shared/lib";
import { __serverDB } from "shared/lib/server";
import { nanoid } from "@reduxjs/toolkit";

import { rest } from "msw";

const token = nanoid();

export const sessionHandlers = [
  rest.post("/login", async (req, res, ctx) => {
    const { email, password } = await req.json();

    const user = __serverDB.user.findFirst({
      where: {
        email: { equals: email },
        password: { equals: password },
      },
    });

    if (!user) {
      return res(ctx.status(404), ctx.json("Wrong email or password"));
      // return res(ctx.status(200), ctx.json({ ...user, token }));
    }

    const accessToken = await signAccessToken({ userId: user.id, email });
    console.log(accessToken);
    return res(
      ctx.delay(config.API_DELAY),
      ctx.json({ ...user, token: accessToken })
    );
  }),

  rest.get("/logout", async (_, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.get("/profile", async (req, res, ctx) => {
    const headers = req.headers.all();

    try {
      const payload = await verifyAccessToken(req);
      console.log(payload);

      return res(
        ctx.status(200),
        ctx.json({
          user: {
            email: "user@example.com",
            password: "user123",
            name: "John Doe",
            id: "1",
          },
          token,
        })
      );
    } catch (error) {}

    const isAuthenticated = headers.authorization === `Bearer ${token}`;

    if (!isAuthenticated) {
      return await res(
        ctx.status(401),
        ctx.json("Token is expired or not valid")
      );
    }
  }),
];
