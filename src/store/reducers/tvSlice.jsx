import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const tvSlice = createSlice({
  name: "tv",
  initialState, // ✅ Use the declared initial state
  reducers: {
    loadtv: (state, action) => {
      state.info = action.payload; // ✅ Properly set state
    },
    cleartv: (state) => {
      state.info = null; // ✅ Reset state
    },
  },
});

// ✅ Export the correct actions
export const { loadtv, cleartv } = tvSlice.actions;

export default tvSlice.reducer;
