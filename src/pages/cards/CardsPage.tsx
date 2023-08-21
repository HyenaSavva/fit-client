import { CardsMenu } from "widgets/CardsMenu";
import { CardModal } from "widgets/CardModal";
// import { AddCardForm } from "features/card";
import { FC } from "react";

import styles from "./CardsPage.module.css";

interface CardsProps {}

export const CardsPage: FC<CardsProps> = () => {
  return (
    <div className={styles.cardsWrapper}>
      <section className={styles.cardsHeader}>
        <h1>My Wallet</h1>
        <CardModal />
      </section>
      <div className={styles.cards}>
        <CardsMenu />
        {/* <AddCardForm /> */}
      </div>
    </div>
  );
};
