import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ProductCard({ title, description, price, image }) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} resizeMode="contain" />
      <Text style={styles.title} numberOfLines={2}>
        {title}
      </Text>
      <Text style={styles.description} numberOfLines={3}>
        {description}
      </Text>
      <Text style={styles.price}>${Number(price).toFixed(2)}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: '100%',
    height: 180,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 6,
  },
  description: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: '800',
    color: '#1E3A8A',
  },
});
