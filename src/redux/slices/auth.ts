import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface AuthState {
  value: boolean;
}

const initialState: AuthState = {
  value: false,
};

export const authSlice = createSlice({
  name: "checkAuth",
  initialState,
  reducers: {
    setCheckAuth: (state, action: PayloadAction<boolean>) => {
      state.value = action.payload;
    },
  },
});

export const { setCheckAuth } = authSlice.actions;
