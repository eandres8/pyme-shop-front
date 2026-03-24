import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "@/stores/store";
import { closeSession } from "@/stores/slices/auth/authSlice";
import type { TRegister, TSignIn } from "@/data/types";
import { signInSession, registerUser } from "@/stores/slices/auth/authThunk";

export const useAuth = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { user } = useSelector(
    (state: RootState) => state.auth
  );

  const isAuthenticated = !!user;

  const logout = () => dispatch(closeSession());
  
  const handleSignIn = (data: TSignIn) => dispatch(signInSession(data));
  const handleRegister = (data: TRegister) => dispatch(registerUser(data));

  return {
    isAuthenticated,
    logout,
    handleSignIn,
    handleRegister,
  }
};