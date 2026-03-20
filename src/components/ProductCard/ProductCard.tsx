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
import { useDispatch, useSelector } from 'react-redux';
//Redux Slice
import { addProductsToCart } from '../../redux/ProductCartSlice';

const ProductCard = ({ item }: any) => {
  const dispatch = useDispatch();
  const cartItem = useSelector(state => state.cart);
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

          {/* Bottom Row: Price + Add to Cart + Quantity Selector */}
          <View style={styles.bottom}>
            {/* Price */}
            <Text style={styles.price}>CAD ${item.price}</Text>

            {/* Right side: Add to Cart + Quantity */}
            <View style={styles.rightSide}>
              {/* Add to Cart button */}
              <TouchableOpacity
                style={styles.button}
                onPress={() => {
                  dispatch(addProductsToCart(item));
                  ToastAndroid.show(
                    `${item.name} added to cart`,
                    ToastAndroid.LONG,
                  );
                }}
              >
                <Text style={styles.buttonText}>Add to Cart</Text>
              </TouchableOpacity>
            </View>
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
    borderRadius: 14,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 5 },
    elevation: 6,
  },

  image: {
    width: 120,
    height: 120,
    marginRight: 14,
    borderRadius: 8,
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
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexWrap: 'wrap', // allows wrapping on small screens
  },

  price: {
    fontSize: 20,
    fontWeight: '800',
    color: '#111',
  },

  rightSide: {
    flexDirection: 'row',
    alignItems: 'center',
    flexShrink: 1, // shrink if space is limited
  },

  button: {
    backgroundColor: '#000',
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginRight: 15,
    flexShrink: 1, // button can shrink
  },

  buttonText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '600',
  },

  qtyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    overflow: 'hidden',
    flexShrink: 1, // shrink if needed
  },

  qtyBtn: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    backgroundColor: '#ddd',
  },

  qtyText: {
    fontSize: 18,
    fontWeight: '600',
  },

  qtyNumber: {
    paddingHorizontal: 12,
    fontSize: 16,
    fontWeight: '600',
    color: '#111',
  },
});
