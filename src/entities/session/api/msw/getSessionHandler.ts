import { __serverDB } from "shared/lib/server";
import { nanoid } from "@reduxjs/toolkit";
import { rest } from "msw";

const token = nanoid();

export const getSessionHandlers = [
  rest.post("/login", async (req, res, ctx) => {
    const { email, password } = await req.json();
    const user = __serverDB.user.findFirst({
      where: {
        email: { equals: email },
        password: { equals: password },
      },
    });

    if (user) {
      return res(ctx.status(200), ctx.json({ ...user, token }));
    }

    return res(ctx.status(404), ctx.json("Wrong email or password"));
  }),

  rest.get("/logout", async (_, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.get("/profile", async (req, res, ctx) => {
    const headers = req.headers.all();
    const isAuthenticated = headers.authorization === `Bearer ${token}`;

    if (!isAuthenticated) {
      return await res(
        ctx.status(401),
        ctx.json("Token is expired or not valid")
      );
    }

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
  }),
];
