import { View, Text } from 'react-native';
import React from 'react';

//Components
import ProductView from '../components/ProductView/ProductView';

export default function ProductsScreen() {
  return (
    <View style={{ flex: 1 }}>
      <ProductView />
    </View>
  );
}
