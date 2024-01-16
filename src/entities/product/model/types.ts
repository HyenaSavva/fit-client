export type ProductProps = {
  id: string;
  accountNumber: string;
  title?: string;
  accountType?: string;
  initialDate?: string;
  currency?: string;
  balance?: string;
};

export type Inputs = {
  productName: string;
  expire: Date;
};
