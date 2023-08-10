import { factory, primaryKey } from "@mswjs/data";
import { cardsData, userData } from "./config";
import { nanoid } from "nanoid";

export const getDataBaseApi = () =>
  factory({
    card: {
      id: primaryKey(String),
      cardNumber: String,
      cvvCode: String,
      cardHolder: String,
      isContactlessEnabled: Boolean,
      expire: String,
      cardName: String,
      balance: String, // to do - de adaugat conturi
      src: String,
      owner: String,
      cardType: String,
    },
    user: {
      id: primaryKey(String),
      email: String,
      password: String,
      token: String,
      name: String,
    },
  });

export type DatabaseApiType = ReturnType<typeof getDataBaseApi>;

function seedDatabase(databaseApi: DatabaseApiType) {
  cardsData.forEach((card) => databaseApi.card.create(card));
  userData.forEach((user) =>
    databaseApi.user.create({ ...user, id: nanoid() })
  );
}

export const initDataBase = () => {
  const databaseApi = getDataBaseApi();
  seedDatabase(databaseApi);

  return databaseApi;
};
