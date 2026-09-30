import { useState, useEffect, useCallback } from 'react';

const API_URL = 'https://fakestoreapi.com/products';

export default function useProducts() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(API_URL);
      if (!response.ok) {
        throw new Error(`Error del servidor (${response.status})`);
      }

      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError('No se pudieron cargar los productos. Revisa tu conexión a internet.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return { products, loading, error, refetch: fetchProducts };
}
