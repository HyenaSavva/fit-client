import { rest } from "msw";
import { cardsMock } from "shared/api/msw";

export const getCardsHandler = [
  rest.get("/cards", async (req, res, ctx) => {
    return await res(ctx.delay(1200), ctx.json(cardsMock));
  }),
  rest.post("/login", (req, res, ctx) => {
    sessionStorage.setItem("is-authenticated", "true");

    return res(ctx.status(200));
  }),
  rest.get("/user", (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem("is-authenticated");

    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        username: "admin",
      })
    );
  }),
];
