// store.js
import { configureStore } from '@reduxjs/toolkit';
import staffReducer from './staffSlice';

const store_1 = configureStore({
  reducer: {
    staff: staffReducer
  }
});

export default store_1;
