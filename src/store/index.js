import { configureStore } from '@reduxjs/toolkit';
import ProductSlice from './slices/productSlice';

export const store = configureStore({
  reducer: {
    product: ProductSlice,
  }
});
