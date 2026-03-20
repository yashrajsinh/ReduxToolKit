import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CartCard = ({ item }: any) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        <Image source={{ uri: item.image }} style={styles.image} />

        <View style={styles.content}>
          <Text style={styles.name} numberOfLines={2}>
            {item.name}
          </Text>

          <Text style={styles.desc} numberOfLines={2}>
            {item.description}
          </Text>

          <Text style={styles.price}>${item.price}</Text>
        </View>
      </View>
    </View>
  );
};

export default CartCard;
const styles = StyleSheet.create({
  wrapper: {
    marginHorizontal: 12,
    marginVertical: 8,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 12,

    elevation: 4,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },

  image: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 12,
  },

  content: {
    flex: 1,
    justifyContent: 'space-between',
  },

  name: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111',
  },

  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#16A34A', // nice green for price
    marginTop: 8,
  },
  desc: {
    fontSize: 12,
    color: '#666',
    marginTop: 4,
  },
});
