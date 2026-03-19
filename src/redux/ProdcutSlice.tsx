import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
  name: 'product',
  initialState: [],
  reducers: {
    addProducts(state, action) {
      state.push(action.payload);
    },
  },
});

//export actions
export const { addProducts } = productSlice.actions;
//export reducers
export default productSlice.reducer;
