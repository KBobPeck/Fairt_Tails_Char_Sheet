import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "util/baseURL";

const initialState = {
  chars: [],
  loading: false,
};

export const getCharList = createAsyncThunk(
  "charReducer/getCharList",
  async (payload) => {
    const res = await axios.get(`${baseURL}/char/${payload}`);

    return res.data;
  }
);

export const createChar = createAsyncThunk(
  "charReducer/createChar",
  async (payload) => {
    const res = await axios.post(`${baseURL}/char/createchar`, payload);

    return res.data;
  }
);

export const charSlice = createSlice({
  name: "charReducer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCharList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCharList.fulfilled, (state, action) => {
        // console.log(action.payload);
        state.chars = action.payload.chars;
        state.loading = false;
      })
      .addCase(getCharList.rejected, (state) => {
        console.log("error with get char list");
        state.loading = false;
      });
    builder
      .addCase(createChar.pending, (state) => {
        state.loading = true;
      })
      .addCase(createChar.fulfilled, (state, action) => {
        console.log(action.payload);
        state.chars.push(action.payload.char);
        state.loading = false;
      })
      .addCase(createChar.rejected, (state) => {
        console.log("error with create char");
        state.loading = false;
      });
  },
});

export const selectChars = (state) => state.charReducer.chars;
export const selectLoading = (state) => state.charReducer.loading;

// export const {} = charListSlice.actions;

export default charSlice.reducer;
