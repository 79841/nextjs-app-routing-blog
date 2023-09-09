// redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import postSelectorSlice from "./postSelectorSlice";
import postIndexTableSlice from "./postIndexTableSlice";

const initialState = {};

const store = configureStore({
  reducer: {
    postSelector: postSelectorSlice,
    postIndexTable: postIndexTableSlice,
  },
  preloadedState: initialState,
});

export default store;
