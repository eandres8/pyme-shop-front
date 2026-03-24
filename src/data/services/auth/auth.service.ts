import type { TRegister, TSignIn } from '@/data/types';
import { to } from '@/app/core/to';
import { Result } from '@/app/core/result';
import { httpClient } from '@/config/http-client';
import type { TSession } from '@/app/types/user.type';

export class AuthService {
  static async signIn(body: TSignIn): Promise<Result<TSession>> {
    const [session, error] = await to(
      httpClient.post<TSession>('/auth/login', body).then((res) => res.data),
    );

    if (error) {
      return Result.failure(new Error(error.message));
    }

    return Result.success(session);
  }
  
  static async register(body: TRegister): Promise<Result<TSession>> {
    const [session, error] = await to(
      httpClient.post<TSession>('/auth/register', body).then((res) => res.data),
    );

    if (error) {
      return Result.failure(new Error(error.message));
    }

    return Result.success(session);
  }
}
