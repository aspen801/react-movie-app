import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./slices/themeSlice";
import loadingReducer from "./slices/loadingSlice";
import authModalReducer from "./slices/authModalSlice";
import userSlice from "./slices/userSlice";

const store = configureStore({
  reducer: {
    theme: themeReducer,
    loading: loadingReducer,
    auth: authModalReducer,
    user: userSlice,
  },
});

export default store;
