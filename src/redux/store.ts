import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "./slices/auth";
import { mailSlice } from "./slices/mail";

const store = configureStore({
  reducer: {
    checkAuth: authSlice.reducer,
    mailReducer: mailSlice.reducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
