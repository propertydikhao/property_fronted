import { createSlice } from "@reduxjs/toolkit";

const initialState = { isLoadingShow: false };

const loadingSlice = createSlice({
  name: "loading",
  initialState,
  reducers: {
    isLoadingShow: (state, action) => {
      state.isLoadingShow = action.payload;
    },
  },
});

export const { isLoadingShow } = loadingSlice.actions;
export default loadingSlice.reducer;
