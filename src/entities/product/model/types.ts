export type ProductProps = {
  id?: string;
  productName: string;
  proteins: number;
  carbohydrates: number;
  calories: number;
  fats: number;
  gramms: number;
  categoryId?: number;
  img?: string;
  // expire: Date;
};

export type Inputs = {
  productName: string;
  proteins: string;
  carbohydrates: string;
  calories: string;
  fats: string;
  gramms: string;
  // expire: Date;
};
