import { useSelector } from "react-redux";

import type { RootState } from "@/stores/store";
import type { TCartItem } from "@/app/types";

export const useCartPage = () => {
  // const dispatch = useDispatch<AppDispatch>();
  const { itemQuantity, items } = useSelector(
    (state: RootState) => state.cart
  );

  const hasItems = !!items.length;

  const listItems = () => {
    const mapItems = new Map(Object.entries(itemQuantity));

    return items.map(
      (i) => ({ ...i, quantity: mapItems.get(i.id) }) as TCartItem,
    );
  };

  return {
    listItems,
    hasItems,
  }
};