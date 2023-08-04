import { IUser } from "./IUser";

enum CardType {
  Debit = "Debit",
  Credit = "Credit",
  Prepaid = "Prepaid",
  Business = "Business",
  Contactless = "Contactless",
}

export interface ICard {
  id?: string;
  cardNumber?: string;
  cardType?: CardType;
  cvvCode?: number;
  cardHolderName?: string;
  isContactlessEnabled?: boolean;
  expire?: string;
  name?: string;
  balance?: string; // to do - de adaugat conturi
  owner?: IUser;
}

export interface IUpdatedCard {
  id: string;
  owner: string;
  balance: number;
}
