import { useSelector } from 'react-redux';

import type { RootState } from '@/stores/store';

export const useCart = () => {
  const { items, itemQuantity } = useSelector((state: RootState) => state.cart);

  const total = () => {
    const mapQuantity = new Map(Object.entries(itemQuantity));

    return items.reduce((prev, curr) => {
      const value = mapQuantity.get(curr.id)! * curr.price;

      return prev + value;
    }, 0);
  };

  return {
    total,
    items,
  };
};
