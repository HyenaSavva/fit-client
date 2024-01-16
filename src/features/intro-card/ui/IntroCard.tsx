import { FC } from "react";
import { Button } from "primereact/button";
import { Card } from "primereact/card";

import style from "./IntroCard.module.css";

type IntroCard = { handler: Function };

export const IntroCard: FC<IntroCard> = ({ handler }) => {
  const header = (
    <img
      alt="Card"
      src="https://hips.hearstapps.com/hmg-prod/images/calories-1522925243.jpg"
    />
  );

  const footer = (
    <Button
      label="Let's Try"
      icon="pi pi-check-circle"
      onClick={() => handler()}
    />
  );

  return (
    <div className={style.card}>
      <Card
        title="Try to count Calories!"
        subTitle="Progress with numbers"
        footer={footer}
        header={header}
        className={style.cardImage}
      >
        <p>
          You can try out to count your calories in our calculator to watch you
          progress more specifically!
        </p>
      </Card>
    </div>
  );
};
