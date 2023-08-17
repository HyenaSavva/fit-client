import { __serverDB } from "shared/lib/server";
import { config } from "shared/lib";
import { rest } from "msw";
import { CardProps } from "entities/card";

export const cardHandlers = [
  rest.get("/cards", async (_, res, ctx) => {
    const cards = __serverDB.card.getAll();
    return await res(ctx.delay(config.API_DELAY), ctx.json(cards));
  }),
  rest.post("/card", async (req, res, ctx) => {
    const card: CardProps = await req.json();
    __serverDB.card.create(card);

    return res(ctx.status(200), ctx.json("well done"));
  }),
  // rest.post("/cards", async (req, res, ctx) => {}),
];
