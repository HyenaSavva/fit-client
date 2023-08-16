import { __startDataBaseMigration } from "shared/lib/server";
import { getSessionHandlers } from "entities/session";
import { getCardsHandlers } from "entities/card";
import { setupWorker } from "msw";

const apiMockWorker = setupWorker(...getCardsHandlers, ...getSessionHandlers);

__startDataBaseMigration();

export const startApiMockWorker = async () => {
  await apiMockWorker.start({
    onUnhandledRequest: (req, print) => {
      if (/\.(png|jpg|svg|tsx?|css|jsx?|woff2)$/.test(req.url.pathname)) return;
      print.warning();
    },
  });
};
