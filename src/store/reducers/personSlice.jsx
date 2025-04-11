import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const personSlice = createSlice({
  name: "person",
  initialState, // ✅ Use the declared initial state
  reducers: {
    loadperson: (state, action) => {
      state.info = action.payload; // ✅ Properly set state
    },
    clearperson: (state) => {
      state.info = null; // ✅ Reset state
    },
  },
});

// ✅ Export the correct actions
export const { loadperson, clearperson } = personSlice.actions;

export default personSlice.reducer;
