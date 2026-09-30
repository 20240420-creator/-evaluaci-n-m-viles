import React from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';

export default function Loading({ message = 'Cargando productos...' }) {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color="#1E3A8A" />
      <Text style={styles.text}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F3F4F6',
  },
  text: {
    marginTop: 12,
    fontSize: 16,
    color: '#4B5563',
  },
});
