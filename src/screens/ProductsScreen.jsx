import React from 'react';
import { View, FlatList, Text, StyleSheet } from 'react-native';
import useProducts from '../hooks/useProducts';
import ProductCard from '../components/ProductCard';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

export default function ProductsScreen() {
  const { products, loading, error, refetch } = useProducts();

  if (loading) return <Loading />;
  if (error) return <ErrorMessage message={error} onRetry={refetch} />;

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        contentContainerStyle={styles.list}
        renderItem={({ item }) => (
          <ProductCard
            title={item.title}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        )}
        ListEmptyComponent={
          <Text style={styles.empty}>No hay productos disponibles.</Text>
        }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F4F6',
  },
  list: {
    padding: 16,
  },
  empty: {
    textAlign: 'center',
    fontSize: 16,
    color: '#6B7280',
    marginTop: 40,
  },
});
