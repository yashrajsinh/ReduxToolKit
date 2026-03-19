import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from '../redux/ProdcutSlice'; // make sure spelling is correct

// Create the store
export const store = configureStore({
  reducer: {
    product: ProductSlice, // key name is "product"
  },
});
