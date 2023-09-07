// redux/store.js

import { configureStore } from "@reduxjs/toolkit";
import postSelectorSlice from "./postSelectorSlice";

const initialState = {};

const store = configureStore({
  reducer: {
    postSelector: postSelectorSlice,
  },
  preloadedState: initialState,
});

export default store;
