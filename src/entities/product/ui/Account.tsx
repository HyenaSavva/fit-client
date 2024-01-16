import { type Account as AccountType } from "../model/types";
import { AccordionTab } from "primereact/accordion";
import { FC } from "react";

interface AccountProps {
  account: AccountType;
}

export const Account: FC<AccountProps> = ({ account }) => {
  return <AccordionTab header={account.title}>da</AccordionTab>;
};
