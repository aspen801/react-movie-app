import { createSlice } from "@reduxjs/toolkit";

export const authModalSlice = createSlice({
  name: "auth",
  initialState: {
    authModalOpen: false,
    authType: "signup",
  },
  reducers: {
    setAuthModalOpen: (state, action) => {
      state.authModalOpen = action.payload;
    },
    setAuthType: (state, action) => {
      state.authType = action.payload;
    },
  },
});

export const { setAuthModalOpen, setAuthType } = authModalSlice.actions;

export default authModalSlice.reducer;
