import { __startDataBaseMigration } from "shared/lib/server";
import { sessionHandlers } from "entities/session";
import { cardHandlers } from "entities/card";
import { setupWorker } from "msw";

const apiMockWorker = setupWorker(...cardHandlers, ...sessionHandlers);

__startDataBaseMigration();

export const startApiMockWorker = async () => {
  await apiMockWorker.start({
    onUnhandledRequest: (req, print) => {
      if (/\.(png|jpg|svg|tsx?|css|jsx?|woff2)$/.test(req.url.pathname)) return;
      print.warning();
    },
  });
};
