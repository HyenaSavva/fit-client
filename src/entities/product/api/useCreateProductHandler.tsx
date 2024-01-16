import { type Inputs, type CardProps } from "../model/types";
import { useCreateCardMutation } from "./productApi";
import { SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "shared/model";
import { createCard } from "entities/card";
import { nanoid } from "@reduxjs/toolkit";

export const useCreateCardHandler = () => {
  const [generateCard] = useCreateCardMutation();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const newCard: CardProps = {
      id: nanoid(),
      cardNumber: data.cardNumber,
      cardHolder: data.cardHolder,
      cvvCode: data.cvvCode,
      expire: data.expire.toLocaleDateString().slice(3, 10),
      src: "assets/images/visa_blue.png",
    };

    try {
      dispatch(createCard(newCard));
      await generateCard(newCard).unwrap();
    } catch (error) {
      console.log(error);
    }
  };

  return { onSubmit };
};
