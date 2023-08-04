import { createCard, cardApi } from "entities/card";
import { SubmitHandler } from "react-hook-form";
import { useAppDispatch } from "shared/model";
import { type Inputs } from "../model/types";

export const CreateCardHandler = () => {
  const [generateCard, {}] = cardApi.useCreateCardMutation();
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const newCard = {
      cardNumber: data.cardNumber,
      cardHolder: data.cardHolder,
      cvvCode: data.cvvCode,
      expire: data.expire.toLocaleDateString().slice(3, 10),
      src: "assets/images/visa_blue.png",
    };
    dispatch(createCard(newCard));
    await generateCard(newCard);
  };

  return { onSubmit };
};
