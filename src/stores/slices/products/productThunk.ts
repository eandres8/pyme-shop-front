import { createAsyncThunk } from '@reduxjs/toolkit';

import { ProductsRepository } from '@/data/repositories';

interface FetchProductsParams {
  page: number;
  limit: number;
  search?: string;
}

const repository = ProductsRepository();

export const fetchProducts = createAsyncThunk(
  'products/fetchAll',
  async (params: FetchProductsParams, { rejectWithValue }) => {
    let result;

    console.log(params);

    if (params?.search) {
      result = await repository.searchProducts(params);
    } else {
      result = await repository.getProducts(params);
    }

    if (!result.isOk) {
      return rejectWithValue(result.getError().message || 'Error al cargar productos');
    }

    return result.getData();
  }
);
