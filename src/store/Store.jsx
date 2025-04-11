import { configureStore } from '@reduxjs/toolkit'
import movieReducer from './reducers/movieSlice'
import tvReducer from './reducers/tvSlice'
import personReducer from './reducers/personSlice'

export const store = configureStore({
  reducer: {
    movie: movieReducer, // ✅ Fix: Corrected "moveReducer" to "movieReducer"
    tv: tvReducer,
    person: personReducer,
  },
});

// ✅ Export the store so it can be used in main.jsx
export default store;
