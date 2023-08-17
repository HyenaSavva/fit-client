import { factory, primaryKey, persist, oneOf } from "@mswjs/data";

export const db = factory({
  user: {
    id: primaryKey(String),
    email: String,
    password: String,
  },
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
    owner: oneOf("user"),
    cardType: String,
  },
});

persist(db, { storage: localStorage });
