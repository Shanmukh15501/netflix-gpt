import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    addTrailerInfo:null
  },
  reducers: {
    addNowPlayingMovies: function (state, action) {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerInfo: function(state,action) {
      state.addTrailerInfo = action.payload;
    }
  },
});

export const { addNowPlayingMovies,addTrailerInfo } = movieSlice.actions;

export default movieSlice.reducer;
