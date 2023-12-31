import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedPost: null,
};

const postSelectorSlice = createSlice({
  name: "postSelector",
  initialState,
  reducers: {
    select: (state, action) => {
      state.selectedPost = action.payload;
    },
  },
});

export const { select } = postSelectorSlice.actions;
export default postSelectorSlice.reducer;
