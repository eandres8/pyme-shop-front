import { createAsyncThunk } from '@reduxjs/toolkit';

import { AuthRepository } from '@/data/repositories';
import type { TRegister, TSignIn } from '@/data/types';

const repository = AuthRepository();

export const signInSession = createAsyncThunk(
  'auth/signin',
  async (params: TSignIn, { rejectWithValue }) => {
    const result = await repository.signIn(params);

    if (!result.isOk) {
      return rejectWithValue(result.getError().message || 'Error al iniciar session');
    }

    return result.getData();
  }
);

export const registerUser = createAsyncThunk(
  'auth/register',
  async (params: TRegister, { rejectWithValue }) => {
    const result = await repository.register(params);

    if (!result.isOk) {
      return rejectWithValue(result.getError().message || 'Error al registrar un nuevo usuario');
    }

    return result.getData();
  }
);

export const loadSession = createAsyncThunk(
  'auth/local.session',
  async (params: TRegister, { rejectWithValue }) => {
    const result = await repository.register(params);

    if (!result.isOk) {
      return rejectWithValue(result.getError().message || 'Error cargando la session');
    }

    return result.getData();
  }
);
