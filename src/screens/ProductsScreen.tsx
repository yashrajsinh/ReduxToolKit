import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

//Components
import ProductView from '../components/ProductView/ProductView';

export default function ProductsScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <ProductView />

      <TouchableOpacity
        style={styles.fab}
        onPress={() => navigation.navigate('Cart')}
      >
        <Text style={styles.fabText}>VIEW CART</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  fab: {
    position: 'absolute',
    bottom: 20,
    left: '50%',
    transform: [{ translateX: -80 }], // adjust based on width

    backgroundColor: '#2563EB', //  clean modern blue

    paddingVertical: 16,
    paddingHorizontal: 40,

    borderRadius: 40,

    elevation: 8,

    // iOS shadow
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 4 },
  },

  fabText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    letterSpacing: 1,
  },
});
