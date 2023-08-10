import { CardsMenu } from "widgets/CardsMenu";
// import { AddCardForm } from "features/card";
import { FC } from "react";

import styles from "./CardsPage.module.css";

interface CardsProps {}

export const CardsPage: FC<CardsProps> = () => {
  return (
    <div className={styles.cardsWrapper}>
      <h1>My Wallet</h1>
      <div className={styles.cards}>
        <CardsMenu />
        {/* <AddCardForm /> */}
      </div>
    </div>
  );
};
