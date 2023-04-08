import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface QuantityMember {
  index: number;
}

const initialState: QuantityMember = {
  index: 0,
};

export const quantityMemberSlice = createSlice({
  name: "quantity_member",
  initialState,
  reducers: {
    setIndex: (state, action: PayloadAction<number>) => {
      state.index = action.payload;
    },
  },
});

export const { setIndex } = quantityMemberSlice.actions;
