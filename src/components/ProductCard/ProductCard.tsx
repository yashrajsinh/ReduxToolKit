// ProductCard.tsx
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';

//Dispatch
import { useDispatch } from 'react-redux';
//Redux Slice
import { addProductsToCart } from '../../redux/ProductCartSlice';

const ProductCard = ({ item }: any) => {
  const dispatch = useDispatch();

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

          {/* Bottom Section */}
          <View style={styles.bottom}>
            <Text style={styles.price}>CAD ${item.price}</Text>

            <TouchableOpacity
              activeOpacity={0.5}
              style={styles.button}
              onPress={() => {
                dispatch(addProductsToCart(item));
              }}
            >
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
  wrapper: {
    marginHorizontal: 12,
    marginVertical: 8,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,

    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 4 },
    elevation: 4,
  },

  image: {
    width: 110,
    height: 110,
    borderRadius: 12,
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

  desc: {
    fontSize: 12,
    color: '#666',
    marginTop: 6,
    lineHeight: 16,
  },

  bottom: {
    marginTop: 12,
  },

  price: {
    fontSize: 18,
    fontWeight: '700',
    color: '#111',
  },

  button: {
    marginTop: 10,
    backgroundColor: '#000',
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
});
