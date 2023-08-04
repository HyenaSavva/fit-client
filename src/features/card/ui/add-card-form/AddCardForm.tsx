import { InputTextOption, CalendarOption, InputMaskOption } from "../../";
import { useCardFormValidation } from "entities/card";
import { CreateCardHandler } from "entities/card";
import { Button } from "primereact/button";
import {
  cvvCodeProps,
  cardHolderProps,
  cardNumberProps,
  calendarProps,
} from "../../lib/inputConstants";
import { FC } from "react";

import styles from "./AddCardForm.module.css";

export const AddCardForm: FC = () => {
  const { register, handleSubmit, errors } = useCardFormValidation();
  const { onSubmit } = CreateCardHandler();

  return (
    <div className={styles.formBlock}>
      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <InputMaskOption
          validation={{ register, errors }}
          inputMaskProps={cardNumberProps}
          id="cardNumber"
          label="Code Number"
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
