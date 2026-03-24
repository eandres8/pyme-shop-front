import { useDispatch } from "react-redux";

import type { AppDispatch } from "@/stores/store";
import { addItem, removeItem, updateItem } from "@/stores/slices/cart/cartSlice";
import type { TCartItem } from "@/app/types";

export const useCartItem = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleAdd = (product: TCartItem) => {
    dispatch(addItem({
      ...product,
      quantity: 1,
    }))
  }

  const handleIncrease = (quantity: number) => (id: string) => {
    dispatch(updateItem({ id, quantity: quantity + 1 }))
  }

  const handleDecrease = (quantity: number) => (id: string) => {
    dispatch(updateItem({ id, quantity: quantity - 1 }))
  }

  const handleRemove = (id: string) => {
    dispatch(removeItem(id))
  }

  return {
    handleIncrease,
    handleDecrease,
    handleRemove,
    handleAdd,
  };
};