import { createSlice } from "@reduxjs/toolkit";

const initialState = { theme: "dark" };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state, action) {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;
