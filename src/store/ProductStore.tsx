import { configureStore } from '@reduxjs/toolkit';
//Slicer
import ProductSlice from '../redux/ProductSlice'; // make sure spelling is correct
import ProductCartSlice from '../redux/ProductCartSlice';
// Create the store
export const store = configureStore({
  reducer: {
    product: ProductSlice, // key name is "product"
    cart: ProductCartSlice,
  },
});
