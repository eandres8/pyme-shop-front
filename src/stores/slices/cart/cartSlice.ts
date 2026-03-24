import type { TCartItem, TProduct } from '@/app/types';
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type CartSlice = {
  items: TProduct[];
  itemQuantity: Record<string, number>;
};

const initialState: CartSlice = {
  items: [],
  itemQuantity: {},
};

export const cartSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<TCartItem>) => {
      const { id, quantity } = action.payload;

      state.itemQuantity = {
        ...state.itemQuantity,
        [id]: quantity,
      };
      state.items = [...state.items, action.payload];
    },
    removeItem: (state, action: PayloadAction<string>) => {
      const productId = action.payload;

      const itemQuantityMap = new Map(Object.entries(state.itemQuantity));

      itemQuantityMap.delete(productId);

      state.itemQuantity = Object.fromEntries(itemQuantityMap.entries());
      state.items = state.items.filter((i) => i.id !== productId);
    },
    updateItem: (
      state,
      action: PayloadAction<{ id: string; quantity: number }>,
    ) => {
      const { id, quantity } = action.payload;

      const itemQuantityMap = new Map(Object.entries(state.itemQuantity));

      itemQuantityMap.set(id, quantity);

      state.itemQuantity = Object.fromEntries(itemQuantityMap.entries());
    },
  },
  selectors: {
    listCartItemsSelector: (state): TCartItem[] => {
      const mapItems = new Map(Object.entries(state.itemQuantity));

      return state.items.map(
        (i) => ({ ...i, quantity: mapItems.get(i.id) }) as TCartItem,
      );
    },
  },
});

export const { addItem, removeItem, updateItem } = cartSlice.actions;
export const { listCartItemsSelector } = cartSlice.selectors;

export default cartSlice.reducer;
