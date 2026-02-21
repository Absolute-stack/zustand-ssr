import { useFilters } from '../hooks/useProducts.jsx';

export function FilterBar({ filters, onChange }) {
  const { data, isLoading } = useFilters();

  if (isLoading) return <div>Loading filters...</div>;

  function handleCategory(e) {
    onChange({
      ...filters,
      category: e.target.value || undefined, // undefined removes it from filters
    });
  }

  function handleMinPrice(e) {
    onChange({
      ...filters,
      minPrice: e.target.value || undefined,
    });
  }

  function handleMaxPrice(e) {
    onChange({
      ...filters,
      maxPrice: e.target.value || undefined,
    });
  }

  function handleSearch(e) {
    onChange({
      ...filters,
      search: e.target.value || undefined,
    });
  }

  function handleReset() {
    onChange({});
  }

  return (
    <div className="filter-bar">
      {/* Search */}
      <input
        type="text"
        placeholder="Search products..."
        value={filters.search || ''}
        onChange={handleSearch}
      />

      {/* Category */}
      <select value={filters.category || ''} onChange={handleCategory}>
        <option value="">All Categories</option>
        {data.categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      {/* Price Range */}
      <input
        type="number"
        placeholder={`Min $${data.minPrice}`}
        value={filters.minPrice || ''}
        onChange={handleMinPrice}
      />
      <input
        type="number"
        placeholder={`Max $${data.maxPrice}`}
        value={filters.maxPrice || ''}
        onChange={handleMaxPrice}
      />

      <button onClick={handleReset} type="button">
        Reset Filters
      </button>
    </div>
  );
}
