import { initDataBase } from "shared/api/msw";
import { rest } from "msw";

const dbApi = initDataBase();

export const getCardsHandler = [
  rest.get("/cards", async (_, res, ctx) => {
    const cards = dbApi.card.getAll();
    return await res(ctx.delay(1200), ctx.json(cards));
  }),
  rest.post("/cards", async (req, res, ctx) => {}),
];
