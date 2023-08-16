import { __serverDB } from "shared/lib/server";
import { rest } from "msw";

export const getCardsHandlers = [
  rest.get("/cards", async (_, res, ctx) => {
    const cards = __serverDB.card.getAll();
    return await res(ctx.delay(1200), ctx.json(cards));
  }),
  // rest.post("/cards", async (req, res, ctx) => {}),
];
