import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface MailState {
    value: string
}

const initialState: MailState = {
    value: ""
}

export const mailSlice = createSlice({
    name: "mail",
    initialState,
    reducers: {
        setMail: (state, action: PayloadAction<string>) => {
            state.value = action.payload;
        }
    }
})

export const {setMail} = mailSlice.actions