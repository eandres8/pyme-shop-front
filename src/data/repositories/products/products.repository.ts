import { Result } from "@/app/core/result";
import { Product } from "@/app/entities";
import type { TProductPaginate } from "@/app/types/product.type";
import { ProductsService } from "@/data/services";
import type { TParamsProducts } from "@/data/types";

export function ProductsRepository() {
  const getProducts = async (params: TParamsProducts): Promise<Result<TProductPaginate>> => {
    const result = await ProductsService.getProducts(params);

    if (!result.isOk) {
      return result;
    }

    const dataProducts = result.getData();
    const products = dataProducts.data.map((i) => Product.fromJson(i).toPlain());

    return Result.success({
      ...dataProducts,
      data: products,
    });
  }

  const searchProducts = async (params: TParamsProducts): Promise<Result<TProductPaginate>> => {
    const result = await ProductsService.searchProducts(params);

    if (!result.isOk) {
      return result;
    }

    const dataProducts = result.getData();
    const products = dataProducts.data.map((i) => Product.fromJson(i).toPlain());

    return Result.success({
      ...dataProducts,
      data: products,
    });
  }

  return {
    getProducts,
    searchProducts,
  };
}
