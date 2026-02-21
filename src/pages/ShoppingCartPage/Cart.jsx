import './Cart.css';
import { useState } from 'react';
import Card from './CardCompoundComponent.jsx';
import { useProducts } from '../../hooks/useProducts.jsx';
import { FilterBar } from '../../components/FilterBar.jsx';

export default function Cart() {
  const [filters, setFilters] = useState({});

  const {
    data,
    isLoading,
    isError,
    error,
    isFetching,
    fetchNextPage, // call this to load the next page
    hasNextPage, // boolean — is there a next page?
    isFetchingNextPage, // true specifically when loading next page
  } = useProducts(filters);

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <pre>Error:{error.message}</pre>;

  const allProducts = data.pages.flatMap((page) => page.products);

  return (
    <div className="cart-page">
      <FilterBar filters={filters} onChange={setFilters} />

      {allProducts.map((product) => {
        return (
          <Card key={product._id}>
            <Card.title>{product.name}</Card.title>
            <Card.image src={product.image} alt={product.title} />
            <Card.button item={product} />
          </Card>
        );
      })}
      {hasNextPage && (
        <button
          onClick={() => fetchNextPage()}
          disabled={isFetchingNextPage}
          type="button"
          className="load-more-btn"
        >
          {isFetchingNextPage ? 'Loading...' : 'Load More'}
        </button>
      )}

      {!hasNextPage && allProducts.length > 0 && (
        <p>You have seen all products</p>
      )}
    </div>
  );
}
