import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "@/stores/store";
import { fetchProducts } from "@/stores/slices/products/productThunk";
import { setPage } from "@/stores/slices/products/productSlice";

export const useProductList = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { products, page, limit, totalPages, isLoading } = useSelector(
    (state: RootState) => state.products
  );

  const handleChangePage = (_: unknown, page: number) => dispatch(setPage(page))

  useEffect(() => {
    dispatch(fetchProducts({ page, limit }));
  }, [dispatch, page, limit]);

  return {
    products,
    page,
    limit,
    totalPages,
    isLoading,
    handleChangePage,
  };
};