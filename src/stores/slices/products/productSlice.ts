import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

import type { TProduct } from '@/app/types/product.type';
import { fetchProducts } from './productThunk';

type ProductSlice = {
  products: TProduct[];
  search: string;
  total: number;
  page: number;
  limit: number;
  totalPages: number;
  isLoading: boolean;
  error: string | null;
}

const initialState: ProductSlice = {
  products: [],
  search: '',
  isLoading: false,
  total: 0,
  page: 1,
  limit: 12,
  totalPages: 0,
  error: null
};

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setPage: (state, action: PayloadAction<number>) => {
      state.page = Math.max(action.payload, 1);
    },
    setSearch: (state, action: PayloadAction<string>) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.products = action.payload.data;
        state.total = action.payload.total;
        state.page = action.payload.page;
        state.limit = action.payload.limit;
        state.totalPages = action.payload.totalPages;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setPage, setSearch } = productSlice.actions;

export default productSlice.reducer;
