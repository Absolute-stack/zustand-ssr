import { useQuery, useInfiniteQuery } from '@tanstack/react-query';
import { fetchProducts, getProductFilters } from '../api/products.js';

export function useProducts(filters = {}) {
  return useInfiniteQuery({
    queryKey: ['products', filters],
    queryFn: ({ pageParam }) => fetchProducts(filters, pageParam),
    initialPageParam: null,
    getNextPageParam: (lastPage) => lastPage.nextCursor ?? undefined,
    staleTime: 60 * 1000,
  });
}

export function useFilters() {
  return useQuery({
    queryKey: ['products-filters'],
    queryFn: getProductFilters,
    staleTime: 60 * 60 * 1000,
  });
}
