import { createAsyncThunk } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

import { OrdersRepository } from '@/data/repositories';
import type { TCreateOrder } from '@/data/types';

const repository = OrdersRepository();

export const createOrder = createAsyncThunk(
  'orders/create',
  async (params: TCreateOrder & { token: string }, { rejectWithValue }) => {
    const { token, ...body } = params;

    const result = await repository.createOrder(body, token);

    if (!result.isOk) {
      const errMessage = result.getError().message || 'Error creando una orden';
      toast.error(errMessage);
      return rejectWithValue(errMessage);
    }

    return result.getData();
  }
);
