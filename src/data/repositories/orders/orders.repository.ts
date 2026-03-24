import type { Result } from '@/app/core/result';
import { OrdersService } from '@/data/services';
import type { TCreateOrder, TOrder } from '@/data/types';

export function OrdersRepository() {
  const createOrder = async (
    body: TCreateOrder,
    token: string,
  ): Promise<Result<TOrder>> => {
    const result = await OrdersService.createOrder(body, token);

    return result;
  };

  return {
    createOrder,
  };
}
