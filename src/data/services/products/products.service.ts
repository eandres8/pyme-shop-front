import type { TParamsProducts } from '@/data/types';
import type { TProductPaginate } from '@/app/types/product.type';
import { to } from '@/app/core/to';
import { Result } from '@/app/core/result';
import { httpClient } from '@/config/http-client';

export class ProductsService {
  static async getProducts(
    { limit, page }: TParamsProducts,
  ): Promise<Result<TProductPaginate>> {
    const [products, error] = await to(
      httpClient
        .get<TProductPaginate>('/products', { params: { limit, page } })
        .then((res) => res.data),
    );

    if (error) {
      return Result.failure(new Error(error.message));
    }

    return Result.success(products || []);
  }
  
  static async searchProducts(
    params: TParamsProducts,
  ): Promise<Result<TProductPaginate>> {
    const { limit, page, search } = params;

    const [products, error] = await to(
      httpClient
        .get<TProductPaginate>(`/products/${search}`, { params: { limit, page } })
        .then((res) => res.data),
    );

    if (error) {
      return Result.failure(new Error(error.message));
    }

    return Result.success(products || []);
  }
}
