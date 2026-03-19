import { configureStore } from '@reduxjs/toolkit';
//Slice
import ProdcutSlice from '../redux/ProdcutSlice';
export const ProductStore = configureStore({
  reducer: {
    product: ProdcutSlice,
  },
});
