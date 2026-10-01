export type Food = {
  name: string;
  price: number;
  isBestSeller: boolean;
};

export const food: Food[] = [
  { name: "cake", price: 35, isBestSeller: true },

  { name: "bread", price: 25, isBestSeller: false },

  { name: "milk", price: 15, isBestSeller: true },

  { name: "donut", price: 45, isBestSeller: false },

  { name: "cookie", price: 55, isBestSeller: true },
];
