import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  info: null,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState, // ✅ Use the declared initial state
  reducers: {
    loadMovie: (state, action) => {
      state.info = action.payload; // ✅ Properly set state
    },
    clearMovie: (state) => {
      state.info = null; // ✅ Reset state
    },
  },
});

// ✅ Export the correct actions
export const { loadMovie, clearMovie } = movieSlice.actions;

export default movieSlice.reducer;
