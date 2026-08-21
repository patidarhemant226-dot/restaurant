export type CuisineName =
  | "Indian"
  | "Chinese"
  | "Italian"
  | "Asian"
  | "Continental"
  | "Café"
  | "Desserts"
  | "Drinks";

export type Dish = {
  name: string;
  cuisine: CuisineName;
  description: string;
  price: string;
  image: string;
};

export type HousePour = {
  name: string;
  note: string;
  price: string;
  image: string;
};

export type MenuItem = readonly [name: string, cuisine: CuisineName, description: string, price: string];
