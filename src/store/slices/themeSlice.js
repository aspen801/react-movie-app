import { createSlice } from "@reduxjs/toolkit";

const initialState = { theme: 'dark' };

const themeSlice = createSlice({
  name: "theme",
  initialState,
  reducers: {
    toggleTheme(state, action) {
        state.theme = action.payload
    }
  }
});

export const themeActions = themeSlice.actions;

export default themeSlice.reducer;