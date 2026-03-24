import { Result } from "@/app/core/result";
import { to } from "@/app/core/to";
import { httpClient } from "@/config/http-client";
import { getErrorMessage } from "@/data/helper";
import type { TCreateOrder, TOrder } from "@/data/types";

export class OrdersService {
  static async createOrder(body: TCreateOrder, token: string): Promise<Result<TOrder>> {
    const [order, error] = await to(
      httpClient.post<TOrder>('/orders', body, { headers: { Authorization: `Bearer ${token}` } }).then((res) => res.data),
    );

    if (error) {
      return Result.failure(new Error(getErrorMessage(error)));
    }

    return Result.success(order);
  }
}