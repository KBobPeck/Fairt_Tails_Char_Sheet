import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { baseURL } from "util/baseURL";

const initialState = {
  chars: [],
  loading: false,
  char: {},
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

export const deleteChar = createAsyncThunk(
  "charReducer/deleteChar",
  async (payload) => {
    const res = await axios.post(`${baseURL}/char/deletechar`, payload);

    return res.data;
  }
);

export const getChar = createAsyncThunk(
  "charReducer/getChar",
  async (payload) => {
    const res = await axios.get(`${baseURL}/char/getChar/${payload}`);

    return res.data;
  }
);

export const charSlice = createSlice({
  name: "charReducer",
  initialState,
  reducers: {
    // getChar: (state, action) => {
    //   state.char = state.chars.find((each) => each._id === action.payload);
    // },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCharList.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCharList.fulfilled, (state, action) => {
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
        state.chars.push(action.payload.char);
        state.loading = false;
      })
      .addCase(createChar.rejected, (state) => {
        console.log("error with create char");
        state.loading = false;
      });
    builder
      .addCase(deleteChar.pending, (state) => {
        state.loading = true;
      })
      .addCase(deleteChar.fulfilled, (state, action) => {
        state.chars = state.chars.filter((each) => {
          return each._id !== action.payload.id;
        });
        state.loading = false;
      })
      .addCase(deleteChar.rejected, (state) => {
        console.log("error with create char");
        state.loading = false;
      });
    builder
      .addCase(getChar.pending, (state) => {
        state.loading = true;
      })
      .addCase(getChar.fulfilled, (state, action) => {
        state.char = action.payload;
        state.loading = false;
      })
      .addCase(getChar.rejected, (state) => {
        console.log("error with create char");
        state.loading = false;
      });
  },
});

export const selectChars = (state) => state.charReducer.chars;
export const selectLoading = (state) => state.charReducer.loading;
export const selectChar = (state) => state.charReducer.char;

// export const { getChar } = charSlice.actions;

export default charSlice.reducer;
