import { createSlice } from '@reduxjs/toolkit';

import type { TUser } from '@/app/types/user.type';
import { registerUser, signInSession } from './authThunk';

type ProductSlice = {
  user: TUser | null;
  token: string;
  isLoading: boolean;
  error: string | null;
};

const initialState: ProductSlice = {
  user: null,
  token: '',
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    closeSession: (state) => {
      state.user = null;
      state.token = '';
      state.isLoading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      // SignIn
      .addCase(signInSession.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(signInSession.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(signInSession.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      })
      // Register
      .addCase(registerUser.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(registerUser.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { closeSession } = authSlice.actions;

export default authSlice.reducer;
