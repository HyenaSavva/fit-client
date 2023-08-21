import { useFetchAllCardsQuery } from "entities/card";
import { FC, WheelEventHandler } from "react";
import { Card } from "entities/card";

import styles from "./CardsMenu.module.css";

interface CardsMenuProps {}

export const CardsMenu: FC<CardsMenuProps> = () => {
  const { data: cards } = useFetchAllCardsQuery();

  const handleScroll: WheelEventHandler<HTMLElement> = (event) => {
    const container = event.currentTarget;
    const scrollAmount = event.deltaY; // horizontal scroll
    container.scrollTo({
      left: container.scrollLeft + scrollAmount * 2,
      behavior: "auto",
    });
  };

  return (
    <div className={styles.cards} onWheel={handleScroll}>
      {cards?.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};
