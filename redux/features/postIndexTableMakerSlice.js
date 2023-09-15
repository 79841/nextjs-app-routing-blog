import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  postIndexTable: [],
  currentContent: null,
};

const postIndexTableMakerSlice = createSlice({
  name: "postIndexTableMaker",
  initialState,
  reducers: {
    add: (state, action) => {
      const postIndex = action.payload;
      if (!state.postIndexTable.includes(postIndex))
        state.postIndexTable.push(action.payload);
    },
    reset: () => initialState,
    setCurrentContent: (state, action) => {
      state.currentContent = action.payload;
    },
  },
});

export const { add, reset, setCurrentContent } =
  postIndexTableMakerSlice.actions;
export default postIndexTableMakerSlice.reducer;
