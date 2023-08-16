import { cardsData, userData } from "./__mocks";
import { db } from "./server";

export const startDataBaseMigration = () => {
  const users = db.user.getAll();
  if (users.length > 0) return;

  userData.forEach((user) => db.user.create(user));
  cardsData.forEach((card) => db.card.create(card));
};
