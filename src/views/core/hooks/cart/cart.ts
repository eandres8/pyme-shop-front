import { useDispatch, useSelector } from 'react-redux';

import type { AppDispatch, RootState } from '@/stores/store';
import { createOrder } from '@/stores/slices/cart/cartThunk';

export const useCart = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { token } = useSelector((state: RootState) => state.auth);
  const { items, itemQuantity, isLoading, order } = useSelector((state: RootState) => state.cart);

  const total = () => {
    const mapQuantity = new Map(Object.entries(itemQuantity));

    return items.reduce((prev, curr) => {
      const value = mapQuantity.get(curr.id)! * curr.price;

      return prev + value;
    }, 0);
  };

  const submitOrder = () => {
    dispatch(createOrder({
      token,
      products: Object.entries(itemQuantity).map(([key, value]) => ({
        productId: key,
        quantity: value,
      })),
    }));
  }

  return {
    total,
    items,
    submitOrder,
    isLoading,
    order,
  };
};
