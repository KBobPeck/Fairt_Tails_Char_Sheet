import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  authToken: "",
};

const authSlice = createSlice({
  name: "authSlice",
  initialState,
  reducers: {
    logout: (state) => {
      state.authToken = "";
    },
  },
});

export const selectAuth = (state) => state.authSlice.authToken;
export const { logout } = authSlice.actions;
export default authSlice.reducer;
