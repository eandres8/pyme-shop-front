import type { Result } from "@/app/core/result";
import type { TSession } from "@/app/types/user.type";
import { AuthService } from "@/data/services";
import type { TSignIn, TRegister } from "@/data/types";

export function AuthRepository() {
  const signIn = async (body: TSignIn): Promise<Result<TSession>> => {
    const result = await AuthService.signIn(body);
    
    return result;
  }
  
  const register = async (body: TRegister): Promise<Result<TSession>> => {
    const result = await AuthService.register(body);
    
    return result;
  }

  return {
    signIn,
    register,
  };
}
