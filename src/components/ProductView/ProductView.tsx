import { View, Text, FlatList } from 'react-native';
import React, { useEffect } from 'react';
//Data
import data from '../../data/ProductsData';

//component
import ProductCard from '../ProductCard/ProductCard';

//Dispatch by redux
import { useDispatch, useSelector } from 'react-redux';

//add products reducer
import { addProduct } from '../../redux/ProdcutSlice';

//const data

export default function ProductView() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.product);
  // Load data into Redux when component mounts
  useEffect(() => {
    data.forEach(item => dispatch(addProduct(item)));
  }, []);

  return (
    <View>
      <FlatList
        data={products}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <ProductCard item={item} />}
      />
    </View>
  );
}
