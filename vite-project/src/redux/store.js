import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';

const store = configureStore({
  reducer: {
    auth: authReducer, // 'auth'라는 방에 authReducer를 배치
  },
});

export default store;
