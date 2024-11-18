import { configureStore } from '@reduxjs/toolkit';
import bannerReducer from './slices/bannerSlice';


const store = configureStore({
  reducer: {
    banner: bannerReducer,
 
  },
});

export default store;
