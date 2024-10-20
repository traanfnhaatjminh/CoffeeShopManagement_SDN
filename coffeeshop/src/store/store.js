import { configureStore } from '@reduxjs/toolkit';
import authSlice from '@/store/auth-slice/authSlice';

export const store = configureStore({
  reducer: {
    auth: authSlice,
  },
});

export default store;
