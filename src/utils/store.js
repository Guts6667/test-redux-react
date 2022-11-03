import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice.js";
/**
 * Creation of the store
 */
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
