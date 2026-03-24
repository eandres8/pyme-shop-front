import type { TProduct } from "./product.type";

export type TCartItem = TProduct & { quantity: number };