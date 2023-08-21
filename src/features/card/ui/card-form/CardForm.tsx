import { InputTextOption, CalendarOption, InputMaskOption } from "../../";
import { useCardFormValidation } from "entities/card";
import { CreateCardHandler } from "entities/card";
import { Button } from "primereact/button";
import {
  cardHolderProps,
  cardNumberProps,
  calendarProps,
  cvvCodeProps,
} from "../../lib/inputConstants";
import { FC } from "react";

import styles from "./CardForm.module.css";

export const CardForm: FC = () => {
  const { register, handleSubmit, errors } = useCardFormValidation();
  const { onSubmit } = CreateCardHandler();

  return (
    <div className={styles.formBlock}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <InputMaskOption
          id="cardNumber"
          validation={{ register, errors }}
          inputMaskProps={cardNumberProps}
          label="Card Number"
        />
        <InputTextOption
          id="cardHolder"
          validation={{ register, errors }}
          inputTextProps={cardHolderProps}
          label="Card Holder"
        />
        <ul className={styles.bottomOptions}>
          <ol className={styles.firstOption}>
            <InputTextOption
              id="cvvCode"
              validation={{ register, errors }}
              inputTextProps={cvvCodeProps}
              label="CVV Code"
            />
          </ol>
          <ol>
            <CalendarOption
              id="expire"
              validation={{ register, errors }}
              calendarProps={calendarProps}
              label="Expire Date"
            />
          </ol>
        </ul>
        <Button type="submit">Submit</Button>
      </form>
    </div>
  );
};
