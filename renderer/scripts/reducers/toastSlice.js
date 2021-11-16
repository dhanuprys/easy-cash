import { createSlice } from '@reduxjs/toolkit';

export const toastSlice = createSlice({
    name: 'toast',
    initialState: {
        content: null
    },
    reducers: {
        show: (state, payload) => {
            state.content = payload.payload.content;
        },
        close: (state, payload) => {
            state.content = null;
        }
    }
});

export const { show, close } = toastSlice.actions;
export default toastSlice.reducer;