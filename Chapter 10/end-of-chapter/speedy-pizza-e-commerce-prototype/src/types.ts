export type MenuItem = {
  id: number;
  image: string;
  desc?: string;
  name: string;
  price: number;
  ingredientsList?: string[];
};

export type CartItem = {
  id: number;
  image: string;
  desc?: string;
  name: string;
  price: number;
};

export type CartTotals = {
  subTotal: number
  taxPercent: number,
  tax: number,
  delivery: number,
  total: number
}
