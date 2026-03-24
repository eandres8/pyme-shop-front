import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "@/stores/store";
import type { TCartItem } from "@/app/types";
import { fetchProducts } from "@/stores/slices/products/productThunk";
import { setPage } from "@/stores/slices/products/productSlice";

export const useProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, page, limit, totalPages, isLoading } = useSelector(
    (state: RootState) => state.products
  );
  const { itemQuantity } = useSelector((state: RootState) => state.cart);

  const handleChangePage = (_: unknown, page: number) => dispatch(setPage(page))

  const listProducts = () => {
    const mapItems = new Map(Object.entries(itemQuantity));

    return products.map<TCartItem>((i) => ({
      ...i,
      quantity: mapItems.has(i.id) ? mapItems.get(i.id) as number : 0,
    }));
  }

  const hasItems = !isLoading && products.length;

  useEffect(() => {
    dispatch(fetchProducts({ page, limit }));
  }, [dispatch, page, limit]);

  return {
    listProducts,
    hasItems,
    page,
    limit,
    totalPages,
    isLoading,
    handleChangePage,
  };
};