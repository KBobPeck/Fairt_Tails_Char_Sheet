import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  authToken: "",
  userId: "",
  loading: false,
};

export const loginUser = createAsyncThunk("userAuth/loginUser", async () => {});

export const signupUser = createAsyncThunk("userAuth/signupUser");

export const authSlice = createSlice({
  name: "userAuth",
  initialState,
  reducers: {
    logout: (state) => {
      state.authToken = "";
    },
  },
});

export const selectAuth = (state) => state.userAuth.authToken;
export const selectUser = (state) => state.userAuth.userId;
export const selectLoading = (state) => state.userAuth.loading;

export const { logout } = authSlice.actions;
export default authSlice.reducer;
