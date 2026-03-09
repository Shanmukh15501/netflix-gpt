import { configureStore } from "@reduxjs/toolkit";
import UserReducer from "./userSlice"
import MovieReducer from "./movieSlice"

const appStore = configureStore({
  reducer: {
    user:UserReducer,
    movies:MovieReducer,
  },
});

export default appStore;
