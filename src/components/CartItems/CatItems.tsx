import { View, Text, FlatList } from 'react-native';
import React from 'react';

//Dispatch
import { useDispatch, useSelector } from 'react-redux';

//components
import CartCard from '../CartCard/Cartcard';

export default function CatItems() {
  const dispatch = useDispatch();
  //get cart items
  const cartItems = useSelector(state => state.cart);
  return (
    <View>
      <FlatList
        data={cartItems}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => <CartCard item={item} />}
      />
    </View>
  );
}
