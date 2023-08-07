import { factory, primaryKey } from "@mswjs/data";

// type DatabaseApiType = ReturnType<typeof getDataBaseApi>;

export const db = factory({
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
});

// function seedDatabase(databaseApi: DatabaseApiType) {
//   cardsData.forEach((card) => databaseApi.card.create(card));
// }

// export const initDataBase = () => {
//   const databaseApi = getDataBaseApi();
//   seedDatabase(databaseApi);

//   return databaseApi;
// };
