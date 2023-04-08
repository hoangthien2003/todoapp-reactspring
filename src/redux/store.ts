import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authSlice } from "./slices/auth";
import { mailSlice } from "./slices/mail";
import { quantityMemberSlice } from "./slices/quantity_member";

const store = configureStore({
  reducer: {
    checkAuth: authSlice.reducer,
    mailReducer: mailSlice.reducer,
    quantityMemberReducer: quantityMemberSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
