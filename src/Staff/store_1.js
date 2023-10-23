import { configureStore } from '@reduxjs/toolkit';
import staffReducer from './staffSlice';

export const store_1 = configureStore({ 
    reducer: { staff: staffReducer } 
});
