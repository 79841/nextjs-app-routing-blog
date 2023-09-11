// redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import postSelectorSlice from "./features/postSelectorSlice";
import postIndexTableMakerSlice from "./features/postIndexTableMakerSlice";

const initialState = {};

const store = configureStore({
  reducer: {
    postSelector: postSelectorSlice,
    postIndexTableMaker: postIndexTableMakerSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
  preloadedState: initialState,
});

export default store;
