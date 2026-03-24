export type TCreateOrderProduct = {
  productId: string;
  quantity: number;
};

export type TCreateOrder = {
  products: TCreateOrderProduct[];
}

export type TOrderStatus = 'PENDING' | 'PAID' | 'CANCELLED';

export type TOrderItem = {
  readonly productId: string,
  readonly quantity: number,
  readonly price: number,
};

export type TOrder = {
  readonly id: string,
  readonly status: TOrderStatus,
  readonly total: number,
  readonly userId: string,
  readonly items: TOrderItem[];
}