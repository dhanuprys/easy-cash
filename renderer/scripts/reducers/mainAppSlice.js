import { createSlice } from '@reduxjs/toolkit';

export const mainAppSlice = createSlice({
    name: 'mainApp',
    initialState: {
        prevComponent: '',
        component: ''
    },
    reducers: {
        changeComponent: (state, payload) => {
            state.prevComponent = state.component;
            state.component = payload.payload;
        },
        reset: (state) => {
            state.component = '';
        }
    }
});

export const { changeComponent, reset } = mainAppSlice.actions;
export default mainAppSlice.reducer;