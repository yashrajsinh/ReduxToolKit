import { View, Text, FlatList } from 'react-native';
import React from 'react';
//Data
import data from '../../data/ProductsData';

//component
import ProductCard from '../ProductCard/ProductCard';

export default function ProductView() {
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ProductCard item={item} />}
      />
    </View>
  );
}
