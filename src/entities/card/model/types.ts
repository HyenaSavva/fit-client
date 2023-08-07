import { User } from "entities/user/@x/user";

enum CardType {
  Debit = "Debit",
  Credit = "Credit",
  Prepaid = "Prepaid",
  Business = "Business",
  Contactless = "Contactless",
}

export type CardProps = {
  id: string;
  cardNumber?: string;
  cardType?: CardType;
  cvvCode?: string;
  cardHolder?: string;
  isContactlessEnabled?: boolean;
  expire?: string;
  cardName?: string;
  balance?: string; // to do - de adaugat conturi
  owner?: User;
  src?: string;
};

export type Inputs = {
  cardNumber: string;
  cardHolder: string;
  cvvCode: string;
  expire: Date;
};
