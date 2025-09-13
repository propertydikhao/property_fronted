import { createSlice } from "@reduxjs/toolkit";

const initialState = { userInfo:"" };

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    userInfo: (state, action) => {
      state.userInfo = action.payload?.data;
    },
  },
});

export const { userInfo } = userSlice.actions;
export default userSlice.reducer;
