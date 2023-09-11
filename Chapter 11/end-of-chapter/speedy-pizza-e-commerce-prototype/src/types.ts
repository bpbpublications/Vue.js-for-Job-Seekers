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
  subtotal: string
  taxPercent: number,
  tax: string,
  delivery: string,
  total: string
}
