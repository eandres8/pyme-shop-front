import type { TSearchProducts } from '@/data/types';
import type { TProductPaginate } from '@/app/types/product.type';
import { to } from '@/app/core/to';
import { Result } from '@/app/core/result';
import { httpClient } from '@/config/http-client';

export class ProductsService {
  static async getProducts(
    params: TSearchProducts,
  ): Promise<Result<TProductPaginate>> {
    const [products, error] = await to(
      httpClient
        .get<TProductPaginate>('/products', { params })
        .then((res) => res.data),
    );

    if (error) {
      return Result.failure(new Error(error.message));
    }

    return Result.success(products || []);
  }
}
