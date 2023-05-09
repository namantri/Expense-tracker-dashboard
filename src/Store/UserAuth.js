import { createSlice } from "@reduxjs/toolkit";
const userAuthSlice = createSlice({
  name: "userAuth",
  initialState: {
    isAuthenticated: false,
  },
  reducers: {
    setIsAuthenticated(state, action) {
      state.isAuthenticated = action.payload;
    },
  },
});

export const userAuthAction = userAuthSlice.actions;
export default userAuthSlice;
