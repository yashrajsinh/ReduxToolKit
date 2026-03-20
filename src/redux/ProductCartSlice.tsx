import { createSlice } from '@reduxjs/toolkit';

// This is your state — starts empty
const initialState = [];

// Create the slice
const ProductCartSlice = createSlice({
  name: 'cart', // name of this slice
  initialState,
  reducers: {
    addProductsToCart(state, action) {
      // Add new product to state
      state.push(action.payload);
    },
  },
});

// Export action to use in components
export const { addProductsToCart } = ProductCartSlice.actions;

// Export reducer to add to store
export default ProductCartSlice.reducer;
