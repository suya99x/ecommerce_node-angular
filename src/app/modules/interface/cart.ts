export interface cartItem {
  id: number;
  product: string;
  name: string;
  price: number;
  quantity: number;
}

export interface Cart {
  items: Array<cartItem>;
}
