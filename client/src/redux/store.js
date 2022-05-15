import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./reducers/authReducer";
import charSlice from "./reducers/charReducer";

export const store = configureStore({
  reducer: {
    userAuth: authSlice,
    charReducer: charSlice,
  },
});
