// redux/counterSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postIndexTable: [],
};

const postSelectorSlice = createSlice({
  name: "postIndexTable",
  initialState,
  reducers: {
    add: (state, action) => {
      console.log(action);
      state.postIndexTable.push(action.payload);
    },
    clear: (state) => {
      console.log(action);
      state.postIndexTable = [];
    },
  },
});

export const { add, clear } = postSelectorSlice.actions;
export default postSelectorSlice.reducer;
