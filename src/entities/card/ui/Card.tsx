import { Card as CardWrapper } from "primereact/card";
import { type CardProps } from "../model/types";
import { InfoReveal } from "shared/ui";

import styles from "./Card.module.css";

export const Card = (props: CardProps) => {
  const { cardNumber, cardHolder, cardName, balance } = props;
  return (
    <CardWrapper
      className={styles.card}
      title={
        <section>
          {cardName} <br />
        </section>
      }
      footer={
        <section className={styles.description}>
          <p>{cardHolder}</p>
        </section>
      }
    >
      <div className={styles.cardContentWrapper}>
        <div className={styles.cardContent}>
          <InfoReveal reveal={<h2>{balance}</h2>} />
        </div>
        <div className={styles.cardContent}>{cardNumber}</div>
      </div>
    </CardWrapper>
  );
};
