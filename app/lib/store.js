import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../redux/counterSlice';

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterReducer,
    },
  });
};