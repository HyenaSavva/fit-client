import { config, signAccessToken, verifyAccessToken } from "shared/lib";
import { __serverDB } from "shared/lib/server";

import { rest } from "msw";

export const sessionHandlers = [
  rest.post("login", async (req, res, ctx) => {
    const { email, password } = await req.json();

    const user = __serverDB.user.findFirst({
      where: {
        email: { equals: email },
        password: { equals: password },
      },
    });

    if (!user) return res(ctx.status(404), ctx.json("Wrong email or password"));

    const accessToken = await signAccessToken({ userId: user.id, email });
    return res(
      ctx.delay(config.API_DELAY),
      ctx.json({ ...user, token: accessToken })
    );
  }),

  rest.get("logout", async (_, res, ctx) => {
    return res(ctx.status(200));
  }),

  rest.get("profile", async (req, res, ctx) => {
    const [, token] = req.headers.get("Authorization")?.split(" ") ?? "";

    try {
      const payload = await verifyAccessToken(token);
      const user = __serverDB.user.findFirst({
        where: { email: { equals: payload.email } },
      });

      return res(ctx.status(200), ctx.json(user));
    } catch (error) {
      return await res(
        ctx.status(401),
        ctx.json("Token is expired or not valid")
      );
    }
  }),
];
