import { cardApi } from "entities/card";
import { Card } from "entities/card";
import { FC } from "react";

import styles from "./CardsMenu.module.css";
import { envVariables } from "shared/lib";

interface CardsMenuProps {}

export const CardsMenu: FC<CardsMenuProps> = () => {
  const { data: cards } = cardApi.useFetchAllCardsQuery();

  return (
    <>
      {cards?.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </>
  );
};
