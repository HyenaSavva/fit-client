import { getCardsHandler } from "entities/card";
import { setupWorker } from "msw";

export const apiMockWorker = setupWorker(...getCardsHandler);
