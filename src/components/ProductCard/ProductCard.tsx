// ProductCard.js

import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

const ProductCard = ({ item }: any) => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.card}>
        {/* Image */}
        <Image
          source={{ uri: item.image }}
          style={styles.image}
          resizeMode="cover"
        />

        {/* Content */}
        <View style={styles.content}>
          <Text style={styles.name} numberOfLines={2}>
            {item.name}
          </Text>

          <Text style={styles.desc} numberOfLines={2}>
            {item.description}
          </Text>

          {/* Price + Button */}

          <View style={styles.bottom}>
            <Text style={styles.price}>CAD ${item.price}</Text>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Add to Cart</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  // wrapper fixes Android shadow clipping
  wrapper: {
    marginHorizontal: 12,
    marginVertical: 8,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 14,
    padding: 14,

    // iOS shadow
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },

    // Android shadow
    elevation: 6,
  },

  image: {
    width: 120,
    height: 120,
    marginRight: 14,
    borderRadius: 3,
  },

  content: {
    flex: 1,
  },

  name: {
    fontSize: 15,
    fontWeight: '600',
    color: '#111',
  },

  desc: {
    fontSize: 12,
    color: '#777',
    marginTop: 4,
  },

  bottom: {
    marginTop: 10,
  },

  price: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 8,
  },

  button: {
    backgroundColor: '#000',
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },
});
