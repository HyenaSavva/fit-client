export const cvvCodeProps = {
  min: 100,
  max: 999,
  maxLength: 3,
  placeholder: "CVV Code",
  pt: { root: { style: { width: "100%" } } },
};

export const calendarProps = {
  dateFormat: "mm/yy",
  showIcon: true,
  placeholder: "Expire Date",
  pt: { root: { style: { width: "100%" } } },
};

export const cardHolderProps = {
  placeholder: "Card Holder",
  maxLength: 30,
};

export const cardNumberProps = {
  mask: "9999 9999 9999 9999",
  placeholder: "Card Number",
};
