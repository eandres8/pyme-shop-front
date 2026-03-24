import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "@/stores/store";
import { closeSession } from "@/stores/slices/auth/authSlice";

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector(
    (state: RootState) => state.auth
  );

  const isAuthenticated = !!user;

  const logout = () => dispatch(closeSession())

  return {
    isAuthenticated,
    logout,
  }
};