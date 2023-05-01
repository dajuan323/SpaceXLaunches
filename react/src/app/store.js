import { configureStore } from "@reduxjs/toolkit";
import launchesReducer from "../app/launchSlice";

export const store = configureStore({
  reducer: {
    launches: launchesReducer,
  },
});
