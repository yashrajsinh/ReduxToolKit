import { createSlice } from '@reduxjs/toolkit';

// This is your state — starts empty
const initialState = [];

// Create the slice
const productSlice = createSlice({
  name: 'product', // name of this slice
  initialState,
  reducers: {
    addProduct(state, action) {
      // Add new product to state
      state.push(action.payload);
    },
  },
});

// Export action to use in components
export const { addProduct } = productSlice.actions;

// Export reducer to add to store
export default productSlice.reducer;
