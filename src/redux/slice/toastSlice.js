import { createSlice } from "@reduxjs/toolkit";

const initialState = { isToastShow: false, type: "", message: "" };

const toastSlice = createSlice({
  name: "toast",
  initialState,
  reducers: {
    isToastShow: (state, action) => {
      state.isToastShow = action.payload?.isShow;
      state.type = action.payload?.type;
      state.message = action.payload?.message || "";
    },
  },
});

export const { isToastShow } = toastSlice.actions;
export default toastSlice.reducer;
