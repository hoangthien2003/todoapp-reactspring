import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth";

const store = configureStore({
  reducer: {
    checkAuth: authSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
