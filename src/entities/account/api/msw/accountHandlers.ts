import { __serverDB } from "shared/lib/server";
import { config } from "shared/lib";
import { rest } from "msw";

export const accountHandlers = [
  rest.get("account/:id", async (req, res, ctx) => {
    console.log(req.params);
    res(ctx.status(200), ctx.json({ message: "done" }));
  }),
  rest.get("accounts", async (req, res, ctx) => {
    try {
      const cards = __serverDB.card.getAll();
      return await res(ctx.delay(config.API_DELAY), ctx.json(cards));
    } catch (err) {
      return await res(
        ctx.delay(config.API_DELAY),
        ctx.json("Something went wrong")
      );
    }
  }),
];
