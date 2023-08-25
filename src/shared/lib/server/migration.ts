import { cardsData, accountsData, userData } from "./__mocks";
import { db } from "./server";

export const startDataBaseMigration = () => {
  const users = db.user.getAll();
  if (users.length > 0) return;

  const user = db.user.create(userData.user);

  accountsData.forEach((account) => db.account.create(account));
  cardsData.forEach((card) => db.card.create({ ...card, owner: user }));
};
