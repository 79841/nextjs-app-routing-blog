// redux/counterSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postIndexTable: [],
};

const postIndexTableMakerSlice = createSlice({
  name: "postIndexTableMaker",
  initialState,
  reducers: {
    add: (state, action) => {
      const postName = action.payload;
      if (!state.postIndexTable.includes(postName))
        state.postIndexTable.push(action.payload);
    },
    reset: () => initialState,
  },
});

export const { add, reset } = postIndexTableMakerSlice.actions;
export default postIndexTableMakerSlice.reducer;
