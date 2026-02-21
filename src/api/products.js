const API = import.meta.env.VITE_API_URL || 'http://localhost:8000';

export async function fetchProducts(filters = {}, pageParam = null) {
  const params = new URLSearchParams();

  if (pageParam) params.set('cursor', pageParam);
  params.set('limit', '6');

  if (filters.category) params.set('category', filters.category);
  if (filters.search) params.set('search', filters.search);
  if (filters.maxPrice) params.set('maxPrice', filters.maxPrice);
  if (filters.minPrice) params.set('minPrice', filters.minPrice);
  try {
    const res = await fetch(`${API}/api/products?${params}`);
    if (!res.ok) throw new Error('Failed to fetch product');
    return res.json();
  } catch (err) {
    console.error(err);
  }
}

export async function getProductFilters() {
  try {
    const res = await fetch(`${API}/api/products/filters`);
    if (!res.ok) throw new Error('Failed to fetch products filters');
    return res.json();
  } catch (error) {
    console.error(error);
  }
}
