import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import loadingReducer from "./slices/loadingSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    loading: loadingReducer,
  },
});

export default store;
