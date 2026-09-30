import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';




export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.school}>Instituto Técnico Ricaldone</Text>
        

        <View style={styles.divider} />

        <Text style={styles.label}>Nombre</Text>
        <Text style={styles.value}>Oscar Alejandro Pérez Garcia</Text>

        <Text style={styles.label}>Carnet</Text>
        <Text style={styles.value}>20240420</Text>

        <Text style={styles.label}>Sección y grupo</Text>
        <Text style={styles.value}>B-2</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Products')}
      >
        <Text style={styles.buttonText}>Ver productos</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#1E3A8A',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 24,
    marginBottom: 28,
    elevation: 6,
  },
  school: {
    fontSize: 20,
    fontWeight: '800',
    color: '#1E3A8A',
    textAlign: 'center',
  },
  subject: {
    fontSize: 14,
    color: '#6B7280',
    textAlign: 'center',
    marginTop: 4,
  },
  divider: {
    height: 1,
    backgroundColor: '#E5E7EB',
    marginVertical: 18,
  },
  label: {
    fontSize: 12,
    color: '#6B7280',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  value: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111827',
    marginBottom: 14,
  },
  button: {
    backgroundColor: '#F59E0B',
    paddingVertical: 16,
    borderRadius: 14,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '800',
    color: '#111827',
  },
});
