import { factory, primaryKey, persist } from "@mswjs/data";

export const db = factory({
  card: {
    id: primaryKey(String),
    cardNumber: String,
    cvvCode: String,
    cardHolder: String,
    isContactlessEnabled: Boolean,
    expire: String,
    cardName: String,
    balance: String,
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

persist(db, { storage: localStorage });
