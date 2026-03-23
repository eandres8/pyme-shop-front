import { useEffect, useState } from "react";
import { useDebounce } from "@/data/utils";
import { useDispatch, useSelector } from "react-redux";

import type { AppDispatch, RootState } from "@/stores/store";
import { fetchProducts } from "@/stores/slices/products/productThunk";

export const useHomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch<AppDispatch>();
  const { page, limit } = useSelector(
    (state: RootState) => state.products
  );

  const debouncedSearch = useDebounce(searchTerm, 900);

  const handleSearch = (search: string) => setSearchTerm(search);

  useEffect(() => {
    dispatch(fetchProducts({ 
      page, 
      limit,
      search: debouncedSearch
    }));
  }, [debouncedSearch, dispatch, page, limit]);

  return { handleSearch };
};
