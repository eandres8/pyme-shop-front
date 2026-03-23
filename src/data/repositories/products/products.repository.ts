import { Product } from "@/app/entities";
import type { TProductPaginate } from "@/app/types/product.type";
import { ProductsService } from "@/data/services";
import type { TSearchProducts } from "@/data/types";

export function ProductsRepository() {
  const getProducts = async (params: TSearchProducts): Promise<TProductPaginate> => {
    const result = await ProductsService.getProducts(params);

    if (!result.isOk) {
      throw result.getError();
    }

    const dataProducts = result.getData();
    const products = dataProducts.data.map(Product.fromJson);

    return ({
      ...dataProducts,
      data: products,
    });
  }

  return {
    getProducts,
  };
}
