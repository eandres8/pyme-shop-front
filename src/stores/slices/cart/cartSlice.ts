import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { TCartItem, TProduct } from '@/app/types';
import type { TOrder } from '@/data/types';
import { createOrder } from './cartThunk';

type CartSlice = {
  items: TProduct[];
  itemQuantity: Record<string, number>;
  order: TOrder | null;
  isLoading: boolean;
};

const initialState: CartSlice = {
  items: [],
  itemQuantity: {},
  order: null,
  isLoading: false,
};

export const cartSlice = createSlice({
  name: 'cart',
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
  extraReducers: (builder) => {
    builder
      // Create Order
      .addCase(createOrder.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createOrder.fulfilled, (state, action) => {
        state.isLoading = false;
        state.order = action.payload;
      })
      .addCase(createOrder.rejected, (state) => {
        state.isLoading = false;
      })
  },
});

export const { addItem, removeItem, updateItem } = cartSlice.actions;

export default cartSlice.reducer;
